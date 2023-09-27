//publishing the message here

import React, {useState} from "react";
import { newMessage } from "../state/actions";

//parameter is props passed down
function PublishMessage(props) {
    //state varibale for the text entered by the user
    const {dispatch} = props;

    const [text, setText] = useState('');


    //function here will get the text from the user
    const updateText = event => {
        setText(event.target.value)
    }

    const publishMessage = () => {
        dispatch(newMessage(text))
    }

    //make it so that the enter key works
    const handleKeyPress = event => {
        if (event.key === 'Enter') publishMessage(); //one line JSX statement
    }
 return (

    <div>
        <h3>Got something to say? Then say it</h3>
        <input value={text} onChange={updateText} onKeyUp={handleKeyPress}></input>
         {' '}
        <button onClick={publishMessage}>Publish it!</button>

    </div>
 )
}

export default PublishMessage

