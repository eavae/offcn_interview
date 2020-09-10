<template>
  <div>
    <off-select :items="TRAINEE_SOURCE_MAP" />
    <off-table :headers="tableHeaders" :items="tableItems" />
  </div>
</template>

<script>
import OffSelect from "./components/off-select.vue";
import OffTable from "./components/off-table.vue";
import { TRAINEE_SOURCE_MAP, traineeDataType, trainees } from "./data";

export default {
  name: "App",
  components: {
    [OffSelect.name]: OffSelect,
    [OffTable.name]: OffTable,
  },
  data() {
    return {
      TRAINEE_SOURCE_MAP,
      tableHeaders: traineeDataType,
      trainees,
    };
  },
  computed: {
    tableItems() {
      return this.trainees.map(({ sourceType, ...rest }) => ({
        ...rest,
        sourceType: TRAINEE_SOURCE_MAP[sourceType],
      }));
    },
  },
};
</script>
