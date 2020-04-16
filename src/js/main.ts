import MainService from "./service/service";
import CONSTANT from "./constant/constant";

export default class MainFn {
  service: any;

  constructor() {
    this.service = new MainService();
  }

  init() {
    this.render();
  }

  render() {
    this.service.cleanSection();
    this.service.createSection(CONSTANT.sections);
  }
}
