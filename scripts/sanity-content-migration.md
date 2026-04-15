# Sanity content migration (post–schema alignment)

After deploying the updated Studio schema to your Wiggelruhm dataset, existing documents may need one-time fixes.

## Column block (`columnBlock`)

Legacy documents may still have a string field `title` instead of portable text `header` / `footer`, and may omit `alignment`, `sectionPadding`, `backgroundColor`, and `cta`.

**Options:**

1. **Manual:** In Studio, open each column block, move any legacy title into the Header rich text field, then clear the old field if it still appears in raw JSON (legacy `title` is removed from the schema).
2. **Scripted:** Use `@sanity/client` with a GROQ filter `*[_type == "page" && defined(sections)]` and patch each `columnBlock` where `defined(title)` to build a minimal `header` portable text block from `title`, then `unset` the `title` path.

## Cover block (`coverBlock`)

Background and overlay enums changed from `black` / `white` / `primary` to `primary` / `secondary` / `transparent` (background) and `none` / `primary` / `secondary` (overlay).

**Suggested mapping:**

| Legacy `backgroundColor` | New value        |
|-------------------------|------------------|
| `black`                 | `secondary`      |
| `white`                 | `transparent`    |
| `primary`               | `primary`        |

| Legacy `overlayColor`   | New value        |
|-------------------------|------------------|
| `none`                  | `none`           |
| `black` / `white`       | `secondary` or `none` (choose per design) |
| `primary`               | `primary`        |

Patch with Sanity mutate or update in Studio.

## New section types

`splitScrollBlock` and `problemBlock` require no migration until editors add them to pages.
