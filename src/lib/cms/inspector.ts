// Manual field tagging for Contentful Live Preview inspector mode (click-to-edit).
// Returns nothing outside preview because published content carries no entry ids.
export function inspectorProps(entryId: string | undefined, fieldId: string) {
  if (!entryId) return {}
  return {
    "data-contentful-entry-id": entryId,
    "data-contentful-field-id": fieldId,
  }
}
