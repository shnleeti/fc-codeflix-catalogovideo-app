#!/bin/bash
if [ ! -f ".env" ]; then
  cp .env.example .env
fi

npm install -g npm@8.1.4 

npm install

tail -f /dev/null
# npm start