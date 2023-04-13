<template>
    
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>Inicio</ion-title>
        </ion-toolbar>
      </ion-header>

        <ion-content :fullscreen="true">
            <div>
                <h1 id="titulo">WEB PELICULAS</h1>
                <p id="texto">
                    En está pagina vas a poder encontrar peliculas, series y documentales.
                </p>
            </div>

            <div class="gallery-container">
              <div class="gallery__item">
                <img src="../../public/cars.jpg" alt="" class="gallery__img">
              </div>
              <div class="gallery__item">
                <img src="../../public/harry.jpg" alt="" class="gallery__img">
              </div>
              <div class="gallery__item">
                <img src="../../public/acero.jpg" alt="" class="gallery__img">
              </div>
              <div class="gallery__item">
                <img src="../../public/bro2.jpg" alt="" class="gallery__img">
              </div>
              <div class="gallery__item">
                <img src="../../public/john.jpg" alt="" class="gallery__img">
              </div>
              <div class="gallery__item">
                <img src="../../public/ironman.jpg" alt="" class="gallery__img">
              </div>
              <div class="gallery__item">
                <img src="../../public/django.jpg" alt="" class="gallery__img">
              </div>
              <div class="gallery__item">
                <img src="../../public/land.jpg" alt="" class="gallery__img">
              </div>
              <div class="gallery__item">
                <img src="../../public/piratas.jpg" alt="" class="gallery__img">
              </div>
            </div>
        </ion-content>
    </ion-page> 


</template>

<script lang="ts">

import {  
  IonContent, 
  IonButtons,
  IonMenuButton,
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
 } from '@ionic/vue';

import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
    name: 'Inicio',
    components: {
    IonContent,
    IonButtons,
    IonMenuButton,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
  }
})

</script>

<style scoped>

#titulo{
    text-align: center;
    font-size: 50px;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    margin-top: 20px;
}

#texto{
    text-align: center;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    margin-top: 20px;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  grid-gap: 10px;
  padding: 20px;
}

.gallery__item {
  position: relative;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery__item:nth-child(4){
  grid-column-start: span 5;
}
.gallery__item:nth-child(5){
  grid-row-start: span 2;
}
.gallery__item:nth-child(9){
  grid-column-start: span 4;
}

.gallery__item:nth-child(2){
  grid-column-start: span 2;
}

.gallery__item:nth-child(3){
  grid-column-start: span 2;
}
  

</style>

