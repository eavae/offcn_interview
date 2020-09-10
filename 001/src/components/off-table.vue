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
export default {
  name: "off-table",
  props: {
    headers: Array,
    items: Array,
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
