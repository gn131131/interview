const CONSTANT = {
  sections: [
    {
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
          title: "5.通过原型创建",
          content: [
            `
          function Person() {}
          Person.prototype.name = 'Tony';
          Person.prototype.age = 18;
          var person1 = new Person();
          person1.name = 'Bob';
          var person2 = new Person();
          console.log(person1, person2);
          console.log(person1 instanceof Person, person2 instanceof Person);`,
          ],
        },
        {
          title: "6.组合使用构造函数和原型创建",
          content: [
            `
          function Person(name, age) {
            this.name = name;
            this.age = age;
          }
          Person.prototype.sayName = function () {
            alert(this.name);
          };
          var person = new Person('Tony', 18);
          console.log(person);
          person.sayName();`,
          ],
        },
      ],
    },
    {
      title: "document load 和 document ready 有什么区别？",
      sub: [
        {
          title: "document load",
          content: [`load是当前页面全部页面加载完后执行`],
        },
        {
          title: "document ready",
          content: [
            `ready是dom加载完执行，不包含css、图片等，相比load会较快，只有jquery有ready`,
          ],
        },
      ],
    },
  ],
};

export default CONSTANT;
