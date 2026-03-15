import { defineType, defineField } from 'sanity'
import { InlineElementIcon } from '@sanity/icons'

const columnBlock = defineType({
  title: 'Column Block',
  name: 'columnBlock',
  type: 'object',
  icon: InlineElementIcon,
  fields: [
    defineField({
      title: 'Active?',
      name: 'active',
      type: 'boolean',
      description: 'Set to false if you need to remove from page but not delete',
      initialValue: true,
    }),
    defineField({
      title: 'Anchor',
      name: 'anchor',
      type: 'string',
      description: 'The anchor for the section. No hash symbols. Optional.',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Optional title for the column section',
    }),
    defineField({
      title: 'Columns',
      name: 'columns',
      type: 'array',
      of: [{ type: 'column' }],
      description: 'Add individual columns with their own content',
      validation: (Rule) => Rule.min(1).max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      active: 'active',
      columns: 'columns',
    },
    prepare({ title, active, columns }) {
      const columnCount = columns?.length || 0
      return {
        title: 'Column Block',
        subtitle: `${active ? 'Active' : 'Not Active'} - ${columnCount} column${columnCount !== 1 ? 's' : ''} - ${title || 'No Title'}`,
      }
    },
  },
})

export default columnBlock
