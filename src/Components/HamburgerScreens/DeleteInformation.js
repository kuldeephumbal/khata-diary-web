// import React from "react";
// import { Link } from "react-router-dom";
// import ProgressProfile from "./ProgressProfile";

// function DeleteInformation() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-12 py-20">
//           <div className="expense-title">
//             <Link to="/">
//               Home <i className="fa-solid fa-chevron-right"></i>
//             </Link>
//             <Link to="/Setting">
//               {" "}
//               Setting <i className="fa-solid fa-chevron-right"></i>
//             </Link>
//             <span> Delete Account</span>
//           </div>
//         </div>

//         <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
//           <ProgressProfile />
//         </div>

//         <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
//           <div className="expense-empty-bg">
//             <div className="delete-info-p">
//               <p className="info-margin">
//                 Your data is automatically backed up with your phones connected
//                 to the internet, in case you format this phone of mistakenly
//                 delete the app just download the app again and login using your
//                 KhataDiary-gered number Your data will be automatically restored
//               </p>
//               <p>LAST BACKUP AT</p>
//               <p>04:36 PM 27 Nov 2024</p>
//             </div>

//             <div className="delete-back">
//               <Link to="/MySession"> Backup Information </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeleteInformation;

import React from "react";
import { Link } from "react-router-dom";
import ProgressProfile from "./ProgressProfile";

function MySession() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-20">
          <div className="expense-title">
            <Link to="/">
              Home <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <Link to="/Setting">
              {" "}
              Setting <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <span> Delete Account</span>
          </div>
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <ProgressProfile />
        </div>

        <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 py-40 pt-0">
          <div className="expense-empty-bg">
            <div className="delete-info-p">
              <p className="info-margin">
                Your data is automatically backed up with your phones connected
                to the internet, in case you format this phone of mistakenly
                delete the app just download the app again and login using your
                KhataDiary-gered number Your data will be automatically restored
              </p>
              <p>LAST BACKUP AT</p>
              <p>04:36 PM 27 Nov 2024</p>
            </div>

            <div className="delete-back">
              <Link to="/MySession"> Backup Information </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySession;
