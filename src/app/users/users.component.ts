import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//get data from url
import { UsersService } from '../services/users.service';//api service
import { forkJoin } from 'rxjs'; //to join 2 pages
import { map } from 'rxjs/operators';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
//variables
userId:any; //data from url
user:any; //user details
//constractor
constructor(
  private activatedRoute: ActivatedRoute, //get data from url
  private userService: UsersService, //api service
){}
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']; //get data from url
    console.log(this.userId)
    const pageNumbers = [1, 2];
    forkJoin(pageNumbers.map((page) => this.userService.listUsers(page)))
      .pipe(
        map((responses: any[]) => {
          return responses.map((response) => response.data).flat(); //Returns a new array with all sub-array elements
        }),
        map((users: any[]) => {
          return users.find(user => user.id === parseInt(this.userId)); // Find the user with matching ID
        })
      )
      .subscribe({
        next: (responses: any) => {
          console.log('API responses:', responses);
          this.user = responses; //user data
        },
        error: (error) => {
          console.error('Error fetching users:', error);
        },
      });
  }

}
