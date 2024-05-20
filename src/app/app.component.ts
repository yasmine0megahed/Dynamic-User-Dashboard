import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClientModule, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { UsersService } from './services/users.service'; 

import * as AOS from 'aos'; //aos library

provideHttpClient(withInterceptorsFromDi())
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UsersService, ],
    //  provideHttpClient(withFetch: any())
})
export class AppComponent {
  title = 'user_dashboard';
  ngOnInit(){
    AOS.init(); //aos library
   }

}
