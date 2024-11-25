import firebase from "firebase";
import Navbar from "./Navbar";
import { FormatUnderlined, Delete } from "@mui/icons-material";

import Foot from "./Foot";
import { Link } from "react-router-dom";
import Blogs from "./Blogs";


export default function Home() {
    
return(
    <>
    

<div className="start col-lg-12 col-md-12 col-sm-12 col-12">
     <div className="bg-dark back col-lg-12  ">
<Navbar/>

     <h4 className="py-3 px-5 ks text-white">PRESENTED BY: KARAN KUMAR</h4>
     <h1>
     <marquee className="pt-3 karan px-5 fw-bold text-primary">WELCOME TO KARANKS1436</marquee>

     </h1>
     <h2 className="fw-bold px-5 ks text-light">EXPLORE MY WEBSITE</h2> 


     <h4 className="col-lg-8 px-5 ks text-white">If you were a customer doing business with your company, what would most frustrate you in this effort? As I share my findings from the customer focus groups, I’m going to tell you what these frustrations are and what you can do to address them to increase the quality of the service you provide.</h4>    

     </div>

<h2 className="text-center text-primary fw-bold my-5">TESTINOMIAL</h2>
<div className="row d-flex justify-content-center align-items-center text-white col-lg-12 col-md-8 col-sm-8 col-8 mx-5 px-5">
<div className="col-lg-4 m-2 tst py-3 "><span className="fw-bold fs-1">"</span>
I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.</div>

<div className="col-lg-4 m-2 tst py-3"><span className="fw-bold fs-1">"</span>For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels.Everything is available for free.</div>
</div>


<div className="row d-flex justify-content-center col-lg-12">
    <h2 className="text-center text-primary fw-bold mt-5">OTHERS</h2>
    <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" className="image col-lg-3 my-5 mx-5" />
    <img src="https://blog.hubspot.com/hs-fs/hubfs/how-to-start-coding-1.jpg?width=595&height=400&name=how-to-start-coding-1.jpg" className="image col-lg-3 my-5 mx-5" />
    <img src="https://www.shutterstock.com/image-vector/concept-computer-programming-developing-software-600nw-2149658841.jpg" className="image col-lg-3 my-5 mx-5" />
</div>





</div>
<Foot/>
    </>
)

}
