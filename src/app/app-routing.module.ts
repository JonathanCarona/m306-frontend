import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JetonexchangeComponent } from './jetonexchange/jetonexchange.component';
import { CasinoDashboardComponent } from './casino-dashboard/casino-dashboard.component';
import { SlotmachineComponent } from './slotmachine/slotmachine.component';

const routes: Routes = [
  { path: '', redirectTo: 'jeton', pathMatch: 'full' },
  { path: 'jeton', component: JetonexchangeComponent },
  { path: 'casino', component: CasinoDashboardComponent },
  { path: 'slotmachine', component: SlotmachineComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
