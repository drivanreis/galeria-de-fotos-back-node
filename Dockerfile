# ../Dockerfile

FROM node:16.14-alpine

# Instalar pacotes necessários
RUN apk update && apk upgrade

# Diretório de trabalho
WORKDIR /app

# Copiar e instalar as dependências do Node.js
COPY package*.json ./
RUN npm install

# Copiar o código da aplicação
COPY . .

# Compilar o código TypeScript
RUN npm run build

# Expor a porta 3001
EXPOSE 3001

# Comando de inicialização do contêiner
CMD ["npm", "run", "start"]
