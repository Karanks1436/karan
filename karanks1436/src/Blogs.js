import firebase from "firebase";
import Navbar from "./Navbar";
import { ContactEmergency, Email, EmailOutlined, } from "@mui/icons-material";
import Foot from "./Foot";
import { useState } from "react";


export default function Blogs() {


    return (
        <>


            <div className="  stat col-lg-12 col-md-12 col-sm-12 col-12">
            <Navbar />
            <h1 className="mx-5 fw-bold text-primary">
                <marquee>
                CODING BLOGS!
                    </marquee>
                    </h1>
                <div className="mx-5 text-center col-lg-12">
                    <div className="col-lg-8 py-3 my-5 bg-white imag">
                        <h2 className="fw-bold text-success">A Comprehensive Guide to Using Stackry for International Shopping</h2>
                        <p className="text-primary">In today's interconnected world, the desire for cutting-edge tech gadgets, unique international products, and exclusive US deals has reached an unprecedented level. However, many consumers face the challenge of obtaining products not readily available in their home country. This is where Stackry emerges as a revolutionary solution, simplifying the process of ordering from the US and having it shipped effortlessly to India.</p>
                    </div>

                    <div className="col-lg-8 py-3 my-5 bg-white imag">
                        <h2 className="fw-bold text-success">How Algorithmic Trading Systems Work</h2>
                        <p className="text-primary">In India, the popularity of online trading has helped transform the financial landscape. This has led to over 20% of all trading is now done via mobile through trading apps. In line with this, another development many traders have highlighted is the use of algorithmic trading systems to take advantage of ever-changing market opportunities. To date, algorithmic trading systems are used in up to 60% of all trading volume.</p>
                    </div>

                    <div className="col-lg-8 py-3 my-5 bg-white imag">
                        <h2 className="fw-bold text-success">Build an Email Validator with HTML, CSS, and JavaScript</h2>
                        <p className="text-primary">Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!</p>
                    </div>

                    <div className="col-lg-8 py-3 my-5 bg-white imag">
                        <h2 className="fw-bold text-success">[Solved] python was not found; run without arguments to install from the microsoft store, or...</h2>
                        <p className="text-primary">Encountered the 'Python was not found' error on your Windows system? Our step-by-step guide walks you through the process to locate and set Python paths, ensuring smooth execution. With clear instructions, images, and videos, you'll resolve this issue in no time. Dive in to get Python up and running on your system!</p>
                    </div>

                    <div className="col-lg-8 py-3 my-5 bg-white imag">
                        <h2 className="fw-bold text-success">How to find the Python Installation Path on Windows?</h2>
                        <p className="text-primary">Discover how to locate the Python installation path on your Windows system using two effective methods: the traditional Command Prompt and the modern Terminal. Whether you're troubleshooting or setting up environment variables, this guide provides clear, step-by-step instructions with visuals to help you find the information you need. Explore now!</p>
                    </div>


                </div>

<Foot/>

            </div>

        </>
    )

}
