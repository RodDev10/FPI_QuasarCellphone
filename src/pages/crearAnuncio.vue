<template>
  <q-page>
    <div class="row">
      <div class="col-6">
         <center><q-btn class="col-10 desktop-hide q-mt-md q-ml-xl" color="secondary" icon-right="save" label="Añadir foto" /></center>
        <h6 class="q-mb-md q-mt-md q-ml-md mobile-hide"> Estado
          <q-radio v-model="shape" val="Nuevo" label="Nuevo" />
          <q-radio v-model="shape" val="Usado" label="Usado" />
        </h6>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs mobile-hide" style="max-width: 275px">
          <q-input outlined v-model="text" label="Marca" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs mobile-hide" style="max-width: 275px">
          <q-input outlined v-model="text" label="Modelo" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs mobile-hide" style="max-width: 200px">
          <q-input outlined v-model="text" label="Pantalla" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs mobile-hide" style="max-width: 400px">
          <q-select outlined v-model="model" :options="options" label="Sistema" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs mobile-hide" style="max-width: 275px">
          <q-input outlined v-model="text" label="Rom" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs mobile-hide" style="max-width: 275px">
          <q-input outlined v-model="text" label="Ram" />
        </div>

      </div>
      <div class="col-12 col-md-6">
        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs q-mr-lg">
          <q-input outlined v-model="text" label="Titulo breve" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs mobile-hide" style="max-width: 350px">
          <q-input outlined v-model="text" label="Vendedor" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs mobile-hide" style="max-width: 250px">
          <q-input outlined v-model="text" label="Telefono" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs q-mr-lg mobile-hide">
          <h6 class="q-mb-md q-mt-md q-ml-md"> DESCRIPCION </h6>
          <q-input outlined v-model="text" label="" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs" style="max-width: 250px">
          <center><q-input outlined v-model="text" label="Precio" /></center>
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs col-6" style="max-width: 350px">
          <q-input outlined v-model="text" label="Vendedor" />
        </div>
        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs col-6" style="max-width: 350px">
            <q-input outlined v-model="text" label="Telefono" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs desktop-hide" style="max-width: 275px">
          <q-input outlined v-model="text" label="Estado" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs desktop-hide" style="max-width: 275px">
          <q-input outlined v-model="text" label="Marca" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs desktop-hide" style="max-width: 275px">
          <q-input outlined v-model="text" label="Modelo" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs desktop-hide" style="max-width: 200px">
          <q-input outlined v-model="text" label="Pantalla" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs q-mr-md desktop-hide" style="max-width: 400px">
          <q-select outlined v-model="model" :options="options" label="Sistema" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs desktop-hide" style="max-width: 275px">
          <q-input outlined v-model="text" label="Rom" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs desktop-hide" style="max-width: 275px">
          <q-input outlined v-model="text" label="Ram" />
        </div>

        <div class="q-gutter-md q-mb-md q-mt-md q-ml-xs q-mr-lg desktop-hide">
          <q-input outlined v-model="text" label="Descripcion  del producto" />
        </div>

        <div class="q-mb-md q-mt-md q-ml-xl">
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
      model: ref(null),
      options: [
        'IOS', 'Android', 'Windows'
      ]
    }
  }
}
</script>
