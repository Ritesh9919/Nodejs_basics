import * as Events from 'events';


export class UserEvent extends Events.EventEmitter{
    createPost(content) {
        console.log('Post is created');
        this.emit('postCreated');
    }
}