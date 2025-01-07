import React from "react";
import "../styles/ServicesSection.css";

const ServicesSection = () => {
  const handleRequestService = () => {
    document.getElementById("request").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Find Popular Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="service-card card">
              <div className="card-body">
                <h3 className="card-title">Web Development</h3>
                <p className="card-text">
                  Bring your business to life online with stunning, responsive, and user-friendly websites that not only captivate visitors but also drive engagement and sales. Our web development service ensures seamless performance and attractive designs tailored to meet your business needs.
                </p>
                <button className="btn btn-primary" onClick={handleRequestService}>Request Service</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card card">
              <div className="card-body">
                <h3 className="card-title">Mobile App Development</h3>
                <p className="card-text">
                  Transform your ideas into reality with cutting-edge mobile apps designed for both iOS and Android. From concept to deployment, we create sleek, fast, and intuitive applications that provide the ultimate user experience, helping you stay ahead in the digital world.
                </p>
                <button className="btn btn-primary" onClick={handleRequestService}>Request Service</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card card">
              <div className="card-body">
                <h3 className="card-title">Social Media Post</h3>
                <p className="card-text">
                  Boost your online presence with eye-catching and engaging social media posts crafted to captivate your audience. Stand out on platforms like Instagram, Facebook, and Twitter with custom graphics and compelling content designed to enhance visibility and increase follower engagement.
                </p>
                <button className="btn btn-primary" onClick={handleRequestService}>Request Service</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card card">
              <div className="card-body">
                <h3 className="card-title">Flyers</h3>
                <p className="card-text">
                  Make a lasting impression with high-quality, professionally designed flyers that highlight your events or promotions. Whether for personal gatherings or corporate events, our flyer designs ensure your message is clear, attractive, and impactful.
                </p>
                <button className="btn btn-primary" onClick={handleRequestService}>Request Service</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card card">
              <div className="card-body">
                <h3 className="card-title">Posters</h3>
                <p className="card-text">
                  Capture attention and generate buzz with vibrant, high-resolution posters that effectively promote your products, services, or events. Our design experts ensure that each poster is visually stunning and aligned with your brand identity to maximize outreach and engagement.
                </p>
                <button className="btn btn-primary" onClick={handleRequestService}>Request Service</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card card">
              <div className="card-body">
                <h3 className="card-title">Brand Identity</h3>
                <p className="card-text">
                  Define and elevate your brand with a comprehensive identity package. From choosing the right color palette to crafting logos and typography, we help establish a cohesive and memorable brand identity that resonates with your audience and differentiates you from the competition.
                </p>
                <button className="btn btn-primary" onClick={handleRequestService}>Request Service</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card card">
              <div className="card-body">
                <h3 className="card-title">Logo Design</h3>
                <p className="card-text">
                  Stand out from the crowd with a unique, professionally designed logo that reflects your brand's values and mission. Our custom logo designs are crafted to leave a lasting impression and create strong visual associations with your business.
                </p>
                <button className="btn btn-primary" onClick={handleRequestService}>Request Service</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card card">
              <div className="card-body">
                <h3 className="card-title">Video Editing</h3>
                <p className="card-text">
                  Our video editing service transforms your raw footage into compelling visual stories that captivate your audience. Whether you're looking to create promotional videos, social media content, corporate presentations, or personal projects, our skilled editors bring your vision to life with precision and creativity.
                </p>
                <button className="btn btn-primary" onClick={handleRequestService}>Request Service</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card card">
              <div className="card-body">
                <h3 className="card-title">Photo Editing</h3>
                <p className="card-text">
                  Our photo editing service brings your images to life with professional enhancements that highlight their true potential. Whether you need high-quality retouching for portraits, product photography, or creative compositions, we deliver results that stand out.
                </p>
                <button className="btn btn-primary" onClick={handleRequestService}>Request Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
