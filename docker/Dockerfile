FROM node:10.15.3 AS builder

ADD . /app
WORKDIR /app
RUN npm install
RUN npm run build:prod

FROM nginx:1.15.7-alpine

COPY --from=builder /app/public/ /usr/share/nginx/html
COPY --from=builder /app/docker/nginx.conf /etc/nginx/conf.d/default.conf
