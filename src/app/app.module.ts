import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AddProjectComponent } from './add-project/add-project.component';
// import { MoneyPledgedPipe } from './filterResult.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavComponent,
    FrontPageComponent,
    ProjectDetailComponent,
    AddProjectComponent,
    // MoneyPledgedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
