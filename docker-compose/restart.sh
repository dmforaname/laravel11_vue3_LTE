#!/bin/bash

docker-compose down && 
docker-compose up -d && 
docker exec -it laravelAdmApp php artisan config:cache &&  
docker exec -it laravelAdmApp npm run dev

