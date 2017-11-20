import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    testRequest() {

        var creds = 'j_username=astra&j_password=astra22API';

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post('http://442api.detel.eu/api/authentication', creds, { headers: headers })
            .subscribe(

            (res) => {
                var header = res.headers;
                console.log(header);
                var setCookieHeader = headers.getAll('Set-Cookie');
                console.log(setCookieHeader);

            })
      }

    /* testRequest(username: string, password: string) {
         var creds = 'j_username=' + username + '&j_password=' + password;
         
         var headers = new Headers();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');
 
         let options = new RequestOptions({ headers: headers, withCredentials: true });
         
         return this.http
             .post('http://442api.detel.eu/api/authentication', creds, options)
             .subscribe( (res) => {var headers = res.headers; var cookie = headers.get('Set-Cookie')
         console.log(this.http)    
     }
     );
     
     }*/
}