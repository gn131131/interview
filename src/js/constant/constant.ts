const CONSTANT = {
  sections: {
    title: "javascript 对象的几种创建方式",
    sub: [
      {
        title: "1.使用Object 构造函数创建",
        content: [
          `
          var person = new Object();
          person.name = 'Tony';
          person.age = 18;
          console.log(person);`,
        ],
      },
      {
        title: "2.通过对象字面量表示法创建",
        content: [
          `
          var person = {};
          var person = {name: 'Tony', age: 18};
          console.log(person);`,
        ],
      },
      {
        title: "3.通过工厂模式、函数封装创建",
        content: [
          `
          function createPerson(name, age) {
            var obj = new Object();
            obj.name = name;
            obj.age = age;
            return obj;
          }
          var person = createPerson('Tony', 18);
          console.log(person);`,
        ],
      },
      {
        title: "4.通过构造函数创建",
        content: [
          `
          function Person(name, age) {
            this.name = name;
            this.age = age;
          }
          var person = new Person('Tony', 18);
          console.log(person);
          console.log(person instanceof Person);`,
        ],
      },
      {
        title: '5.通过原型创建',
        content: [
          `
          function Person() {
            Person.prototype.name = 'Tony';
            Person.prototype.age = 18;
          }
          var person = new Person();
          console.log(person);
          console.log(person instanceof Person);`
        ]
      }
    ],
  },
};

export default CONSTANT;
