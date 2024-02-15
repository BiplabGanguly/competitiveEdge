import React from "react";
import '../CSSfolder/home.css';
import examimg from '../Public/homeExam.png';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row home-row">
          <div className="col-md-6">
            <div className="content">
              <h2 className="home-title">Competitive Edge</h2>
              <div className="home-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quae aut at provident aliquam fugit. Debitis quasi obcaecati
                deserunt repudiandae nulla asperiores optio nam voluptatem hic,
                ex vero doloribus earum facere.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos quisquam optio error praesentium accusantium aliquid
                minus quae similique tempora dicta dolorum et, laborum corrupti ea eum officia esse.
                Assumenda, praesentium?
              </div>
              <div className="row">
                <div className="col-md-3 offset-md-5">
                  <button type="button" className="btn btn-home">Student</button>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="img-container">
              <img src={examimg} alt="exam" className="img-home" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
