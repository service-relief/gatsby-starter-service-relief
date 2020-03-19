import React from 'react'

import ScriptLoader from './script-loader'

function AirtableForm({ id, height = 1237, ...rest }) {
  return (
    <ScriptLoader src={`https://static.airtable.com/js/embed/embed_snippet_v1.js`}>
      <iframe className="airtable-embed airtable-dynamic-height" src={`https://airtable.com/embed/${id}?backgroundColor=gray`} frameBorder="0" width="100%" height={height} style={{
      background: `transparent`,
      border: `1px solid #ccc`
    }}></iframe>
    </ScriptLoader>
  )
}

export default AirtableForm