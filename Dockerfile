FROM node:20-alpine
LABEL org.opencontainers.image.source=https://github.com/sadaalj/lesson8
ARG NPM_TOKEN
ENV NODE_AUTH_TOKEN=$NPM_TOKEN

WORKDIR /app

COPY ./app

RUN echo "//npm.pkg.github.com/:_authToken="'"'${NODE_AUTH_TOKEN} '"' > /app/.npmrc

RUN npm i --yes

RUN rm -f /app/.npmrc

EXPOSE 3000
