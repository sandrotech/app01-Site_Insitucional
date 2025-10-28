# syntax=docker/dockerfile:1

######################
# ETAPA 1: BUILD     #
######################
FROM node:24-bookworm-slim AS builder

# Diretório de trabalho
WORKDIR /app

# Variáveis de ambiente
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copiar manifestos e instalar dependências
COPY package*.json ./
RUN npm ci

# Copiar o restante do código do projeto
COPY . .

# ✅ Corrigir permissões do binário do Vite (recursivamente)
RUN chmod -R +x node_modules/.bin

# Executar build do projeto Vite
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

# Copiar apenas a pasta final de build
COPY --from=builder /app/dist ./dist

# Porta dinâmica (padrão 3000)
EXPOSE ${PORT}

# Rodar o servidor estático
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
