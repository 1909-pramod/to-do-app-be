#!/bin/bash

sudo docker build -t localhost:32000/to-do-be-express .
sudo docker push localhost:32000/to-do-be-express
sudo microk8s kubectl apply -f to-do-be.yml