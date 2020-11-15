<template>
  <div class="all">
    <div class="to-do" v-for="tarea in $store.state.tareas" :key="tarea.id">
      <label class="container">
        <input
          type="checkbox"
          :id="tarea.id"
          :value="tarea.id"
          v-model="checkbox[tarea.id]"
          @click="selectCheck(tarea.id)"
        />
        <template v-if="tarea.status === false">
          <span class="inactivo">{{ tarea.name }}</span>
        </template>
        <span v-if="tarea.status != false">{{ tarea.name }}</span>
        <div class="checkmark"></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "All",
  data() {
    return {
      checkbox: [],
      selectId: null,
    };
  },
  watch: {
    checkbox(id) {
      console.info(this.checkbox[this.selectId], "valor elegico", id);

      let variableGlobal = this.$store.state.tareas;
      if (this.checkbox[this.selectId] === true) {
        variableGlobal.map((res) => {
          if (res.id === this.selectId) {
            res.status = false;
          }
        });
        console.log(variableGlobal, "datos");
      } else {
        variableGlobal.map((res) => {
          if (res.id === this.selectId) {
            res.status = true;
          }
        });
      }
    },
  },
  methods: {
    selectCheck(id) {
      this.selectId = id;
    },
  },
};
</script>

<style lang="scss">
.all {
  margin: 0 auto;
}
.inactivo {
  color: red;
  text-decoration: line-through;
}
</style>