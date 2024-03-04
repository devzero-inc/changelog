FROM oven/bun

RUN apt-get update && apt-get install -y curl

WORKDIR /front/src/app

COPY package*.json .

RUN bun install

COPY . .

EXPOSE 4173

CMD ["bun", "run", "start"]