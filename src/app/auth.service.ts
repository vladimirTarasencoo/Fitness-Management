import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { User } from "./models/user";
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userData: any;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem("user"));
      } else {
        localStorage.setItem("user", null);
        JSON.parse(localStorage.getItem("user"));
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null;
  }

  async signIn(email, password) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.ngZone.run(() => {
          this.router.navigate(["home"]);
          this.setUserData(result.user);
        });
      })
      .catch(error => window.alert(error));
  }

  async register(email, password) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        this.setUserData(result.user);
      })
      .catch(error => window.alert(error.message));
  }

  googleSignIn() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  async signOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["sign-in"]);
    });
  }

  private authLogin(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(result => {
        this.ngZone.run(() => {
          this.router.navigate(["home"]);
        });
        this.setUserData(result.user);
      })
      .catch(error => window.alert(error));
  }

  private setUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    };
    return userRef.set(userData, {
      merge: true
    });
  }
}
