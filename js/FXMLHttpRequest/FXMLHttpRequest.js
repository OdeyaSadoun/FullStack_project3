import { network } from '../network/network.js'

export class FXMLhttpRequest {
    onload = null;

    open(method, url, body) {
        this.method = method;
        this.url = url;
        this.body = body;
        this.status = 0;
    }

    
    send() {
        network.send(this);
    }

}