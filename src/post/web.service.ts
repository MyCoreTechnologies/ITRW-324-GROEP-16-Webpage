import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()

    export class subservice{
            constructor(private httpclient: HttpClient) {
                
            }
// http://192.168.8.104:3000/student/login
            postLogin(value)
            {
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('https://selitwebpage.firebaseio.com', value, {headers: header});
            }
    }
