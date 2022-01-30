import React from "react";
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

export default function Footer() {
  const { i18n } = useLingui()

  return (
    <footer className="pb-2">
      <div className="max-width">
        <div className="mx-project">
          <div className="row p-0 m-0 ">
            <div className="col-12 order-3 order-lg-1 col-lg-4 d-flex justify-content-center mt-5">
              <small className="text-white text-center">{i18n._(t`Copyright 2021`)} - {i18n._(t`All rights reserved`)}</small>
            </div>
            <div className="col-12 order-1 order-lg-2 col-lg-4 mt-5">
              <div className="contact-app d-flex flex-column justify-content-center">
                <div className="contact-icons d-flex justify-content-center">
                  <a href="#" className="me-3">
                    <img src="/icons/telegram.webp" alt="Telegram" />
                  </a>
                  <a href="#" className="me-3">
                    <img src="/icons/twitter.webp" alt="Twitter" />
                  </a>
                  <a href="#" className="me-3">
                    <img src="/icons/discord.webp" alt="Discord" />
                  </a>
                  <a
                    href="#"
                    className="social-icon d-flex justify-content-center align-items-center rounded-circle"
                  >
                    <img src="/icons/social.webp" alt="Social" />
                  </a>
                </div>
                <div className="contact-links text-center mt-3">
                  <a href="#">{i18n._(t`Source code`)}</a> <span>|</span>{" "}
                  <a href="#">{i18n._(t`Docs`)}</a>
                </div>
              </div>
            </div>
            <div className="col-12 order-2 order-lg-3 col-lg-4 mt-5">
              <div className="options-links d-flex flex-column justify-content-center align-items-center  flex-xxl-row   justify-content-between">
                <a href="#">{i18n._(t`Analytics`)}</a>
                <a href="#">{i18n._(t`Misty Lake`)}</a>
                <a href="#">{i18n._(t`Enter App`)}</a>
                <a href="#">{i18n._(t`Language`)}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
