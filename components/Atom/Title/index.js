import React from "react"
import PropTypes from "prop-types"

const HEADING_TAGS = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
}

const SIZES = {
	giant: "giant",
	xxxl: "xxxl",
	xxl: "xxl",
	xl: "xl",
	l: "l",
	m: "m",
	s: "s",
	xs: "xs",
}

export function Title ({
	as: Heading = HEADING_TAGS.h1,
	align = "left",
	spacelessTop = false,
	spacelessBottom = false,
	size = SIZES.l,
	children,
	...rest
}) {
	const classes = [
		`is--${align}`,
		`is--${size}`,
		spacelessTop ? "is--spaceless-top" : "",
		spacelessBottom ? "is--spaceless-bottom" : "",
	].join(" ")
  
	return (
		<Heading className={classes} {...rest}>
			{children}
			<style jsx>{`
				h1,h2,h3,h4,h5,h6 {
					color: var(--c-grey-darkest);
					font-family: var(--ff-serif);
					color: black;
					letter-spacing: -1px;
					font-weight: bold;
				}

        .is--spaceless-top {
          margin-top: 0 !important;
				}
				
				.is--spaceless-bottom {
          margin-bottom: 0 !important;
				}
				
				.is--giant {
					font-size: 2rem;
					line-height: 1.25;
					margin-top: 2.25rem;
					margin-bottom: 1.5rem;
					letter-spacing: -2px;
				}

				.is--l {
					font-size: 1.75rem;
					margin-bottom: 2rem;
					margin-top: 2.5rem;
				}
				
				.is--m {
					font-size: 1.25rem;
					font-weight: 600;
					margin-bottom: 0.75rem;
					margin-top: 1.5rem;
				}

				@media screen and (min-width: 768px) {
          .is--giant {
						font-size: 3rem;
						margin-bottom: 3rem;
					}
					
					.is--l {
						font-size: 2rem;
					}

					.is--m {
						font-size: 1.35rem;
					}
        }

        @media screen and (min-width: 1024px) {
          .is--giant {
            font-size: 3.5rem;
          }
        }

        .is--left {text-align: left;}
        .is--center {text-align: center;}
        .is--right {text-align: right;}
      `}</style>
		</Heading>
	)
}

Title.propTypes = {
	as: PropTypes.oneOf(Object.values(HEADING_TAGS)),
	size: PropTypes.oneOf(Object.values(SIZES)),
	align: PropTypes.string,
	spacelessBottom: PropTypes.bool,
	spacelessTop: PropTypes.bool,
	children: PropTypes.node,
}

export const titleSizes = SIZES
export const titleTags = HEADING_TAGS