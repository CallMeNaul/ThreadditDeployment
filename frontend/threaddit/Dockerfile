# Use a Node.js base image
FROM node:16-alpine as builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY frontend/threaddit/package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY frontend/threaddit/ .

# Build the application
RUN npm run build

# Use a lightweight web server image
FROM nginx:stable-alpine

# Copy the built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Add Nginx configuration to proxy API requests
RUN rm /etc/nginx/conf.d/default.conf
COPY frontend/threaddit/nginx.conf /etc/nginx/conf.d/

# Expose the default nginx port
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
