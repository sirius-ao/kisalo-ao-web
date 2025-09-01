FROM node:20-alpine AS build 

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# For production
FROM nginx:alpine
COPY --from=build /app/dist/kisalo/browser /usr/share/nginx/html  # ← Agora vai funcionar
