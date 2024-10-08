import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import "./contact.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div id="contact-section" style={{ padding: "50px 0" }}>
      <Container className="mt-5">
        <div className="contact-heading text-center mb-5">
          <h2 style={{ color: "#fff", fontSize: "40px" }}>
            Let’s Build Together.
          </h2>
          {/* <p style={{ color: "white" }}>
            
          </p> */}
        </div>

        <Row>
          <Col xs={12} md={6} className="mb-4">
            <div
              className="contact-details p-4"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3 className="mb-3" style={{ color: "#fff", fontWeight: "900" }}>
                Connect With Us
              </h3>
              <div className="d-flex flex-column">
                <p
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "16px",
                    wordWrap: "break-word",
                    color: "#ddd",
                  }}
                >
                  <RiWhatsappFill
                    style={{
                      fontSize: "30px",
                      marginRight: "10px",
                      color: "#ddd",
                    }}
                  />
                  +91 93616 24563
                </p>
                <p
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "14px",
                    wordWrap: "break-word",
                    color: "#ddd",
                  }}
                >
                  <MdEmail
                    style={{
                      fontSize: "30px",
                      marginRight: "10px",
                      color: "#ddd",
                    }}
                  />
                  support@madads.co.in
                </p>
                <h3 style={{ color: "#fff", fontWeight: "900" }}>Meet Us</h3>
                <p
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "14px",
                    wordWrap: "break-word",
                    color: "#ddd",
                  }}
                >
                  347, Old Gst Road, East Tambaram, Chennai - 600059
                </p>

                {/* Social Media Icons Section */}
                <div className="d-flex align-items-center mt-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", marginRight: "10px" }}
                  >
                    <FaFacebookF style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", marginRight: "10px" }}
                  >
                    <RiTwitterXFill style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", marginRight: "10px" }}
                  >
                    <FaInstagram style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", marginRight: "10px" }}
                  >
                    <FaLinkedinIn style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", marginRight: "10px" }}
                  >
                    <FaYoutube style={{ fontSize: "25px" }} />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Form Section */}
          <Col xs={12} md={6} className="mb-4">
            <div
              className="contact-details p-4"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  marginBottom: "20px",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Talk To Us
              </h3>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>
                    Name
                  </Form.Label>
                  <Form.Control
                    className="mb-3 enquiry-input"
                    type="text"
                    placeholder="Your Name"
                    style={{
                      borderRadius: "25px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupNumber">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    className="mb-3 enquiry-input"
                    type="number"
                    placeholder="Your Number"
                    style={{
                      borderRadius: "25px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupService">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>
                    Service Required
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="mb-3 enquiry-input"
                    style={{
                      borderRadius: "25px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  >
                    <option value="" style={{color:"black"}}>Select a service</option>
                    <option value="service1" style={{color:"black"}}>Web Development</option>
                    <option value="service2" style={{color:"black"}}>App Development</option>
                    <option value="service3" style={{color:"black"}}>Digital Marketing</option>
                    <option value="service4" style={{color:"black"}}>SEO(Search Engine Optimization)</option>
                    <option value="service5" style={{color:"black"}}>Content Creation</option>
                    <option value="service6" style={{color:"black"}}>Designing</option>
                    <option value="service7" style={{color:"black"}}>UI/UX</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formGroupMessage">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>
                    If You Want Any Service Not Mentioned
                  </Form.Label>
                  <Form.Control
                    className="enquiry-input"
                    as="textarea"
                    type="text"
                    rows={3}
                    placeholder="Mention Here"
                    style={{
                      borderRadius: "15px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color:"white",
                    }}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center align-items-center mt-3">
                  <div
                    className="g-recaptcha"
                    data-sitekey="your_site_key"
                  ></div>
                  <Link className="btn-common">Send Message</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
