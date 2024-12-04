# Lumivirt Website

A modern, responsive website for Lumivirt built with React, TypeScript, and Tailwind CSS.

## 🚀 Deployment Guide

### Prerequisites

- A VPS running Linux (Ubuntu recommended)
- Docker installed on your VPS
- Git installed on your VPS
- A domain name (optional)

### Installation Steps

1. **Install Docker on your VPS**

```bash
# Update package list
sudo apt update

# Install required packages
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package list again
sudo apt update

# Install Docker
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to docker group (optional)
sudo usermod -aG docker ${USER}
```

2. **Clone the Repository**

```bash
# Clone the repository
git clone https://github.com/yourusername/lumivirt-website.git
cd lumivirt-website
```

3. **Build and Run with Docker**

The project includes a Dockerfile and docker-compose.yml for easy deployment.

```bash
# Build and run the container
docker-compose up -d --build
```

### Docker Configuration Files

The project includes the following Docker configuration files:

#### Dockerfile
```dockerfile
# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### docker-compose.yml
```yaml
version: '3.8'

services:
  website:
    build: .
    ports:
      - "80:80"
      - "443:443"
    restart: unless-stopped
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
```

#### nginx.conf
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml;
    gzip_disable "MSIE [1-6]\.";
}
```

### SSL Configuration (Optional)

To enable HTTPS with Let's Encrypt:

1. Install Certbot:
```bash
sudo apt install -y certbot python3-certbot-nginx
```

2. Obtain SSL certificate:
```bash
sudo certbot --nginx -d yourdomain.com
```

### Maintenance

- **Update the website:**
```bash
git pull
docker-compose up -d --build
```

- **View logs:**
```bash
docker-compose logs -f
```

- **Stop the website:**
```bash
docker-compose down
```

## 🛠 Development

### Local Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.