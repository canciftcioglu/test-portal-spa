import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [

  { path: 'not-found', component: NotFoundComponent },
  { path: 'anasayfa', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
