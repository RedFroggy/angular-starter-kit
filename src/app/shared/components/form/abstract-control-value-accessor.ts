import { ControlValueAccessor } from '@angular/forms';

/**
 * Abstract class to extend if you want to add the [(ngModel)] directive on your component
 */
export abstract class AbstractControlValueAccessor<T> implements ControlValueAccessor {
  protected innerValue: T;
  private changed = [];
  private touched = [];

  get value(): T {
    return this.innerValue;
  }

  set value(value: T) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach((f: (v: T) => object) => f(value));
    }
  }

  writeValue(value: T): void {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: T) => void): void {
    if (this.changed) {
      this.changed.push(fn);
    }
  }

  registerOnTouched(fn: () => void): void {
    if (this.touched) {
      this.touched.push(fn);
    }
  }
}
