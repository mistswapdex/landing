import React from "react";

const AdvantagesSection = ({ lang }) => {
  return (
    <section className="container-fluid advantages-section pt-5 ">
      <div className="max-width position-relative ">
        <img
          src=".//icons/middle-mist-logo-l.webp"
          className="middle-icon-mist-small-l position-absolute"
          alt="middle-icon-mist"
        />
        <div className="mx-project as-text d-flex flex-column">
          <h2 className="text-center fw-bolder mt-5">{lang.title}</h2>
          <p className="text-center mx-auto">{lang.text}</p>
        </div>
        <div className="mx-cards">
          <div className=" w-100 d-flex flex-column  flex-xl-row justify-content-between ">
            {/*CARD ITEM*/}
            <div className=" card-box me-2   d-flex align-self-center  justify-content-center align-items-center rounded-2 position-relative">
              <div className="card-box-body  d-flex flex-column rounded-2">
                <div className="icon-container d-flex justify-content-center align-items-center rounded-circle position-absolute">
                  <img src="/icons/earn-icon.webp" alt="icon-card-box" />
                </div>
                <div className="card-box-text d-flex flex-column justify-content-end align-items-center align-self-center">
                  <h3 className="text-center">{lang.card_1.title}</h3>
                  <p className="text-center">{lang.card_1.text}</p>
                </div>
              </div>
            </div>
            {/*CARD ITEM*/}
            <div className=" card-box me-2  align-self-center d-flex  justify-content-center align-items-center rounded-2 position-relative">
              <div className="card-box-body d-flex flex-column rounded-2">
                <div className="icon-container d-flex justify-content-center align-items-center rounded-circle position-absolute">
                  <img src="/icons/stake-icon.webp" alt="icon-card-box" />
                </div>
                <div className="card-box-text d-flex flex-column justify-content-end align-items-center align-self-center">
                  <h3 className="text-center">{lang.card_2.title}</h3>
                  <p className="text-center">{lang.card_2.text}</p>
                </div>
              </div>
            </div>
            {/*CARD ITEM*/}
            <div className=" card-box d-flex align-self-center   justify-content-center align-items-center rounded-2 position-relative">
              <div className="card-box-body p-5 d-flex flex-column rounded-2">
                <div className="icon-container d-flex justify-content-center align-items-center rounded-circle position-absolute">
                  <img src="/icons/redeem-icon.webp" alt="icon-card-box" />
                </div>
                <div className="card-box-text d-flex flex-column justify-content-end align-items-center align-self-center">
                  <h3 className="text-center mt-1">{lang.card_3.title}</h3>
                  <p className="text-center">{lang.card_3.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
