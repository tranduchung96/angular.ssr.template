import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorModule } from './pages/monitor/monitor.module';
import { WelcomeModule } from './pages/welcome/welcome.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    WelcomeModule,
    MonitorModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
