import React from "react";
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

export default function AdvantagesSection() {
  const { i18n } = useLingui()

  return (
    <section className="container-fluid advantages-section pt-5 ">
      <div className="max-width position-relative ">
        <img
          src=".//icons/middle-mist-logo-l.webp"
          className="middle-icon-mist-small-l position-absolute"
          alt="middle-icon-mist"
        />
        <div className="mx-project as-text d-flex flex-column">
          <h2 className="text-center fw-bolder mt-5">{i18n._(t`Lorem Ipsum`)}</h2>
          <p className="text-center mx-auto">{i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`)}</p>
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
                  <h3 className="text-center">{i18n._(t`EARN`)}</h3>
                  <p className="text-center">{i18n._(t`Earn more by providing liquidity and staking, more than any other exchange. 0.25% for providing liquidity 0.05% for holders of xMIST`)}</p>
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
                  <h3 className="text-center">{i18n._(t`STAKE`)}</h3>
                  <p className="text-center">{i18n._(t`Stake MIST for xMIST and earn fees using the MistBar`)}</p>
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
                  <h3 className="text-center mt-1">{i18n._(t`REDEEM`)}</h3>
                  <p className="text-center">{i18n._(t`Redeem MIST (one-to-one) and DROP (one-to-five) SLP tokens with MIST tokens using Misty Lake.`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
