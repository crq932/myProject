#!/bin/bash
cd /home/a1/Letter/server
pm2 stop app.js 2> /dev/null || true
pm2 delete app.js 2> /dev/null || true