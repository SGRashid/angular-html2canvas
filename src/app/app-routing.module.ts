import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { IframeComponent } from './iframe/iframe.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: '', component: NewComponentComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'css', component: CssComponent },
  { path: 'iframe', component: IframeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
