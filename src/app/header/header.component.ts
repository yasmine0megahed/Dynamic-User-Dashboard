import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { forkJoin } from 'rxjs'; //to join 2 pages
import { map } from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router'; // navigate
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  //variables
  searchText: any;
  users: any;
  userId: any;
  //constractor
  constructor(
    private userService: UsersService, //api service
    private router: Router // navigate
  ) {}
  ngOnInit() {
    const pageNumbers = [1, 2];
    forkJoin(pageNumbers.map((page) => this.userService.listUsers(page)))
      .pipe(
        map((responses?: any[]) => {
          return responses?.map((response) => response.data).flat(); //Returns a new array with all sub-array elements
        })
      )
      .subscribe({
        next: (responses?: any) => {
          this.users = responses; //array of user data
        },
        error: (error) => {
          console.error('Error fetching users:', error);
        },
      });
  }
  //functions
  onKeyup(): void {
    const element = document.getElementsByClassName('search-result')[0];
    const searchId = this.searchText.trim(); // Get the search text and remove extra spaces
    const foundUser = this.users.find((user: any) => user.id == searchId);
    if (foundUser) {
      element.id = 'edit-search1';
      element.innerHTML = `${foundUser.first_name} ${foundUser.last_name}`;
      this.userId = foundUser.id;
    } else {
      element.id = 'edit-search2';
      element.textContent = 'User not found';
    }
    if (this.searchText == '') {
      element.textContent = '';
      element.removeAttribute('id');
    }
  }
  search() {
    const currentUrl = this.router.routerState.snapshot.url.substring(0, 9);
    if (currentUrl == '/details/') {
      this.router.navigate([`../details`, this.userId]).then(() => {
        location.reload(); // navigate
      });
    } else {
      this.router.navigate([`../details`, this.userId]);
    }
  }
}
