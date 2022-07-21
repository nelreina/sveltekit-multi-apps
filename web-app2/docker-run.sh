docker rm -f web-app2 

docker run --name web-app2 --restart=always -p 3000:3000 -d web-app2:latest 

docker logs -t web-app2 

