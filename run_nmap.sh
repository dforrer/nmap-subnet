#!/usr/bin/env bash
DATE=$(date +"%Y-%m-%dT%H-%M-%S")
echo $DATE
sudo node nmap_scan.js > ./import_nmap_scans/$DATE
