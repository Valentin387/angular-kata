import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './components/survey/survey.component';

const routes: Routes = [
  { path: 'survey/:id', component: SurveyComponent },
  { path: '', redirectTo: '/survey', pathMatch: 'full' },
  { path: '**', redirectTo: '/survey' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }