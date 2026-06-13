FROM ubuntu:22.04

# Install basic development packages and node systems
RUN apt-get update && apt-get install -y \
    curl \
    git \
    build-essential \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

# Install node runtime environment
RUN curl -fsSL https://nodesource.com | bash - \
    && apt-get install -y nodejs

WORKDIR /app

# Copy system dependencies
COPY package.json ./
RUN npm install

# Expose microservice interface
EXPOSE 5000

CMD ["npm", "run", "dev"]
