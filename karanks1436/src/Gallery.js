import firebase from "firebase";
import Navbar from "./Navbar";
import { ContactEmergency, Email, EmailOutlined, } from "@mui/icons-material";
import Foot from "./Foot";


export default function Gallery() {
    
return(
    <>
    

<div className="start gal  col-lg-12 col-md-12 col-sm-12 col-12">
<Navbar/>
     <div className="mx-5 text-center py-5 col-lg-12">
<h1 className="text-primary">GALLERY</h1>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/canon.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/iphone.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/lenovo.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/yeti.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/rode.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/macbook.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/intel.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/nvidia.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/nvme.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/wd.webp"/>
<img className="col-lg-3 image2 col-md-3 col-sm-4 col-9 mx-3 my-3" src="https://www.codewithharry.com/img/gears/case.webp"/>




     </div>

<Foot/>

</div>

    </>
)

}
