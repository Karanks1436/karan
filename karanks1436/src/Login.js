import { useEffect, useState } from "react";
import { db } from "./Firebase"; // Assuming you have your Firebase setup correctly
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(null); // State for error messages
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      // Attempt to find the user in your Firestore database
      const querySnapshot = await db.collection("login").where("Email", "==", email).where("Password", "==", password).get();

      if (querySnapshot.size > 0) {
        // User found, store some basic info in localStorage (consider using a more secure method like session storage)
        localStorage.setItem("username", querySnapshot.docs[0].id); // Assuming you have a unique ID for each user
        navigate("/Dashboard"); // Navigate to the dashboard
      } else {
        setErrorMessage("Incorrect email or password."); // Set error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  useEffect(() => {
    // Check if the user is already logged in
    if (localStorage.getItem("username")) {
      navigate("/Dashboard");
    }
  }, []);

  return (
    <>
      <center className="py-5 log col-lg-12">
        <h1 className="fs-1 text-warning pt-1 fw-bold">LOGIN HERE</h1>
        <form onSubmit={handleSubmit}></form>
        <div className="col-lg-5 col-md-5 col-sm-5 col-5 my-5 pt-5">
          <div className="card">
            <div className="card-body log1">
              <form onSubmit={handleSubmit}>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display error message */}
                <div className="d-flex text-light fw-bold justify-content-start align-items-start">
                  E-Mail:
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control border-1 border-white my-2 mb-5"
                  required
                />
                <div className="d-flex text-light fw-bold justify-content-start align-items-start">
                  Password:
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control border-1 border-white my-2 mb-5"
                  required
                />
                <button type="submit" className="btn fw-bold mb-1 btn-warning">
                  Login/Sign In
                </button>
                <span className="mx-1 text-light">New customer click</span>{" "}
                <Link className="text-warning" to={"/Register"}>
                  Here
                </Link>
              </form>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
