import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; //angular matrial
import { MatCardModule } from '@angular/material/card'; //angular matrial
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UsersService } from '../services/users.service';
import { forkJoin } from 'rxjs'; //to join 2 pages
import { map } from 'rxjs/operators';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule, //angular matrial
    HeaderComponent, //navbar component
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  //variables
  users: any;
  //constractor
  constructor(private userService: UsersService) {}

  ngOnInit() {
    const pageNumbers = [1, 2];
    forkJoin(pageNumbers.map((page) => this.userService.listUsers(page)))
      .pipe(
        map((responses: any[]) => {
          return responses.map((response) => response.data).flat(); //Returns a new array with all sub-array elements
        })
      )
      .subscribe({
        next: (responses: any) => {
          console.log('API responses:', responses);
          this.users = responses; //array of user data
        },
        error: (error) => {
          console.error('Error fetching users:', error);
        },
      });
  }

  //functions
  viewUser(user: any) {
    console.log(user);
  }
}
