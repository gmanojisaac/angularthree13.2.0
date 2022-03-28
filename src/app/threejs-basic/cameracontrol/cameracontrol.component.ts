import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cameracontrol',
  templateUrl: './cameracontrol.component.html',
  styleUrls: ['./cameracontrol.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CameracontrolComponent implements OnInit  {

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
