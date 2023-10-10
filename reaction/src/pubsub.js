import PubNub from 'pubnub';
import keys from './pubnub.config';

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

//here you are initializing which channel will be the  subscriber

//
class PubSub {
    constructor() {
        const pubnub = new PubNub(keys);

        pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });


        this.addListener = (listenerConfig) => {
            pubnub.addListener(listenerConfig);
        };

        this.publish = message => {
            console.log('publish message', message);

            pubnub.publish({
                message: 'foo',
                channel: MESSAGE_CHANNEL
            });

        };
    }
}

export default PubSub
// pubnub.addListener({
//     message: messageObject => {
//         console.log('messageObject',messageObject)
//     }
// })

// setTimeout(() => {
  
    
   

// },1000)


//fires when messagesa are published to the channel

