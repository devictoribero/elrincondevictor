import React from "react";
import PropTypes from "prop-types";

export function ListItem({ children }) {
  return (
    <>
      <li>{children}</li>
      <style jsx>{`
        li {
          letter-spacing: -0.75px;
          color: #313842;
          font-size: 1.125rem;
          line-height: 1.45;
          margin-bottom: 0.75rem;
          list-style-type: circle;
        }

        @media screen and (min-width: 768px) {
          li {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}

ListItem.propTypes = {
  // the url of the new list style
  listStyle: PropTypes.string,
  children: PropTypes.any.isRequired,
};
