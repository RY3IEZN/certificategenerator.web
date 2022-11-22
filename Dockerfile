FROM node:16
WORKDIR /app
COPY package*.json /app
COPY ./controllers /app/controllers
COPY ./middleware /app/middleware
COPY ./models /app/models
COPY ./routes /app/routes
COPY ./utils /app/utils
COPY index.js /app
RUN npm install
COPY ./frontend /app/frontend
WORKDIR /app/frontend
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]