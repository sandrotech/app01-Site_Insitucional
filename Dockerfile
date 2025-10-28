# syntax=docker/dockerfile:1

######################
# ETAPA 1: BUILD     #
######################
FROM node:24-bookworm-slim AS builder

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build


######################
# ETAPA 2: RUNTIME   #
######################
FROM node:24-bookworm-slim AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE ${PORT}

CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
