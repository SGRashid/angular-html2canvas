import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: '', component: NewComponentComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'css', component: CssComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
