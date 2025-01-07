import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="main-content">
      <section className="about-page">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Welcome to Newton Designs, where creativity meets innovation. Since our inception, <br />
            we’ve been driven by a singular mission: to empower businesses and individuals <br />
            with tailored digital solutions that inspire, engage, and deliver results.<br />
          </p>
          <p>
            At Newton Designs, we specialize in a diverse range of services, including cutting-edge<br />
            web design, dynamic mobile app development, and impactful branding strategies.<br /> 
            Whether you're a budding startup looking to establish a digital presence or <br />
            an established enterprise aiming to reimagine your brand, our team of <br />
            dedicated experts is here to bring your vision to life.<br />
          </p>
          <p>
            What sets us apart is our unwavering commitment to excellence and attention to detail. <br />
            Every project we undertake is infused with our core values of creativity, integrity,<br /> 
            and customer-centricity. We don’t just deliver solutions—we build lasting <br />
            relationships with our clients, ensuring that your success is our success.<br />
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>1K+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>1K+</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
          <p>
            Join us on this journey of innovation and creativity. Let Newton Designs transform your ideas into <br />
            digital masterpieces that resonate with your audience and drive meaningful results.<br />
          </p>
          <p>
            Visit us at our office or get in touch to start your next project. <br />
            We are located at:
          </p>
          <address>
            <strong>Newton Designs</strong><br />
            Landless<br />
            THIKA, Kenya<br />
            Phone: +254 115 332 870<br />
            Email: mwanginewton239@gmail.com
          </address>
        </div>
      </section>
    </div>
  );
};

export default About;
