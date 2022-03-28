import { Component, VERSION, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cubestate',
  templateUrl: './cubestate.component.html',
  styleUrls: ['./cubestate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CubestateComponent implements OnInit {
  @Input() position?: NgtVector3; // imported from @angular-three/core
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  hover = false;
  active = false;

  onAnimate(mesh: THREE.Object3D) {
    mesh.rotation.x = mesh.rotation.y += 0.01;
  }
  goback() {
    this.router.navigate(['/basicthree'], { relativeTo: this.route });
  }
}
