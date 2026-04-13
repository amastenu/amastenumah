/**
 * Split `text` into segments; `emphasis` strings (longest first) mark bold spans.
 * @returns {{ type: "text" | "em", value: string }[]}
 */
export function buildEmphasisParts(text, emphasis) {
  if (!emphasis?.length) {
    return [{ type: "text", value: text }];
  }
  const sorted = [...emphasis].sort((a, b) => b.length - a.length);
  const parts = [];
  let rest = text;

  while (rest.length > 0) {
    let bestIdx = -1;
    let bestPhrase = null;
    for (const p of sorted) {
      const i = rest.indexOf(p);
      if (i !== -1 && (bestIdx === -1 || i < bestIdx)) {
        bestIdx = i;
        bestPhrase = p;
      }
    }
    if (bestIdx === -1) {
      parts.push({ type: "text", value: rest });
      break;
    }
    if (bestIdx > 0) {
      parts.push({ type: "text", value: rest.slice(0, bestIdx) });
    }
    parts.push({ type: "em", value: bestPhrase });
    rest = rest.slice(bestIdx + bestPhrase.length);
  }

  return parts;
}
