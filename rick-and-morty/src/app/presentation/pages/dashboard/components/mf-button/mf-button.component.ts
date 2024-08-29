import { Component, Input } from '@angular/core';

import { MButtonProps } from '../../../../../domain/models/button-config.interface';

@Component({
  selector: 'app-mf-button',
  standalone: true,
  imports: [],
  templateUrl: './mf-button.component.html',
  styleUrl: './mf-button.component.scss'
})
export class MfButtonComponent {
  @Input() props: MButtonProps;

  constructor() {
    this.props = {
      imagePath: '',
      text: '',
      onClickAction: () => {}
    }
  }

  handleClick(): void {
    if (this.props.onClickAction) {
      this.props.onClickAction();
    }
  }
}
