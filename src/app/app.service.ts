import { Activity } from "./models/activity";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import {
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { User } from "./models/user";
import { IndividualPlan } from "./models/IndividualPlan";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private user: any;
  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  // all the get and create functions could have been made into
  // one function but I'm leaving it like this for easier understanding :)

  createActivity(activity: any) {
    return this.createCollection("activities", activity);
  }

  getActivities() {
    return this.firestore.collection("activities").valueChanges();
  }

  getActivity(id: string) {
    return this.firestore
      .collection("activities")
      .doc(id)
      .valueChanges();
  }

  createIndividualPlan(planData: IndividualPlan) {
    return this.createCollection("individualPlan", planData);
  }

  getIndividualPlans() {
    return this.firestore.collection("individualPlan").valueChanges();
  }

  getIndividualPlan(id: string) {
    return this.firestore
      .collection("individualPlan")
      .doc(id)
      .valueChanges();
  }

  getUsers() {
    return this.firestore.collection("users").valueChanges();
  }

  getUser(id: string) {
    return this.firestore
      .collection("users")
      .doc(id)
      .valueChanges();
  }

  private createCollection(collectionName: string, data: any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(collectionName)
        .add({ ...data })
        .then(
          res => {},
          err => reject(err)
        );
    });
  }
}
