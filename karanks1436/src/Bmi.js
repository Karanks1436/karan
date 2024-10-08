import { useState } from "react"
import Navbar from "./Navbar";

export default function BMICalculator() {

    const [heightValue, setHeightValue] = useState([]);
    const [weightValue, setweightvalue] = useState([]);
    const [bmiValue, setBMIValue] = useState([]);
    const [bmiMessage, setBMIMessage] = useState([]);

    const calculatebmi =() => {
        if (heightValue && weightValue) {
            const heightInMeters = heightValue / 100 ;
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed
            ()
            setBMIValue(bmi);

            let message = '';
            if (bmi < 18.5) {
                message = 'You Are Under Weight';
            }else if (bmi >= 18.5 && bmi < 25) {
                message = 'You Are Normal Weight';
            }else if (bmi >= 25 && bmi < 30) {
                message = 'You Are Over Weight';
            }else {
                message = 'You Are Obese'
            }
        }else {
            setBMIValue('');
            setBMIMessage('');
        }
    };


  

    return (
        <>




        <div className="bdy fs-1 fw-bold text-warning d-flex flex-wrap justify-content-center align-items-center">
            
<Navbar/>
            BMI <span className="text-info"> Calculator </span>


            <div className="bdy d-flex flex-wrap justify-content-center align-items-center ">
                <div className="bdy2 d-flex flex-wrap justify-content-center align-items-center ">
                    <form onSubmit={'Calculate'}>
                    <form className=" input">
                        <label htmlFor="height ">Enter Your Height (in cm)</label>
                        <input type="number" id="height" value={heightValue}  className=" mx-5 form-control " placeholder="Fill Your Height" onChange={(e) => setHeightValue(e.target.value)}></input>
                        <br />
                        <label htmlFor="weight"> Enter Your Weight (in Kg)</label>
                        <input type="number" id="weight" value={weightValue} className="mx-5 form-control" placeholder="Fill Your Weight" onChange={(e) => setweightvalue(e.target.value)}></input>
                        <button onClick={calculatebmi} type="submit" className="btn btn-success">Click To Calculate Your BMI</button>
                        {bmiValue && bmiMessage && (
                            <div className="result fs-3 text-info">
                                <p>
                                    Your BMI: <span className="bmi-value">{bmiValue}</span> 
                                </p>
                                <p>
                                    Result: <span className="bmi-message">{bmiMessage}</span>
                                </p>
                            </div>
                        )}
                    </form>
                    </form>
                </div> 

            </div>

        </div>
        </>
    )

}