import MainService from "./service/service";

export default class MainFn {
  service: any;

  constructor() {
    this.service = new MainService();
  }

  init() {
    this.createObject();
  }

  // javascript 对象的几种创建方式
  createObject() {
    const title = "javascript 对象的几种创建方式";
    const content = "";
    this.service.createSection(title, content);
  }
}
