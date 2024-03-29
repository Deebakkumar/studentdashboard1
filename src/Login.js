import React, { Fragment ,useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext';


function Login() {
    const userData=useContext(UserContext);

  return (
    <Fragment>


<div class="container">

<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">

                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block ">
                 <img src="https://mymedbot.com/wp-content/uploads/2020/12/schools.svg"
                   alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">CRUD Operation</h1>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-user"

                                        placeholder="Enter Your Name"

                                         onChange={(e)=>{ 
                                            userData.setUser({...userData.user,name:e.target.value})
                                             console.log(e.target.value)
                                          }} />

                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user"
                                         placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox small">
                                        <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                        <label class="custom-control-label" for="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                               <Link class="btn btn-primary btn-user btn-block" to='/portal/dashboard'>Login</Link> 



                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>

</Fragment>
)
}



export default Login