import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//component start
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
//component end
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service'; 

import * as AOS from 'aos'; //aos library


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UsersService],
})
export class AppComponent {
  title = 'user_dashboard';
  ngOnInit(){
    AOS.init(); //aos library
   }
}
