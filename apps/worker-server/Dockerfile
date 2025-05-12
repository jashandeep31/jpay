# Use Node.js LTS version as the base image
FROM node:23 AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory
WORKDIR /app

# Copy package files first
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages .
COPY apps/worker-server/package.json ./apps/worker-server/package.json
COPY . .
RUN pnpm install --frozen-lockfile

# Clean up unnecessary app directories to reduce image size
RUN rm -rf apps/merchant-portal/ apps/checkout/

# Install dependencies

# Build the application
WORKDIR  /app/packages/db
RUN npx prisma generate
WORKDIR /app
RUN pnpm --filter worker-server build

FROM node:23 AS runner

# Expose the port the app runs on
COPY --from=builder /app /app
EXPOSE 8000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["pnpm", "--filter", "worker-server", "start"]


# docker build -t worker-server -f apps/worker-server/Dockerfile .