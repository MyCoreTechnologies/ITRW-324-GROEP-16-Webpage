import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()

    export class subservice{
            constructor(private httpclient: HttpClient) {}
            
            postLogin(value)//Login HeaderLOGIN 
            {
                    console.log(value);
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://18.206.247.140:3000/student/login', value, {});
            }
            getToken(){//Get Token
                return sessionStorage.getItem('data');
            }
            postDisplayBookData(value)//Search Book header display book data subject price type
        {
                const header= new HttpHeaders().set('Content-Type', 'application/json');
                return this.httpclient.post('http://18.206.247.140:3000/book/subject/price/type', value, {headers: header});
            }
            postRegister(value)//Header Register Student
            {
                const header= new HttpHeaders().set('Content-Type', 'application/json');
                return this.httpclient.post('http://18.206.247.140:3000/student/register', value, {});
            }
            getAllBooks(){//show all books tab getAll Books

                        return this.httpclient.get('http://18.206.247.140:3000/book/getBook');
            }
            getMyBooks(){//student books profile get my books
                 return this.httpclient.get('http://18.206.247.140:3000/book/myBook');
            }
            postBook(value)//ADD BOOK component
            {
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://18.206.247.140:3000/book/addBook', value, {headers: header});
            }
            postOffence(value)// Report component report student
            {
                const header= new HttpHeaders().set('Content-Type', 'application/json');
                return this.httpclient.post('http://18.206.247.140:3000/student_offence/reportOffence', value, {});
                
            }
            logout(event)//discard token
            {                  
                sessionStorage.clear();                   
            }   
            postDeleteBookOfStudent(value)//Delete the book form Student by book Number
            {
                const header= new HttpHeaders().set('Content-Type', 'application/json');
                return this.httpclient.post('http://18.206.247.140:3000/book/myBook/delete', value, {headers: header});
            }         
            postFilterBooksAddRequest(value) //Filter the book form Show all books by add or request
            {
            const header= new HttpHeaders().set('Content-Type', 'application/json');
            return this.httpclient.post('http://18.206.247.140:3000/book/type', value, {headers: header});
            }
    }
