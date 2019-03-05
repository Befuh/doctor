#Befuh Doctor [![node: v10.15.0](https://img.shields.io/badge/node-v10.15.0-green.svg?style=flat-square)](https://nodejs.org/dist/latest-v10.x/docs/api/) [![npm: >=v6.4.1](https://img.shields.io/badge/npm-%3E=v6.4.1.x-red.svg?style=flat-square)](https://www.npmjs.com/package/npm) 

The doctor app for Befuh

## Development
### Local
```
git checkout git@github.com:Befuh/doctor.git <directory>
npm install
npm start
```

### Docker
```
docker build -f docker/Dockerfile -t befu-doctor .
docker run -p 3000:80 befu-doctor:latest 
```
