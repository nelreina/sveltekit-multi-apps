FROM node:16-slim
ENV NODE_ENV=prodcution
ENV REDIS_URL=redis://redis
EXPOSE 3000

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json package-lock*.json ./
RUN npm ci && npm cache clean --force
COPY --chown=node:node ./build .
CMD ["node", "index.js"]

