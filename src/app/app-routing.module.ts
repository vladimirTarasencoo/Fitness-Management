import { AuthGuard } from "./auth.guard";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { RegisterComponent } from "./register/register.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ScheduleComponent } from "./schedule/schedule.component"
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivityComponent } from './activity/activity.component';
import { CashBalanceComponent } from './cash-balance/cash-balance.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
const routes: Routes = [
  { path: "", redirectTo: "/sign-in", pathMatch: "full" },
  { path: "sign-in", component: SignInComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "schedule",
    component: ScheduleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "schedule/:id",
    component: ActivityComponent,
    canActivate: [AuthGuard] },
  {
    path: "manage-diets",
    component: CashBalanceComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: "cash-balance",
  //   component: CashBalanceComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: "diet-plan",
    component: DietPlanComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
