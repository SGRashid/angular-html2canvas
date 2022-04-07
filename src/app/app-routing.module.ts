import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { IframeCase2Component } from './iframe-case2/iframe-case2.component';
import { IframeComponent } from './iframe/iframe.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { PromiseComponent } from './promise/promise.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';

const routes: Routes = [
  { path: '', component: NewComponentComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'css', component: CssComponent },
  { path: 'iframe', component: IframeComponent },
  { path: 'iframe2', component: IframeCase2Component },
  { path: 'shadow-dom', component: ShadowDomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
