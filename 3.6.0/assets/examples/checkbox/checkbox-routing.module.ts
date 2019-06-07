import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { CheckboxDisabledComponent } from './checkbox-disabled.component';
import { CheckboxShowcaseComponent } from './checkbox-showcase.component';
import { CheckboxStatusComponent } from './checkbox-status.component';
import { CheckboxTestComponent } from './checkbox-test.component';

const routes: Route[] = [
  {
    path: 'checkbox-disabled.component',
    component: CheckboxDisabledComponent,
  },
  {
    path: 'checkbox-showcase.component',
    component: CheckboxShowcaseComponent,
  },
  {
    path: 'checkbox-status.component',
    component: CheckboxStatusComponent,
  },
  {
    path: 'checkbox-test.component',
    component: CheckboxTestComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CheckboxRoutingModule {}
