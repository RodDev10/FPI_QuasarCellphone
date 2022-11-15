<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-teal-8 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <!--Titulo barra de Titulo-->
        <q-toolbar-title>
          Tienda CellPhone
        </q-toolbar-title>

        <!--Iconos de busqueda-->
        <div></div>
      </q-toolbar>
    </q-header>

    <!--Menu de la Izquierda-->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <!--Opciones de celulares-->
      <menuDeOpciones></menuDeOpciones>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-teal-10 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div align="right">Articulos por pagina</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import menuDeOpciones from 'components/menuDeOpciones.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    menuDeOpciones
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen, menuDeOpciones,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
