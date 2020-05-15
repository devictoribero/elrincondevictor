import React from "react"
import Head from "next/head"
import {
	DEFAULT_TITLE,
	DEFAULT_DESCRIPTION,
	DEFAULT_CANONICAL,
	DEFAULT_IMAGE,
} from '../../config/seo'

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