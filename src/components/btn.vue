<template>
    <button class="custom-button">
        Saiba como participar
    </button>
</template>

<style scoped>
.custom-button {
    color: #fff;
    border-radius: 5px;
    background-color: #D40D35;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-button:hover {
    background-color: #A00B2A;
    transform: scale(1.05);
}

.custom-button:active {
    background-color: #800922;
    transform: scale(0.95);
}
</style>