# Docker 

## Few commands and basics 

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Log in to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Containers -> Way to package and distribute software.

Container - runtime instance of an image isolated env that contains all its dependencies.
Image     - Static snapshot of of container's file system and config at a specific time.

Image is pushed onto the DockerHub.

An image is a template for creating containers, while a container is a running instance of that image.

💡
A good mental model for an image is Your codebase on github.

💡
A good mental model for a container is when you run node index.js on your machine from some source code you got from github.

## Dockerfile

- Dockerfile contains the base image and the commands run on top of base image.

Using https://github.com/sarthakkapila/nextjs example creating a dockerfile for this.

Docker containers are transitory (they don’t retain data across restarts)

### Configs


WORKDIR: Sets the working directory for any RUN, CMD, ENTRYPOINT, COPYinstructions that follow it.
RUN: Executes any commands in a new layer on top of the current image and commits the results.
CMD: Provides defaults for executing a container. There can only be one CMD instruction in a Dockerfile.
EXPOSE: Informs Docker that the container listens on the specified network ports at runtime.
ENV: Sets the environment variable.
COPY: Allow files from the Docker host to be added to the Docker image


#### More commands

docker kill: to kill a container
docker exec: to exectue a command inside a container


Passing in env variables 
The -e argument let’s you send in environment variables to your node.js app
```

docker run -p 3000:3000 -e DATABASE_URL="" sslmode=require" image_name
```

List all contents of a container folder
```
docker exec <container_name_or_id> ls /path/to/directory
```

Running an Interactive Shell
```
docker exec -it <container_name_or_id> /bin/bash
```

### Building image

```
docker build -t nextjs .
```
 
New image will be created

```
docker images
```

## Now loading image

```
docker run -p 3000:3000 nextjs
```

- Visit [http://localhost:3000](localhost) to check :)


## Pushing to DockerHub


- Create a new repository

- Login to docker cli

- docker login
access token - https://docs.docker.com/security/for-developers/access-tokens/

- Push to the repository
```
docker push your_username/your_reponame:tagname
```

# Docker in depth 
## Layers in Docker

- Base Layer: The starting point of an image, typically an operating system (OS) like Ubuntu, Alpine, or any other base image specified in a Dockerfile.

- Instruction Layers: Each command in a Dockerfile creates a new layer in the image. These include instructions like RUN, COPY, which modify the filesystem by installing packages etc. Each of these modifications creates a new layer on top of the base layer.


- Reusable & Shareable: Layers are cached and reusable across different images, which makes building and sharing images more efficient. If multiple images are built from the same base image or share common instructions, they can reuse the same layers, reducing storage space and speeding up image downloads and builds.

- Immutable: Once a layer is created, it cannot be changed. If a change is made, Docker creates a new layer that captures the difference. This immutability is key to Docker's reliability and performance, as unchanged layers can be shared across images and containers.

💡
If a layer changes, all subsequent layers also change.

Layers which are not changed are cached.


## Optimising Dockerfile

Caches the npm install considering dependencies don't change often.

Old file

```
FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```
To this -> 
```
FROM node:20

WORKDIR /usr/src/app

COPY package* .
COPY ./prisma .
    
RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["node", "dist/index.js", ]
```

### How often does Dockerfile changes

- Source code changes
- Dependencies change
- Config changes
- Base image update
- Security changes


### In CI/CD pipelines builds are triggered by:

- Code Commits
- Pull Requests 
- Cont. deployments


## Networks and volumes

- Used when multiple containers are run.
