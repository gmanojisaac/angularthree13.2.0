import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-before-login',
  templateUrl: './before-login.component.html',
  styleUrls: ['./before-login.component.scss']
})
export class BeforeLoginComponent implements OnInit, OnDestroy {
  destroyed = new Subject<void>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  flexwidth = "100vw";

  constructor(breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private router: Router) {

    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          console.log(this.displayNameMap.get(query));
          switch (this.displayNameMap.get(query)) {
            case 'XSmall':
              this.flexwidth = "100vw";
              break;
            default:
              this.flexwidth = "100vw";
              break;

          };
        }
      }
    });


  }
  change3D(selected3D: number) {
    switch (selected3D) {
      case 1:
        this.router.navigate(['basicthree']);
        break;
      case 2:
        this.router.navigate(['items'], { relativeTo: this.route });
        break;
      case 3:
        this.router.navigate(['items'], { relativeTo: this.route });
        break;
      case 4:
        this.router.navigate(['items'], { relativeTo: this.route });
        break;
      case 5:
        this.router.navigate(['stories']);
        break;
    }

  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
