import { Component } from '@angular/core';
import { NavbarComponent} from './components/navbar/navbar.component';
import { SearchComponent} from './components/search/search.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
