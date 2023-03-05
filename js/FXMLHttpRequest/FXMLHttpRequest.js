import { network } from '../network/network.js'

export class FXMLhttpRequest {

    open(method, url, body, handler) {
        this.method = method;
        this.url = url;
        this.body = body;
        this.handler = handler;
        this.status = 0;
    }

    send() {
        network.send(this);
    }

    

    // open(method, url) {
    //     this.method = method;
    //     this.url = url;
    // }

    // onload(body, eventhandler) {
    //     this.body = body;
    //     this.eventhandler = eventhandler;
    //     this.status = 0;
    //     this.statusText = "None";
    // }

}