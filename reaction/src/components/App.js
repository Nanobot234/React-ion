import React, { useReducer, useEffect} from 'react';
import reducer, {initialState} from '../state/reducer';
import PublishMessage from '../components/PublishMessage'
import MessageBoard from './MessageBoard';
import Context from '../context';
import PubSub from '../pubsub';
import '../pubsub';

const pubsub = new PubSub();


//addds a listener that checks for messages.


//try again here!!

// setTimeout(() => {
// pubsub.publish({type:'foo',value:'bar'});
// },1000)


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  //the useEffect allows the app to send an action object to network
  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const {channel, message} = messageObject;
    
        console.log("Recieved message", message, 'channel', channel);
    
        dispatch(message);
      }
    })


  },[])
  
  console.log("state", state)
  return (
    <Context.Provider value={{state, dispatch, pubsub}}>
    <div>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage  dispatch={dispatch}/>
      <hr/>
      <MessageBoard messages={state.messages}/>
      
    </div>
    </Context.Provider>
  );
}

export default App;
