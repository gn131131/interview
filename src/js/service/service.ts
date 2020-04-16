/*
 * @Description: main service
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 17:04:42
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-02 15:50:54
 */
import $ from "jquery";
import ClipboardJS from "clipboard";

export default class MainService {
  constructor() {}

  cleanSection() {
    $("#view").empty();
  }

  createSection(obj: any) {
    let inner = `
      <section>
        <h1>${obj.title}</h1>
        ${obj.sub
          .map(
            (subitem: any) => `
              <h2>${subitem.title}</h2>
              ${subitem.content
                .map(
                  (item: any) =>
                    `<pre data-clipboard-text="${item}">${item}</pre>`
                )
                .join("")}
            `
          )
          .join("")}
      </section>
    `;
    $("#view").prepend(inner);
    this.clickToCopy("pre");
  }

  clickToCopy(node: any) {
    var clipboard = new ClipboardJS(node);
  }
}
