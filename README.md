#Mass SMS app for non-profits
Mass SMS service app built for non-profits that wish to communicate with their base. This app allows users to enter names and phone numbers into a database in Mongo, to retrieve them, and to create and send messages with the Twilio service API.

**Link to project:**

## How It's Made:

**Tech used:** Node, Express, Twilio, HTML, CSS, JavaScript

In this app the client side device can enter new entries into a database built in Mongo and can write and send SMS messages to that database. The backend of the app is built with Express. In the server.js file is the API that allows between the client device and both the database and the Twilio SMS service. In the main.js file is the client side javascript that makes the AJAX calls to the API.

## Optimizations
This app eventually will be able to handle sub-groups of people in the database, so that messages can be sent to specific groups of people that are concerned with the issue of the message. Future improvements include management of SMS replies and phone calls back into the non-profits central phone.

## Lessons Learned:

With this APP I learnt how to build an API in Express to safely comunicate the client side device with a database and third party services, and how to use Twilio's SMS API.

How to use:
1. Dowload Files
2. Get a Twilio Account
3. Go into the server.js file and enter your accounts Id, token and your Mongo database url.
4. In the terminal go to file directory
5. run $npm install
6. run $npm run dev
7. Go to local host 3000
8. Send Mass sms messages
9. Follow me on github!
