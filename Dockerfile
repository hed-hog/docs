FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.8.3

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]