<template>
  <!--Descripcion del producto-->
  <q-page>
  <h3>Descripsion del producto</h3>
  <!--Accedemos al id de un producto-->
  {{$route.params.idMovil}}
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'productoSeleccionado'
})
</script>
