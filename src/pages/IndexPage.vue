<template>
  <!--Icono de quasar-->
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <!--Tarjeta 1-->
      <q-card class="my-card col-6 col-md-3 q-pa-sm bg-teal-4 text-white">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section style="cursor: pointer" @click="$router.push('/movil/1234')">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>
      </q-card>
      <!--Tarjeta 2-->
      <q-card class="my-card col-6 col-md-3 q-pa-sm bg-teal-4 text-white">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section style="cursor: pointer" @click="$router.push('/movil/12345')">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>
      </q-card>

      <!--Tarjeta 3-->
      <q-card class="my-card col-6 col-md-3 q-pa-sm bg-teal-4 text-white">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section style="cursor: pointer" @click="$router.push('/movil/123')">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>
      </q-card>

      <!--Tarjeta 4-->
      <q-card class="my-card col-6 col-md-3 q-pa-sm bg-teal-4 text-white">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section style="cursor: pointer" @click="$router.push('/movil/1256')">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>
      </q-card>

      <!--Tarjeta 5-->
      <q-card class="my-card col-6 col-md-3 q-pa-sm bg-teal-4 text-white">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section style="cursor: pointer" @click="$router.push('/movil/1')">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>
      </q-card>

      <!--Tarjeta 6-->
      <q-card class="my-card col-6 col-md-3 q-pa-sm bg-teal-4 text-white">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section style="cursor: pointer" @click="$router.push('/movil/123456789')">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>
      </q-card>

      <!--Tarjeta 7-->
      <q-card class="my-card col-6 col-md-3 q-pa-sm bg-teal-4 text-white">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section style="cursor: pointer" @click="$router.push('/movil/5678')">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>
      </q-card>

      <!--Tarjeta 8-->
      <q-card class="my-card col-6 col-md-3 q-pa-sm bg-teal-4 text-white">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section style="cursor: pointer" @click="$router.push('/movil/78910')">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
