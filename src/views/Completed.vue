<template>
  <section>
    <div class="to-do" v-for="tarea in tareas" :key="tarea.id">
      <template v-if="tarea.status === false">
        <b-row align-h="between">
          <b-col cols="auto">
            <template v-if="tarea.status === false">
              <span class="inactivo">{{ tarea.name }}</span>
            </template>
          </b-col>
          <b-col cols="auto">
            <span id="delete" @click="deleteTask(tarea)"
              ><i class="far fa-trash-alt text-dark"></i
            ></span>
          </b-col>
        </b-row>
      </template>
    </div>
    <div class="text-right">
      <button class="btn btn-danger btn-sm" @click="deleteAll">
        <i class="far fa-trash-alt mr-1"></i>
        delete all
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "All",
  data() {
    return {
      checkbox: [],
      selectId: null,
      valueCheck: true,

      tareas: this.$store.state.tareas,
    };
  },
  methods: {
    deleteTask(tarea) {
      this.tareas.map((dato) => {
        if (dato.id === tarea.id) {
          var i = this.tareas.indexOf(tarea);
          this.tareas.splice(i, 1);
          console.log(dato, tarea.id, "DELETE");
        }
      });
    },
    deleteAll() {
      this.tareas.map((dato) => {
        if (dato.status === false) {
          // this.tarea = []
          console.log(dato);
        }
      });
    },
  },
};
</script>
<style scoped>
#delete {
  cursor: pointer;
}
</style>