---
layout: layouts/mylayout.ejs
name: Varun Deep Singh
date: 2024-11-08
description: "This is just the basic readme"
author: "VARUN DEEP SINGH"
---
# Assignment 2  

The purpose of this program is to create a basic static website using a [**SSG**](https://www.cloudflare.com/learning/performance/static-site-generator/)  (Static Site Generator).  For this program we are using 11ty. This website has advanced features such as creation of different pages using 11ty's built in pagination feature. All the files needed to run this are provided. To get started read the information mention below. The templating engine used in the files is EJS. This assignment also required us to use some advanced topics such as pagination and integrating a CMS



**This how your project is going to look initially.**
  
- Description about directories:
  - **src**: Contains all the source file that are going to be considered by the SSG(11ty in our case). This folder acts as the root for the SSG.
  - **_data**: This directory acts as a souce folder for data file such as JSONs. The underscore in the beginning makes it special for the SSG.
  - **_includes**: This directory contains the layouts and the partials. 11ty by default looks into this folder to find layouts.
  - **layouts and patials**: Custom made folders to separate partials and layouts.
  - **img and css**: Custom directories to store different kinds of files. They are set to be passed through as it is in the eleventy config file.
  - **eleventy.config.js**: Contains the configuration files for the SSG and templating engine configurations.
  - **dist**: The destination folder for the files when program runs.
  - **webhooks**: Contains the scripts and server files for the webhooks.

## How to run the program:

- The package has been exported to you without the node modules and other dependencies.
  - To install node modules and other dependencies in it. Use **`npm install`**. The command will instal all the dependencies listed in package.json and create a package.lock.json.
  - Run strapi locally in this by **`npm run develop`**.
  - After the installation finishes, Use the script **`npm run start`** to run the program which has been already configured in the package.json. The command **npm run start** will run the program and create a dist folder.The npm run start runs npm run dev and npm run start:webhook concurently.
  - The above mentioned two commands should be in 2 different terminals.

## Some key features

- The program uses 11ty's pagination feature to slice the data in data file and display them in pages. It uses the built in permalink and pagiantion feature of 11ty to achieve this.
- The Next and previous buttons of the pagination navigation are disbled if we are on the first or last page depending on the scenerio.
- For styling of the data displayed on the screen, a partial named card has been used.
- The data has been moved to a CMS(using Strapi). Making it easier to be managed.
- Webhooks are added in case of content change.
- the server for 11yt and the webhooks will start togather by using `npm run start`
  