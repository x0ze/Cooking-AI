# Dockerfile for the next app
FROM node:20

WORKDIR /app
COPY lethimcook-app/package*.json ./
RUN npm install
COPY lethimcook-app/ .
EXPOSE 3000
CMD ["npm", "run", "dev"]
