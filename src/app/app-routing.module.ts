import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {TermsComponent} from './components/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {animation: 'HomePage'}
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
    data: { animation: 'AboutPage' }
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
    data: { animation: 'ContactPage' }
  },
  {
    path: 'technologies',
    pathMatch: 'full',
    component: HobbiesComponent,
    data: { animation: 'technologiesPage' }
  },
  {
    path: 'terms',
    pathMatch: 'full',
    component: TermsComponent,
    data: { animation: 'termsPage' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
