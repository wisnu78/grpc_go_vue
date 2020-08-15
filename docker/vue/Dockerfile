# tahap pengembangan
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY client_vue/package*.json ./
RUN npm install
RUN npm install -g @vue/cli
COPY client_vue .
RUN npm run build

# tahap produksi
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]