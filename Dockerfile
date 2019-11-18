FROM node:10

LABEL app="Simple API"
ENV ENV_APP="dev"

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY . ./

RUN apt-get update && apt-get install -y stress && apt-get clean && yarn

ENTRYPOINT [ "yarn", "dev" ]