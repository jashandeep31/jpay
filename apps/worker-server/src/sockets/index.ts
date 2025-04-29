import WebSocket from "ws";

const SOLANA_WSS_URL = process.env.SOLANA_WSS_URL!;
const CONNECT_TIMEOUT_MS = 5_000; // reject if no open in 5s
const PING_INTERVAL_MS = 30_000; // send a ping every 30s
const PONG_TIMEOUT_MS = 10_000; // expect a pong within 10s

let wsPromise: Promise<WebSocket> | null = null;

/**
 * Returns a Promise that resolves to an open WebSocket.
 * • first call → opens socket, waits for "open" (or times out), starts heartbeat
 * • subsequent calls while open → returns the same instance
 * • on "error" or "close", cleans up and clears wsPromise so next call reconnects
 */
export function getSolanaWs(): Promise<WebSocket> {
  if (wsPromise) return wsPromise;

  wsPromise = new Promise((resolve, reject) => {
    const ws = new WebSocket(SOLANA_WSS_URL);
    let connectTimer: NodeJS.Timeout;
    let pingTimer: NodeJS.Timeout;
    let pongTimer: NodeJS.Timeout;

    // cleanup all timers & listeners
    const cleanup = () => {
      clearTimeout(connectTimer);
      clearInterval(pingTimer);
      clearTimeout(pongTimer);
      ws.removeAllListeners();
    };

    // 1) enforce a connect timeout
    connectTimer = setTimeout(() => {
      ws.terminate();
      cleanup();
      wsPromise = null;
      reject(new Error("WebSocket connection timed out"));
    }, CONNECT_TIMEOUT_MS);

    // 2) once open, clear connectTimer, start heartbeat
    ws.once("open", () => {
      clearTimeout(connectTimer);
      startHeartbeat();
      resolve(ws);
    });

    // 3) propagate errors, cleanup, allow retry on next call
    ws.once("error", (err) => {
      cleanup();
      wsPromise = null;
      reject(err);
    });

    // 4) on close, cleanup & clear promise so next invocation reconnects
    ws.once("close", () => {
      cleanup();
      wsPromise = null;
    });

    // send a ping every PING_INTERVAL_MS
    function startHeartbeat() {
      pingTimer = setInterval(() => {
        if (ws.readyState !== WebSocket.OPEN) return;
        ws.ping();
        // if no pong in PONG_TIMEOUT_MS → consider dead
        pongTimer = setTimeout(() => ws.terminate(), PONG_TIMEOUT_MS);
      }, PING_INTERVAL_MS);
    }

    // reset the pong timeout on each pong
    ws.on("pong", () => {
      clearTimeout(pongTimer);
    });
  });

  return wsPromise;
}
