# hello-world-with-module-federation
The hello-world-with-module-federation is an example of Micro Frontends with Module Federation, React and Typescript.

# How do you create both applications?

# How do you create container application?

npx create-react-app container --template typescript

yarn add html-webpack-plugin serve ts-loader webpack webpack-cli webpack-dev-server

# How do you create app1 application?

npx create-react-app app1 --template typescript

yarn add html-webpack-plugin serve ts-loader webpack webpack-cli webpack-dev-server

yarn add @pixability-ui/federated-types

# How do you create app2 application?

npx create-react-app app2 --template typescript

yarn add html-webpack-plugin serve ts-loader webpack webpack-cli webpack-dev-server

yarn add @pixability-ui/federated-types

# Install and run app 1
cd app1
yarn install
yarn make-types
yarn start

# Install and run app 2
cd app2
yarn install
yarn make-types
yarn start

# Install and run container
cd container
yarn install
yarn start



# Guides: 

https://ogzhanolguncu.com/blog/micro-frontends-with-module-federation

https://www.npmjs.com/package/@pixability-ui/federated-types

