# Use Node.js LTS version as the base image
FROM node:20-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
# Add non-root user

# Set working directory
WORKDIR /app

# Install pnpm

# Copy all source files at once
COPY . .

# Install dependencies
RUN pnpm install

# Build the application
RUN pnpm --filter worker-server build

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["pnpm", "--filter", "worker-server", "start"]
