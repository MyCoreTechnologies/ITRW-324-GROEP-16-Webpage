import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()

    export class subservice{
            constructor(private httpclient: HttpClient) {
                
            }

            postLogin(value) //Login HeaderLOGIN 
            {
                    console.log(value);
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://192.168.8.100:3000/student/login', value, {});
            }
            getToken(){      //Get Token
                return sessionStorage.getItem('data');
            }
            postDisplayBookData(value) //Search Book header display book data subject price type
        {
                const header= new HttpHeaders().set('Content-Type', 'application/json');
                return this.httpclient.post('http://192.168.8.100:3000/book/subject/price/type', value, {headers: header});
            }
            postRegister(value) //Header Register Student
            {
                const header= new HttpHeaders().set('Content-Type', 'application/json');
                return this.httpclient.post('http://192.168.8.100:3000/student/register', value, {});
            }








        //     postBook(value)//ADD BOOK
        //     {
        //             const header= new HttpHeaders().set('Content-Type', 'application/json');
        //             return this.httpclient.post('http://192.168.8.100:3000/book/addBook', value, {headers: header});
        //     }


           

        //     getMyBooks(){//student books

        //         return this.httpclient.get('http://192.168.8.100:3000/book/myBook');
             
              
        //      }

        //      getAllBooks(){ //show all books tab

        //         return this.httpclient.get('http://192.168.8.100:3000/book/getBook');
             
              
        //      }


        //     getDisplayBookData(){

        //         return this.httpclient.get('http://192.168.8.100:3000/book/subject/price/type');
             
              
        //      }


        //     postRegister(value)
        //     {
        //         const header= new HttpHeaders().set('Content-Type', 'application/json');
        //         return this.httpclient.post('http://192.168.8.100:3000/student/register', value, {});
        //     }
   

        //     postOffence(value)
        //     {
        //         const header= new HttpHeaders().set('Content-Type', 'application/json');
        //         return this.httpclient.post('http://192.168.8.100:3000/student_offence/reportOffence', value, {});
                
        //     }


        //     logout()
        //     {
        //              sessionStorage.clear();

        //              alert("Logged out!")                   
        //     }




        //     postMyBook(value) //student show/delete/update
        //     {
        //             const header= new HttpHeaders().set('Content-Type', 'application/json');
        //             return this.httpclient.post('http://192.168.8.100:3000/book/subject/price/type', value, {headers: header});
        //     }
        //     postDeleteMyBooks(value) //student show/delete/update
        //     {
        //             const header= new HttpHeaders().set('Content-Type', 'application/json');
        //             return this.httpclient.post('http://192.168.8.100:3000/book/subject/price/type', value, {headers: header});
        //     }
    }
