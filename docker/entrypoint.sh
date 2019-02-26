#!/bin/sh
cd /app

nodeVersion=`node --version`
npmVersion=`npm --version`
echo -e "node version: ${nodeVersion}"
echo -e "npm version: ${npmVersion}"

npm run build:prod

exec nginx -g 'daemon off;'
