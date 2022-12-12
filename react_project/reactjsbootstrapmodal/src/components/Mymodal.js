import React,{useState} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function Mymodal() {
const [info,setInfo]= useState({
    modal:false,
    name:'',
    city:''
   
});
 function toggle(){
setInfo({modal:!info.modal});
  }
  function handleSubmit(e){
e.preventDefault();
datasubmit();
// console.log(info);

  }
  function changeValue(ev){
    setInfo({...info,[ev.target.name]:ev.target.value})
  }
 
//   data submit 
function datasubmit(){
    axios.post(
        'http://localhost/Codelgniter/classproject/react_project/reactjsbootstrapmodal/api/data_post.php',
        // {name:info.name,city:info.city }
        {info})
    .then((result)=>{
        alert(result.data.msg)
    })
}
    return (
    <div>
     
      <h1>React Bootstrap Modal Example</h1>
         <Button onClick={toggle}>clilck here</Button>
   <Modal isOpen={info.modal}> 
   <ModalHeader>modal header </ModalHeader>

    <form onSubmit={handleSubmit}>
    <ModalBody>
        <label>Name :</label>
        <input type="text" name='name'onChange={changeValue}  className='form-control'/><br/>
        <label>email :</label>
        <input type="text" name='city' onChange={changeValue} className='form-control'/><br/>
        {/* <input type="submit" className='form-control'/> */}
   
   </ModalBody>
   <ModalFooter>
    <button type='submit' className='btn btn-danger'>submit</button>
    <button onClick={toggle} className="btn btn-primary">Close</button>
   </ModalFooter>
   </form>
   </Modal>

    </div>
  )
}
