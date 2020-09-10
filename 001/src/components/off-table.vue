<template>
  <table>
    <tr>
      <th v-for="header in headers" :key="header.key">{{header.value}}</th>
    </tr>
    <tr v-for="item in items" :key="item.id">
      <th v-for="header in headers" :key="header.key">{{item[header.key]}}</th>
    </tr>
  </table>
</template>
<script>
// ********* BEGIN ********* //
// TODO，步骤二，当传入的数据生效后，应删除这些用不到的数据
const headers = [
  {
    key: "name",
    value: "姓名",
  },
  {
    key: "gender",
    value: "性别",
  },
];
const items = [
  {
    id: 0,
    name: "赵先生",
    gender: "男",
  },
  {
    id: 1,
    name: "钱女士",
    gender: "女",
  },
];
// ********** END ********** //

export default {
  name: "off-table",
  // ********* BEGIN ********* //
  // TODO，步骤一，在这里声明需要传入的数据，headers & items

  // ********** END ********** //

  // ********* BEGIN ********* //
  // TODO，步骤二，删除这个提供假数据的属性
  data() {
    return {
      headers,
      items,
    };
  },
  // ********** END ********** //
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
