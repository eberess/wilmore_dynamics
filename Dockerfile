# syntax=docker.io/docker/dockerfile:1

# Utiliser une version LTS spécifique pour la stabilité et la sécurité
FROM node:24-alpine3.21 AS base

LABEL maintainer="Wilmore Dynamics"
LABEL description="Application Next.js sécurisée"
LABEL version="2.0"

# Mettre à jour les packages de base pour les patches de sécurité
RUN apk update && apk upgrade --no-cache

# Install dependencies only when needed
FROM base AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copier uniquement les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances avec npm ci (plus sûr que npm install)
RUN npm ci --only=production && npm cache clean --force


# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Copier les dépendances depuis l'étape deps
COPY --from=deps /app/node_modules ./node_modules

# Copier le code source
COPY . .

# Désactiver la télémétrie Next.js
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build l'application avec output standalone
RUN npm run build && \
    ls -la .next/ && \
    ls -la .next/standalone/ 2>/dev/null || echo "No standalone folder"

# Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Créer les utilisateurs pour l'exécution non-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copier les fichiers de build
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/server.js ./server.js
COPY --from=builder /app/package*.json ./

# Copier node_modules depuis le standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/node_modules ./node_modules

# Exécuter en tant qu'utilisateur non-root
USER nextjs

EXPOSE 3000

# Healthcheck pour monitoring
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

CMD ["node", "server.js"]