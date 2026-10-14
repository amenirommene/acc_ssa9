import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard/dashboard";
import { Users } from "./users/users";
import { Speakers } from "./speakers/speakers";

export const ADMIN_ROUTES: Routes = [
    {path:"", loadComponent:()=>import('./dashboard/dashboard').then(m => m.Dashboard)},
       {path:"users", loadComponent:()=>import('./users/users').then(m => m.Users)},
       {path:"speakers", loadComponent:()=>import('./speakers/speakers').then(m => m.Speakers)},
]