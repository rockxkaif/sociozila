import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }
    
    return (
        <div class="container py-4 mt-4 h-90">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{borderRadius: "1rem"}}>
                <div class="row g-0">
                  <div class="col-md-5 col-lg-6 d-none d-md-block">
                  
                      <br></br>
                      <br></br>
                      <br></br>
                      <h1 class="h1 fw-bold text-primary text-center mt-5 ml-2 pt-5">Sociozilla</h1>
                      <h4 class="text-center ml-5 mt-2">Connect with friends and the world around you on Sociozilla.</h4>
                  </div>
                  <div class="col-md-5 col-lg-6 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
      
                      <form onSubmit={handleSubmit}>
                        <h5 class="fw-normal mb-3 pb-3 text-primary">Sign into your account</h5>
      
                        <div class="form-outline mb-4">
                                   <label class="form-label" for="form2Example17" >Email Address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} placeholder='Email' class="form-control form-control-lg" />
                        </div>
      
                        <div class="form-outline mb-4">
            
                          <label class="form-label" for="form2Example27">Password</label>
                          <input type={ typePass ? "text" : "password" } 
                        className="form-control" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password"  placeholder='Password' class="form-control form-control-lg" />
                        </div>
                        <div class="pt-1 mb-4">
                          <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                        </div>
                          <p className="mb-5 pb-lg-2">
                    You don't have an account? <Link to="/register" style={{color: "#393f81"}}><a className="text-primary">Register Now</a></Link>
                </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
            
       
                

    )
}

export default Login
