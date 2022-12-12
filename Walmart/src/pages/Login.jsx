
import React,{useState} from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap';
import {Helmet} from '../components/Helmet/Helmet';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import {toast} from 'react-toastify'


function Login() {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('')
const [loading,setLoading] = useState(false)
const navigate = useNavigate()

const signIn = async (e)=>{
  e.preventDefault();
  setLoading(true)

try{
const userCredential = await signInWithEmailAndPassword(auth,email,password)
const user = userCredential.user
console.log(user)
setLoading(false)
toast.success("successfully logged in");
navigate("/checkout")

}catch(error){
setLoading(false);
toast.error(error.message)
}

}



  return (
    <>
<Helmet title='login'>
  <section>
     <Container>
         <Row>
           {
            loading ?<Col className='text-center'>
            <h5 className='fw-bold'>Loading ....</h5>
            </Col>:
                 
                 <Col lg='6' className='m-auto text-center'>
                 <h3 className='fw-bold fs-4 mb-4'>Login</h3>
                 <Form className='auth_form' onSubmit={signIn}>
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
                            placeholder='Enter your password'/>
                     </FormGroup>
                     <button type='submit' className='buy_btn auth_btn'>Login</button>
                   <p>Don't have an account? <Link to='/signup'>Create an account</Link></p> 
                 </Form>
              </Col>
           }
         </Row>
     </Container>
  </section>

  </Helmet>



    </>
  )
}

export default Login

