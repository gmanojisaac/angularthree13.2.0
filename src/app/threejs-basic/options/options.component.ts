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

    }

  }
  goback() {
    this.router.navigate(['/beforelogin'], { relativeTo: this.route });
  }
}
