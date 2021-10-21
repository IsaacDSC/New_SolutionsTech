testedockerdode
docker build -t <ImageName> .

docker run -p 3000:3000 -d <ImageName>
<acesso navegador porta>:<acesso interno porta aplicação>

//saber images dockers rodando
docker ps



docker-compose up
docker-compose up -d


# execute bash in container
docker exec -it aplication /bin/bash
docker build -t <ImageName> .

docker run -p 3000:3000 -d <ImageName>
<acesso navegador porta>:<acesso interno porta aplicação>

//saber images dockers rodando
docker ps



docker-compose up
docker-compose up -d


docker exec -it aplication /bin/bash
OR
docker exec -it aplication /bin/sh