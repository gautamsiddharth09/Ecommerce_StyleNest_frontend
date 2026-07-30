import React from 'react'
import Navbar from "../components/Navbar";
import Navbar from "../components/Footer";
import "../pageStyles/Contact.css"

function contact() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you. Whether you have a question about an
              order, products, or anything else, our team is here to help.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section container">
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <div className="info-item">
              <h4>Address</h4>
              <p>Patna, Bihar, India</p>
            </div>

            <div className="info-item">
              <h4>Email</h4>
              <p>support@stylenest.com</p>
            </div>

            <div className="info-item">
              <h4>Phone</h4>
              <p>+91 78082 33110</p>
            </div>

            <div className="info-item">
              <h4>Working Hours</h4>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 7:00 PM</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send a Message</h2>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default contact