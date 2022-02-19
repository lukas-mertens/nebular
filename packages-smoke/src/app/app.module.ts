import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule } from '@devsaur-nebular/theme';
import { NbAuthModule } from '@devsaur-nebular/auth';
import { NbSecurityModule } from '@devsaur-nebular/security';
import { NbMomentDateModule } from '@devsaur-nebular/moment';
import { NbDateFnsDateModule } from '@devsaur-nebular/date-fns';
import { NbEvaIconsModule } from '@devsaur-nebular/eva-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'packages-smoke' }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot(),
    NbSecurityModule.forRoot(),
    NbMomentDateModule,
    NbDateFnsDateModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
