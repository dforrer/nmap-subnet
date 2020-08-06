#!/usr/bin/env bash
DATE=$(date +"%Y-%m-%dT%H-%M-%S")
echo $DATE
sudo node index.js > ./import_nmap_scans/$DATE
