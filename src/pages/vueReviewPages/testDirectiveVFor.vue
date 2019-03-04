<template>
    <div class="table-container">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
                <th v-for="(value) in tableHeader" :key="value">{{value}}</th>               
            </tr>
            <tr v-for="(item,index) in tableBody" :key="index">
                <td v-for="(value,key,index) in item" :key="value+index">
                    {{value}}       
                </td>    
            </tr>
        </table>
        <ul>
            <li v-for="(n,index) in evenNumbers" :key="index">The even number {{index+1}} is {{n}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "testDirectiveVForPage",
  data() {
    return {
      isMutaion: false,
      tableHeader: {
        name: "姓名",
        age: "年龄",
        number: "电话号码",
        address: "地址",
        occupation: "职业"
      },
      tableBody: [
        {
          name: "张三",
          age: 18,
          number: "15302145620",
          address: "aaa",
          occupation: "Product Designer"
        },
        {
          name: "李四",
          age: 23,
          number: "13021546895",
          address: "bbb",
          occupation: "UI Designer"
        },
        {
          name: "王五",
          age: 19,
          number: "15321456890",
          address: "ccc",
          occupation: "Front-end Development Engineer"
        },
        {
          name: "赵柳",
          age: 20,
          number: "1865458960",
          address: "ddd",
          occupation: "Server Development Engineer"
        }
      ],
      numbers: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(number => {
        return number % 2 === 0;
      });
    }
  },
  created() {
    this.tableArrayOperate();
  },
  methods: {
    tableArrayOperate() {
      if (this.isMutaion) {
        this.mutation();
      } else {
        this.nonMutation();
      }
    },
    mutation() {
      var newArr1 = [];
      newArr1 = this.tableBody;
      console.log("mutation method=====");
      console.log(
        "pop():Used to delete and return the last element of the array",
        newArr1.pop()
      );
      console.log(
        "shift():Method is used to delete the first element of an array and return the value of the first element",
        newArr1.shift()
      );
      let obj1 = {
        name: "田七",
        age: 22,
        number: "15632456320",
        address: "eee",
        occupation: "Saler"
      };
      let obj2 = {
        name: "王八",
        age: 20,
        number: "13101254680",
        address: "fff",
        occupation: "Farmer"
      };
      console.log(
        "unshift():Method adds one or more elements to the beginning of an array and returns a new length",
        newArr1.unshift(obj1, obj2)
      );
      console.log(
        "splice():Method adds / deletes items to / from the array, and then returns the deleted items.Note: This method changes the original array",
        newArr1.splice(0, 2, obj1, obj2)
      );
      console.log(
        "push():You can add one or more elements to the end of an array and return a new length.",
        newArr1.push({
          name: "嗖九",
          age: 45,
          number: "15645896530",
          address: "ggg",
          occupation: "Factorier"
        })
      );
      function sortBy(field) {
        return function(a, b) {
          return a[field] - b[field];
        };
      }
      console.log(
        "sort():Used to sort elements of an array",
        newArr1.sort(sortBy("age"))
      );

      console.log(
        "reverse():Used to reverse the order of elements in an array",
        newArr1.reverse()
      );
    },
    nonMutation() {
      console.log("non-mutation method======");

      let newArr2 = this.tableBody;
      let filterArr = newArr2.filter(item => {
        return item.age >= 20;
      });
      //   this.tableBody = filterArr;
      console.log(
        "filter():Create a new array in which elements are checked for all qualified elements in the specified array"
      );

      console.log(
        "note:(1)No empty arrays are detected;(2)Do not change the original array"
      );

      let newArr3 = [
        {
          name: "周实",
          age: 34,
          number: "13545689520",
          address: "hhh",
          occupation: "Manager"
        }
      ];
      this.tableBody = this.tableBody.concat(newArr3);
      console.log("concat():Used to connect two or more arrays");

      this.tableBody = this.tableBody.slice(1, 4);
      console.log(
        "slice():Selected elements can be returned from an existing array",
        this.tableBody
      );
      this.tableBody[1].name = "whoIam";
      this.tableBody.length = 2;
      this.$set(this.tableBody, 1, {
        name: "zxc",
        age: 28,
        number: "15632456350",
        address: "aaa",
        occupation: "Web Disigner"
      });
      this.tableBody.splice(0, 1, {
        name: "田七",
        age: 22,
        number: "15632456320",
        address: "eee",
        occupation: "Saler"
      });
      this.$set(this.tableHeader, "email", "电子邮件");
      this.tableBody.forEach(item => {
        this.$set(item, "email", item.number + "@qq.com");
      });
      this.tableHeader = Object.assign({}, this.tableHeader, {
        favoriteColor: "最喜欢的颜色"
      });
      let ChineseCharRule = /^[\u4E00-\u9FA5]{1,5}$/;
      this.tableBody.forEach((item, index) => {
        if (ChineseCharRule.test(item.name)) {
          console.log(item.name + " This is a Chinese name...");
          item.name = "EnglishName" + (index + 1);
        }
        this.$set(
          item,
          "favoriteColor",
          "The color which " + item.name + " likes"
        );
      });
    }
  }
};
</script>
<style lang="scss">
.table-container {
  width: 60%;
  margin: 0 auto;
  table {
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    th,
    td {
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      line-height: 40px;
    }
  }
}
</style>

