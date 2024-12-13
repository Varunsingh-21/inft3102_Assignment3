---
layout: layouts/mylayout.ejs
name: Varun Deep Singh
date: 2024-12-12
description: "This is just the basic readme"
author: "VARUN DEEP SINGH"
---
# Assignment 3

The purpose of this program is to create a basic static website using a [**SSG**](https://www.cloudflare.com/learning/performance/static-site-generator/)  (Static Site Generator).  For this program we are using 11ty. This website has advanced features such as creation of different pages using 11ty's built in pagination feature. All the files needed to run this are provided. To get started read the information mention below. The templating engine used in the files is EJS. This assignment also required us to use some advanced topics such as pagination and integrating a CMS. This assignment 3 took us a step further into making the contact form work with a mail service configured in a Serverless function using Netlify and the emailing service used is SendGrid.

**What's new?**
  - If you followed the previous projects of the series, the current update involves following new features
    - Integration of Serverless functions using Netlify
    - Integration of Email Services such as SendGrid.
    - Deployed the project to netlify

---
## Overview
The project consists of:
- **Static Site Generator**: 11ty (Eleventy) for building a static website.
- **Hosting Platform**: Netlify for deployment and hosting.
- **Email Service**: SendGrid for sending emails through serverless functions.
- **Contact Form**: A dynamic form submitting data to a serverless function.



**This how your project is going to look initially.**
  
- Description about directories:
  - **src**: Contains all the source file that are going to be considered by the SSG(11ty in our case). This folder acts as the root for the SSG.
  - **_data**: This directory acts as a souce folder for data file such as JSONs. The underscore in the beginning makes it special for the SSG.
  - **_includes**: This directory contains the layouts and the partials. 11ty by default looks into this folder to find layouts.
  - **layouts and patials**: Custom made folders to separate partials and layouts.
  - **img and css**: Custom directories to store different kinds of files. They are set to be passed through as it is in the eleventy config file.
  - **JS**: For the javascript files for the form submittion and handling of events.
  - **eleventy.config.js**: Contains the configuration files for the SSG and templating engine configurations.
  - **.netlify**: The project for netlify deployment.
  - **functions**: The folder names functions contains JavaScript and TypeScript files for the serverless fucntion and the SendGrid usage.
  - **dist**: The destination folder for the files when program runs.
  - **webhooks**: Contains the scripts and server files for the webhooks.


## How to run the program:

- The package has been exported to you without the node modules and other dependencies.
  - To install node modules and other dependencies in it. Use **`npm install`**. The command will instal all the dependencies listed in package.json and create a package.lock.json.
  - This time the **`npm install`** is going to install the sendgrid api module as well
  - As the **`API_KEYS`** and `Tokens` have been removed for the security purposes. Please add the following environment variables
    - SENDGRID_API_KEY
    - VERIFIED_SENDER
    - STRAPI_BEARER_1
    - STRAPI_BEARER_2
  - You have to install the CLI for **Netlify** by using **`npm install netlify-cli -g`**, This will globally install the CLI.
  - After installing the CLI, you can run the application on the Netlify Development server by using **`netlify dev`**.
  - To get usage tips and learn more about available commands from within Netlify CLI, run **`netlify help`**.

**The following parts are no longer required as the strapi hosting has been shifted to strapi cloud**
- If you are still interested in hosting it in local, after hosting here are the commands used
  - Run strapi locally in this by **`npm run develop`**.
  - After the installation finishes, Use the script **`npm run start`** to run the program which has been already configured in the package.json. The command **npm run start** will run the program and create a dist folder.The npm run start runs npm run dev and npm run start:webhook concurently.
  - The above mentioned two commands should be in 2 different terminals.

## Some key features

- The program uses 11ty's pagination feature to slice the data in data file and display them in pages. It uses the built in permalink and pagiantion feature of 11ty to achieve this.
- The Next and previous buttons of the pagination navigation are disbled if we are on the first or last page depending on the scenerio.
- For styling of the data displayed on the screen, a partial named card has been used.
- The data has been moved to a CMS(using Strapi). Making it easier to be managed.
- Webhooks are added in case of content change.
- The strapi project has been moved to cloud making it accessible even when not running on local.
- SendGrid has been integrated to the project for send an email to the owner of the website on every contact request.
- Project's Serverless functions has been hosted on netlify alongside the site making it easier to handle.
- Only if the strapi is locally hosted:
  - the server for 11yt and the webhooks will start togather by using `npm run start`
  
## Maintenance
---
### Netlify Configuration
- **Environment Variables**: Regularly review and update environment variables to maintain security.
- **Build Settings**: Ensure build settings are optimized for performance.
- **Monitoring**: Use Netlify logs and analytics to monitor deployments and function usage.

### SendGrid
- **API Key Management**: Rotate the API key periodically for security.
- **Email Templates**: Update the email content and structure as needed.
- **Limits**: Monitor SendGrid usage to avoid exceeding email quotas.

### Contact Form
- **Validation**: Enhance validation for form fields to reduce spam submissions.
- **Testing**: Regularly test the form to ensure submissions are processed correctly.


### Debugging Tips
- Use Netlify's deployment and function logs for error tracking.
- Check SendGrid email activity for troubleshooting delivery issues.
- Validate JavaScript functionality in multiple browsers.