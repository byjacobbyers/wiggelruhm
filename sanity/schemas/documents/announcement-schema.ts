import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
      description: 'Show the announcement on the site',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
      description: 'Announcement text (e.g. banner message)',
    }),
    defineField({
      name: 'route',
      title: 'Link',
      type: 'route',
      description: 'Optional link when the announcement is clicked',
    }),
  ],
  preview: {
    select: { message: 'message', active: 'active' },
    prepare({ message, active }) {
      return {
        title: message || 'Announcement',
        subtitle: active ? 'Active' : 'Inactive',
      }
    },
  },
})
