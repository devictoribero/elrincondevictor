import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {Layout} from '../components/layout/Layout'

const Error = () => {
  const link = (
    <Link href='/blog'>
      <a>relax by reading any of the articles I wrote 📝.</a>
    </Link>
  )

  return (
    <Layout>
      <div className='container-wrapper'>
        <div className='container'>
          <p>
            I'm sorry for the inconvenience, but at this moment this part of the web is not available. 
          </p>
          <p className='bold'>Grab a coffe ☕, a tea 🍵, or whatever you like 🍺 and {link}</p>
        </div>
      </div>
      <style jsx>{`
        div.container {
          margin-top: 50px;
          margin-bottom: 50px;
        }

        p {
          max-width: 700px;
          font-size: 21px;
          line-height: 1.5;
        }

        a {
          color: var(--primary-500);
        }

        .bold {font-weight: 700;}
      `}</style>
    </Layout>
  )
}

Error.getInitialProps = async ({res, err}) => {
  const responseStatus = !!res && res.statusCode
  const errorStatus = !!err && err.statusCode
  return {statusCode: responseStatus || errorStatus}
}

Error.propTypes = {
  statusCode: PropTypes.number
}

export default Error