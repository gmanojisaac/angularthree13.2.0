import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable,switchMap } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { merge,  timer } from 'rxjs';
import { ListService, } from '../../service/list.service';
import { ListServerItem } from '../../threejs-basic/receipe';

export interface ComponentState {
  refreshInterval: number;
  list: DemoBasicsItem[];
  listExpanded: boolean;
}
export interface DemoBasicsItem {
  id: string;
  name: string;
}

const initComponentState = {
  refreshInterval: 10000,
  listExpanded: false,
  list: [],
};



@Injectable()
export class Presenter extends RxState<ComponentState> {
  refreshClicks = new Subject<Event>();
  listExpandedChanges = new Subject<boolean>();

  vm$ = this.select();
  // 👇 user interaction is collected in presenter
  refreshListTrigger$ = merge(
    this.refreshClicks,
    this.select(
      map((s) => s.refreshInterval),
      switchMap((ms) => timer(0, ms))
    )
  )

  constructor() {
    super();
    this.set(initComponentState);
      // 👇 user open close data is stored in store
    this.connect(
      this.listExpandedChanges.pipe(map((b) => ({ listExpanded: b })))
    );
  }

}


@Injectable()
export class Adapter extends RxState<Pick<ComponentState, 'list'>> {

  list$ = this.select('list');
  constructor(
    private listService: ListService
  ) {
    super();
      // 👇 store list is populated using service
    this.connect('list', this.listService.list$
      .pipe(map(this.parseListItems))
    );
  }

  refresh = () => {
    this.listService.refetchList()
  }

  parseListItems(l: ListServerItem[]): DemoBasicsItem[] {
    return l.map(({ id, name }) => ({ id, name }));
  }
}

@Component({
  selector: 'app-rxstate-presenter',
  templateUrl: './rxstate-presenter.component.html',
  styleUrls: ['./rxstate-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxstatePresenterComponent {
  refreshIntervalInput$ = new Subject<Event>();
  refreshInterval$ = this.refreshIntervalInput$.pipe(
    map((e: any) => e.target.value)
  );
}


export interface DemoBasicsItem {
  id: string;
  name: string;
}

@Component({
  selector: 'rxa-presenter-pattern-solution',
  template: `
    <h3>Presenter Pattern</h3>
    <mat-expansion-panel
      *ngIf="ps.vm$ | async as m"
      (expandedChange)="ps.listExpandedChanges.next($event)"
      [expanded]="m.listExpanded"
    >
      <mat-expansion-panel-header>
        <mat-panel-title>
          User Name
        </mat-panel-title>
        <mat-panel-description>
          <span *ngIf="!m.listExpanded"
          >{{ m.list.length }} Repositories Updated every:
            {{ m.refreshInterval }} ms</span
          >
          <span *ngIf="m.listExpanded">{{ m.list.length }}</span>
        </mat-panel-description>
      </mat-expansion-panel-header>
      <button
        mat-raised-button
        color="primary"
        (click)="ps.refreshClicks.next($event)"
      >
        Refresh List
      </button>
      <div *ngIf="m.list.length; else noList">
        <mat-list>
          <mat-list-item *ngFor="let item of m.list">
            {{ item.name }}
          </mat-list-item>
        </mat-list>
      </div>
      <ng-template #noList>
        <mat-card>No list given!</mat-card>
      </ng-template>
    </mat-expansion-panel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Presenter, Adapter]
})
export class PresenterPatternSolution extends RxState<any> {

  @Input()
  set refreshInterval(refreshInterval$: Observable<number>) {
    this.ps.connect('refreshInterval', refreshInterval$.pipe(
      filter(i => null? i > 100: false)
    ));
  }

  constructor(
    public ps: Presenter,
    public ad: Adapter
  ) {
    super();
    // 👇 update the store
    this.ps.connect('list', this.ad.list$);
    // 👇 side effects is managed here
    this.hold(this.ps.refreshListTrigger$, this.ad.refresh);
  }
}
