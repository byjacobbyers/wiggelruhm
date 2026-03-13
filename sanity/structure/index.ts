import type { StructureResolver } from 'sanity/structure'
import Page from './page-structure'
import Event from './event-structure'
import Global from './global-structure'
import Navigation from './navigation-structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      Page(S),
      Event(S),
      Global(S),
      Navigation(S),
    ])
