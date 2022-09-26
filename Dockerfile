# Stage 1
FROM node:16.15.0-alpine as build-step
RUN mkdir -p/app
WORKDIR /app
COPY ..

RUN npm install
RUN npm run build

# Stage 2
FROM nginx:1.21.3-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
# COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
