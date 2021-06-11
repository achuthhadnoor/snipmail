import app from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};


class Firebase {
    constructor() {
        super();
        app.initializeApp(config);
        this.app = app;
        this.db = app.database();
        this.firestore = app.firestore();
        this.user = null;
    }

    login = (email, password) => {
        return new Promise(async (resolve, reject) => {
            try {
                let user = await this.auth.signInWithEmailAndPassword(email, password);
                this.user = {
                    name: user.displayName,
                    email: user.email,
                    accessToken: user.accessToken,
                    isEmailVerified: user.emailisVerified,
                }
            } catch (e) {
                reject(e);
            }
        })
    }
    signup = (email, password) => {
        return new Promise(async (resolve, reject) => {
            try {
                await this.auth.createUserWithEmailAndPassword(email, password).then(async ({ user }) => {
                    user.sendEmailVerification();
                    this.user = {
                        id: user.uid,
                        name: user.displayName,
                        verified: user.emailVerified,
                        email: user.email,
                        photoURL: user.photoURL,
                    }
                    let ref = this.db.collection('users').doc(user.uid);
                    await ref.set(this.user, { merge: true });
                    // await ref.set(this.user);
                    resolve(this.user)
                }).catch(e => { reject(e) })
            } catch (e) {
                reject(e);
            }
        })
    }

    verifyEmail = () => { }

    doSignOut = () => { this.auth.signOut(); };

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;