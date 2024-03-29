FROM registry-dev.truesight.asia/truesight/node-14.15.1:stable as node-dev

WORKDIR /src

COPY package.json .npmrc ./

RUN  yarn install --development

COPY . .

RUN yarn build

# Using nginx to serve front-end
FROM registry-dev.truesight.asia/truesight/nginx:stable

EXPOSE 8080

WORKDIR /var/www/html
RUN apt-get update && apt-get install -y net-tools curl iputils-ping telnetd telnet nano vim dnsutils

USER root
RUN chmod -R g+w /var/cache/
RUN chmod -R g+w /var/run/

# Copy built artifacts
COPY --from=node-dev /src/build/ ./

# Copy nginx configuration folder
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/conf.d/ /etc/nginx/conf.d/

RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx