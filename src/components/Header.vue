<template>
  <div id="nav">
    <h1> <b>{{ $store.state.nameApp }}</b> </h1>
    <header>
      <section>
        <div>
          <router-link to="/all">All </router-link>
        </div>
        <div><router-link to="/Active">Active</router-link></div>
        <div><router-link to="/Completed">Completed</router-link></div>
      </section>
    </header>
    <b-row v-if="this.$route.path !== '/Completed'" class="mt-4">
      <b-col cols="8">
        <input
          class="form-control form-control-lg"
          :class="error"
          type="text"
          placeholder="add details"
          v-model="tarea"
        />
        <div class="invalid-feedback">Example invalid feedback text</div>
      </b-col>
      <b-col cols="4">
        <button class="btn btn-block btn-lg btn-primary" @click="agregarTarea">
          Add
        </button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      tareas: this.$store.state.tareas,
      tarea: "",
      id: 0,
      error: "",
    };
  },
  methods: {
    agregarTarea() {
      // validar
      if (this.tarea === "") {
        this.error = "border-danger";
      }
      // agregar al objeto
      if (this.tarea !== "") {
        this.error = "border-success";
        this.tareas.unshift({
          id: this.id++,
          name: this.tarea,
          status: true,
        });
        this.tarea = "";
      }
    },
  },
};
</script>
<style lang="scss" >
header {
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.459);
  }
  div {
    padding: 0 3em;
    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      border-radius: 2px;
      padding: 0 2em;
      padding-bottom: 5px;
      &:hover {
        text-decoration: none;
      }
      &.router-link-exact-active {
        border-bottom: 2px solid rgb(0, 132, 255);
        color: rgb(0, 132, 255);
      }
    }
  }
}
.to-do {
  width: 90%;
  margin: 1em auto;
  text-align: left;
}
</style>