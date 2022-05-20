import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { SandboxesDefined } from './sandboxes';
import { NgtCoreModule } from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtGroupModule } from '@angular-three/core/group';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import { NgtMeshBasicMaterialModule } from '@angular-three/core/materials';


platformBrowserDynamic().bootstrapModule(PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [NgtCoreModule,NgtMeshModule,NgtGroupModule,NgtBoxGeometryModule,NgtMeshBasicMaterialModule],
    sandboxesDefined: SandboxesDefined
  }))
  .catch(err => console.error(err));
