import React,{ useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Topbar from './Topbar';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {

  let {id} = useParams()
  let navigate = useNavigate()

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [website, setWebsite] = useState("")
  const [companyName, setCompanyName] = useState("")
  

  const handleEdit = async() => {
    try {
      let data = {name,username,email,address,phone,website,companyName,status:false};
      let res = await axios.put(`${API_URL}/${id}`,data)
      if(res.status === 200){                   
        navigate('/')
        toast.success("data edited succesfully")
      }
    }catch (error) {
      toast.danger("data editing failed")
    }
  }

  const getUserdataById = async() => {
    try {
      let res = await axios.get(`${API_URL}/${id}`)
      if(res.status===200){
        setName(res.data.name)
        setUsername(res.data.username)
        setEmail(res.data.email)
        setAddress(res.data.address)
        setPhone(res.data.phone)
        setWebsite(res.data.website)
        setCompanyName(res.data.companyName)
       
      }      
    }catch (error) {
      toast.error("Internal error")
    }
  }

  useEffect(()=>{
    getUserdataById();
  },[])

  return <>
      <div className='container-fluid'>
          <Topbar/>
          <div className="fromWrapper">
              <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value = {name} placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
                  </Form.Group>
                  <Row className="mb-3">
                      <Form.Group as={Col}>
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" value = {username} placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                        </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' value = {email} placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                      </Form.Group>
                  </Row>
                  <Row className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Group as={Col}>
                          <Form.Control type="text" value = {address} placeholder='Enter Address' onChange={(e)=>{setAddress(e.target.value)}}/>
                      </Form.Group>
        
                  </Row>
                  <Row className="mb-3">
                      <Form.Group as={Col}>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="text" value = {phone} placeholder="Enter Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
                      </Form.Group>
                      <Form.Group as={Col}>
                          <Form.Label>Website</Form.Label>
                          <Form.Control type="text" value = {website} placeholder="Enter Website"  onChange={(e)=>{setWebsite(e.target.value)}}/>
                      </Form.Group>
                  </Row>
                  <Row className="mb-3">
                      <Form.Label>Company</Form.Label>
                      <Form.Group as={Col}>
                          <Form.Control type="text" value = {companyName} placeholder='Enter Company Name' onChange={(e)=>{setCompanyName(e.target.value)}}/>
                      </Form.Group>
                      
                  </Row>
                  <Button variant="primary" onClick={()=>handleEdit()}>Submit</Button>
              </Form>    
          </div>            
      </div>
  </>
    
}

export default Edit