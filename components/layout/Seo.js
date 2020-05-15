import React from "react"
import Head from "next/head"

export const DEFAULT_TITLE = 'El rincón de victor | I share my philosophy of life and healthy lifestyle along with technical articles of software development.'
export const DEFAULT_DESCRIPTION = "I'm a software engineer who loves building projects and I'm specialized in front-end development and agile methodologies. I love the communication, share knowledge and all kinds of interactions."
export const DEFAULT_CANONICAL = "https://www.elrincondevictor.com/"
export const DEFAULT_IMAGE = 'https://miro.medium.com/fit/c/240/240/1*sUWLvWsqCBmCVWeDbqIFVw.jpeg'

const SeoMetaInfo = ({
	title = DEFAULT_TITLE,
	description = DEFAULT_DESCRIPTION,
	canonical = DEFAULT_CANONICAL,
	image = DEFAULT_IMAGE
}) => (
	<Head>
		<title>{title}</title>
		<meta name='description' content={description}/>
		<meta name='canonical' content={canonical}/>
		<meta name='robots' content='index, follow' />
		<meta name='author' content='Victor Ribero Guasch'/>

		<meta property='og:site_name' content='chooseyourplant' />
		<meta property="og:locale" content="en_EN"/>
		<meta property='og:type' content='website' />
		<meta property='og:url' content={canonical} />
		<meta property='og:title' content={title}/>
		<meta property='og:description' content={description}/>
		<meta property='og:image' content={image}/>

		<meta name="twitter:card" content="summary_large_image"/>
		<meta name='twitter:site' content='@chooseyourplant'/>
		<meta name='twitter:creator' content='@chooseyourplant'/>
		<meta name='twitter:title' content={title} />
		<meta name='twitter:description' content={description}/>
		<meta name='twitter:domain' content='chooseyourplant.com' />
		<meta name="twitter:image" content={image}/>
	</Head>
)
export default SeoMetaInfo