import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DisplaybooksComponent } from './displaybooks/displaybooks.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReportstudentComponent } from './reportstudent/reportstudent.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes,Router } from '@angular/router';
import {subservice} from '../post/web.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {InterceptorService} from '../post/web.interceptor';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { ShowallbooksComponent } from './showallbooks/showallbooks.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const appRoutes: Routes = [
  { path: 'displaybooks' , component: DisplaybooksComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'register' , component: RegisterComponent}, 
  {path: 'login' , component: LoginComponent}, 
  {path: 'logout' , component: LogoutComponent}, 
  {path: 'addbook' , component: AddBookComponent}, 
  {path: 'student' , component: StudentComponent}, 
  {path: 'report' , component: ReportstudentComponent}, 
  {path: 'show' , component: ShowallbooksComponent}, 
  {path: 'help' , component: HelpComponent}, 
  {path: 'header', component: HeaderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DisplaybooksComponent,
    AddBookComponent,
    ReportstudentComponent,
    ReportstudentComponent,
    HomeComponent,
    HelpComponent,
    LogoutComponent,
    StudentComponent,
    LoginheaderComponent,
    ShowallbooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot(
      appRoutes// <-- debugging purposes only
    )
  ],
  providers: [
    {provide:ErrorHandler, useClass: ErrorHandler}, 
    subservice,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router : Router){}
}




