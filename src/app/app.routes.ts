import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { 
        path:'',
         component : CardComponent,
        //  title:'Home page'
        },
         
     
    {
        path:'details/:id',
        component:UsersComponent,
        // title:'login page'
    }

];
