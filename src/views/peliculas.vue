<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Peliculas</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
    <div>
      <h1 id="titulo">Buscador de Peliculas</h1>
      <ion-item>
        <ion-label position="floating">Buscar Pelicula</ion-label>
        <ion-input v-model="filtro" @keyup.enter="nuevaEntrada()"></ion-input>
      </ion-item>

      <button id="botonBuscar" @click="nuevaEntrada()">Buscar</button>

      <div id="container">
        <ion-card v-for="(pelicula, i) in peliculas" :key="i">
          <ion-card-header>
            <ion-card-title>{{pelicula.Title}}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <img id="imagenCard" :src="pelicula.Poster" alt="poster">
          </ion-card-content>
            <button id="botonBuscar" @click="informacionPelicula(pelicula.imdbID)">Ver detalles</button>
        </ion-card>
      </div>

      <ion-modal :isOpen="detallesPelicula">
        <ion-card>
          <ion-card-header>
            <ion-card-title>{{detalles.Title}}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div id="texto">
              <img id="imagenModal" :src="detalles.Poster" alt="poster">
              <p>{{detalles.Plot}}</p>
            </div>
           <div id="detalles">
            <p><b>Director:</b> {{detalles.Director}}</p>
            <p><b>Actores:</b> {{detalles.Actors}}</p>
            <p><b>Genero:</b> {{detalles.Genre}}</p>
            <p><b>Fecha de estreno:</b> {{detalles.Released}}</p>
           </div>
          </ion-card-content>
            <button id="botonBuscar" @click="detallesPelicula = false">Cerrar</button>
        </ion-card>
      </ion-modal>

      <!-- <ion-button @click="cargarMasPeliculas">Cargar mas</ion-button> -->
      <ion-infinite-scroll @ion-infinite="cargarMasPeliculas">
        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Cargando más películas...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </div>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonModal,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
 } from '@ionic/vue';

import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'Peliculas',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonList,
    IonModal,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  },
  setup() {
    const filtro = ref("");
    const pagina = ref(1);
    const peliculas = ref("");
    const detalles = ref("");
    const detallesPelicula = ref(false);
    const peticionAjax = ref(false);
    return {
      filtro,
      pagina,
      peliculas,
      detalles,
      detallesPelicula,
      peticionAjax,
    };
  },
  methods: {
    nuevaEntrada() {
      if(this.pagina == 0){
            this.pagina = 1;
            this.peliculas = "";
        }
        
        this.peticionAjax = true;
      fetch(`http://www.omdbapi.com/?apikey=e5e01699&s=${this.filtro}&page=${this.pagina}`)
      .then(response => response.json())
      .then(data => {
        this.peliculas = data.Search;
        // this.filtro = "";
        this.pagina++;
        this.peticionAjax = false;
      })
      
    },

    cargarMasPeliculas() {
  if(!this.peticionAjax) {
    this.peticionAjax = true;
    fetch(`http://www.omdbapi.com/?apikey=e5e01699&s=${this.filtro}&page=${this.pagina}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          this.peliculas = this.peliculas.concat(data.Search);
          console.log(this.peliculas);
          this.pagina++;
        }
        this.peticionAjax = false;
      })
      .catch(error => {
        console.error('Error:', error);
        this.peticionAjax = false;
      });
  }
},

    informacionPelicula(id : any) {
      fetch(`https://www.omdbapi.com/?apikey=e5e01699&i=${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.detalles = data;
            })
            .catch((error) => {
                console.log(error);
            });
      this.detallesPelicula = !this.detallesPelicula;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.eventScroll);
  },
  
});


</script>

<style scoped>

#container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1em;
}

#titulo{
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

#botonBuscar{
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #66B1A4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
}

#imagenModal{
  width: 30%;
}

#texto{
  display: flex;
  flex-direction: row;
  gap: 2em;
  padding-top: 10px;
}

#texto p{
  font-size: 1.3em;
}

ion-card-title{
  font-size: 1.8em;
  text-align: center;
  border-bottom: 1px solid black;
}

#detalles p{
  font-size: 1.3em;
}

@media (max-width: 600px) {
  /* Reglas de estilo para dispositivos móviles */
  #titulo {
    font-size: 24px;
  }
  #botonBuscar {
    margin-top: 10px;
    width: 100%;
  }

  #imagenCard{
    display: block;
    margin: 0 auto;
  }
}


</style>
