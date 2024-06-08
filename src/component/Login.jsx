// import React, { useState } from 'react';
// import '../style/Login.css';
// import { MdOutlineFileUpload } from "react-icons/md";
// import Avtar from '../../datajson/Avtar.json'
// import { useNavigate } from 'react-router-dom';


// const Login = () => {

//     const [avtar, setAvtar] = useState('');
//     const navigate = useNavigate()
//     console.log(avtar)

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//           const reader = new FileReader();
//           reader.onloadend = () => {
//             setAvtar(reader.result);
//           };
//           reader.readAsDataURL(file);
//         }
//       };


//     const handleChange = () => {}
//     const handleSignup = () =>{
//         navigate('/')
//     }
    
//   return (
//     <>
//       <div className="login">
//         <div className="login-container">
//             <h2 className='homepage-heading'>Register</h2>
//             <div className="login-form">
//                 <input type="text" className='login-input' placeholder='Mobile Number / Email'/>
//                 <input type="text" className='login-input' placeholder='Set password'/>


//                 {avtar ? <><img className='login-upload-img' src={avtar} alt="" /></>:
//                   <><input type="file" id="file" name="selectButton" accept="image/*" onChange={handleImageChange}/>
//                     <label for="file"><div><MdOutlineFileUpload className='login-upload-icon'/></div></label>
//                   </>}
//             <div class="login-avtar" onChange={(e) => setAvtar(e.target.value)}>
                  
//                 <input type="radio" id="1" name="selectButton" value={Avtar.Avtar[0]}/>
//                 <label for="1"><img src={Avtar.Avtar[0]} alt="" /></label>
//                 <input type="radio" id="2" name="selectButton" value={Avtar.Avtar[1]}/>
//                 <label for="2"><img src={Avtar.Avtar[1]} alt="" /></label>
//                 <input type="radio" id="3" name="selectButton" value={Avtar.Avtar[2]}/>
//                 <label for="3"><img src={Avtar.Avtar[2]} alt="" /></label>
//                 <input type="radio" id="4" name="selectButton" value={Avtar.Avtar[3]}/>
//                 <label for="4"><img src={Avtar.Avtar[3]} alt="" /></label>
//                 <input type="radio" id="5" name="selectButton" value={Avtar.Avtar[4]}/>
//                 <label for="5"><img src={Avtar.Avtar[4]} alt="" /></label>
//                 <input type="radio" id="6" name="selectButton" value={Avtar.Avtar[5]}/>
//                 <label for="6"><img src={Avtar.Avtar[5]} alt="" /></label>
//                 <input type="radio" id="7" name="selectButton" value={Avtar.Avtar[6]}/>
//                 <label for="7"><img src={Avtar.Avtar[6]} alt="" /></label>
//                 <input type="radio" id="8" name="selectButton" value={Avtar.Avtar[7]}/>
//                 <label for="8"><img src={Avtar.Avtar[7]} alt="" /></label>
//                 <input type="radio" id="9" name="selectButton" value={Avtar.Avtar[9]}/>
//                 <label for="9"><img src={Avtar.Avtar[8]} alt="" /></label>
//             </div>
//                 <button className='big-submit-button' onClick={handleSignup}>Submit</button>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login
