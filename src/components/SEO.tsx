import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { seoData } from '../data/seo'

const SEO = () => {
  const location = useLocation()
  const path = location.pathname
  const meta = seoData[path] || seoData["/"]

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={`https://www.lavishholidaysdmc.com${path}`} />
    </Helmet>
  )
}

export default SEO
