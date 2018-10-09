import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = '';
  province = ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape", "Other"];
  hostel = ["Caput", "De Wilgers", "Excelsior", "Hombre", "Laureus", "Over de Voor", "Patria", "Ratau", "Veritas", "Eikenhof", "Heide", "Karlien", "Kasteel", "Klawerhof", "Minjonet", "Oosterhof", "Republiek", "Vergeet-My-Nie", "Wag-n-Bietjie", "Wanda", "Oppirif", "Private"];

 onNavigate(feature: string){
this.loadedFeature = feature;
 }
}
