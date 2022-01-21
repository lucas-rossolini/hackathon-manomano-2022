import React from "react";
import "./FalsePagination.scss";

function FalsePagination() {
  return (
    <div className="lazyListingPagination">
      <nav className="pagination-nav">
        <span className="pagination-title">pagination</span>
        <ol className="pagination-orderedList">
          <li className="pagination-li">
            <span className="pagination-item pagination-item-disable">
              <svg
                aria-hidden="true"
                focusable="false"
                height="1em"
                role="presentation"
                width="1em"
                viewBox="0 0 24 24"
                className="svg_preview-page"
              >
                <g id="iconsChevronLeftRound">
                  <path d="M14.71 6.71a.996.996 0 00-1.41 0L8.71 11.3a.996.996 0 000 1.41l4.59 4.59a.996.996 0 101.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
                </g>
              </svg>
            </span>
          </li>
          <li className="pagination-li">
            <span className="pagination-button-page-1">1</span>
          </li>
          <li className="pagination-li">
            <span className="pagination-button-page">2</span>
          </li>
          <li className="pagination-li">
            <span className="pagination-button-page">3</span>
          </li>
          <li className="pagination-li filler">
            <span className="">...</span>
          </li>
          <li className="pagination-li">
            <span className="pagination-button-page">5</span>
          </li>
          <li className="pagination-li">
            <span className="pagination-item">
              <svg
                aria-hidden="true"
                focusable="false"
                height="1em"
                role="presentation"
                width="1em"
                viewBox="0 0 24 24"
                className="svg_next-page"
              >
                <g id="iconsChevronRightRound">
                  <path d="M9.29 6.71a.996.996 0 000 1.41L13.17 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
                </g>
              </svg>
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default FalsePagination;
