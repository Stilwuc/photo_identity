# Common build stage
FROM node:14.14.0-alpine3.12 as common-build-stage

COPY . ./app

WORKDIR /app

RUN npm install
COPY .env.prod .env
EXPOSE 3000

# Dvelopment build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD npm run typeorm migration:run && npm run dev

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD npm run typeorm migration:run && npm run start
