rm -rf dist && 
yarn build &&
cd dist && 
git init && 
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin https://github.com/A-Tione/vue3-atee-ui-demo.git
git push -f origin main
cd -
echo https://github.com/A-Tione/vue3-atee-ui-demo/index.html
