import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ScorecardComponent }      from './scorecard/scorecard.component';
import {MyDiscsComponent} from './my-discs/my-discs.component';
import {DiscDetailComponent} from './disc-detail/disc-detail.component';
import {LoginComponent} from './login/login.component';
import {PlayerPageComponent} from './player-page/player-page.component';
import {BrowseDiscsComponent} from './browse-discs/browse-discs.component';
import {RoundSetupComponent}  from './round-setup/round-setup.component';
import {ResultsComponent}  from './results/results.component';
import {RegisterComponent}  from './register/register.component';
import {AdminComponent}  from './admin/admin.component';


const routes: Routes = [
  
  { path: 'scorecard',  component: ScorecardComponent },
  { path: 'myDiscs',  component: MyDiscsComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'detail/:id', component: DiscDetailComponent },
  { path: 'login.page', component: PlayerPageComponent },
  { path: 'browseDiscs', component: BrowseDiscsComponent },
  { path: 'roundSetup', component: RoundSetupComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
 // {path: '**', component: PageNotFoundComponent}
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
