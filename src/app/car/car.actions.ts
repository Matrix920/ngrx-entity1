import { createAction, props } from '@ngrx/store';
import { Car } from './car.reducer';

// for our example, we'll only populate cars in the store on app init
export const appInit = createAction('[App] Init', props<{ cars: Car[] }>());


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/