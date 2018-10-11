import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()

    export class subservice{
            constructor(private httpclient: HttpClient) {
                
            }

            postLogin(value)
            {
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://192.168.8.104:3000/student/login', value, {headers: header});
            }
    }
