import React from "react";

const FaqSection = ({ lang }) => {
  return (
    <div className="faq-section position-relative">
      <div className="max-width">
        <img
          src="/icons/crecent-mist-icon.webp"
          className="crecent-mist-icon position-absolute"
          alt="icon-crecent-mist"
        />
        <div className="mx-project">
          <div className="faq-text text-white text-center">
            <h4 className="fw-bolder">{lang.title}</h4>
            <p className="fw-normal mx-auto mx-md-0 ">{lang.text}</p>
          </div>
          <div className="faq-boxes mx-auto d-flex flex-column flex-lg-row">
            <ul className="list-group mx-auto  faq-group"  id="questions">
              <li className="list-group-item">
              <a href="#A" className="text-decoration-none text-white">{lang.questions.A}</a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item dropdown-item"  >
                <a href="#B" className="text-decoration-none text-white">{lang.questions.B}</a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
              <a href="#C" className="text-decoration-none text-white">{lang.questions.C}</a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
              <a href="#D" className="text-decoration-none text-white">{lang.questions.D}</a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
              <a href="#E" className="text-decoration-none text-white">{lang.questions.E}</a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
              <a href="#F" className="text-decoration-none text-white">{lang.questions.F}</a>
                <i className="bi bi-chevron-right" />
              </li>
            </ul>
            <div className="answer-box mx-auto scrollspy-example" data-bs-spy="scroll" data-bs-target="#questions" data-bs-offset="0"  tabIndex="0">
              <p className="answer-text ps-4  text-white mt-4"  id="A">
                
                {lang.answers.A}
              </p>

              <p className="answer-text ps-4   text-white mt-4"  id="B">
                
                {lang.answers.A}
              </p>
              <p className="answer-text ps-4  text-white mt-4"  id="C">
                
                {lang.answers.A}
              </p>

              <p className="answer-text ps-4  text-white mt-4"  id="D">
                
                {lang.answers.A}
              </p>

              <p className="answer-text ps-4  text-white mt-4"  id="E">
                
                {lang.answers.A}
              </p>

              <p className="answer-text  ps-4 text-white mt-4"  id="F">
                
                {lang.answers.A}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
