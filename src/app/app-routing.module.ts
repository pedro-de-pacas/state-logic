import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CohortComponent } from './components/cohort/cohort.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PathsComponent } from './components/paths/paths.component';
import { Keys } from './enums/keys';

const routes: Routes = [
  { path: '', redirectTo: Keys.DASHBOARD, pathMatch: 'full' },
  { path: Keys.COHORT, component: CohortComponent },
  { path: Keys.DASHBOARD, component: DashboardComponent },
  { path: Keys.PATHS, component: PathsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
