import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; //angular matrial
import {MatCardModule} from '@angular/material/card'; //angular matrial
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    
    MatSlideToggleModule,MatCardModule, MatButtonModule, //angular matrial
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
