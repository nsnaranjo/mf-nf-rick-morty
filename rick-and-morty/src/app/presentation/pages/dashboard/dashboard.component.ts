import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MfButtonComponent } from "./components/mf-button/mf-button.component";

import { loadRemoteModule } from '@angular-architects/native-federation';
import { ButtonPropsModel } from '../../../domain/models';
import { NotificationService } from '../../../infraestructure/services';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MfButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @ViewChild('remoteApp', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  mfButtons: ButtonPropsModel[] = [
    {
      imagePath: './assets/characters.jpg',
      text: 'Personajes',
      onClickAction: () => { this.loadCharacters(); }
    },
    // {
    //   imagePath: './assets/episodes.jpg',
    //   text: 'Episodios',
    //   onClickAction: () => {  }
    // },
    // {
    //   imagePath: './assets/locations.jpg',
    //   text: 'Ubicaciones',
    //   onClickAction: () => { console.log('Microfronend Ubicaciones'); }
    // }
  ]

  constructor(private notificationService: NotificationService) {}

  async loadCharacters() {
    try {
      const m = await loadRemoteModule('mf-rm-characters', './CharactersTable');

      this.viewContainer.createComponent(m.CharactersTableComponent);
    } catch (error) {
      console.error('Error al cargar el módulo remoto:', error);

      this.notificationService.createNotification('error', `Error al cargar el módulo remoto`);
    }
  }
}
