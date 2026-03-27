# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY frontend/package*.json ./
COPY frontend/package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code and environment file
COPY frontend/ ./
COPY frontend/.env.local .env.local

# Build the Next.js app (this will use the env variables)
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env.local ./.env.local

# Expose Next.js default port
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]