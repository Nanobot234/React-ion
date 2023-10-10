//in this component, will display the messages that we have so far in the state!! 
import React, {useState} from "react";
import { useAppContext } from "./hooks";

//i know i will need to access the state to show the tasks, or will be

//function to display the messages in the store
function MessageBoard(){

    const {state: {messages}} = useAppContext()
    //now JSX code to return whats in messages
    return (
        <div>
            {
                messages.map(messageItem => {
                    const {id, text, timestamp} = messageItem;

                    return (
                        <div key={id}>
                            <h4>{new Date(timestamp).toLocaleString()}</h4>
                            <h2>{text}</h2>
                            </div>

                    )
                })
            }
        </div>
    )
}

export default MessageBoard