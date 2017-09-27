import { Component } from '@angular/core';
import { CochesService } from 'app/coches.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-coches',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CochesService, HttpModule]

})
export class AppComponent {
  title = 'Angular Coches';
}
