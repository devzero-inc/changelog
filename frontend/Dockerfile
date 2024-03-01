FROM oven/bun

WORKDIR /front/src/app

COPY package*.json .

RUN bun install

COPY . .

EXPOSE 4173

CMD ["bun", "run", "start"]