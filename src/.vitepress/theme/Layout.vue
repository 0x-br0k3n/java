<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme' // <-- IMPORTANT: Keep this import here!
import { nextTick, provide } from 'vue'
import Cursor from './Cursor.vue' // <-- Import Cursor if you want to place it in a slot

// --- All the 'toggle-appearance' logic goes here in the <script setup> ---
const { isDark } = useData()

console.log('1. Layout.vue script setup is running.'); // Debug log

const enableTransitions = () => {
  const isApiSupported = 'startViewTransition' in document;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  const enabled = isApiSupported && prefersReducedMotion;
  console.log(`2. View Transitions check (from Layout.vue): API Supported=${isApiSupported}, Prefers Reduced Motion=${prefersReducedMotion}, Enabled=${enabled}`);
  return enabled;
}

// Provide the toggle-appearance function from within Layout.vue's setup
// This makes it available to DefaultTheme.Layout and all its children
provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  console.log('3. toggle-appearance function called (from Layout.vue)!');

  if (!enableTransitions()) {
    isDark.value = !isDark.value
    console.log('4. View transitions not enabled, toggling dark mode directly.');
    return
  }

  console.log('5. Attempting to start View Transition...');

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  try {
    await document.startViewTransition(async () => {
      isDark.value = !isDark.value
      await nextTick()
      console.log('6. Inside View Transition callback: isDark now', isDark.value, 'class on html:', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }).ready;
    console.log('7. View Transition .ready promise resolved successfully.');
  } catch (error) {
    console.error('ERROR: 8. View Transition failed at startViewTransition or .ready:', error);
  }

  if (document.startViewTransition) {
      document.documentElement.animate(
        { clipPath: isDark.value ? clipPath.reverse() : clipPath },
        {
          duration: 300,
          easing: 'ease-in',
          fill: 'forwards',
          pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
        }
      );
      console.log('9. Custom animation applied.');
  } else {
      console.log('9. Custom animation skipped because View Transitions API is not available.');
  }
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <Cursor />
    </template>

    </DefaultTheme.Layout>
</template>

<style>
/* Keep all your view transition CSS here or ensure it's in your global style.css */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>