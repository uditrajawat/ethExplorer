# Use a NodeJS base image
FROM node:12

# Set the working directory
WORKDIR /app

# Copy the package.json file to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Specify the command to run when starting the container
CMD ["npm", "start"]
