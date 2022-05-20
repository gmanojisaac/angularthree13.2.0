import { sandboxOf } from 'angular-playground';
import { NgrxComponent } from './ngrx.component';

export default sandboxOf(NgrxComponent)
  .add('default', {
    template: `<app-ngrx></app-ngrx>`
  });
