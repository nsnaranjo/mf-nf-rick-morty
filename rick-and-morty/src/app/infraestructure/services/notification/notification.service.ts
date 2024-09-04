// Core
import { Injectable } from '@angular/core';

// NgRx
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

// Actions
import { addNotification, removeNotification } from '../../../application/state';

// Models
import { NotificationModel } from '../../../domain/models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private store: Store) {}

  /**
   * Crea una nueva notificación y envia la notificación al store.
   *
   * La notificacion es creada con el tipo y el mensaje dados.
   * 
   * La notificacion es disparada al store con la accion addNotification.
   * 
   * @param type Tipo de la notificacion.
   * @param message Mensaje de la notificacion.
   */
  createNotification(type: NotificationModel['type'], message: string) {
    const notification: NotificationModel = {
      id: uuidv4(),
      type,
      message,
      timestamp: new Date()
    }

    this.store.dispatch(addNotification({ notification }))
  }

  /**
   * Elimina la notificación con el id especificado.
   * 
   * La notificación es removida del estado de la aplicación.
   * 
   * @param id id de la notificación a eliminar.
   */
  removeNotification(id: string) {
    this.store.dispatch(removeNotification({ id }))
  }
}
