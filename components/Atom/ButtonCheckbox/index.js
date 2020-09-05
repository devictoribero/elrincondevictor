import React from "react"
import PropTypes from "prop-types"

export function ButtonCheckbox({
	name,
	isActive = false,
	onClick,
	label,
	children,
}) {
	const styles = [`${isActive ? "is--active" : ""}`].join(" ")
  
	return (
		<button
			type="button"
			role='checkbox'
			className={styles}
			aria-checked={isActive}
			aria-label={label}
			onClick={onClick}>
			<input
				type='checkbox'
				tabIndex='-1'
				name={toSnakeCase(name)}xw
				checked={isActive}
				onChange={onClick}
				aria-checked={isActive}/>
			<span className='text'>{children}</span>

			<style jsx>{`
				button {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					padding: 0 1rem;
					min-height: 40px;
					border: 2px solid var(--c-grey-light);
					background-color: transparent;
					border-radius: 5px;
					font-size: 1rem;
					font-weight: 500;
					color: var(--c-grey-dark);
					margin: 0 0.5rem 0.5rem 0;
					font-family: var(--ff-text);
					min-width: 50px;
					min-height: 45px;

					transition: color 0.25s, background-color 0.25s;
					cursor: pointer;
				}

				button:hover {
					color: var(--c-grey-darkest);
					background-color: var(--c-grey-lightest);
				}

				button:focus { outline-color: var(--c-primary-dark); }

				.is--active,
				.is--active:hover {
					color: var(--c-primary-darkest);
					border-color: var(--c-primary);
				}
			`}</style>
		</button>
	)
}

ButtonCheckbox.propTypes = {
	name: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	onClick: PropTypes.func,
	label: PropTypes.string,
	children: PropTypes.node,
}

function toSnakeCase(string) {
	return string.toLowerCase().split(" ").join("_")
}