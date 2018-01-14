import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './data/in-memory-data.service';

import{AdminService,PlayerService,
       DiscService, ScorecardService,UserService
}from './services/index';

import { AppComponent } from './app.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { LoginComponent } from './login/login.component';
import { MyDiscsComponent } from './my-discs/my-discs.component';
import { RegisterComponent } from './register/register.component';
import { DiscDetailComponent } from './disc-detail/disc-detail.component';
import { BrowseDiscsComponent } from './browse-discs/browse-discs.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { RoundSetupComponent } from './round-setup/round-setup.component';
import { ResultsComponent } from './results/results.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
   

  ],
  declarations: [
    AppComponent,
    ScorecardComponent,
    LoginComponent,
    MyDiscsComponent,
    DiscDetailComponent,
    BrowseDiscsComponent,
   RegisterComponent,
   PlayerPageComponent,
   RoundSetupComponent,
   ResultsComponent,
   AdminComponent
  ],
  
  providers: [DiscService,AdminService,
    PlayerService, ScorecardService, UserService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
