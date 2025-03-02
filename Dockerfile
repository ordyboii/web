# Stage 1: Build the application
FROM node:22-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . . 
RUN npm run build 

FROM base as run

COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm install --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config. ./

EXPOSE 3000

CMD ["npm", "start"]