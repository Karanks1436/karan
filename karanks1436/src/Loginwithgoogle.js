import firebase from "firebase";
import { auth, provider } from "./Firebase";


export default function Loginwithgoogle() {

    function submit(x) {
        x.preventDefault()
        var data = new FormData(x.currentTarget)
        var number = data.get("number")


    }

    function submit2(x) {
        x.preventDefault()
        var data = new FormData(x.currentTarget)
        var otp = data.get("otp")


    }

    function login() {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // IdP data available in result.additionalUserInfo.profile.
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        <>
            <div className="row m-0 p-5  d-flex justify-content-center align-items-center">
                <h1 className="text-center text-primary fw-bold mb-5">LOGIN WITH OTHER OPTIONS</h1>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <input type="number" name="number" placeholder="Number" />
                                <button className="btn btn-primary mx-5">Login</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submit2}>
                                <input type="number" name="otp" placeholder="OTP" />
                                <button className="btn btn-primary mx-5">Login</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="text-center">or</div>

                <div className="col-lg-12 p-4 text-center">
                    <button onClick={login} className="btn btn-danger fw-bold">Login With Google</button>
                </div>

            </div>
        </>
    )
}