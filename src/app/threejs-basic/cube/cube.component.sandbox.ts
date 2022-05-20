import { sandboxOf } from 'angular-playground';
import { CubeComponent } from './cube.component';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

class MockLoadDataService {
  navigate() {
      return of({firstName: 'John', lastName: 'Smith'});
  }
}

class MockRouterDataService {
  navigate() {
      return of({firstName: 'John', lastName: 'Smith'});
  }
}
export default sandboxOf(CubeComponent, {
  providers: [{provide: ActivatedRoute, useClass: MockLoadDataService},
    {provide: Router, useClass: MockRouterDataService}
    ]
})
  .add('default', {
    template: `<app-cube></app-cube>`
  });
