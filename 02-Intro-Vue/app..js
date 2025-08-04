const { createApp, ref } = Vue;

const app = createApp({
    template: `
    <h1>Introduction to Vue</h1>
    <p>Desde app.js</p>
    `
})


app.mount('#myApp');