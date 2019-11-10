import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';  
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignInComponent } from "./sign-in/sign-in.component";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { FullCalendarModule } from '@fullcalendar/angular';
import { RegisterComponent } from "./register/register.component";
import { LayoutModule } from '@angular/cdk/layout';
import { ScheduleModule } from './schedule/schedule.module';
import { ActivityComponent } from './activity/activity.component';
import { MenuComponent } from './menu/menu.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { CashBalanceModule } from './cash-balance/cash-balance.module';
import { CashBalanceComponent } from './cash-balance/cash-balance.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    UserProfileComponent,
    RegisterComponent,
    ActivityComponent,
    MenuComponent,
    SlideMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
