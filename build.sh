#!/bin/bash
docker buildx build --platform linux/amd64 -t agonzalezo/api-mail:latest .
# docker buildx build --platform linux/amd64,linux/arm64 -t agonzalezo/api-mail:latest --push .
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v6 -t agonzalezo/api-mail:latest --push .
