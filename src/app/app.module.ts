import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
