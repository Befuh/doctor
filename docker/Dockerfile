FROM nginx:1.15.7-alpine

ARG NODE_VERSION=10.14.2
ARG NPM_VERSION=6.4.1

# Install nodejs
RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories && \
    apk add --update git curl make gcc g++ python linux-headers libgcc libstdc++ binutils-gold tar && \
    curl -sSL https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.tar.gz | tar -xz && \
    cd /node-v${NODE_VERSION} && \
    ./configure --prefix=/usr --without-snapshot && \
    make -j$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
    make install && \
    cd / && \
    npm install -g npm@${NPM_VERSION} && \
    apk del gcc g++ linux-headers binutils-gold tar && \
    rm -rf /etc/ssl /node-v${NODE_VERSION} /usr/include \
    /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp \
    /usr/lib/node_modules/npm/man /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html

ADD . /app
WORKDIR /app

RUN npm install

ENTRYPOINT ["npm", ""]

EXPOSE 80

