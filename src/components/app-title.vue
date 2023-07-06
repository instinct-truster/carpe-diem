<template>
  <h1>{{ titleText }}</h1>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  titleText: String,
});
</script>
