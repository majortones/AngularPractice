import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BetterdirectiveDirective } from './betterdirective.directive';
import { SampleflagComponent } from './sampleflag/sampleflag.component';

@NgModule({
  declarations: [
    AppComponent,
    BetterdirectiveDirective,
    SampleflagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
