<template>
    <div> <!-- Agregar etiqueta padre (DIV) en vistas -->
        <h4>formulario alumno</h4>
        <Alumno></Alumno>
    </div>
</template>
<script>
/* eslint-disable */
import Alumno from '../components/Alumno.vue'
export default {
    name: 'Escuela',
    components:{
        Alumno
    }
}
</script>