<template>
  <select :name="name" @change="$emit('select', $event.target.value)">
    <option value>-</option>
    <option v-for="(name, type) in items" :key="type" :value="type">{{name}}</option>
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
