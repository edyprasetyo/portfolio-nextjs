#!/bin/bash

echo 'Starting to Deploy...'
ssh ec2-user@34.222.141.246 " 
        cd /usr/local/src/portfolio-nextjs
        git pull
        docker build portfolio-nextjs
        docker-compose up --no-deps -d portfolio-nextjs
        "
echo 'Deployment completed successfullys'