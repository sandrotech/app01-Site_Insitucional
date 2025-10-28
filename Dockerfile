# syntax=docker/dockerfile:1

######################
# ETAPA 1: BUILD     #
######################
FROM node:24-bookworm-slim AS builder

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copiar manifestos
COPY package*.json ./

# 🔧 Instalar dependências (npm ci às vezes falha com Rollup no Docker)
RUN npm install

# Copiar código-fonte
COPY . .

# ✅ Garantir permissão de execução e reconstruir Rollup
RUN chmod -R +x node_modules/.bin && npm rebuild rollup --force

# Build do projeto
RUN npm run build


######################
# ETAPA 2: RUNTIME   #
######################
FROM node:24-bookworm-slim AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Instalar servidor estático leve
RUN npm install -g serve

# Copiar build final
COPY --from=builder /app/dist ./dist

EXPOSE ${PORT}

CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
