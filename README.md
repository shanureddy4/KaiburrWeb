# Overview
This angular project is frontend UI for this [SpringBoot](https://github.com/shanureddy4/WebApiTask) Application (Task 1). Therefore inorder to run this application springboot application must run on background. So clone and run the spring boot application first. Installation guide provided in that repository.
## Getting Started
Spring boot application api endpoints. with that endpoints we were able to access our Angular application.
### Building the project
* After clonning springboot application run on background.
* Now clone this angular project. Inside the directory type ```npm install``` to install required packages.
* Now type ```ng serve``` to run our application
* By default springboot application runs on port ```8080``` and angular appliacation runs on port ```4200```
* Goto ```http://{yourhostipaddress}:4200``` to access the application.
* Angular application is associated with spring boot application. So if you change angular application port, you need to change **@CrossOrigin** annotation inside the springboot application.
### Output
By default app loads data inside the table <br>
**GET all servers**
![GET all](https://github.com/shanureddy4/KaiburrWeb/blob/master/screenshots/default%20get.png)
**GET server by ID**
![GET](https://github.com/shanureddy4/KaiburrWeb/blob/master/screenshots/get.png)
**PUT server**
![PUT] (https://github.com/shanureddy4/KaiburrWeb/blob/master/screenshots/put.png)
**DELETE server**
![DELETE](https://github.com/shanureddy4/KaiburrWeb/blob/master/screenshots/delete.png)
