<template>
    <div>
        <div class="row">

        </div>
        <div class="row q-ma-md">
            <q-card class="my-card col-6 col-md-3 q-pa-sm q-mb-lg" v-for="(item, key) in 8" :key="key">
                <img src="https://www.sammobile.com/wp-content/uploads/2018/06/galaxy-j6-review-wide-4.jpg">
                <q-card-section class="bg-cyan-10 text-white" style="cursor: pointer"
                    @click="$router.push('/movil/1234')">
                    <div class="text-h6">
                        <center><b>$150.00</b></center>
                    </div>
                    Samsung J6, Pantalla de 5.5, 64GB, 2GB Ram, Color Negro
                </q-card-section>
            </q-card>

        </div> I
    </div>
</template>

<script setup>

</script>
