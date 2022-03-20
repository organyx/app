#!/bin/sh

echo "Starting app | Environment ${environment}"

if [[ "$environment" == "development" ]]; then
    env="development"
    npm install &&
        npm run dev
elif [[ "$environment" == "production" ]]; then
    env="production"
    npm run start
fi
