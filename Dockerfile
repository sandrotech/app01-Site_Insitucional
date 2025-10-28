# syntax=docker/dockerfile:1

###########
# ETAPA 1 #
# BUILD   #
###########
FROM node:24-alpine AS builder

WORKDIR /app

# Desliga telemetria do Next no build
ENV NEXT_TELEMETRY_DISABLED=1

# Copia manifests primeiro pra cache de deps
COPY package*.json ./

# Instala dependências exatas (prod + dev) para build
RUN npm ci

# Copia o restante do código
COPY . .

# Gera o build de produção do Next.js
# (seu next.config.js precisa ter: output: "standalone")
RUN npm run build

# Copia assets estáticos pra dentro do standalone,
# porque o server.js vai servir isso em runtime
RUN cp -r .next/static .next/standalone/.next/static \
    && cp -r public .next/standalone/public


############
# ETAPA 2  #
# RUNTIME  #
############
FROM node:24-alpine AS runner

WORKDIR /app

# Ambiente padrão
ENV NODE_ENV=production

# Porta padrão interna do container.
# Você pode sobrescrever isso em runtime:
# ex: PORT=8080
ENV PORT=3000

# expõe a porta padrão (3000).
# (Docker EXPOSE não aceita variável dinâmica em tempo de runtime,
# então aqui fica o default. Se você mudar PORT, lembre de ajustar
# a porta interna no CapRover também.)
EXPOSE 3000

# Cria usuário sem privilégios
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
USER nextjs

# Copia só o resultado final enxuto
COPY --from=builder /app/.next/standalone ./

# Sobe o servidor.
# O server.js gerado pelo Next normalmente já respeita process.env.PORT,
# então não precisamos hardcode "3000" aqui.
CMD ["node", "server.js"]
