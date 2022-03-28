import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgtVector3 } from '@angular-three/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spincube',
  templateUrl: './spincube.component.html',
  styleUrls: ['./spincube.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpincubeComponent implements OnInit {
  @Input() position?: NgtVector3; // imported from @angular-three/core

  hover = false;
  active = false;

  onAnimate(mesh: THREE.Object3D) {
    mesh.rotation.x = mesh.rotation.y += 0.01;
  }
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  goback() {
    this.router.navigate(['/basicthree'], { relativeTo: this.route });
  }
}
