<template>
  <select :name="name">
    <option v-for="(name, type) in items" :key="type">{{name}}</option>
  </select>
</template>
<script>
export default {
  name: "off-select",
  props: {
    name: String,
    items: Object,
  },
};
</script>
