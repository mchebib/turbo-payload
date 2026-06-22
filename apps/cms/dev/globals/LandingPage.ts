import type { GlobalConfig } from 'payload'

export const landingPageDefaults = {
  announcementLabel: 'Payload powered',
  announcementText: 'Content that moves at your pace',
  brandName: 'Northstar',
  eyebrow: 'A calmer way to publish',
  headline: 'Your story, edited once and delivered everywhere.',
  description:
    'Give your team one clear place to shape the message. Payload keeps the content structured; your web app keeps the experience fast.',
  primaryCtaLabel: 'Explore the approach',
  primaryCtaHref: '#features',
  secondaryCtaLabel: 'Open the CMS',
  secondaryCtaHref: 'http://localhost:3002/admin',
  featuresLabel: '01',
  featuresHeading: 'Built for the work between idea and launch.',
  features: [
    {
      number: '01',
      title: 'Edit with confidence',
      description:
        'A focused content model gives editors the fields they need without exposing implementation details.',
    },
    {
      number: '02',
      title: 'Publish independently',
      description:
        'Update the landing page in Payload without touching the web application or waiting on a code release.',
    },
    {
      number: '03',
      title: 'Deliver everywhere',
      description:
        'The same structured content is available through Payload APIs for every frontend that needs it.',
    },
  ],
  footerText: 'Structured in Payload. Presented with KIBO UI.',
} as const

export const LandingPage: GlobalConfig = {
  slug: 'landing-page',
  label: 'Landing Page',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Website',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'brandName',
          type: 'text',
          required: true,
          defaultValue: landingPageDefaults.brandName,
        },
        {
          name: 'eyebrow',
          type: 'text',
          required: true,
          defaultValue: landingPageDefaults.eyebrow,
        },
      ],
    },
    {
      name: 'announcement',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          defaultValue: landingPageDefaults.announcementLabel,
        },
        {
          name: 'text',
          type: 'text',
          required: true,
          defaultValue: landingPageDefaults.announcementText,
        },
      ],
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: landingPageDefaults.headline,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: landingPageDefaults.description,
    },
    {
      name: 'actions',
      type: 'group',
      fields: [
        {
          name: 'primaryLabel',
          type: 'text',
          required: true,
          defaultValue: landingPageDefaults.primaryCtaLabel,
        },
        {
          name: 'primaryHref',
          type: 'text',
          required: true,
          defaultValue: landingPageDefaults.primaryCtaHref,
        },
        {
          name: 'secondaryLabel',
          type: 'text',
          required: true,
          defaultValue: landingPageDefaults.secondaryCtaLabel,
        },
        {
          name: 'secondaryHref',
          type: 'text',
          required: true,
          defaultValue: landingPageDefaults.secondaryCtaHref,
        },
      ],
    },
    {
      name: 'featuresLabel',
      type: 'text',
      required: true,
      defaultValue: landingPageDefaults.featuresLabel,
    },
    {
      name: 'featuresHeading',
      type: 'text',
      required: true,
      defaultValue: landingPageDefaults.featuresHeading,
    },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      required: true,
      defaultValue: landingPageDefaults.features.map((feature) => ({ ...feature })),
      fields: [
        { name: 'number', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'footerText',
      type: 'text',
      required: true,
      defaultValue: landingPageDefaults.footerText,
    },
  ],
}
