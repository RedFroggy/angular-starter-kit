import { AbstractControlValueAccessor } from './abstract-control-value-accessor';

class DefaultControlComponent extends AbstractControlValueAccessor<string> {}

describe('AbstractControlValueAccessor unit tests', () => {
  const controlComponent: DefaultControlComponent = new DefaultControlComponent();

  it('should set value', (done) => {
    controlComponent.registerOnChange((value) => {
      expect(value).toBe('michael.desigaud@redfroggy.fr');
      done();
    });
    controlComponent.value = 'michael.desigaud@redfroggy.fr';
    expect(controlComponent.value).toBe('michael.desigaud@redfroggy.fr');
  });

  it('should set value only if value has changed', () => {
    controlComponent.writeValue(controlComponent.value);
    controlComponent.value = 'michael.desigaud@redfroggy.fr';
    expect(controlComponent.value).toBe('michael.desigaud@redfroggy.fr');
  });

  it('should set value only if changed events are defined', () => {
    (controlComponent as any).changed = null;
    controlComponent.value = 'michael.desigaud@redfroggy.fr';
  });

  it('should set value only if changed events are available', () => {
    (controlComponent as any).changed = null;
    controlComponent.registerOnChange((value) => {
      expect(value).toBe('michael.desigaud@redfroggy.fr');
    });
  });

  it('should registed on touched', () => {
    (controlComponent as any).changed = null;
    controlComponent.registerOnTouched(() => {});

    (controlComponent as any).touched = null;
    controlComponent.registerOnTouched(() => {});
  });
});
