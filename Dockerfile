FROM node:alpine

USER node

EXPOSE 3000

COPY --chown=node:node . /home/node/app

WORKDIR /home/node/app

RUN npm install --no-audit

RUN npm run build

ENTRYPOINT [ "/home/node/app/docker-entrypoint.sh" ]