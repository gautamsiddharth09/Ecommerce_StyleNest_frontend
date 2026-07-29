
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pageStyles/About.css";

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1>About StyleNest</h1>
            <p>
              StyleNest is your trusted destination for premium fashion,
              electronics, home essentials, and lifestyle products. We make
              online shopping simple, secure, and enjoyable.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section container">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80"
              alt="StyleNest"
            />
          </div>

          <div className="about-content">
            <h2>Who We Are</h2>

            <p>
              StyleNest is a modern eCommerce platform built to provide customers
              with quality products at affordable prices. From fashion and
              accessories to electronics and home essentials, we offer everything
              you need in one place.
            </p>

            <p>
              Our focus is on delivering an exceptional shopping experience
              through secure payments, fast delivery, and excellent customer
              support.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mission-section container">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To provide quality products at competitive prices while delivering
              an outstanding shopping experience.
            </p>
          </div>

          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To become one of the most trusted online shopping destinations by
              focusing on innovation and customer satisfaction.
            </p>
          </div>

          <div className="card">
            <h3>Our Values</h3>
            <p>
              We believe in quality, transparency, reliability, innovation, and
              putting our customers first.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-us container">
          <h2>Why Choose StyleNest?</h2>

          <div className="features">
            <div className="feature-box">
              <h4>Premium Quality</h4>
              <p>Every product is carefully selected to ensure high quality.</p>
            </div>

            <div className="feature-box">
              <h4>Secure Shopping</h4>
              <p>Your personal information and payments are always protected.</p>
            </div>

            <div className="feature-box">
              <h4>Fast Delivery</h4>
              <p>Quick shipping with reliable delivery across the country.</p>
            </div>

            <div className="feature-box">
              <h4>Customer Support</h4>
              <p>Our support team is always ready to assist you.</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;