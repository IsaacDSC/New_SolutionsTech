echo "node_modules" >> ./.dockerignore

echo "version: '3'
services:
    app:
      build: .
      command: npm run dev
      ports:
        - '3000:3000'
      volumes:
        - .:/usr/app

    postgres:
        container_name: postgres_container
        image: postgres
        environment:
            POSTGRES_USER: ${POSTGRES_USER:-postgres}
            POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-changeme}
            PGDATA: /data/postgres
        volumes:
            - postgres:/data/postgres
        ports:
            - '1234:1234'
        networks:
            - postgres
        restart: unless-stopped

    pgadmin:
        container_name: pgadmin_container
        image: dpage/pgadmin4
        environment:
            PGADMIN_DEFAULT_EMAIL: ${PGADMIN_DEFAULT_EMAIL:-pgadmin4@pgadmin.org}
            PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_DEFAULT_PASSWORD:-admin}
            PGADMIN_CONFIG_SERVER_MODE: 'False'
        volumes:
        - pgadmin:/var/lib/pgadmin

        ports:
        - '${PGADMIN_PORT:-5050}:80'
        networks:
        - postgres
        restart: unless-stopped

networks:
  postgres:
    driver: bridge

volumes:
    postgres:
    pgadmin:
" >> ./docker-compose.yml

echo "FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 3000

CMD ['npm', 'run', 'dev']

" >> ./Dockerfile


echo "testedockerdode
docker build -t <ImageName> .

docker run -p 3000:3000 -d <ImageName>
<acesso navegador porta>:<acesso interno porta aplicação>

//saber images dockers rodando
docker ps



docker-compose up
docker-compose up -d" >> ./readmeDocker.md

mkdir ./src/@types

echo "//criando req.status using typescript
declare namespace Express {
   export interface Request {
      status?: string
   }
}" >> ./src/@types/express.ts

cp ./jest.config.ts ../../../jest.config.ts
cp ./tsconfig.json ../../../jtsconfig.json