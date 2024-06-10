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


### Configs


WORKDIR: Sets the working directory for any RUN, CMD, ENTRYPOINT, COPYinstructions that follow it.
RUN: Executes any commands in a new layer on top of the current image and commits the results.
CMD: Provides defaults for executing a container. There can only be one CMD instruction in a Dockerfile.
EXPOSE: Informs Docker that the container listens on the specified network ports at runtime.
ENV: Sets the environment variable.
COPY: Allow files from the Docker host to be added to the Docker image

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
