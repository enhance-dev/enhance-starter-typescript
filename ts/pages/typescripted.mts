import type { EnhanceElemArg } from "@enhance/types";

export default ({ html, state: { store } }: EnhanceElemArg) => {
  const { todos } = store;

  return html`
    <style>
      ul typescript-todo {
        display: block;
      }
    </style>

    <h1>Typescripted</h1>
    <p>This page is written in TypeScript.</p>
    <h2>The <code>&lt;typescript-todo&gt;</code> element is also TypeScript</h2>
    <h2>Even the API is TypeScript</h2>
    <p>Here are the TODOs:</p>
    <ul>
      ${todos.map(todo => html`
        <typescript-todo state="${todo.completed ? "complete" : ""}">
          ${todo.title}
        </typescript-todo>
      `).join("")}
    </ul>
  `
}
