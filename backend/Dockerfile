FROM oven/bun

RUN apt-get update && apt-get install -y curl

WORKDIR /back/src/app

COPY package*.json .

RUN bun install

COPY . .

EXPOSE 5000

CMD ["bun", "run", "start"]