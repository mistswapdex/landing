import React from "react";
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

export default function WeDoSection() {
  const { i18n } = useLingui()

  return (
    <div className="we-do-section position-relative">
      <div className="max-width">
        <div className="mx-project">
          <div className="d-flex flex-column">
            <p className="text-center mx-auto fw-bolder">
              {i18n._(t`We are building tools that enable people to interact permissionlessly, without borders.`)}
            </p>
            <p className="text-center mx-auto fw-bolder mt-2">
              {i18n._(t`Only with Bitcoin Cash.`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
