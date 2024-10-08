// import firebase from "firebase";
// import { db } from "./Firebase";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
// import Navbar from "./Navbar";

// export default function Register() {

//     function submit(x) {
//         x.preventDefault();
//         var data = new FormData(x.currentTarget);
//         var name = data.get("name");
//         var email = data.get("email");
//         var contact = data.get("contact");
//         var gender = data.get("gender");
//         var password = data.get("password");
//         var dateofbirth = data.get("dateofbirth");

//        db.collection("Register").add({
//         Name : name,
//         Email : email,
//         Contact : contact,
//         Gender : gender,
//         Password : password,
//         Dateofbirth : dateofbirth
        
//     })
//     // .then((success) => {
        
//         x.target.reset();
        
//         alert("Thank You For Your Registration")

   
//     // }
// // )

//     }

//     return (
//         <>

//             <center className="reg col-lg-12 py-3 ">
//             <Navbar />
//                 <h1 className="pt-2 reg2 fw-bold text-dark">REGISTRATIONS </h1>
//                 <div className="col-lg-6 reg2 col-md-6 col-sm-6 col-6 my-5">
//                     <div className="card reg1">
//                         <div className="card-body">
//                             <form onSubmit={submit}>
//                                 <div className="text-dark d-flex justify-content-start align-items-start">Username</div>
//                                 <input type="text" name="name" placeholder="Name" className="my-1 p-2 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <div className="text-dark d-flex justify-content-start align-items-start">E-Mail</div>
//                                 <input type="email" name="email" placeholder="E-mail" className="my-1 p-2 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <div className="text-dark d-flex justify-content-start align-items-start">Contact</div>
//                                 <input type="number" name="contact" placeholder="Contact" className="my-1 p-2 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <div className="text-dark d-flex justify-content-start align-items-start">Gender</div>

//                                 <select className="col-lg-12 col-md-12 col-sm-12 col-12 py-2 border-1 border-black" id="sl" name="gender" >
//                                     <option className="text-dark" value="">Gender</option>
//                                     <option className="text-dark" >Male</option>
//                                     <option className="text-dark" >Female</option>
//                                     <option className="text-dark" >Others</option>
//                                 </select>

//                                 <div className="text-dark d-flex justify-content-start align-items-start">Password</div>
//                                 <input type="password" name="password" placeholder="Password" className="my-1 p-2 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <div className="text-dark d-flex justify-content-start align-items-start">Date Of birth</div>
//                                 <input type="date" name="dateofbirth" placeholder="Date of Birth" className="my-1 p-1 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <button type="submit" className="btn  btn-light fw-bold px-5">Register</button>
//                                 <span className="mx-1 text-dark">existing customer click</span>  <Link className="text-warning" to={"/"}>Here</Link>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </center >
//         </>
//     )

// }




// import firebase from "firebase";
// import { db } from "./Firebase";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
// import Navbar from "./Navbar";

// export default function Register() {

//     function submit(x) {
//         x.preventDefault();
//         var data = new FormData(x.currentTarget);
//         var name = data.get("name");
//         var email = data.get("email");
//         var contact = data.get("contact");
//         var gender = data.get("gender");
//         var password = data.get("password");
//         var dateofbirth = data.get("dateofbirth");

//         db.collection("Register").add({
//             Name: name,
//             Email: email,
//             Contact: contact,
//             Gender: gender,
//             Password: password,
//             Dateofbirth: dateofbirth

//         }).then((success) => {

//             x.target.reset();
//         })

//     }

//     return (
//         <>
//             <Navbar />

//             <center className="reg col-lg-12 py-3 ">
//                 <h1 className="pt-2 reg2 fw-bold text-dark">REGISTRATIONS </h1>
//                 <div className="col-lg-6 reg2 col-md-6 col-sm-6 col-6 my-5">
//                     <div className="card reg1">
//                         <div className="card-body">
//                             <form onSubmit={submit}>
//                                 <div className="text-dark d-flex justify-content-start align-items-start">Username</div>
//                                 <input type="text" name="name" placeholder="Name" className="my-1 p-2 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <div className="text-dark d-flex justify-content-start align-items-start">E-Mail</div>
//                                 <input type="email" name="email" placeholder="E-mail" className="my-1 p-2 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <div className="text-dark d-flex justify-content-start align-items-start">Contact</div>
//                                 <input type="number" name="contact" placeholder="Contact" className="my-1 p-2 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <div className="text-dark d-flex justify-content-start align-items-start">Gender</div>

//                                 <select className="col-lg-12 col-md-12 col-sm-12 col-12 py-2 border-1 border-black" id="sl" name="gender" >
//                                     <option className="text-dark" value="">Gender</option>
//                                     <option className="text-dark" >Male</option>
//                                     <option className="text-dark" >Female</option>
//                                     <option className="text-dark" >Others</option>
//                                 </select>

//                                 <div className="text-dark d-flex justify-content-start align-items-start">Password</div>
//                                 <input type="password" name="password" placeholder="Password" className="my-1 p-2 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <div className="text-dark d-flex justify-content-start align-items-start">Date Of birth</div>
//                                 <input type="date" name="dateofbirth" placeholder="Date of Birth" className="my-1 p-1 border-1 d-flex justify-content-center align-items-center border-black form-control" required />
//                                 <button type="submit" className="btn  btn-light fw-bold px-5">Register</button>
//                                 <span className="mx-1 text-dark">existing customer click</span>  <Link className="text-warning" to={"/"}>Here</Link>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </center >
//         </>
//     )

// }


import firebase from "firebase/app"; // Ensure you're importing the right Firebase modules
import "firebase/firestore"; // Import Firestore if you're using it
import { db } from "./Firebase"; // Ensure this points to your Firestore configuration
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        gender: '',
        password: '',
        dateofbirth: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            await db.collection("Register").add({
                Name: formData.name,
                Email: formData.email,
                Contact: formData.contact,
                Gender: formData.gender,
                Password: formData.password,
                Dateofbirth: formData.dateofbirth
            });
            // Reset the form after submission
            setFormData({
                name: '',
                email: '',
                contact: '',
                gender: '',
                password: '',
                dateofbirth: ''
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <>
            <Navbar />
            <center className="reg col-lg-12 py-3">
                <h1 className="pt-2 reg2 fw-bold text-dark">REGISTRATIONS</h1>
                <div className="col-lg-6 reg2 my-5">
                    <div className="card reg1">
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div className="text-dark">Username</div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="my-1 p-2 border-1 border-black form-control"
                                    required
                                />
                                <div className="text-dark">E-Mail</div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="E-mail"
                                    className="my-1 p-2 border-1 border-black form-control"
                                    required
                                />
                                <div className="text-dark">Contact</div>
                                <input
                                    type="tel" // Use 'tel' for better input handling
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    placeholder="Contact"
                                    className="my-1 p-2 border-1 border-black form-control"
                                    required
                                />
                                <div className="text-dark">Gender</div>
                                <select
                                    className="col-lg-12 py-2 border-1 border-black"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                                <div className="text-dark">Password</div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="my-1 p-2 border-1 border-black form-control"
                                    required
                                />
                                <div className="text-dark">Date Of Birth</div>
                                <input
                                    type="date"
                                    name="dateofbirth"
                                    value={formData.dateofbirth}
                                    onChange={handleChange}
                                    className="my-1 p-1 border-1 border-black form-control"
                                    required
                                />
                                <button type="submit" className="btn btn-light fw-bold px-5">Register</button>
                                <span className="mx-1 text-dark">Existing customer? Click</span>
                                <Link className="text-warning" to="/"> Here</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </center>
        </>
    );
}
