import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RxState, select, selectSlice } from '@rx-angular/state';
import { map } from 'rxjs';
import { UserdataService } from '../../service/userdata.service';
import { Recipe } from '../receipe';

export interface State {
  recipes: Recipe[];
  recipeIndex: number;
}

@Component({
  selector: 'app-marmi-rxstate',
  templateUrl: './marmi-rxstate.component.html',
  styleUrls: ['./marmi-rxstate.component.scss'],  
  providers: [RxState],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarmiRxstateComponent {
  // 👇 Using select/selectslice create observables for using in template for display
  recipe$ = this._state.select(
    selectSlice(['recipes', 'recipeIndex']),
    map(({ recipes, recipeIndex }) => recipes?.[recipeIndex])
  );
  // 👇 create boolean observable for use in template
  hasPrevious$ = this._state
    .select('recipeIndex')
    .pipe(select(map((index) => index > 0)));

  // 👇 create boolean observable for use in template
  hasNext$ = this._state.select(
    selectSlice(['recipes', 'recipeIndex']),
    map(({ recipes, recipeIndex }) => {
      console.count('compute hasNext...');
      return recipeIndex + 1 < recipes.length;
    })
  );
  // 👇 create store in template 
  recipes$ = this._state.select('recipes');

  constructor(
    private _recipeRepository: UserdataService,
    private _state: RxState<State>
  ) {
    // 👇 set command initializes the store state
    this._state.set({ recipeIndex: 0 });
    // 👇 Data from template/service is connected to the store state recepes
    this._state.connect('recipes', this._recipeRepository.getRecipes());
  }

  // 👇 set command directly interacts with store for no side effect
  next() {
    this._state.set(({ recipeIndex }) => ({ recipeIndex: recipeIndex + 1 }));
  }

  previous() {
    this._state.set(({ recipeIndex }) => ({ recipeIndex: recipeIndex - 1 }));
  }

  reset() {
    this._state.set({ recipeIndex: 0 });
  }
}

;

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
    </div>`,
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
