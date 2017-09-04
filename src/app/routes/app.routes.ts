import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../home/home.component';
;
import { NavbarComponent } from '../navbar/navbar.component';


const appRoutes: Routes = [
    { path: '', component: HomePageComponent  },
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
