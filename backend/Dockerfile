FROM oven/bun

WORKDIR /back/src/app

COPY package*.json .

RUN bun install

COPY . .

EXPOSE 5000

CMD ["bun", "run", "index.ts"]