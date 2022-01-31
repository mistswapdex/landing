import React from "react";
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

export default function FaqSection() {
  const { i18n } = useLingui()

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
            <h4 className="fw-bolder">{i18n._(t`Frequently asked questions`)}</h4>
            <p className="fw-normal mx-auto mx-md-0 ">
              {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`)}
            </p>
          </div>
          <div className="faq-boxes mx-auto d-flex flex-column flex-lg-row">
            <ul className="list-group mx-auto  faq-group"  id="questions">
              <li className="list-group-item">
                <a href="#A" className="text-decoration-none text-white">
                  {i18n._(t`Lorem ipsum dolor`)}
                </a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item dropdown-item"  >
                <a href="#B" className="text-decoration-none text-white">
                  {i18n._(t`Lorem ipsum dolor`)}
                </a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
                <a href="#C" className="text-decoration-none text-white">
                  {i18n._(t`Lorem ipsum dolor`)}
                </a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
                <a href="#D" className="text-decoration-none text-white">
                  {i18n._(t`Lorem ipsum dolor`)}
                </a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
                <a href="#E" className="text-decoration-none text-white">
                  {i18n._(t`Lorem ipsum dolor`)}
                </a>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
                <a href="#F" className="text-decoration-none text-white">
                  {i18n._(t`Lorem ipsum dolor`)}
                </a>
                <i className="bi bi-chevron-right" />
              </li>
            </ul>
            <div className="answer-box mx-auto scrollspy-example" data-bs-spy="scroll" data-bs-target="#questions" data-bs-offset={0}  tabIndex={0}>
              <p className="answer-text ps-4  text-white mt-4"  id="A">
                {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto erat.`)}
              </p>

              <p className="answer-text ps-4   text-white mt-4"  id="B">
                {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto erat.`)}
              </p>

              <p className="answer-text ps-4  text-white mt-4"  id="C">
                {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto erat.`)}
              </p>

              <p className="answer-text ps-4  text-white mt-4"  id="D">
                {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto erat.`)}
              </p>

              <p className="answer-text ps-4  text-white mt-4"  id="E">
                {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto erat.`)}
              </p>

              <p className="answer-text  ps-4 text-white mt-4"  id="F">
                {i18n._(t`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto erat.`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
