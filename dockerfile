FROM node:alpine
WORKDIR /app
COPY ./ ./
RUN npm i
RUN npm run build
RUN npx prisma migrate deploy
CMD ["node", "dist/index.js"]