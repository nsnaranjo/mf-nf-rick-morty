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
  notifications$: Observable<NotificationModel[]> = this.store.select(selectAllNotifications);

  constructor(private store: Store, private notificationService: NotificationService) {}

  removeNotification(id: string) {
    this.notificationService.removeNotification(id)
  }
}
