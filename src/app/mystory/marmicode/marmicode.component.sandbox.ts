import { sandboxOf } from 'angular-playground';
import { MarmicodeComponent } from './marmicode.component';

export default sandboxOf(MarmicodeComponent)
  .add('default', {
    template: `<app-marmicode></app-marmicode>`
  });
