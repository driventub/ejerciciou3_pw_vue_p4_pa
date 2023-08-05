<template>
    <!-- <div :v-for="vehi in lista">
        <h1>Id</h1>
        <h3>{{vehi.id}}</h3>
        <h1>Placa</h1>
        <h3>{{vehi.placa}}</h3>
        <h1>Marca</h1>
        <h3>{{vehi.marca}}</h3>
        <h1>Modelo</h1>
        <h3>{{vehi.modelo}}</h3>
        <h1>Año</h1>
        <h3>{{vehi.anio}}</h3>
    </div> -->


<h1 v-if="visualizar">Visualizar</h1>

  <div class="container">

   
        <ul>
            <li>
                <label for="">Id</label>
                <input v-model="id" type="text" disabled>
            </li>
            <li>
                <label for="">Placa</label>
                <input v-model="placa" type="text" disabled>
            </li>
            <li>
                <label for="">Marca</label>
                <input v-model="marca" type="text" disabled>
            </li>
            <li>
                <label for="">Modelo</label>
                <input v-model="modelo" type="text" disabled>
            </li>
            <li>
                <label for="">Año</label>
                <input v-model="anio" type="text" disabled>
            </li>
            <li>
                <label for="">Accion</label>
                <button @click="consultarPlacaFachada">Visualizar</button>
            </li>
        </ul>
    </div>
   

</template>

<script>
import { consultarPlacaFachada, consultarTodosFachada } from '../helpers/vehiculo';



export default {
  data() {
    return {
      id: null,
      placa: null,
      modelo: null,
      anio: null,
      marca: null,
      lista: null,
      visualizar: true,
    };
  },
  methods: {
    async consultarVehiculo(){
        this.visualizar = true
        const {id,placa,modelo,anio,marca} = await consultarPlacaFachada(placa);
        this.id = id
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
        this.anio = anio
        

    },
    async consultartodos(){
        const lista = await consultarTodosFachada();
        this.lista = lista
    }
  },
};
</script>

<style scoped>
.container{
    justify-content: flex;
    align-content: center;
}

button{
    width: 100px;
    height: 20px;
}
</style>
