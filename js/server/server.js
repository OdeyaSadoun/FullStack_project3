import { FXMLhttpRequest } from "../fxmlhttprequest.js";
export class server{

    static name(params) {
        
    }
    handle(FXMLhttpRequest ) 
    {
        console.log(server.my_url + ' received ', FXMLhttpRequest.body, ' with method ', FXMLhttpRequest.method);
        var resource = FXMLhttpRequest.url.substring(server.my_url.length, FXMLhttpRequest.url.length)
        if (FXMLhttpRequest.method === 'GET') {
            this.handle_GET(resource, FXMLhttpRequest.body);
        }
        else if (FXMLhttpRequest.method === 'POST') {   
            this.handle_POST(resource, FXMLhttpRequest.body);
        }
        else if (FXMLhttpRequest.method === 'PUT') {
            this.handle_PUT(resource, FXMLhttpRequest.body);
        }
        else if (FXMLhttpRequest.method === 'DELETE') {
            this.handle_DELETE(resource, FXMLhttpRequest.body);
        }
        FXMLhttpRequest.status = 4;
    }
    /*
    static handle_GET(resource, body, on_ready_callback){
        
        var options = []

        
        options.push(["/SignIn", function (resource, body, on_ready_callback){
            // do this and that
            // get user 
            var user = Database.getUser(body.username, body.password)
            // if user exists
            if (user !== undefined) {
                console.log('user exists', user)

                var response = {status: 200,
                    user: user}
               on_ready_callback(response);
            }
            else {
                console.log('server: user does not exist')
                var response = {status: 404,
                    user: undefined}
                on_ready_callback(response);
            }
            // call on_ready_callback when done
            
        }]);

        
        

        options.push(["/GetTasks", function (resource, body, on_ready_callback){
            // do this and that
            // get user 
            
            // if user exists
            var Tasks = Database.getMissions(body.userId);
            if (Tasks !== undefined) {
                var tasks_list = []
                for (var i = 0; i < Tasks.length; i++){
                    tasks_list.push({title : Tasks[i].text, id : Tasks[i].id, done : Tasks[i].done});
                }
                var response = {status: 200, userId : body.userId,
                    tasks : tasks_list }
                on_ready_callback(response);
            }
            // call on_ready_callback when done
            
        }]);

        server.go_over_options(options, resource, body, on_ready_callback);
    }*/
}