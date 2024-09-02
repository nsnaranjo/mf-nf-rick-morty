import { Directive, Input, ViewContainerRef } from '@angular/core';

interface IconMap {
  [key: string]: string
}

@Directive({
  selector: '[appIconNotification]',
  standalone: true
})
export class IconNotificationDirective {

  private iconMap: IconMap = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: '❕'
  }

  @Input() set appIconNotification(type: string) {
    this.viewContainer.clear()

    const icon = this.iconMap[type]

    if (icon) {
      this.viewContainer.clear();
      const textNode = document.createTextNode(icon);
      this.viewContainer.element.nativeElement.appendChild(textNode);
    }
  }

  constructor(private viewContainer: ViewContainerRef) { }
}
