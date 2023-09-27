import { NEW_MESSAGE } from "./types"
import { v4 as uuidv4 } from 'uuid';

//new MEssage function

//takes in just the text parameter
export const newMessage = text => {
    return {
        type: NEW_MESSAGE,
        item: {id: uuidv4(), text, timestamp: Date.now()} //fix the date thing here
    }

    //what is returned here is a messages key, but the app will have an array of messages so
}

