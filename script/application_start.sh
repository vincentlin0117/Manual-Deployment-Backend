#!/bin/bash
cd /home/ubuntu/Manual-Deployment-Backend
nohup node src/app.js > output.log 2>&1 &