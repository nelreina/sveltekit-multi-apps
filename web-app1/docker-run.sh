docker rm -f web-app1 

docker run --name web-app1 --restart=always -p 3000:3000 -d web-app1:latest 

docker logs -t web-app1 

