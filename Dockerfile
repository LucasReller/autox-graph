# Test web app that returns the name of the host/pod/container servicing req
FROM node:current-alpine

LABEL org.opencontainers.image.title="autox-graph" \
      org.opencontainers.image.description="UI for AutoX Visualization" \
      org.opencontainers.image.authors="@LReller"

# Create directory in container image for app code
RUN mkdir -p /usr/src/app

# Copy app code (.) to /usr/src/app in container image
COPY . /usr/src/app

# Set working directory context
WORKDIR /usr/src/app

# Install dependencies for angular
RUN npm install -g @angular/cli

# Install dependencies from package.json
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]