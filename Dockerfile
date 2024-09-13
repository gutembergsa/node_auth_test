# Utilize uma imagem base do Node.js
FROM node:16-alpine

# Setar o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar o package.json e instalar as dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta que o aplicativo escuta (ajuste conforme necessário)
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
