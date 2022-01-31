import React from "react";
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

export default function TokenSection() {
  const { i18n } = useLingui()

  return (
    <section className="token-section  container-fluid d-flex flex-column justify-content-center">
      <div className="max-width">
        <div className="container">
          <h4 className="text-center mb-2 mb-md-5 fw-normal">{i18n._(t`Top tokens`)}</h4>
          <div className="d-flex w-100 mt-2 justify-content-center">
            <div className="tokens d-flex justify-content-between">
              <img src="/icons/token-icon.webp" className="ms-2" alt="token-icon" />
              <img src="/icons/token-icon.webp" alt="token-icon" />
              <img src="/icons/token-icon.webp" alt="token-icon" />
              <img src="/icons/token-icon.webp" alt="token-icon" />
              <img src="/icons/token-icon.webp" className="me-2" alt="token-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
