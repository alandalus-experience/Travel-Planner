# Travel-Planner

Travel planner app made with MERN stack and NextJS.

## Overview
Users can create trips where they are able to add itineraries, make before you go todo lists, add reservation details, tickets, or any important information about the trip, track budgets of each spending. This will be the feature list for the MVP version, but more functionality will be added as we progress.

## Project setup 
If you don't have nodemon installed globally run this:  
```$ npm i nodemon --save-dev```

### ```Back-end```
 1. Clone the repo from ```Development branch```, that contains the latest working features.
 2. After cloning the repo you will need to create a development database with MongoDB.
 3. Create a .env file called ```config.env``` in the config folder and copy paste the content from example.config.env file. 
 4.  Add your mongo connection URI to ```TEST_MONGO_URI``` to use the database.
 5. In the root folder run:   
 ```$ npm install```
 6. You are done with the back-end installation. If you want to spin up the development server run:  
 ```$ npm run dev```
 7. Requests have to be made to ```localhost:8081```
 
 ### ```Front-end```
 1. Navigate into /client folder and run:
 ```$ npm install```
 2. Configure Firebase: [Firebase setup tutorial for this app](https://drive.google.com/file/d/1eLFITZLESiqVO3egpwlbJLJ3Rm5SWlb-/view?usp=sharing)
 3. Configure Facebook Login: [Facebook setup tutorial for this app](https://drive.google.com/file/d/1ZCldNsQVdgx5j7zMtvjZNs7CIDwRxCeh/view?usp=sharing)
 4. Obtain an Unsplash API access key and secret from here: [Unsplash Developers](https://unsplash.com/developers)
 5. After you obtained the access key you have to go to ./config/config.env and paste the key at the corresponding variable.
 4. To start front-end server run this command in the terminal:
 ```$ npm run dev```

 ### ```Cron Server```
 1. In order to have the daily exchange rates fetched you have to go and register an account here: [fixer.io](https://fixer.io/).
 2. After you obtained the access key you have to go to ./config/config.env and paste the key at the corresponding variable.
 3. Run the cron server from the root folder by typing:  
 ```$ npm run cron```

 ## Run Servers

 ### ```VSCode users - Run the 3 servers together in VSCode integrated terminal```
 If you use VSCode as you code editor, you can run the 3 servers with one task. 
 ./.vscode/tasks.json has a task included so you can run this task and spin up the 3 servers togeter separated into 3 tabs. In theory VSCode should have it included already under tasks. You can open The __Terminal__ tab and click on __Run Task__. In the dropdown look for __Run server__ and click on it.

 ### ```Run the servers in the OS terminal```
 After you finished setting up the back and front-end, you should have all the npm packages installed, so the only thing you have to do is run the srcipt below from the root of the project.  
 ```$ npm run all```

 ## Additional info
 When you want to work on a feature or bug, please create a branch from the development branch and name it after the feature you are working on.
 When you are done with the task push it up to GitHub and your code will be reviewed and merged to the development branch.
 ### ```NOTE:``` After successful contribution your name will be added to the contributors list
