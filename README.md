# How to prepare dev enviroment using Docker

To present how to setup dev enviroment for JS/Node.js we are going to setup everything needed for Next.JS (beside BE part like DB - this will be covered in separate part)

This environment will have all the necessary tools to run the project like: Node.js, npm, etc.

## Step 1: Install Docker

First, you need to install Docker. You can download it from the official website: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

## Step 2: Create a Docker Composer file

In this file first we will run a Node.js container and will have binded the current directory to the container. 
This way we can edit the files in our local machine and the changes will be reflected in the container.
We know that we are going to use Next.js for this project, so we expose the port 3000 of the container to the port 3000 of the local machine.

Remember to set proper UID and GID to prevent permission issues - you can export your IDs as USER_ID and GROUP_ID environment variables by editing ex. bashrc file,
thanks to that you don't need to export them every time you start the container.
  
```bash 
# ...previous content...
export USER_ID=$(id -u)
export GROUP_ID=$(id -g)
```

Create a file called `docker-compose.yml` in the root of the project with the following content:

```yml
services:
  timetracker:
    image: node:21
    container_name: timetracker
    volumes:
      - .:/app
    working_dir: /app
    user: "${USER_ID}:${GROUP_ID}"
    tty: true
    ports:
      - "3000:3000"
```

## Step 3: Run container

Now you can run the container with the following command:

```bash
docker-compose up -d 
```

When it's started let's create a new Next.js project.

Enter the container bash

```bash
docker compose exec -it timetracker bash
```

From the container bash create a new Next.js project
```bash
npx create-next-app app
```

Parameters we choose:
- TypeScript: YES
- ESLint: YES
- Tailwind CSS: NO //we will use MaterialUI
- use `/src` directory: NO 
- App Router: YES // we will use Next.js router
- import alias (@/*): NO

## Step 4: Reconfigure docker-compose

Now we have new app directory, and we want to have only that dir binded to container

```yml
services:
  timetracker:
    image: node:21
    container_name: timetracker
    volumes:
      - ./app:/app
    working_dir: /app
    user: "${USER_ID}:${GROUP_ID}"
    tty: true
    ports:
      - "3000:3000"
```

Now restart container and start app

```bash
docker-compose up -d 
docker compose exec -it timetracker bash
npm run dev
```

## Step 5: Simplyfy starting development env

Let's remove contatiner and prepere shell script which simplifies process of starting up development.

Remove container
```bash
docker compose down
```

Write `stardev.sh` shell script

```bash
#!/bin/bash
docker compose up -d
docker compose exec -it timetracker bash
```

We need to set proper permitions to execute shell script

```bash
chmod +x startdev.sh
```

Now to start our dev enviroment
```bash
./startdev.sh
```

Ok how we can now stop dev enviroment?
First stop processes in container which we started ex. `npm start dev` then exit container shell `ctrl + d` and `docker compose down`

Again many commands - to simplify we won't write another shell script but just open new terminal and write `docker compose down` - this will stop container and remove it.

---
**Remember always write in README.md how to start and stop your dev enviroment.**
---

## Step 6: Start development

Now when you have everything prepared, you can open your IDE (ex. VSCode), open terminal in it and execute `./stardev.sh`

Now you are in container terminal, so you can run standard commands that you need for example to install packages (`npm i ...`) or to start dev server (`npm run dev`).

From IDE you can edit your source code, make commits and so on ...

---
## HAPPY CODING 😊