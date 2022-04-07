import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { PromiseComponent } from './promise/promise.component';
import { CssComponent } from './css/css.component';
import { IframeComponent } from './iframe/iframe.component';
import { IframeCase2Component } from './iframe-case2/iframe-case2.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    PromiseComponent,
    CssComponent,
    IframeComponent,
    IframeCase2Component,
    ShadowDomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
