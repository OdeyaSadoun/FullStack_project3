import { network } from '../network/network.js'

export class FXMLhttpRequest {

    open(method, url, body) {
        this.method = method;
        this.url = url;
        this.body = body;
        this.onload = null;
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