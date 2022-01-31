import React from "react";
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

export default function Projects() {
  const { i18n } = useLingui()

  return (
    <section className="mist-carousel projects d-flex justify-content-center text-white container-fluid">
      <div className="max-width position-relative">
        <img
          src="/icons/middle-mist-logo.webp"
          className="left-icon-mist position-absolute"
          alt="middle-icon-mist"
        />
        <img
          src="/icons/middle-mist-logo-small-r.webp"
          className="middle-icon-mist-small-r position-absolute"
          alt="middle-icon-mist-r"
        />
        <div className="mx-project mx-carousel h-100">
          <div className="w-100 title-section d-flex justify-content-between">
            <h2 className="fw-bolder d-none d-md-block">{i18n._(t`MistSwap`)}</h2>
            {/*CAROUSEL CONTROLS*/}
            <div className="d-flex mx-auto justify-content-between me-md-3">
              <button
                className="carousel-control-prev me-4"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <i className="bi bi-chevron-left fs-4" />
                <span className="visually-hidden">{i18n._(t`Previous`)}</span>
              </button>
              <h2 className="fw-bolder  d-md-none ">{i18n._(t`MistSwap`)}</h2>
              <button
                className="carousel-control-next ms-4"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <i className="bi bi-chevron-right fs-4" />
                <span className="visually-hidden">{i18n._(t`Next`)}</span>
              </button>
            </div>
          </div>
          {/*CAROUSEL */}
          <div
            id="carouselExampleControls"
            className="carousel slide mt-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/*ITEM CAROUSEL*/}
              <div className="carousel-item active mb-5">
                <div className="row row-cols-1 row-cols-lg-2">
                  <div className=" d-none d-md-flex col" />
                  <div className="col">
                    <h3 className="fw-bolder title-carousel text-center text-md-start">
                      {i18n._(t`PROJECTS`)}
                    </h3>
                    <p className="text-carousel text-center text-md-start">
                      {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit ecsse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros`)}
                    </p>
                    <a
                      href="#"
                      className="btn-mist mt-4  text-decoration-none py-1 px-3 rounded-pill"
                    >
                      {i18n._(t`Read More`)}
                    </a>
                  </div>
                </div>
              </div>

              {/*ITEM CAROUSEL*/}
              <div className="carousel-item  mb-5">
                <div className="row row-cols-1 row-cols-lg-2">
                  <div className=" d-none d-md-flex col" />
                  <div className="col">
                    <h3 className="fw-bolder title-carousel text-center text-md-start">
                      {i18n._(t`PROJECTS`)}
                    </h3>
                    <p className="text-carousel text-center text-md-start">
                      {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit ecsse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros`)}
                    </p>
                    <a
                      href="#"
                      className="btn-mist mt-4  text-decoration-none py-1 px-3 rounded-pill"
                    >
                      {i18n._(t`Read More`)}
                    </a>
                  </div>
                </div>
              </div>
              {/*ITEM CAROUSEL*/}
              <div className="carousel-item  mb-5">
                <div className="row row-cols-1 row-cols-lg-2">
                  <div className=" d-none d-md-flex col" />
                  <div className="col">
                    <h3 className="fw-bolder title-carousel text-center text-md-start">
                      {i18n._(t`PROJECTS`)}
                    </h3>
                    <p className="text-carousel text-center text-md-start">
                      {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit ecsse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros`)}
                    </p>
                    <a
                      href="#"
                      className="btn-mist mt-4  text-decoration-none py-1 px-3 rounded-pill"
                    >
                      {i18n._(t`Read More`)}
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
