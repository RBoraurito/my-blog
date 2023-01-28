import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true,
      },
      {
        source: '/admin/index',
        destination: '/admin/index.html',
        permanent: true,
      },
    ]
  },
  webpack: (cfg) => {
    cfg.module.rules.push(
        {
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: { mode: ['react-component'] }
        }
    )
    return cfg;
  }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
