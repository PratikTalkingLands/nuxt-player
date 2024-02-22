<template>
    <div class="h-100 w-100 pa-2 d-flex flex-column">
      <div class="h-90 w-100" max-height="75%">
        <v-img class="h-75 w-100 rounded-lg" :src="currentItem.image" cover></v-img>
        <div class="h-25 w-100 overflow-y-auto">
          <h1 class="w-100">{{ currentItem.title }}</h1>
          <p class="w-100">{{ currentItem.description }}</p>
        </div>
      </div>
      <v-progress-linear v-if="stopButtonVisible" color="primary" :model-value="progressPercentage"></v-progress-linear>
      <div class="h-10 w-100 d-flex justify-space-between px-3">
        <div class="h-100 d-flex align-center ga-3">
          <v-btn
            v-if="isStartButtonVisible"
            variant="icon"
            icon="mdi-play"
            class="bg-secondary"
            @click="play"
          ></v-btn>
          <v-btn
            v-if="isPauseButtonVisible"
            variant="icon"
            icon="mdi-pause"
            class="bg-secondary"
            @click="pause"
          ></v-btn>
          <v-btn
            v-if="stopButtonVisible"
            variant="icon"
            icon="mdi-stop"
            class="bg-primary"
            @click="stop"
          ></v-btn>
        </div>
        <div class="h-100 d-flex align-center ga-3">
          <v-btn
            variant="icon"
            icon="mdi-chevron-left"
            class="bg-black"
            @click="prevItem"
          ></v-btn>
          <v-btn
            variant="icon"
            icon="mdi-chevron-right"
            class="bg-black"
            @click="nextItem"
          ></v-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineProps } from 'vue';
  
  const props = defineProps(["items"])
  const items = props?.items
  
  const currentIndex = ref(0);
  const currentItem = ref(items[currentIndex.value]);
  
  // UI
  const stopButtonVisible = ref(false);
  const isPauseButtonVisible = ref(false);
  const isStartButtonVisible = ref(true);
  
  let intervalId = null;
  
  const nextItem = () => {
      currentIndex.value = (currentIndex.value + 1) % items.length;
      currentItem.value = items[currentIndex.value];
      if (currentIndex.value === 0) {
          stop(); // Stop autoplay if it reaches the last story
      }
  }
  
  const prevItem = () => {
      currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
      currentItem.value = items[currentIndex.value];
  }
  
  const play = () => {
      stopButtonVisible.value = true;
      isPauseButtonVisible.value = true;
      isStartButtonVisible.value = false;
      if (intervalId === null) {
          intervalId = setInterval(() => {
              nextItem();
          }, 6000);
      }
  }
  
  const stop = () => {
      clearInterval(intervalId);
      intervalId = null;
      currentIndex.value = 0; // Reset to the first story when manually stopped
      currentItem.value = items[currentIndex.value];
      stopButtonVisible.value = false;
      isPauseButtonVisible.value = false;
      isStartButtonVisible.value = true;
  }
  
  const pause = () => {
      clearInterval(intervalId);
      intervalId = null;
      isPauseButtonVisible.value = false;
      isStartButtonVisible.value = true;
  }
  
  // Compute the progress percentage
  const progressPercentage = computed(() => {
    return ((currentIndex.value + 1) / items.length) * 100;
  });
  </script>
  
  <style>
  .h-90 {
      height: 90%;
  }
  
  .h-10 {
      height: 10%;
  }
  </style>
  