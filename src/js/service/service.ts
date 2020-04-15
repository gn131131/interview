/*
 * @Description: main service
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-02-11 17:04:42
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-02 15:50:54
 */
import $ from "jquery";

export default class MainService {
  constructor() {}

  createSection(title: any, subtitle: any, content: any) {
    let inner = `
      <section>
        <h1>${title}</h1>
        <h2>${subtitle}</h2>
        }
      </section>
    `;
    $("body").prepend(inner);
  }
}
