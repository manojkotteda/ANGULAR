import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { PostsComponent } from './modules/posts/posts.component';
import { RegisterComponent } from './modules/register/register.component';
import { AuthGuard } from './services/guard/auth.guard';
const routes: Routes = [{
  path: 'application',
  component: DefaultComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'articles',
    component: ArticlesComponent
  },{
    path: 'contacts',
    component:  ContactsComponent
  }]
},
{
  path: '',
  component: LoginComponent
},
{
  path: 'register-user',
  component: RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
