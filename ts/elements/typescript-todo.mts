import type { EnhanceElemArg } from "@enhance/types"

export default ({ html, state: { attrs } }: EnhanceElemArg) => {
  const { state = "" } = attrs

  return html`
    ${state === "complete" ? "☑" : "☐"}
    <slot></slot>
  `
}
