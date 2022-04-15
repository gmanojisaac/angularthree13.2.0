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
        this.router.navigate(['abs-billboard'], { relativeTo: this.route });
        break;
      case 2:
        this.router.navigate(['abs-gizmo'], { relativeTo: this.route });
        break;
      case 3:
        this.router.navigate(['abs-gradient'], { relativeTo: this.route });
        break;
      case 4:
        this.router.navigate(['abs-line'], { relativeTo: this.route });
        break;
      case 5:
        this.router.navigate(['abs-text'], { relativeTo: this.route });
        break;
      case 6:
        this.router.navigate(['stage-shake'], { relativeTo: this.route });
        break;
      case 7:
        this.router.navigate(['stage-center'], { relativeTo: this.route });
        break;
      case 8:
        this.router.navigate(['stage-shadow'], { relativeTo: this.route });
        break;
      case 9:
        this.router.navigate(['stage-sky'], { relativeTo: this.route });
        break;
      case 10:
        this.router.navigate(['stage-spot'], { relativeTo: this.route });
        break;
      case 11:
        this.router.navigate(['stage-stage'], { relativeTo: this.route });
        break;
      case 12:
        this.router.navigate(['stage-stars'], { relativeTo: this.route });
        break;
      case 13:
        this.router.navigate(['cam-othro'], { relativeTo: this.route });
        break;
      case 14:
        this.router.navigate(['control-transform'], { relativeTo: this.route });
        break;

      case 15:
        this.router.navigate(['control-lock'], { relativeTo: this.route });
        break;
      case 16:
        this.router.navigate(['perf-detailed'], { relativeTo: this.route });
        break;
      case 17:
        this.router.navigate(['misc-html'], { relativeTo: this.route });
        break;
        case 18:
          this.router.navigate(['stage-env'], { relativeTo: this.route });
          break;
    }

  }
  goback() {
    this.router.navigate(['/beforelogin'], { relativeTo: this.route });
  }
}
