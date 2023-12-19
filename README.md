# Command Palette Back End

This is the back-end for the command palette I created for a test assignment for the company [sympl](https://gosympl.com/).

## Tech Stack

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Vercel](https://vercel.com/)

It had been a hot while since I last wrote back-end so I used this opportunity to get familiar again with Node.js and Express. I also used MongoDB and Mongoose to store the data. I used Vercel to deploy the back end. Vercel isn't exactly standard for express.js, normally I would use Heroku, Render or Cyclic but I wanted to try hosting a back-end on vercel.

## Endpoints

/api/getAll - this is the only endpoint for the back end. It returns all the users, files and folders in the database.

## Time spent

- 1 hour re-familiarizing myself with node, express and mongoDB
- .5 hours - setting up the project
- .5 hours - setting up the database
- 1 hour - creating the model controller and route
- .5 hour posting data to the database
- .25 hour - deploying the back end
- .5 hour fixing depolyment issues
- 10 minutes implement cors
- 10 minutes updating the mongoose model
------
- 4.5 hours total

## issues

My main issue was due to the fact that I had not written back-end in a while. I had to look up almost everything again to refresh my memory on how to write node REST api's. I also had some issues with the deployment. I had to add a cors package to the project since I was getting cors errors when trying to access the api from the front-end. Other issues were Typescript related, since it was the first time writing NodeJS with Typescript for me. These were quickly solved since they were mostly just type errors that were fixed by installing some type packages for node, express and cors.

## commands

- `npm run dev` - runs the project using nodemon. In your console you will see the url the project is running on.