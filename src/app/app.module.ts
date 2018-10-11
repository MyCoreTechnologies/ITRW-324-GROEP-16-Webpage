import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './Server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DisplaybooksComponent } from './displaybooks/displaybooks.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReportstudentComponent } from './reportstudent/reportstudent.component';
import { DropdownDirective } from './Shared/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes,Router } from '@angular/router';

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    AdvertisementsComponent,
    RequestComponent,
    LoginComponent,
    RegisterComponent,
    DisplaybooksComponent,
    AddBookComponent,
    ReportstudentComponent,
    DropdownDirective,
    ReportstudentComponent,
    HomeComponent,
    HelpComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router : Router){}

  goHome(){
    this.router.navigate(['home']);
  }
  goLogout(){
    this.router.navigate(['/logout']);
  }
}

const routes : Routes = [
{path: 'home', component: HomeComponent}
];


