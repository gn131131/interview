const CONSTANT = {
  sections: {
    title: "javascript 对象的几种创建方式",
    sub: [
      {
        title: "1.使用Object 构造函数创建",
        content: [
          "var person = new Object();",
          "person.name = 'Tony'",
          "person.age = 18",
        ],
      },
      {
        title: "2.通过对象字面量表示法创建",
        content: ["var person = {};", "var person = {name: 'Tony', age: 18}"],
      },
      {
        title: "3.通过工厂模式、函数封装创建",
        content: ["var person = {};"],
      },
    ],
  },
};

export default CONSTANT;
