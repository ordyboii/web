FROM node:22-alpine AS base

FROM base as deps 
WORKDIR /app

COPY package*.json ./
# Install dependencies.  Use --frozen-lockfile for production builds
RUN npm install --frozen-lockfile

FROM base as builder 
WORKDIR /app

# Copy all code and build
COPY . .
RUN npm run build

# Use a smaller image for the final stage
FROM base as runner
WORKDIR /app
ENV NODE_ENV=production

# Copy the built Next.js files from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
