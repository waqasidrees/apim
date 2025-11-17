# Use official Node.js LTS
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy app source
COPY . .

# Expose port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
