import React from "react";
import "../CSSfolder/aboutStyle.css";
import aboutimg from "../Public/about.png"



function About(){
    return(
        <>
        <div className="container">
          <div className="row">
          <div className="col-md-6">
            <div className="about-col-img">
            <img src={aboutimg} alt="about" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-col-content">
            <div className="about-title">About</div>
              <div className="about-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quae aut at provident aliquam fugit. Debitis quasi obcaecati
                deserunt repudiandae nulla asperiores optio nam voluptatem hic,
                ex vero doloribus earum facere.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos quisquam optio error praesentium accusantium aliquid
                minus quae similique tempora dicta dolorum et, laborum corrupti ea eum officia esse.
                Assumenda, praesentium?
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
          <div className="about-lower-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos quisquam optio error praesentium accusantium aliquid
                minus quae similique tempora dicta dolorum et, laborum corrupti ea eum officia esse.
                Assumenda, praesentium?
            </div>
            </div>
          </div>
          </div>
          </div>

        </>
    )
}

export default About;