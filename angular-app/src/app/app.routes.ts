import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { LazyComponent } from './lazy/lazy.component';



export const routes: Routes = [{ path: 'Home', data: { name: 'cwhw' } ,component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'user/:id/:name', component: UserComponent },
  {
    path: 'lazy', loadComponent: () => import('./lazy/lazy.component' ).then((c) => c.LazyComponent)// it will be used to add the lazy loading in the application
  },
{ path: '**', component: PageNotFoundComponent }];
