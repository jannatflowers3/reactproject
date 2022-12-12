
import React,{useState} from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap';
import {Helmet} from '../components/Helmet/Helmet';
import {Link} from 'react-router-dom'
import '../styles/login.css'
// import {createUserWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../firebase.config';
import {ref, uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import {setDoc,doc} from "firebase/firestore"
import {db} from "../firebase.config"
import {storage} from "../firebase.config"
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
const  Signup =()=> {

const [usename,setUsername] = useState('');
const [email,setEmail] = useState('');
const [password, setPassword] = useState('');
const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);
const navigate  = useNavigate();
const signup = async(e)=>{
  e.preventDefault()
  setLoading(true)

  try{
const userCredential = await createUserWithEmailAndPassword(
  auth,
  email,
  password);

  const user = userCredential.user;
  const storageRef = ref(storage,`images/${Date.now()+ usename}`);
  const uploadTask = uploadBytesResumable(storageRef,file);
uploadTask.on((error)=>{
toast.error(error.message)
},()=>{
getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
 await updateProfile(user,{
  //update userprofilec
    displayName: usename,
    photoURL: downloadURL,

  });
//store user data in firestore database
await setDoc(doc(db,'user',user.uid),{
  uid:user.uid,
  displayName:usename,
  email,
  photoURL:downloadURL
});
});
}
);
console.log(user);
setLoading(false);
toast.success("Account created");
navigate("/login")

  }
  catch(error){
  toast.error("something went wrong");
   };
}
  return (

<Helmet title='signup'>
  <section>
     <Container>
         <Row>  
            {
             loading ? <Col lg="12" className='text-center'>
              <h6 className='fw-bold'>Loading</h6>
             </Col>:
             <Col lg='6' className='m-auto text-center'>
             <h3 className='fw-bold fs-4 mb-4'>Signup</h3>
             <Form onSubmit={signup} className='auth_form'  method="post">
             <FormGroup className='form_group'>
                       <input type="text" 
                       placeholder='Enter your name'
                        value={usename}
                         onChange
                          = {(e)=>setUsername(e.target.value)}
                       />
                 </FormGroup>
                 <FormGroup className='form_group'>
                       <input type="email" placeholder='Enter your email'
                        value={email}
                         onChange = {(e)=>setEmail(e.target.value)}
                       />
                 </FormGroup>
                 <FormGroup className='form_group'>
                       <input type="password"
                        value={password} 
                        onChange= {(e)=>setPassword(e.target.value)}
                        placeholder='Password must be at least 6 characters'/>
                 </FormGroup>

                 <FormGroup className='form_group'>
                       <input type="file"
                       
                        onChange= {(e)=>setFile(e.target.files[0])}
                       />
                 </FormGroup>
                 <button type='submit' className='buy_btn auth_btn'>Create an Account</button>
               <p>Already have an account? <Link to='/login'>Login</Link></p> 
             </Form>
          </Col>
            }
         </Row>
     </Container>
  </section>

  </Helmet>

  )
}

export default Signup;

