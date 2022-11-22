<template>
  <q-page>
    <div class="row">
      <div class="col-6">
        <h6 class="q-mb-md q-mt-md q-ml-md"> Estado
          <q-radio v-model="shape" val="Nuevo" label="Nuevo" />
          <q-radio v-model="shape" val="Usado" label="Usado" />
        </h6>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 275px">
          <q-input outlined v-model="text" label="Marca" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 275px">
          <q-input outlined v-model="text" label="Modelo" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 200px">
          <q-input outlined v-model="text" label="Pantalla" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 400px">
          <q-select outlined v-model="model" :options="options" label="Sistema" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 275px">
          <q-input outlined v-model="text" label="Rom" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 275px">
          <q-input outlined v-model="text" label="Ram" />
        </div>

      </div>
      <div class="col-6">
        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs q-mr-lg">
          <q-input outlined v-model="text" label="Titulo breve" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 350px">
          <q-input outlined v-model="text" label="Vendedor" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 250px">
          <q-input outlined v-model="text" label="Telefono" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs q-mr-lg">
          <h6 class="q-mb-md q-mt-md q-ml-md"> DESCRIPCION </h6>
          <q-input outlined v-model="text" label="" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 250px">
          <center><q-input outlined v-model="text" label="Precio" /></center>
        </div>

        <div class="row">
        <q-btn color="teal" text-color="black" label="Cancelar" />
        <q-btn color="teal" text-color="black" label="Guardar" />
        </div>

      </div>

    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      shape: ref('Nuevo'),
      text: ref(''),
      model: ref(null),
      options: [
        'IOS', 'Android', 'Windows'
      ]
    }
  }
}
</script>
