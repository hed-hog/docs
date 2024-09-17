# Use uma imagem base do Node.js
FROM node:alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Construa a aplicação Docusaurus
RUN npm run build

# Use uma imagem base do Nginx para servir a aplicação
FROM nginx:alpine

# Copie os arquivos construídos para o diretório padrão do Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]