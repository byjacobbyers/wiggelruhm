import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    { title: 'Page content', name: 'page', default: true },
    { title: 'SEO & Settings', name: 'seo' },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'page',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'string',
      group: 'page',
      description:
        'Primary follows the site theme (white/light gray on a light site, orange field in dark mode). On a light site, Secondary is an orange band (#d87943) with white text; secondary-style buttons use teal (#527575). On a dark site, Secondary is a light “island” (white/light) for contrast.',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'sections',
      type: 'sections',
      group: 'page',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
    }),
    defineField({
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
      options: { collapsible: true, collapsed: false },
    }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare({ title, slug }) {
      return { title, subtitle: slug === 'home' ? 'Home Page' : `/${slug}` }
    },
  },
})
