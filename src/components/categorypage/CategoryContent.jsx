

export default function CategoryContent({ content }) {
  return (
    <section className="mt-12 space-y-10">
      <h1 className="text-3xl font-bold">{content.title}</h1>

      <p className="text-gray-600 leading-relaxed">
        {content.intro}
      </p>

      {/* Highlights */}
      <ul className="list-disc pl-6 space-y-1">
        {content.highlights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Sections */}
      {content.sections.map((section, i) => (
        <div key={i} className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {section.heading}
          </h2>

          {section.type === "text" &&
            section.paragraphs.map((p, idx) => (
              <p key={idx} className="text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}

          {section.type === "list" && (
            <>
              {section.intro && <p>{section.intro}</p>}
              <ul className="list-disc pl-6">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
