import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class CreateUserService {
    constructor(private http: Http) { }

    createUser() {

        var body = 'j_username=astra&j_password=astra22API';
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Cookie', 'JSESSIONID=kHas0AaWjE2nAq68sjbPEzUqsfdKmzd4oa-ARqsu; path=/; HttpOnly');

        this.http.post('http://442api.detel.eu/api/kreiraj',
            body, {
                headers: headers
            })
            .subscribe(
            data => { alert('ok'); },
            error => {
                console.log(JSON.stringify(error.json()));
            });
    }
    

}