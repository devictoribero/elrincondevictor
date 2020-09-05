import React from "react"
import PropTypes from "prop-types"

export function List({children}) {
	return (
		<>
			<ul>{children}</ul>
			<style jsx>{`
				ul {
					padding-left: 1.125rem;
					margin: 0;
				}
    `}</style>
		</>
	)
}

List.propTypes = {
	children: PropTypes.any.isRequired
}