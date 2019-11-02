import { AuthGuard } from "./auth.guard";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { RegisterComponent } from "./register/register.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  { path: "", redirectTo: "/sign-in", pathMatch: "full" },
  { path: "sign-in", component: SignInComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "my-profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
