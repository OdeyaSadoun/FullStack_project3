import {server} from '../server/server.js'

export class network{
    static send(FXMLhttpRequest){
        console.log('network: ', FXMLhttpRequest.method, FXMLhttpRequest.url )

        if(FXMLhttpRequest.url.length < 0){
            console.log('network: invalid url');
            return;
        }
        else if(FXMLhttpRequest.url.split('/')[0] === 'server_fulstack3'){
            server.handle(FXMLhttpRequest);
        }
    }
}