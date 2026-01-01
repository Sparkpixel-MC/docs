<!-- docs/.vuepress/components/CraftingTable.vue -->
<template>
  <div class="crafting-table">
    <div class="input-grid">
      <div
        v-for="(item, index) in 9"
        :key="index"
        class="grid-cell"
        :class="{ 'has-item': !!recipe[index] }"
      >
        <template v-if="recipe[index]">
          <img
            v-if="isAnyPlanks(recipe[index])"
            :src="plankImages[currentPlankIndex]"
            :alt="getItemName(recipe[index])"
            :title="getItemName(recipe[index])"
            class="item-image any-planks-anim"
            @error="handleImageError"
          />
          <img
            v-else
            :src="getItemImage(recipe[index])"
            :alt="getItemName(recipe[index])"
            :title="getItemName(recipe[index])"
            class="item-image"
            @error="handleImageError"
          />
        </template>
      </div>
    </div>
    <div class="arrow">
      <svg viewBox="0 0 24 24" class="arrow-icon">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
      </svg>
    </div>
    <div class="output-container">
      <div class="output-slot">
        <img
          v-if="output"
          :src="getItemImage(output)"
          :alt="getItemName(output)"
          :title="getItemName(output)"
          class="output-image"
          @error="handleImageError"
        />
      </div>
      <div v-if="outputCount > 1" class="output-count">{{ outputCount }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onBeforeMount } from 'vue'

const props = defineProps({
  recipe: {
    type: Array,
    required: true,
    validator: (val) => val.length <= 9
  },
  output: {
    type: String,
    required: true
  },
  outputCount: {
    type: Number,
    default: 1
  },
  itemNames: {
    type: Object,
    default: () => ({})
  }
})

const getItemImage = (itemName) => {
  // 将每个单词的首字母转为大写
  const formattedName = itemName.split('_').map(part => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join('_');

  return `https://zh.minecraft.wiki/images/Invicon_${formattedName}.png`;
}

const getItemName = (itemName) => {
  return props.itemNames[itemName] || itemName;
}

const isAnyPlanks = (itemName) => {
  return itemName === 'any_planks' || itemName === 'anyplanks';
}

const plankImages = [
  'https://zh.minecraft.wiki/images/Invicon_Oak_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Spruce_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Birch_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Jungle_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Acacia_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Dark_Oak_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Mangrove_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Cherry_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Bamboo_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Pale_Oak_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Crimson_Planks.png',
  'https://zh.minecraft.wiki/images/Invicon_Warped_Planks.png'
]

const currentPlankIndex = ref(0)
let animationInterval = null

const startAnimation = () => {
  if (typeof window === 'undefined') return;
  animationInterval = setInterval(() => {
    currentPlankIndex.value = (currentPlankIndex.value + 1) % plankImages.length
  }, 600)
}

const stopAnimation = () => {
  if (animationInterval) {
    clearInterval(animationInterval)
    animationInterval = null
  }
}

onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  stopAnimation()
})

const handleImageError = (event) => {
  if (event && event.target) {
    event.target.style.display = 'none'
  }
}
</script>

<style scoped>
.crafting-table {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: #c6c6c6;
  border: 2px solid #373737;
  border-radius: 2px;
  user-select: none;
}

.input-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: #8b8b8b;
  padding: 2px;
  border: 1px solid #373737;
}

.grid-cell {
  width: 32px;
  height: 32px;
  background: #c6c6c6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-image {
  width: 32px;
  height: 32px;
  object-fit: contain;
  image-rendering: pixelated;
  transition: transform 0.2s ease;
}

.item-image:hover {
  transform: scale(1.1);
}

.any-planks-anim {
  animation: none;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.arrow-icon {
  width: 24px;
  height: 24px;
  fill: #373737;
}

.output-container {
  position: relative;
  display: flex;
  align-items: center;
}

.output-slot {
  width: 32px;
  height: 32px;
  background: #c6c6c6;
  border: 1px solid #373737;
  display: flex;
  align-items: center;
  justify-content: center;
}

.output-image {
  width: 32px;
  height: 32px;
  object-fit: contain;
  image-rendering: pixelated;
  transition: transform 0.2s ease;
}

.output-image:hover {
  transform: scale(1.1);
}

.output-count {
  position: absolute;
  bottom: -2px;
  right: -2px;
  background: #2c2c2c;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  padding: 1px 4px;
  border-radius: 2px;
  border: 1px solid #ffffff;
  min-width: 12px;
  text-align: center;
}

/* Dark mode support */
[data-theme="dark"] .crafting-table {
  background: #5a5a5a;
  border-color: #c6c6c6;
}

[data-theme="dark"] .input-grid {
  background: #3d3d3d;
  border-color: #c6c6c6;
}

[data-theme="dark"] .grid-cell {
  background: #5a5a5a;
}

[data-theme="dark"] .arrow-icon {
  fill: #c6c6c6;
}

[data-theme="dark"] .output-slot {
  background: #5a5a5a;
  border-color: #c6c6c6;
}

[data-theme="dark"] .output-count {
  background: #ffffff;
  color: #2c2c2c;
  border-color: #2c2c2c;
}
</style>