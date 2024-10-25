rm -rf dist && 
yarn build &&
cd dist && 
git init && 
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin https://github.com/A-Tione/atee-ui-vue3-demo.git
git push -u origin main
cd -
echo https://github.com/A-Tione/atee-ui-vue3-demo/index.html
