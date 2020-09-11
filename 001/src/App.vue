<template>
  <div>
    <!-- TODO，传入TRAINEE_SOURCE_MAP属性，以便使其能够展示选择器的选项  -->
    <off-select />

    <!-- TODO，传入tableHeaders、tableItems属性，以便使其能够展示学员的姓名和生源  -->
    <off-table />
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
