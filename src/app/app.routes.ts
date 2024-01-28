import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TestComponent } from './pages/test/test.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'about2', component: TestComponent
    },
    {
        path: 'about3', component: AboutComponent
    },
    {
        path: 'about4', component: AboutComponent
    },
];
