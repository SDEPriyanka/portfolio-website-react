import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <div className="container">
        <div className="contact-info">
        <div className="contact-form-heading">
                  <h6><b>Send Message Us</b></h6>
                </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-form card">
      
                <div className="contact-form-1 ">
                  <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                  />

                  <div>
                    <div className="contact-form-wrapper d-flex justify-content-center ">
                      <form action="#" className="contact-form">
                        <h5 className="title">Contact us</h5>
                        <p className="description">
                          Feel free to contact us if you need any assistance,
                          any help or another question.
                        </p>
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
                          <textarea
                            id="message"
                            className="form-control rounded border-white mb-3 form-text-area"
                            rows="5"
                            cols="30"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                        <div className="submit-button-wrapper">
                          <input type="submit" value="Send" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-desc card ">
                <div className="contact-desc-heading">
                  <h6>Get in Touch</h6>
                </div>
                <div className="contact-desc-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolorum dolorem soluta quidem expedita aperiam
                    aliquid at. Totam magni ipsum suscipit amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta  Facilis dolorum dolorem Facilis dolorum dolorem Facilis dolorum dolorem expedita  soluta quidem expedita  aliquid at.Totam magni ipsum suscipit amet?Lorem . Facilis dolorum dolorem solutaedita  aliquid at.Totam magni ipsum suscipit amet?Lorem .    Facilis dolorum dolorem Facilis dolorum dolorem Facilis dolorum dolorem expedita 
                    laboriosam ratione nobis mollitia inventore?
                  </p>
                </div>
                <div className="contact-desc-address">
                  <ul>
                    <li>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> 329
                      WASHINGTON ST BOSTON, MA 021
                    </li>
                    <li>
                      <i className="fa fa-mobile" aria-hidden="true"></i> (617)
                      557-0089
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                      contact@example.com
                    </li>
                  </ul>
                </div>
                <div className="contact-desc-socialmedia">
                  <ul>
                    <li>
                      <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-twitter-square" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
