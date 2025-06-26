#!/bin/bash
apt update -y
apt install docker.io -y
usermod -aG docker ubuntu
systemctl enable docker
systemctl start docker
