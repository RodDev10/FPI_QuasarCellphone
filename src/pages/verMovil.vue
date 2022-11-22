<template>
  <!--Descripcion del producto-->
  <q-page>
    <div>
      <!--Carrusel-->
      <div class="q-pa-lg">
        <div class="row">
          <div class="col-12 col-md-7">
            <q-carousel animated v-model="slide" arrows navigation infinite>
              <q-carousel-slide :name="1"
                img-src="https://cdn.mos.cms.futurecdn.net/365c03a7a21f5a736b2c783b3b70f15d.jpg" />
              <q-carousel-slide :name="2"
                img-src="https://www.teknofilo.com/wp-content/uploads/2014/11/iPhone-6-20-1024x720.jpg" />
              <q-carousel-slide :name="3"
                img-src="https://i.guim.co.uk/img/media/a20bb31b14c3973fc0cb48ec8555fb8dc7dc533b/0_0_2100_1260/master/2100.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=148c9ae6dc52a99f41b840e3f9accc88" />
              <q-carousel-slide :name="4"
                img-src="https://www.cnet.com/a/img/resize/0c2c809e5864b83d8bca09adc06a1bde1d5471f9/hub/2015/09/10/147c6e6a-2611-4d6f-97ce-86e881480bd5/apple-event-sept9-2015-iphone6splus-3263.jpg?auto=webp&width=1200" />
            </q-carousel>
          </div>
          <div class="q-ml-lg q-mt-md col-10 col-md-4">
            <h6 class="q-mb-none q-mt-none">Iphone 6 pantalla de 8 pulgadas, 64Gb internos, 2Gb de Ram, Sólo Banda Tigo,
              Nuevo</h6>
            <h6 class="q-mb-none q-mt-sm"><b>$ 235.00</b></h6>
            <br>
            <q-btn class="q-mb-lg q-mt-sm" color="secondary" label="Comprar"></q-btn>
            <div class="q-mb-md q-mt-md" style="width: 100%; max-width: 700px">
              <q-chat-message avatar="https://cdn.quasar.dev/img/avatar2.jpg"
                :text="['Vendedora:Carolina Flores        Telefono:0000-0000']" />
            </div>
          </div>
        </div>
        <!--Informacion de venta-->
        <h6 class="q-mb-none q-mt-lg">
          <center><b>Descripcion</b></center>
        </h6>
        <div class="row">
          <div class="q-pa-md q-gutter-sm q-mt-md col-12 col-md-6">
            <q-banner class="bg-teal-1 row-8">
              Estado: Nuevo<br>
              Marca: Iphone<br>
              Modelo: 6 plus<br>
              Pantalla: 7 pulgadas<br>
              Sistema: Ios<br>
              Rom: 64GB<br>
              Ram: 2GB<br>
            </q-banner>
          </div>
          <div class="q-pa-md q-gutter-sm q-mt-md col-12 col-md-6">
            <q-banner class="bg-teal-1 ">
              Telefono en muy buenas condiciones, tiene
              dos cámaras, la caja esta abierta, <br>pero con
              muy poco uso, practicamente nuevo, la
              compañia con la que estaba es <br>Tigo, asi que el
              chip debe ser tigo, viene con su caja original y
              con todos sus accesorios. Puedo mandar más
              fotos si desea por whatsapp
            </q-banner>
          </div>
        <!--Boton de inicio y comprar -->
        <div class="col-12 desktop-hide" style="position: relative">
            <q-btn-group spread>
            <q-btn color="teal" label="Inicio" icon="home" />
            <q-btn color="teal" label="Comprar" icon="shop" />
            </q-btn-group>
        </div>

        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'productoSeleccionado',
  setup () {
    return {
      slide: ref(1)
    }
  }
})
</script>
