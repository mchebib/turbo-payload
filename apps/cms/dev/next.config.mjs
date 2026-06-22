import { withPayload } from '@payloadcms/next/withPayload'
import nextEnv from '@next/env'
import { fileURLToPath } from 'url'
import path from 'path'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const { loadEnvConfig } = nextEnv

loadEnvConfig(path.resolve(dirname, '..'), process.env.NODE_ENV !== 'production', console, true)

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
