import { AddPostComponent } from './pages/add-post/add-post.component';
import { ReadPostComponent } from './pages/read-post/read-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'add', pathMatch: 'full'},
  {path: 'add', component: AddPostComponent},
  {path: 'read', component: ReadPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
