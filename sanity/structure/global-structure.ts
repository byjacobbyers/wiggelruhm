import type { StructureBuilder } from 'sanity/structure'
import { EarthAmericasIcon } from '@sanity/icons'

const Global = (S: StructureBuilder) =>
  S.listItem()
    .title('Global')
    .icon(EarthAmericasIcon)
    .child(
      S.list()
        .title('Global')
        .items([
          S.listItem()
            .title('Announcement')
            .child(
              S.editor()
                .id('announcement')
                .schemaType('announcement')
                .documentId('announcement')
            ),
          S.listItem()
            .title('Site Settings')
            .child(
              S.editor()
                .id('site')
                .schemaType('site')
                .documentId('site')
            ),
        ])
    )

export default Global
