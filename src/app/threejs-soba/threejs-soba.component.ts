import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable,Subject, Subscription } from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {takeUntil} from 'rxjs/operators';
 
@Component({
  selector: 'app-threejs-soba',
  templateUrl: './threejs-soba.component.html',
  styleUrls: ['./threejs-soba.component.scss']
})
export class ThreejsSobaComponent implements OnInit,OnDestroy {
  destroyed = new Subject<void>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  flexwidth="100vw";

  constructor(breakpointObserver: BreakpointObserver) {

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
            switch(this.displayNameMap.get(query)){
              case 'XSmall':
                 this.flexwidth="100vw";
                break;
                default:
                  this.flexwidth="100vw";
                  break;
 
            };
          }
        }
    });


   }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}

