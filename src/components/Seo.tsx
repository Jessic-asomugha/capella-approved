import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://capella.com.ng';

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g. '/services'
}

export default function Seo({ title, description, path }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
