<template>
    <div>
        <h1>Three.js</h1>
        <main>
            <h2>contents</h2>
            <div class="experience">
                <canvas class="experience-canvas"></canvas>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import Experience from '@/plugin/three';

export default {
    mounted() {
        const experience = new Experience(document.querySelector('.experience-canvas'));
    },
};
</script>

<style></style>
