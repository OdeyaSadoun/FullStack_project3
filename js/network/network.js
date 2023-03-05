import {server} from '../server/server.js'
import { FXMLhttpRequest } from '../FXMLHttpRequest/FXMLHttpRequest.js';





export class network{


    static send(FXMLhttpRequest) {
        console.log('network: ',FXMLhttpRequest.method, FXMLhttpRequest.url);
        if (FXMLhttpRequest.url.length < 0) {
            console.log('network: invalid url');
            return;
        }
        if(FXMLhttpRequest.url.split('/')[0] === 'server.com'){
            server.handle(FXMLhttpRequest);
        }
    }

   /* static send(FXMLhttpRequest){
        console.log('network: ', FXMLhttpRequest.method, FXMLhttpRequest.url )

        if(FXMLhttpRequest.url.length < 0){
            console.log('network: invalid url');
            return;
        }
<<<<<<< HEAD
        else if(FXMLhttpRequest.url.split('/')[0] === 'server_fulstack3',function (response){
            console.log('network: responding to client with ', response)
            FXMLhttpRequest(response){
            server.handle(FXMLhttpRequest);
        }
    }*/
}
=======
        else if(FXMLhttpRequest.url.split('/')[0] === 'server_fulstack3'){
            server.handle(FXMLhttpRequest, function (response){
                console.log('network: responding to client with ', response)
                FXMLhttpRequest.onload(response);
            })
        }
    }
}
>>>>>>> dfe31c9d3215c61fbb033ecc4178100ae5979cad
