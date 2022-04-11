import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  change3D(selected3D: number) {
    switch (selected3D) {
      case 1:
        this.router.navigate(['cube'], { relativeTo: this.route });
        break;
      case 2:
        this.router.navigate(['spincube'], { relativeTo: this.route });
        break;
      case 3:
        this.router.navigate(['cubestate'], { relativeTo: this.route });
        break;
      case 4:
        this.router.navigate(['twospin'], { relativeTo: this.route });
        break;
      case 5:
        this.router.navigate(['cubelight'], { relativeTo: this.route });
        break;
      case 6:
        this.router.navigate(['cubespotlight'], { relativeTo: this.route });
        break;
      case 7:
        this.router.navigate(['cameracontrol'], { relativeTo: this.route });
        break;
      case 8:
        this.router.navigate(['kinematics'], { relativeTo: this.route });
        break;
      case 9:
        this.router.navigate(['marmi-rxstate'], { relativeTo: this.route });
        break;
      case 10:
        this.router.navigate(['rxstate'], { relativeTo: this.route });
        break;
      case 11:
        this.router.navigate(['rxstate-presenter'], { relativeTo: this.route });
        break;

      //cannon
      case 50:
        this.router.navigate(['cannon-start'], { relativeTo: this.route });
        break;
      case 51:
        this.router.navigate(['cannon-single'], { relativeTo: this.route });
        break;
        case 52:
          this.router.navigate(['cannon-kinematic'], { relativeTo: this.route });
          break;
    }

  }
  goback() {
    this.router.navigate(['/beforelogin'], { relativeTo: this.route });
  }
}
