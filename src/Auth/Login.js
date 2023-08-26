import React from "react";

function Login() {
  return (
    <div className="Login">
      <div className="container">
        <div className="loginform">
          <div className="contact-form-wrapper d-flex justify-content-center ">
            <form action="#" className="contact-form">
              <h5 className="title">Login</h5>

              <div>
                <input
                  type="text"
                  className="form-control rounded border-white mb-3 form-input"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control rounded border-white mb-3 form-input"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  id="password"
                  className="form-control rounded border-white mb-3 form-input"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="submit-button-wrapper">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
