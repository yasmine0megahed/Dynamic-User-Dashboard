import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//component start
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//component end
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CardComponent
    // ,MatSlideToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user_dashboard';
}
