import React from 'react'
import PropTypes from 'prop-types'

const Error = ({statusCode}) => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
)

Error.getInitialProps = async ({res, err}) => {
  const responseStatus = !!res && res.statusCode
  const errorStatus = !!err && err.statusCode
  return {statusCode: responseStatus || errorStatus}
}

Error.propTypes = {
  statusCode: PropTypes.number
}

export default Error