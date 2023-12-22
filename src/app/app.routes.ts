import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListeDesActionsComponent } from './list-action/list-action.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'actions', component: ListeDesActionsComponent },
    { path: 'about', component: ActionComponent }, // New route for the About page
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
