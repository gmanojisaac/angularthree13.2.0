import { Component, OnInit } from '@angular/core';
// 1- import RxState
import { RxState } from '@rx-angular/state';

@Component({
  selector: 'app-rx-state',
  templateUrl: './rx-state.component.html',
  styleUrls: ['./rx-state.component.scss'],
  providers: [RxState]
})
export class RxStateComponent implements OnInit {
  state$ = this.state.select();
  constructor(private state: RxState<{ foo: string }>) { }

  ngOnInit(): void {
  }

}
