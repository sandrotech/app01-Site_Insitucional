# syntax=docker/dockerfile:1
FROM node:24-bookworm-slim AS builder

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./
RUN npm install \
    && npm install rollup@4.14.0 --save-dev

COPY . .
RUN chmod -R +x node_modules/.bin

RUN npm run build


FROM node:24-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE ${PORT}
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
