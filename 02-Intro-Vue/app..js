const { createApp, ref } = Vue;

const app = createApp({
  template: `
    <h1>{{message}}</h1>
    <p>Author: {{author}}</p>
    `,
  setup() {
    const message = ref("Im Mexz");
    const author = ref("Mexz");

    setTimeout(() => {
      message.value = "Hello Vue!";
      author.value = "Vue";
    }, 1000);
    return {
      message,
      author,
    };
  },
});

app.mount("#myApp");
