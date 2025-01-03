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

npm i ts-node-dev

Process:

1. create an interface
2. create a Schema based on document
3. create a model using that schema and export that
4. create a service using that model. service will handle mongoose query
5. create a controlle function uising that service and export that controller
6. using router object instance create necessary router and use necessary controller function and export
7. app.use that router
