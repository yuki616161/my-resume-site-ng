import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Hobby } from './pages/hobby/hobby';
import { Contact } from './pages/contact/contact';
import { Gallery } from './pages/gallery/gallery';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'hobby', component: Hobby },
  { path: 'contact', component: Contact },
  { path: 'gallery', component: Gallery },
  { path: '**', redirectTo: '' },
];
