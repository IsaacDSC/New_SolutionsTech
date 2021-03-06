echo "FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 3000

CMD ['npm', 'run', 'dev']
" >> ../../Dockerfile


echo 'version: "3.8"

services: # adds 2 services: mysql and phpmyadmin to connect with
  app:
    container_name: aplication
    build: .
    command: npm run dev
    ports:
      - 3000:3000
    volumes:
      - .:/usr/app
    depends_on:
      - db
    restart: always
  db:
    image: mysql:latest # use latest version of mysql
    container_name: db # add a name for the container
    command: --default-authentication-plugin=mysql_native_password
    restart: unless-stopped
    environment: # add default values, see docs for more info.
      MYSQL_USER: dev
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_PASSWORD: secret
      MYSQL_DATABASE: solutions # create this database on startup
    volumes:
      - .:/var/lib/mysql
    restart: always

  phpmyadmin:
    container_name: phpmyadmin
    image: phpmyadmin/phpmyadmin:latest
    ports:
     - "8080:80"
    environment:
      MYSQL_ROOT_PASSWORD: secret #(Required) set the password for the root superuser account.
      PMA_HOST: db   # define the address/hostname of the mysql server eg mysql container name.
      PMA_USER: root # this is the root user to login on startup
      PMA_PASSWORD: secret # use the root password to login on startup.
      # Create a new user on startup (optional)
      MYSQL_USER: dev
      MYSQL_PASSWORD: secret
      restart: always


' >> ../../docker-compose.yml