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
        this.router.navigate(['marmi-im'], { relativeTo: this.route });
        break;
      case 10:
        this.router.navigate(['marmi-react'], { relativeTo: this.route });
        break;

      case 11:
        this.router.navigate(['rxstate'], { relativeTo: this.route });
        break;

        case 15:
          this.router.navigate(['rxstate-setup'], { relativeTo: this.route });
          break;
          case 16:
            this.router.navigate(['rxstate-input'], { relativeTo: this.route });
            break;
            case 17:
              this.router.navigate(['rxstate-inputsol'], { relativeTo: this.route });
              break;
    }

  }
  goback() {
    this.router.navigate(['/beforelogin'], { relativeTo: this.route });
  }
}
