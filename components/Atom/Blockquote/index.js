import React from "react"
import PropTypes from "prop-types"

export function Blockquote({
	align = "left",
	size = "medium",
	children,
	...rest
}) {
	const classes = [
		`is-aligned--${align}`,
		`is--${size}`,
	].join(" ")
  
	return (
		<blockquote>
			<p className={classes} {...rest}>{children}</p>
			<style jsx>{`
				blockquote,
				p {
					margin: 0;
				}

				p {
					text-align: left;
					font-size: 1.25rem;
					font-weight: 500;
					margin-bottom: 1.5rem;
					margin-top: 1.5rem;
					line-height: 1.35;
					letter-spacing: 0.25px;
					font-style: italic;
				}

				p:before, p:after {content: '"';}

				.is-aligned--left {text-align: left;}
      	.is-aligned--center {text-align: center;}

				@media screen and (min-width: 768px) {
					p {
						font-size: 1.5rem;
					}
				}
    `}</style>
		</blockquote>
	)
}

Blockquote.propTypes = {
	align: PropTypes.oneOf(["left", "center", "right", "justify"]),
	size: PropTypes.oneOf(["small", "medium", "large"]),
	children: PropTypes.any.isRequired
}