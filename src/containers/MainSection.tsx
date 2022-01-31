import React,{useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'


export default function MainSection() {
  const { i18n } = useLingui()
  const router = useRouter()
   
  const [icon,setIcon] = useState(`/icons/${router.locale}-icon.webp`);
   
  const changeLang = (e) => {
    router.push(router.pathname, router.pathname, {
       locale: e.target.value,
    })

    setIcon(`/icons/${e.target.value}-icon.webp`)
  };
  
  return (
    <section className="main-section d-flex flex-column container-fluid p-0 position-relative">
      <div className="container max-width">
        {/*NAV*/}
        <div className="mist-nav">
          <nav className="d-flex justify-content-between w-100 h-100 text-white fixed">
            <ul className="nav align-self-center ms-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <div className="navbar-brand d-flex">
                    <span className="me-2  align-self-center">
                      {" "}
                      <img src="/icons/logo-icon.webp" className="logo" alt="logo-icon" />
                    </span>
                    <span className="align-self-center">
                      <img src="/icons/logo-letter.webp" className="logo-letter" alt="logo-letter" />
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="nav center-links d-none d-lg-flex mt-5 me-5 justify-content-between">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {i18n._(t`Analytics`)}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {i18n._(t`Misty Lake`)}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {i18n._(t`Documentation`)}
                </a>
              </li>
            </ul>

            {/*LANG */}

            <div className="lang mt-md-5 d-flex justify-content-center me-3">
              <img src={icon} className="me-2" width={30} height={30} alt="lang-icon" />
              <select
                className="form-select text-white  rounded-2 bg-transparent"
                aria-label="Default select example"
                onChange={changeLang}
              >
                <option value={"en"} selected={(router.locale === "en") ? true : false} >En</option>
                <option value={"es"}  selected={(router.locale === "es") ? true : false} >Es</option>
              </select>
            </div>
          </nav>
        </div>
        {/*COIN-BOARD*/}
        <ul className="nav mx-auto center-links d-lg-none justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-white" href="https://analytics.mistswap.fi">
              {i18n._(t`Analytics`)}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="https://lake.mistswap.fi">
              {i18n._(t`Misty Lake`)}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="https://docs.mistswap.fi">
              {i18n._(t`Documentation`)}
            </a>
          </li>
        </ul>

        <div className="coin-board d-flex flex-column rounded-pill position-absolute bg-light">
          <ul className="w-100 h-100 d-flex rounded-pill ">
            <li className="flex-fill  flex-column border-end-gray">
              <span className="desc-price text-success">{i18n._(t`Price`)}</span>
              <div className="price-coin ">$00.0</div>
            </li>
            <li className="flex-fill  flex-column border-end-gray">
              <span className="ms-3 desc-price text-success">
                {i18n._(t`Total Value Locked`)}
              </span>
              <div className="ms-3 price-coin">$00.0</div>
            </li>
            <li className="flex-fill penul flex-column border-end-gray ">
              <span className="ms-3 desc-price text-success">{i18n._(t`Volume`)}</span>
              <div className="ms-3 price-coin">$00.0</div>
            </li>
            <li className="flex-fill d-none d-md-flex justify-content-between">
              <div className="flex-column">
                <span className="ms-3  desc-price text-success">{i18n._(t`Pairs`)}</span>
                <div className="ms-3 price-coin">$00.0</div>
              </div>
              <a href="#" className="btn btn-cool text-white rounded-pill">
                {i18n._(t`Enter App`)}
              </a>
            </li>
          </ul>
          
          {/*BUTTON RESPONSIVE*/}
          <a href="#" className="btn btn-cool mx-auto d-md-none text-white rounded-pill">
            {i18n._(t`Enter App`)}
          </a>
        </div>

        
        {/*COIN FACTORY*/}
        <div className="coin-factory w-100 d-flex justify-content-center">
          {/* <Image src="/images/coin-factory.webp" alt="coin-factory" width={500} height={500}/> */}
          <img src="/images/coin-factory.webp" alt="coin-factory" />
        </div>
        {/*TITLE & SLOGAN*/}
        <div className="main-text  mt-4 d-flex flex-column flex-md-row text-white bg-transparent w-full">
        <h1 className="mist-title flex text-center fw-bolder">
          {i18n._(t`DeFi on Bitcoin Cash`)}
        </h1>
        <p className="mist-slogan w-100 text-center text-md-end">
          {i18n._(t`Trade, launch, stake, farm, invest, automate, build on the premier DeFi platform of smartBCH`)}
        </p>
      </div> 
      </div>
    </section>
  );
};
