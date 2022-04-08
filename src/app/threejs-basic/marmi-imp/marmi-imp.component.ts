
import { UserdataService } from '../../service/userdata.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { Recipe } from '../receipe';
import {
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';



@Component({
  selector: 'app-marmi-imp',
  templateUrl: './marmi-imp.component.html',
  styleUrls: ['./marmi-imp.component.scss']
})
export class MarmiImpComponent implements OnInit, OnDestroy {
  destroyed$ = new ReplaySubject(1);
  recipeIndex = 0;
  recipes?: Recipe[];

  constructor(private _recipeRepository: UserdataService) {}

  ngOnInit() {
    this._recipeRepository
      .getRecipes()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((recipes) => (this.recipes = recipes));
  }

  ngOnDestroy() {
    this.destroyed$.next(undefined);
    this.destroyed$.complete();
  }

  next() {
    this.recipeIndex++;
  }

  previous() {
    this.recipeIndex--;
  }

  reset() {
    this.recipeIndex = 0;
  }

  getRecipe() {
    return this.recipes?.[this.recipeIndex];
  }

  hasPrevious() {
    return this.recipeIndex > 0;
  }

  hasNext() {
    console.count('compute hasNext...');
    return this.recipeIndex + 1 < (this.recipes?.length ?? 0);
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wm-recipe-preview',
  template: `<wm-card *ngIf="recipe" [pictureUri]="recipe.pictureUri">
    <h2 data-role="recipe-name">{{ recipe.name }}</h2>
    <ng-content></ng-content>
  </wm-card>`,
  styles: [
    `
      h2 {
        font-size: 1.2em;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `,
  ],
})
export class RecipePreviewComponent {
  @Input() recipe?: Recipe;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wm-card',
  template: ` <img *ngIf="pictureUri" class="picture" [src]="pictureUri" />
    <div class="content">
      <ng-content></ng-content>
    </div>
    `,
  styles: [
    `
      :host {
        display: block;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        text-align: left;
        width: 300px;
      }
      .picture {
        object-fit: cover;
        height: 300px;
        width: 100%;
      }
      .content {
        margin: 10px;
      }
    `,
  ],
})
export class CardComponent {
  @Input() pictureUri?: string;
}


