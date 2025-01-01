npm init -y
npm i express
npm i mongoose --save
npm add -D typescript
npm i cors
npm i dotenv

Typescript initilization
tsc -init

tsconfig.json edit
rootdir : ./src
outdir: ./dist

add a script to package.json

"build" : "tsc"

lint install
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

npx eslint --init

npm install --save dev prettier

npm install --save-dev eslint-config-prettier
