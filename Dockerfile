FROM node:16

ENV NODE_ENV production

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

COPY package*.json ./app/frontend

RUN npm install

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Remove default conf
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/confbackup.conf

# Add your nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 
