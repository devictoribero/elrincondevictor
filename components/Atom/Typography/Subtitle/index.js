import React from "react"
import PropTypes from "prop-types"

export function Subtitle({
	align = "left",
	children,
	...rest
}) {
	const classes = [`is-aligned--${align}`].join(" ")
  
	return (
		<>
			<p className={classes} {...rest}>{children}</p>
			<style jsx>{`
				p {
					letter-spacing: 0.25px;
					color: var(--c-grey-900);
					font-size: 1.125rem;
					line-height: 1.5;
					margin-top: 0;
					margin-bottom: 1rem;
				}

				.is-aligned--left {text-align: left;}
				.is-aligned--center {text-align: center;}

				@media screen and (min-width: 768px) {
					p {
						font-size: 1.45rem;
						width: 700px;
					}
				}
    `}</style>
		</>
	)
}

Subtitle.propTypes = {
	align: PropTypes.oneOf(["left", "center", "right", "justify"]),
	children: PropTypes.any.isRequired
}