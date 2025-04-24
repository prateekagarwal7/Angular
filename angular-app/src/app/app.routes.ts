import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [{ path: 'Home', data: { name: 'cwhw' } ,component: HomeComponent},
  { path: 'contact', component: ContactComponent },
{ path: '**', component: PageNotFoundComponent }];
