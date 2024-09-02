import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { v4 as uuidv4 } from 'uuid';
import { NotificationModel } from '../../../domain/models';
import { addNotification, removeNotification } from '../../../application/state';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private store: Store) {}

  createNotification(type: NotificationModel['type'], message: string) {
    const notification: NotificationModel = {
      id: uuidv4(),
      type,
      message,
      timestamp: new Date()
    }

    this.store.dispatch(addNotification({ notification }))
  }

  removeNotification(id: string) {
    this.store.dispatch(removeNotification({ id }))
  }
}
