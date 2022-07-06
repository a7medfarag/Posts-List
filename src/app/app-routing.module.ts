import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { IsLoggedGuard } from './core/guards/is-logged.guard';
const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch:'full'},
  { path: "login", component: LoginComponent, canActivate: [IsLoggedGuard] },
  {path: 'posts-list' , canActivate: [AuthGuard], component: PostsListComponent},
  {path: '**' ,  component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
