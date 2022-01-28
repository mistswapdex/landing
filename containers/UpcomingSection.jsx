import React from "react";

const UpcomingSection = ({ lang }) => {
  return (
    <section className="mist-carousel upcoming text-white position-relative container-fluid">
      <div className="max-width">
        {" "}
        <img
          src="/icons/middle-mist-logo.webp"
          className="left-icon-mist-down position-absolute"
          alt="middle-icon-mist"
        />
        <div className="mx-project mx-carousel h-100">
          <div className="w-100 title-section d-flex justify-content-between">
            <h2 className="fw-bolder  d-none d-md-block">{lang.title}</h2>
            {/*CAROUSEL CONTROLS*/}
            <div className="d-flex  mx-auto justify-content-between me-md-3">
              <button
                className="carousel-control-prev me-4"
                type="button"
                data-bs-target="#upcomingSection"
                data-bs-slide="prev"
              >
                <i className="bi bi-chevron-left fs-4" />
                <span className="visually-hidden">Previous</span>
              </button>

              <h2 className="fw-bolder  d-md-none ">{lang.title}</h2>
              <button
                className="carousel-control-next  ms-4"
                type="button"
                data-bs-target="#upcomingSection"
                data-bs-slide="next"
              >
                <i className="bi bi-chevron-right fs-4" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/*CAROUSEL */}
          <div
            id="upcomingSection"
            className="carousel slide mt-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/*ITEM CAROUSEL*/}
              <div className="carousel-item active mb-5">
                <div className="row row-cols-1 row-cols-md-2">
                  <div className="d-none d-md-flex col" />
                  <div className="col">
                    <h3 className="fw-bolder title-carousel text-center text-md-start">
                      {lang.title_carousel}
                    </h3>
                    <p className="text-carousel text-center text-md-start">
                      {lang.text_carousel}
                    </p>
                    <a
                      href="#"
                      className="btn-mist mt-4 text-decoration-none py-1 px-3 rounded-pill"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/*ITEM CAROUSEL*/}
              <div className="carousel-item  mb-5">
                <div className="row row-cols-1 row-cols-md-2">
                  <div className="d-none d-md-flex col" />
                  <div className="col">
                    <h3 className="fw-bolder title-carousel text-center text-md-start">
                      {lang.title_carousel}
                    </h3>
                    <p className="text-carousel text-center text-md-start">
                      {lang.text_carousel}
                    </p>
                    <a
                      href="#"
                      className="btn-mist mt-4 text-decoration-none py-1 px-3 rounded-pill"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              {/*ITEM CAROUSEL*/}
              <div className="carousel-item  mb-5">
                <div className="row row-cols-1 row-cols-md-2">
                  <div className="d-none d-md-flex col" />
                  <div className="col">
                    <h3 className="fw-bolder title-carousel text-center text-md-start">
                      {lang.title_carousel}
                    </h3>
                    <p className="text-carousel text-center text-md-start">
                      {lang.text_carousel}
                    </p>
                    <a
                      href="#"
                      className="btn-mist mt-4 text-decoration-none py-1 px-3 rounded-pill"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
