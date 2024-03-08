import {UserEvent} from './userEvents.js';


const userEvent = new UserEvent();

function savaToDatabase() {
    console.log('Post saved to database');
}

function sendNotification() {
    console.log('Sending notification');
}

function updateTimeline() {
    console.log("Timeline updated");
}

userEvent.addListener('postCreated',savaToDatabase);
userEvent.addListener('postCreated',sendNotification);
userEvent.addListener('postCreated',updateTimeline);

userEvent.createPost('My first post');