FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# For production
FROM nginx:alpine
COPY --from=0 /app/dist/your-app-name /usr/share/nginx/html