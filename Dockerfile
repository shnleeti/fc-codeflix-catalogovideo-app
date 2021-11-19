FROM node:16.13-alpine3.14

RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\W\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

USER node

WORKDIR /home/node/app
