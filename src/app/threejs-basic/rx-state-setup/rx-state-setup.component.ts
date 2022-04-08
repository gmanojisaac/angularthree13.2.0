import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { ListServerItem } from '../receipe';
import {ListService} from '../../service/list.service';

//👇 1- import RxState
import { RxState } from '@rx-angular/state';
//👇 2- define a component state
interface ComponentState {
  refreshInterval: number;
  list: DemoBasicsItem[];
  listExpanded: boolean;
}

export interface DemoBasicsItem {
  id: string;
  name: string;
}

//👇 The  initial base-state is normally derived from somewhere else automatically but could also get specified statically here.
const initComponentState = {
  refreshInterval: 10000,
  listExpanded: false,
  list: []
};


@Component({
  selector: 'app-rx-state-setup',
  templateUrl: './rx-state-setup.component.html',
  styleUrls: ['./rx-state-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxStateSetupComponent implements OnInit, OnDestroy {
  //👇 Set up the model property of the component
  intervalSubscription = new Subscription();
  listExpandedChanges = new Subject<boolean>();
  storeList$ = this.listService.list$.pipe(
    map(this.parseListItems),
    startWith(initComponentState.list)
  );

  _refreshInterval: number = initComponentState.refreshInterval;
  @Input()
  set refreshInterval(refreshInterval: number) {
    if (refreshInterval > 4000) {
      this._refreshInterval = refreshInterval;
      this.resetRefreshTick();
    }
  }

  listExpanded: boolean = initComponentState.listExpanded;
  @Output()
  listExpandedChange = this.listExpandedChanges;
  constructor(
    private listService: ListService
  ) {
    //👇 Always call super() first in the constructor

    //👇 Call set() to initialize the state

  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.resetRefreshTick();
  }

  resetRefreshTick() {
    this.intervalSubscription.unsubscribe();
    this.intervalSubscription = interval(this._refreshInterval)
      .pipe(tap((_) => this.listService.refetchList()))
      .subscribe();
  }

  onRefreshClicks(event) {
    this.listService.refetchList();
  }

  parseListItems(l: ListServerItem[]): DemoBasicsItem[] {
    return l.map(({ id, name }) => ({ id, name }));
  }
}
