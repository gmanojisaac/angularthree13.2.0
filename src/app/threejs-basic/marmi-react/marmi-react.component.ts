import { Component, Input } from '@angular/core';
import {
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  ReplaySubject,
  shareReplay,
  takeUntil,
  distinctUntilChanged
} from 'rxjs';
import { UserdataService } from '../../service/userdata.service';
import { Recipe } from '../receipe';

@Component({
  selector: 'app-marmi-react',
  templateUrl: './marmi-react.component.html',
  styleUrls: ['./marmi-react.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MarmiReactComponent implements OnDestroy {
  destroyed$ = new ReplaySubject(1);

  recipeIndex$ = new BehaviorSubject(0);
  distinchrecipeIndex$ = this.recipeIndex$.pipe(distinctUntilChanged());
  recipes$ = this._recipeRepository
    .getRecipes()
    .pipe(takeUntil(this.destroyed$), shareReplay(1));

  recipe$ = combineLatest([this.recipes$, this.distinchrecipeIndex$]).pipe(
    map(([recipes, index]) => recipes?.[index])
  );
  hasPrevious$ = this.distinchrecipeIndex$.pipe(map((index) => index > 0));
  hasNext$ = combineLatest([this.recipes$, this.distinchrecipeIndex$]).pipe(
    map(([recipes, index]) => {
      console.count('compute hasNext...');
      return index + 1 < recipes.length;
    }),
    shareReplay(1)
  );

  constructor(private _recipeRepository: UserdataService) {}

  ngOnDestroy() {
    this.destroyed$.next(undefined);
    this.destroyed$.complete();
  }

  next() {
    this.recipeIndex$.next(this.recipeIndex$.value + 1);
  }

  previous() {
    this.recipeIndex$.next(this.recipeIndex$.value - 1);
  }

  reset() {
    this.recipeIndex$.next(0);
  }
}
