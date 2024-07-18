# ../script-limpa.sh

echo "Parando os containeres"
docker stop app_backend

echo "Excluindo os containeres"
docker rm -f app_backend


echo "Excluindo a imagem do container"
docker rmi image-app_backend:latest

echo "Listando todos as imagens"
docker images

echo "Listando todos os containers"
docker ps -a

echo "Limpeza Concluída !!!"

# echo "Buildando... ..."
npm run build

echo "Iniciando o Docker Compose"
# docker-compose up -d --build
