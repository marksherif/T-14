import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { StoreC1Component } from './StoreC1/StoreC1.component';
import { StoreC3Component } from './StoreC3/StoreC3.component';
import { StoreC2Component } from './StoreC2/StoreC2.component';
import { StoreC4Component } from './StoreC4/StoreC4.component';
import { StoreC5Component } from './StoreC5/StoreC5.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'StoreC1', component: StoreC1Component },
  { path: 'StoreC2', component: StoreC2Component },
  { path: 'StoreC3', component: StoreC3Component },
  { path: 'StoreC4', component: StoreC4Component },
  { path: 'StoreC5', component: StoreC5Component }

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    StoreC1Component,
    StoreC2Component,
    StoreC3Component,
    StoreC4Component,
    StoreC5Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
