import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { BlogsComponent } from './component/pages/blogs/blogs.component';
import { TeamComponent } from './component/pages/team/team.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ContactComponent } from './component/pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
