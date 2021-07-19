# Hello world with Module Federation
This repository is educational. The hello-world-with-module-federation is an example of Micro Frontends with Module Federation, React and Typescript. This a POC(Proof of Concept) project it may not look great, but that's not the point in our case. It's just a simple example of how to fetch components from micro-frontends and how to use a context state (which in our case is a user) from a micro-frontend. 

Workflow:
* app1 expose AppOne component and UserContext object.
* app2 expose AppTwo component.
* container import AppOne, AppTwo component and UserContext object.


# How do you create applications?

# How do you create container application?

npx create-react-app container --template typescript

yarn add html-webpack-plugin serve ts-loader webpack webpack-cli webpack-dev-server

npm install --save react-error-boundary

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

https://github.com/ogzhanolguncu/react-typescript-module-federation
