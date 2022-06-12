#!/bin/bash
# 加载变量
source "./_shell/init.sh"
#############

rm -rf ${path}"/.routify"
rm -rf ${path}"/dist"

npm install

echo " =========== vite =========== "

pm2 start "npm run dev" --name "piccker"

sleep 1

node_modules/.bin/svelte-check --tsconfig ./tsconfig.json &&
  node_modules/.bin/routify -b &&
  node_modules/.bin/vite build &&
  pm2 delete "piccker"

echo " =========== go build  =========== "

go mod tidy &&
  go build -o ${buildName}
echo " server 端编译 完成"

echo " =========== 开始进行 文件整理 =========== "

echo "移动 go build 文件"
mv ${buildName} ${outPutPath} &&
  exit
