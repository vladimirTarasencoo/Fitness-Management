import { IndividualPlan } from "./IndividualPlan";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  userType: UserType;
  phone: string;
  userBalance: number;
  individualPlans: IndividualPlan[];
}

export enum UserType {
  Customer = 1,
  Admin
}
