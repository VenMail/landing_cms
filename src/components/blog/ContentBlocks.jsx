import Link from "next/link";

function SourceLinks({ sourceIds = [], sourcesById }) {
  if (!sourceIds.length) return null;
  return (
    <span className="ml-1 text-sm text-gray-500">
      {sourceIds.map((id, index) => {
        const source = sourcesById[id];
        if (!source) return null;
        return (
          <span key={id}>
            {index > 0 ? ", " : " "}
            <a className="underline decoration-gray-300 underline-offset-2 hover:text-primary-700" href={source.url} target="_blank" rel="noreferrer">
              {source.publisher}
            </a>
          </span>
        );
      })}
    </span>
  );
}

export default function ContentBlocks({ blocks, sources }) {
  const sourcesById = Object.fromEntries(sources.map((source) => [source.id, source]));

  return (
    <div className="space-y-8 text-[1.0625rem] leading-8 text-slate-700">
      {blocks.map((block, index) => {
        const key = `${block.type}-${block.id ?? index}`;
        if (block.type === "heading") {
          const Heading = block.level === 3 ? "h3" : "h2";
          return <Heading key={key} id={block.id} className="scroll-mt-28 pt-4 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{block.text}</Heading>;
        }
        if (block.type === "paragraph") {
          return <p key={key}>{block.text}<SourceLinks sourceIds={block.sourceIds} sourcesById={sourcesById} /></p>;
        }
        if (block.type === "callout") {
          const warning = block.tone === "warning";
          return (
            <aside key={key} className={`rounded-2xl border p-5 md:p-6 ${warning ? "border-amber-200 bg-amber-50" : "border-sky-200 bg-sky-50"}`}>
              <h3 className="mb-2 text-base font-bold text-slate-950">{block.title}</h3>
              <p>{block.text}</p>
            </aside>
          );
        }
        if (block.type === "list") {
          const List = block.style === "numbered" ? "ol" : "ul";
          return (
            <List key={key} className={`space-y-3 pl-6 ${block.style === "numbered" ? "list-decimal" : "list-disc"}`}>
              {block.items.map((item) => <li key={item}>{item}</li>)}
            </List>
          );
        }
        if (block.type === "steps") {
          return (
            <section key={key} aria-labelledby={`${key}-title`}>
              <h2 id={`${key}-title`} className="mb-5 text-2xl font-bold text-slate-950">{block.title}</h2>
              <ol className="space-y-4">
                {block.items.map((item, itemIndex) => (
                  <li key={item.title} className="grid grid-cols-[2rem_1fr] gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">{itemIndex + 1}</span>
                    <div><h3 className="font-bold text-slate-950">{item.title}</h3><p className="mt-1">{item.text}</p></div>
                  </li>
                ))}
              </ol>
            </section>
          );
        }
        if (block.type === "checklist") {
          return (
            <section key={key} className="rounded-2xl bg-slate-950 p-6 text-slate-100" aria-labelledby={`${key}-title`}>
              <h2 id={`${key}-title`} className="mb-4 text-xl font-bold text-white">{block.title}</h2>
              <ul className="grid gap-3 md:grid-cols-2">
                {block.items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-emerald-400">✓</span><span>{item}</span></li>)}
              </ul>
            </section>
          );
        }
        if (block.type === "table") {
          return (
            <div key={key} className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm leading-6">
                <caption className="border-b border-slate-200 bg-slate-50 p-4 text-left text-lg font-bold text-slate-950">{block.caption}</caption>
                <thead><tr>{block.headers.map((header) => <th key={header} scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">{header}</th>)}</tr></thead>
                <tbody>{block.rows.map((row, rowIndex) => <tr key={`${key}-${rowIndex}`} className="border-b border-slate-100 last:border-0">{row.map((cell, cellIndex) => <td key={`${key}-${rowIndex}-${cellIndex}`} className="px-4 py-3 align-top">{cell}</td>)}</tr>)}</tbody>
              </table>
              <div className="px-4 pb-3"><SourceLinks sourceIds={block.sourceIds} sourcesById={sourcesById} /></div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
