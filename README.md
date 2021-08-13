# SendHelpLah!  

## CP2106 Orbital AY20/21 Summer Break 
Application type: Web App

Lvl: Gemini

Team 2458

Open this project with this link: [https://sendhelplah.herokuapp.com/](https://sendhelplah.herokuapp.com/).

## **Motivation**
Recess week is over and you are still struggling with a module that you cannot S/U. Your only options for help are your friends who are equally as lost and you cannot even make new friends due to all the lessons being held online. SendHelpLah! platform will efficiently link you to students who have excelled in the modules you require guidance in. Struggling students can receive academic guidance by discussing the questions in the forum whereas seniors can pass on their notes to juniors through the Shop feature. SendHelpLah! will serve as a safe space for students to seek academic help and interact with fellow NUS students. 

## **Aim** 
We hope to create a platform where NUS students can meet to satisfy their educational needs efficiently and productively. 

## **Tech Stack**
Frontend: HTML, CSS, ReactJS

Backend: Node.js (express)

DB: mongoDB Atlas

Quality Assurance: Postman & TestProject

## **Features**
* Register/ Login for NUS users
* Users can sell their used textbooks/notes on the platform
* Users can also post their questions related to the module channels that they have joined to generate discussions

## **Limitations**
* current sign ups only allowed for student with NUS emails

## **Future Improvements**
* Users are not able to review or provide feedback on sellers
* payment system for shoppers
* rating system for shoppers and forum posts
* User profile page for users to view their profiles

## **Developer Guide**
1. Download the repo to ur computer
2. Create an .env file in the server folder
3. Insert the following lines of code to the .env file

```
MONGO_URI=
JWT_SECRET=secret
NODE_ENV=development 
```
   - add ur MONGODB link for MONGO_URI
   - NODE_ENV value change to production when upload to heroku
4. Open 2 terminals for each folder server and client
   - In client folder terminal do a `npm install`
   - In server folder terminal do a `npm install`
   - this is to install all node_module packages required for the app to work
5. Start the program
   - In client folder terminal do a `npm start`
   - In server folder terminal do a `npm run app`
