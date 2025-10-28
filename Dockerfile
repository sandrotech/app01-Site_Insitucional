# syntax=docker/dockerfile:1

######################
# ETAPA 1: BUILD     #
######################
FROM node:24-alpine AS builder

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm ci

# Copiar todo o código
COPY . .

# Garantir que vite tem permissão de execução
RUN chmod +x node_modules/.bin/vite

# Build do projeto
RUN npm run build


######################
# ETAPA 2: RUNTIME   #
######################
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Instalar um servidor HTTP leve (serve)
RUN npm install -g serve

# Copiar apenas os arquivos necessários do build
COPY --from=builder /app/dist ./dist

# Expor a porta (dinâmica com variável)
EXPOSE ${PORT}

# Iniciar o servidor
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
