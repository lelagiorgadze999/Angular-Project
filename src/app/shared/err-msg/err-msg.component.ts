import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-err-msg',
  template: `<p class="message">{{ message }}</p>`,
  styles: [
    `
      .message {
        color: #b30404;
        font-size: 14px;
        margin-bottom: 10px;
      }
    `,
  ],
})
export class ErrMsgComponent {
  @Input() public message: any;
}
