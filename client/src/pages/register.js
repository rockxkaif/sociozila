import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'

const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = {
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if (auth.token) history.push("/")
    }, [auth.token, history])


    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    return (
        // <div className="auth_page">


        <div class="container py-3 mt-3 h-75">
          <div class="row d-md-flex justify-content-center align-items-center h-50">
            <div class="col col-sm-10">
              <div class="card" style={{borderRadius: "1rem"}}>
                <div class="row g-0">
                  <div class="col-md-5 col-lg-6 d-none d-md-block">
                  
                      <br></br>
                      
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br> 
                      <br></br>
                      <br></br>
                      <h1 class="h1 fw-bold text-primary text-center mt-5 ml-2 pt-5">Sociozilla</h1>
                      <h4 class="text-center ml-5 mt-2">Connect with friends and the world around you on Sociozilla.</h4>
                  </div>
                  <div class="col-md-5 col-lg-6 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                                        <form onSubmit={handleSubmit}>
                              
                                          <h5 class="fw-bold mb-3 pb-3 text-primary" style={{ letterSpacing: "1px" }}>Signup into your account</h5>
                                                <div className="form-outline mb-2">
                                                    <label htmlFor="fullname">Full Name</label>
                                                    <input type="text" className="form-control" id="fullname" name="fullname"
                                                        onChange={handleChangeInput} value={fullname}
                                                        style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}` }} />

                                                    <small className="form-text text-danger">
                                                        {alert.fullname ? alert.fullname : ''}
                                                    </small>
                                                </div>

                                                <div className="form-outline mb-2">
                                                    <label htmlFor="username">User Name</label>
                                                    <input type="text" className="form-control" id="username" name="username"
                                                        onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
                                                        style={{ background: `${alert.username ? '#fd2d6a14' : ''}` }} />

                                                    <small className="form-text text-danger">
                                                        {alert.username ? alert.username : ''}
                                                    </small>
                                                </div>

                                                <div className="form-outline mb-2">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                                                        onChange={handleChangeInput} value={email}
                                                        style={{ background: `${alert.email ? '#fd2d6a14' : ''}` }} />

                                                    <small className="form-text text-danger">
                                                        {alert.email ? alert.email : ''}
                                                    </small>
                                                </div>

                                                <div className="form-outline mb-2">
                                                    <label htmlFor="exampleInputPassword1">Password</label>

                                                    <div className="pass">

                                                        <input type={typePass ? "text" : "password"}
                                                            className="form-control" id="exampleInputPassword1"
                                                            onChange={handleChangeInput} value={password} name="password"
                                                            style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }} />

                                                        <small onClick={() => setTypePass(!typePass)}>
                                                            {typePass ? 'Hide' : 'Show'}
                                                        </small>
                                                    </div>

                                                    <small className="form-text text-danger">
                                                        {alert.password ? alert.password : ''}
                                                    </small>
                                                </div>

                                                <div className="form-outline mb-2">
                                                    <label htmlFor="cf_password">Confirm Password</label>

                                                    <div className="pass">

                                                        <input type={typeCfPass ? "text" : "password"}
                                                            className="form-control" id="cf_password"
                                                            onChange={handleChangeInput} value={cf_password} name="cf_password"
                                                            style={{ background: `${alert.cf_password ? '#fd2d6a14' : ''}` }} />

                                                        <small onClick={() => setTypeCfPass(!typeCfPass)}>
                                                            {typeCfPass ? 'Hide' : 'Show'}
                                                        </small>
                                                    </div>

                                                    <small className="form-text text-danger">
                                                        {alert.cf_password ? alert.cf_password : ''}
                                                    </small>
                                                </div>

                                                <div className="row justify-content-between mx-0 mb-1">
                                                    <label htmlFor="male">
                                                        Male: <input type="radio" id="male" name="gender"
                                                            value="male" defaultChecked onChange={handleChangeInput} />
                                                    </label>

                                                    <label htmlFor="female">
                                                        Female: <input type="radio" id="female" name="gender"
                                                            value="female" onChange={handleChangeInput} />
                                                    </label>

                                                    <label htmlFor="other">
                                                        Other: <input type="radio" id="other" name="gender"
                                                            value="other" onChange={handleChangeInput} />
                                                    </label>
                                                </div>

                                                <button type="submit" className="btn btn-primary w-100">
                                                    Register
                                                </button>

                                                <p className="my-2">
                                                    Already have an account? <Link to="/" style={{ color: "crimson" }}><a className="text-primary">Login Now</a></Link>
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

export default Register
