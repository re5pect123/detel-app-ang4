import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
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
            data => { alert('ok'); },
            error => {
                console.log(JSON.stringify(error.json()));
            });
    }
}