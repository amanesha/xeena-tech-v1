// Splits a raw legal-text block into numbered sections and renders each as a
// heading + body. Body text is rendered with `whitespace-pre-line` rather than
// parsed into paragraphs/lists, so the exact wording and line structure the
// document was supplied with is preserved verbatim — no editorial guessing
// about what is a bullet vs. a sentence.
const HEADING_RE = /^(\d+(?:\.\d+)?)\.?\s+(.{2,90})$/

function parseSections(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  const sections = []
  let current = { level: null, number: null, title: null, body: [] }

  const pushCurrent = () => {
    if (current.title || current.body.some((l) => l.trim() !== '')) {
      sections.push(current)
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()
    const match = line.length > 0 && line.length <= 90 ? line.match(HEADING_RE) : null

    if (match) {
      pushCurrent()
      const number = match[1]
      current = {
        level: number.includes('.') ? 3 : 2,
        number,
        title: match[2],
        body: [],
      }
    } else {
      current.body.push(rawLine)
    }
  }
  pushCurrent()

  return sections
}

// A "block" is a run of text between blank lines. A block is treated as a
// list item when it's a single short line ending the way enumerated clauses
// in these documents do (";", "; or", "; and", or a lone trailing "or"/"and").
// Runs of 2+ consecutive item-like blocks render as a bullet list instead of
// a wall of separate paragraphs; isolated blocks stay as plain paragraphs.
const LIST_ITEM_RE = /(;|;\s*(?:or|and))$/i

function toBlocks(body) {
  return body
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean)
}

function isListItem(block) {
  return !block.includes('\n') && block.length <= 160 && LIST_ITEM_RE.test(block)
}

// The final clause of an enumeration ends the sentence ("...or X.") instead
// of with a semicolon, so it only counts as part of the list when a run of
// real list items already precedes it.
function isListCloser(block) {
  return !block.includes('\n') && block.length <= 160 && /\.$/.test(block)
}

function renderBody(body, light) {
  const blocks = toBlocks(body)
  const nodes = []
  let run = []
  const textCls = light ? 'text-muted' : 'text-white/60'

  const flushRun = () => {
    if (run.length === 0) return
    if (run.length >= 2) {
      nodes.push(
        <ul key={`ul-${nodes.length}`} className="list-disc space-y-1.5 pl-5">
          {run.map((item, j) => (
            <li key={j} className={`text-sm leading-relaxed ${textCls}`}>
              {item}
            </li>
          ))}
        </ul>
      )
    } else {
      nodes.push(
        <p key={`p-${nodes.length}`} className={`text-sm leading-relaxed ${textCls}`}>
          {run[0]}
        </p>
      )
    }
    run = []
  }

  for (const block of blocks) {
    if (isListItem(block)) {
      run.push(block)
    } else if (run.length > 0 && isListCloser(block)) {
      run.push(block)
      flushRun()
    } else {
      flushRun()
      nodes.push(
        <p key={`p-${nodes.length}`} className={`whitespace-pre-line text-sm leading-relaxed ${textCls}`}>
          {block}
        </p>
      )
    }
  }
  flushRun()

  return nodes
}

export function LegalContent({ text, light }) {
  const sections = parseSections(text.trim())

  return (
    <div className="space-y-6">
      {sections.map((section, i) => {
        const body = section.body.join('\n').replace(/\n{3,}/g, '\n\n').trim()
        const HeadingTag = section.level === 3 ? 'h3' : 'h2'
        const bodyNodes = body ? renderBody(body, light) : null
        return (
          <div key={i}>
            {section.title && (
              <HeadingTag
                className={
                  section.level === 3
                    ? `text-base font-medium ${light ? 'text-navy' : 'text-white'}`
                    : `border-b pb-3 text-xl font-semibold ${light ? 'border-navy/8 text-navy' : 'border-white/10 text-white'}`
                }
              >
                {section.number ? `${section.number}. ` : ''}
                {section.title}
              </HeadingTag>
            )}
            {bodyNodes && (
              <div className={`space-y-3 ${section.title ? 'mt-3' : ''}`}>{bodyNodes}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
