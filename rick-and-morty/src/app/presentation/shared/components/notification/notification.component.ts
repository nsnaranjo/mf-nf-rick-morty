// Ng modules
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx and RxJs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Models (Domain)
import { NotificationModel } from '../../../../domain/models';

// State (application)
import { selectAllNotifications } from '../../../../application/state';

// Services (Infraestructure)
import { NotificationService } from '../../../../infraestructure/services';

// Directives (Presentation)
import { IconNotificationDirective, TypeNotificationDirective } from '..';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, TypeNotificationDirective, IconNotificationDirective],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  // Observable que se suscribe al selector que devuelve todas las notificaciones.
  // El selector selectAllNotifications se encarga de obtener la lista de notificaciones
  // desde el estado de la aplicacion. La lista de notificaciones es un array de
  // objetos NotificationModel que contiene la informacion de cada notificacion.
  notifications$: Observable<NotificationModel[]> = this.store.select(selectAllNotifications);
  
  constructor(private store: Store, private notificationService: NotificationService) {}

  /**
   * Elimina la notificación con el id especificado.
   * @param id id de la notificacion a eliminar.
   */
  removeNotification(id: string) {
    this.notificationService.removeNotification(id)
  }
}
