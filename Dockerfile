FROM node:22-alpine AS base

FROM base as builder
WORKDIR /app

# Install dependencies.  Use --frozen-lockfile for production builds
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Use a smaller image for the final stage
FROM base as runner
WORKDIR /app
ENV NODE_ENV=production

# Copy the built Next.js files from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./

EXPOSE 3000
CMD ["node", "server.js"]
