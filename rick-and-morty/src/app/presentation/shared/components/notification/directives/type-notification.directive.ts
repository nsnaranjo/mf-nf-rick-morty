import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTypeNotification]',
  standalone: true
})
export class TypeNotificationDirective {
  private _notificationType: string = '';
  
  @Input() set appTypeNotification(notificationType: string) {
    this._notificationType = notificationType;
  }

  @HostBinding('class') get className() {
    switch (this._notificationType) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
      default:
        return '';
    }
  }

  constructor() { }
}
