import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div class="list-item">
      <button type="button" [ngClass]="classes" (click)="clicked.emit($event)">{{ label }}</button>
    </div>
  `,
})
export class ButtonComponent {
  @Input() label = 'default label';
  @Input() primary = false;
  @Input() outlined = false;
  @Input() colorClass: 'info' | 'success' | 'danger' | 'warning' | 'light';
  @Input() size: 'sm' | 'xs' | 'lg' = 'xs';

  @Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'btn-primary' : 'btn-secondary';
    const color = this.colorClass ? `btn-${this.colorClass}` : null;
    const outlinedMode = this.outlined ? `btn-outline-${this.colorClass}` : null;

    const classes = ['btn', `btn-${this.size}`];
    if (outlinedMode) {
      classes.push(outlinedMode);
    } else if (color) {
      classes.push(color);
    } else if (mode) {
      classes.push(mode);
    }

    return classes.filter((className) => Boolean(className));
  }
}
