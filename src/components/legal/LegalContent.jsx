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

export function LegalContent({ text }) {
  const sections = parseSections(text.trim())

  return (
    <div className="space-y-8">
      {sections.map((section, i) => {
        const body = section.body.join('\n').replace(/\n{3,}/g, '\n\n').trim()
        const HeadingTag = section.level === 3 ? 'h3' : 'h2'
        return (
          <div key={i}>
            {section.title && (
              <HeadingTag
                className={
                  section.level === 3
                    ? 'text-base font-medium text-white'
                    : 'border-b border-white/10 pb-3 text-xl font-semibold text-white'
                }
              >
                {section.number ? `${section.number}. ` : ''}
                {section.title}
              </HeadingTag>
            )}
            {body && (
              <p
                className={`whitespace-pre-line text-sm leading-relaxed text-white/60 ${
                  section.title ? 'mt-3' : ''
                }`}
              >
                {body}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
