<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

## About Laravel

Clone this repo
```
git clone https://github.com/dmforaname/laravel11_vue3_LTE.git laravel
```

## Go to docker-compose folder & Setup .env 
```
cd laravel/docker-compose
cp .env.example .env
```

## Build docker
```
docker-compose build
```
## Run docker
```
docker-compose up -d
```

## Install composer
```
docker exec -it laravelAdmApp composer install
```

## Install NPM
```
docker exec -it laravelAdmApp npm install
```

## Run NPM
```
docker exec -it laravelAdmApp npm run dev
```
