import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    UserProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
