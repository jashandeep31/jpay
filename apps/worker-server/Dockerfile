# Use Node.js LTS version as the base image
FROM node:20-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory
WORKDIR /app


COPY . .
RUN pnpm install

RUN rm -rf apps/merchant-portal/
RUN rm -rf apps/checkout/

# Install dependencies

# Build the application
RUN pnpm --filter worker-server build

# Expose the port the app runs on
EXPOSE 8000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["pnpm", "--filter", "worker-server", "start"]
