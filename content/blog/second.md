
---
title: "Docker files"
summary: "A breakdown of docker core concepts, containers, and best practices."
timestamp: "2026-07-15T10:30:00Z"
status: "PUBLISHED. ✅"
---

# Docker & Containerization

## Overview
Docker is a platform for packaging applications and their dependencies into portable containers. Containers provide consistent environments across development, testing, and production.

## Core Concepts
- **Image** – Blueprint used to create containers.
- **Container** – Running instance of an image.
- **Dockerfile** – Instructions for building an image.
- **Volume** – Persistent storage for container data.
- **Docker Compose** – Tool for managing multi-container applications.

## Example Dockerfile
```dockerfile
FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY target/app.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
```

## Common Commands
```bash
docker build -t my-app .
docker run -p 8080:8080 my-app
docker ps
docker stop <container-id>
docker compose up -d
```

## Best Practices
- Use lightweight base images.
- Avoid running containers as root.
- Keep images small.
- Use environment variables for configuration.
- Never store secrets inside images.

## Technologies
Docker, Docker Compose, Kubernetes, Java.