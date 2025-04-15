# Builder
FROM node:22 as builder

WORKDIR /app

COPY . .

RUN npm run build

# Production
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/.output  /app/.output

ENV NITRO_PORT=8080

EXPOSE 8080

CMD [ "node", ".output/server/index.mjs" ]

