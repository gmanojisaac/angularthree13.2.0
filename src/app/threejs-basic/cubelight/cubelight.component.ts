import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cubelight',
  templateUrl: './cubelight.component.html',
  styleUrls: ['./cubelight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubelightComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  hover = false;
  active = false;

  onAnimate(mesh: THREE.Object3D) {
    mesh.rotation.x = mesh.rotation.y += 0.01;
  }
  goback(){
    this.router.navigate(['/basicthree'], { relativeTo: this.route });
  }
}
