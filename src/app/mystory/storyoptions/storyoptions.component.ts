import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-storyoptions',
  templateUrl: './storyoptions.component.html',
  styleUrls: ['./storyoptions.component.scss']
})
export class StoryoptionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  change3D(selected3D: number) {
    switch (selected3D) {
      case 1:
        this.router.navigate(['marmicode'], { relativeTo: this.route });
        break;
      case 2:
        this.router.navigate(['ngrx'], { relativeTo: this.route });
        break;
        case 3:
          this.router.navigate(['ngrx'], { relativeTo: this.route });
          break;
          case 4:
            this.router.navigate(['ngrx'], { relativeTo: this.route });
            break;
    }

  }
  goback() {
    this.router.navigate(['/beforelogin'], { relativeTo: this.route });
  }
}
