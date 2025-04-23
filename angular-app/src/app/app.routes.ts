import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [{ path: 'Home', component: HomeComponent },
{ path: '**', component: PageNotFoundComponent }];
