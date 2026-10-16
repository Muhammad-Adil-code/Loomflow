# Build local monorepo image
# docker build --no-cache -t loomflow .

# Run image
# docker run -d -p 3000:3000 loomflow

FROM node:24-alpine

LABEL org.opencontainers.image.title="Loomflow" \
      org.opencontainers.image.description="Visual builder for AI agents and workflows" \
      org.opencontainers.image.licenses="Apache-2.0" \
      org.opencontainers.image.base.name="Modified fork of Flowise (Apache-2.0)"

# Install system dependencies and build tools
RUN apk update && \
    apk add --no-cache \
    libc6-compat \
    python3 \
    make \
    g++ \
    build-base \
    cairo-dev \
    pango-dev \
    chromium \
    curl && \
    npm install -g pnpm@10.26.0

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

ENV NODE_OPTIONS=--max-old-space-size=8192

WORKDIR /usr/src/flowise

# Copy app source
COPY . .

# Install dependencies and build (excluding sdk packages not needed for Docker)
RUN pnpm install && \
    pnpm build:docker

# Give the node user ownership of the application files
RUN chown -R node:node .

# Switch to non-root user (node user already exists in node:20-alpine)
USER node

EXPOSE 3000

CMD [ "pnpm", "start" ]
