# Ionic_with_Mongodb
This project demonstrate how to set up mongo db server  in backend with node js and mongodb and front end will be based on ionic and angular.

Both folder are separate.
for  mongodb server you need to install followingly
1.you need to install node.js from https://nodejs.org/en/download/
2.install mongodb server
3.then create folder do as folow
  mkdir api
  cd api
  npm init -y
  npm install express body-parser jsonwebtoken passport passport-jwt mongoose bcrypt cors

for ionic angular front end you need to install followingly
1.npm install -g @ionic/cli
2.then create an ionic app type angular
   ionic start ionicwithmongodb blank --type=angular
   cd ionicwithmongodb
 
   ionic g page pages/login
   ionic g page pages/inside
 
   ionic g service services/auth
   ionic g service services/authGuard
   4.install necessary packages
npm i @ionic/storage
npm i @auth0/angular-jwt
 
ionic cordova plugin add cordova-sqlite-storage
