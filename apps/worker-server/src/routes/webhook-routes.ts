import { Router } from "express";
import { paymentHook } from "../webhooks/payment-hook";

const router: Router = Router();
router.route("/v1").post(paymentHook);
export default router;
