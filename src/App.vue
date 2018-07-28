<template>
  <div
    id="app"
    class="App o-container o-vertical-spacing o-vertical-spacing--xxl"
  >
    <h1 class="App__headline">
      Lazy Loading Responsive Images with Vue.js
    </h1>

    <section class="o-content">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. Ergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <app-image
        :width="500"
        :height="667"
        src="https://res.cloudinary.com/maoberlehner/image/upload/c_thumb,f_auto,g_center,q_10,w_500,e_blur:1500/v1532772050/blog/demos/lazy-loading/1.jpg"
        lazy-src="https://res.cloudinary.com/maoberlehner/image/upload/c_thumb,f_auto,g_center,q_auto,w_500/v1532772050/blog/demos/lazy-loading/1.jpg"
        lazy-srcset="https://res.cloudinary.com/maoberlehner/image/upload/c_thumb,f_auto,g_center,q_auto,w_1000/v1532772050/blog/demos/lazy-loading/1.jpg 2x"
        alt=""
      />
    </section>

    <section class="o-content">
      <h2>Stet clita kasd</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. Ergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et.
      </p>
      <app-image
        :width="500"
        :height="375"
        lazy-src="https://res.cloudinary.com/maoberlehner/image/upload/c_thumb,f_auto,g_center,q_auto,w_500/v1532772050/blog/demos/lazy-loading/2.jpg"
        lazy-srcset="https://res.cloudinary.com/maoberlehner/image/upload/c_thumb,f_auto,g_center,q_auto,w_1000/v1532772050/blog/demos/lazy-loading/2.jpg 2x"
        alt=""
      />
    </section>

    <section class="o-content">
      <h2>Sed diam voluptua</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. Ergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <app-image
        :width="500"
        :height="281"
        background-color="#b0897e"
        lazy-src="https://res.cloudinary.com/maoberlehner/image/upload/c_thumb,f_auto,g_center,q_auto,w_500/v1532772050/blog/demos/lazy-loading/3.jpg"
        lazy-srcset="https://res.cloudinary.com/maoberlehner/image/upload/c_thumb,f_auto,g_center,q_auto,w_1000/v1532772050/blog/demos/lazy-loading/3.jpg 2x"
        alt=""
      />
    </section>

    <section class="o-content">
      <h2>Sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. Ergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <app-image
        :width="500"
        :height="889"
        background-color="#8ea4bf"
        lazy-src="https://res.cloudinary.com/maoberlehner/image/upload/c_thumb,f_auto,g_center,q_auto,w_500/v1532772050/blog/demos/lazy-loading/4.jpg"
        lazy-srcset="https://res.cloudinary.com/maoberlehner/image/upload/c_thumb,f_auto,g_center,q_auto,w_1000/v1532772050/blog/demos/lazy-loading/4.jpg 2x"
        alt=""
      />
    </section>
  </div>
</template>

<script>
import AppImage from './components/AppImage.vue';

export default {
  name: `App`,
  components: {
    AppImage,
  },
};
</script>

<style lang="scss">
@import './assets/scss/settings/spacings';
@import './assets/scss/generic/base';
@import '{ .o-container } from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--xxl,
} from ~@avalanche/object-vertical-spacing';
@import './assets/scss/objects/content';

.App {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);
  max-width: 532px;

  &__headline {
    text-align: center;
  }
}
</style>
