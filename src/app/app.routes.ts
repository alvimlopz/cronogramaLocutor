import { Routes } from '@angular/router';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';
import { PatrocinadoresComponent } from './pages/patrocinadores/patrocinadores.component';
import { AvisosComponent } from './pages/avisos/avisos.component';

export const routes: Routes = [
  { path: 'cronograma', component: CronogramaComponent },
  { path: 'patrocinadores', component: PatrocinadoresComponent },
  { path: 'avisos', component: AvisosComponent },
  { path: '', redirectTo: 'cronograma', pathMatch: 'full' },
];
