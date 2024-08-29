import { Component } from '@angular/core';
import { MfButtonComponent } from "./components/mf-button/mf-button.component";
import { MButtonProps } from '../../../domain/models/button-config.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MfButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  mfButtons: MButtonProps[] = [
    {
      imagePath: './assets/characters.jpg',
      text: 'Personajes',
      onClickAction: () => { console.log('Microfronend Personajes'); }
    },
    {
      imagePath: './assets/episodes.jpg',
      text: 'Episodios',
      onClickAction: () => { console.log('Microfronend Episodios'); }
    },
    {
      imagePath: './assets/locations.jpg',
      text: 'Ubicaciones',
      onClickAction: () => { console.log('Microfronend Ubicaciones'); }
    }
  ]
}
