import React from "react"
import PropTypes from "prop-types"

export function Paragraph({
	align = "left",
	spacelessTop = false,
	spacelessBottom = false,
	size = "medium",
	children,
	...rest
}) {
	const classes = [
		`is-aligned--${align}`,
		`is--${size}`,
		spacelessTop ? "is--spaceless-top" : "",
		spacelessBottom ? "is--spaceless-bottom" : "",
	].join(" ")
  
	return (
		<>
			<p className={classes} {...rest}>{children}</p>
			<style jsx>{`
				p {
					letter-spacing: 0.25px;
					color: #313842;
					font-size: 1.125rem;
					line-height: 1.5;
					letter-spacing: 0;
				}

				.is--spaceless-top {margin-top: 0 !important;}
				.is--spaceless-bottom {margin-bottom: 0 !important;}
				.is-aligned--left {text-align: left;}
				.is-aligned--center {text-align: center;}

				@media screen and (min-width: 768px) {
					p {
						font-size: 1.25rem;
					}
				}
    `}</style>
		</>
	)
}

Paragraph.propTypes = {
	align: PropTypes.oneOf(["left", "center", "right", "justify"]),
	size: PropTypes.oneOf(["small", "medium", "large"]),
	spacelessTop: PropTypes.bool,
	spacelessBottom: PropTypes.bool,
	children: PropTypes.any.isRequired
}