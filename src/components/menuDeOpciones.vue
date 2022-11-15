<template>
  <div>
    <!--Mostrar las marcas de moviles-->
    <h6 class="q-mb-sm q-mt-sm q-ml-md">Marca</h6>
    <q-list bordered separator>
      <q-item dense v-for="(marca, key) in marcas" :key="'mar-' + key" clickable v-ripple>
        <q-item-section>
          <q-checkbox v-model="marca.value" color="teal-4">
            {{ marca.label }}<q-badge class="q-ml-sm" color="teal-8" align="top">{{ marca.cantidad }}</q-badge>
          </q-checkbox>
        </q-item-section>
      </q-item>
    </q-list>

    <!--Mostrar el sistema operativo de los moviles-->
    <h6 class="q-mb-sm q-mt-sm q-ml-md">Sistema</h6>
    <q-list bordered separator>
      <q-item dense v-for="(sistema, key) in sistemas" :key="'sis-' + key" clickable v-ripple>
        <q-item-section>
          <q-checkbox v-model="sistema.value" color="teal-4">
            {{ sistema.label }}<q-badge class="q-ml-sm" color="teal-8" align="top">{{ sistema.cantidad }}</q-badge>
          </q-checkbox>
        </q-item-section>
      </q-item>
    </q-list>

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'menuDeOpciones',
  setup () {
    return {
      check1: ref (false),
      marcas: ref ([
        { value: false, label: 'Samsung', cantidad: 12 },
        { value: false, label: 'Huawei', cantidad: 10 },
        { value: false, label: 'Nokia', cantidad: 15 },
        { value: false, label: 'Iphone', cantidad: 20 },
        { value: false, label: 'Xiaomi', cantidad: 17 }
      ]),
      sistemas: ref ([
        { value: false, label: 'Android', cantidad: 39 },
        { value: false, label: 'IOS', cantidad: 20 },
        { value: false, label: 'Windows', cantidad: 15 }
      ])
    }
  }
})
</script>
