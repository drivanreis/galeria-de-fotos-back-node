#!/bin/bash

echo "Parando os containers"
docker stop app_backend
docker stop app_ngrok

echo "Excluindo os containers"
docker rm -f app_backend
docker rm -f app_ngrok

echo "Excluindo as imagens do container"
docker rmi -f image-app_backend:latest
docker rmi -f galeria-de-fotos-back-node_ngrok:latest

echo "Listando todas as imagens"
docker images

echo "Listando todos os containers"
docker ps -a

echo "Limpeza Concluída !!!"
docker-compose up -d --build