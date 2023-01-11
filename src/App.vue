<template>
  <header>

    <div class="wrapper">
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <HelloWorld :message="message" />
      <hr />
      <div class="flex">
        <PiniaDemo />
        <FsExample />
      </div>
    </div>
  </header>

  <main>
    <ResourceLinks />
  </main>
</template>

<script>
import FsExample from '@/components/FsExample.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import PiniaDemo from '@/components/PiniaDemo.vue';
import ResourceLinks from '@/components/ResourceLinks.vue';

export default {
  name: 'App',
  components: {
    FsExample,
    HelloWorld,
    PiniaDemo,
    ResourceLinks
  },
  computed: {
    message: function () {
      let message = 'Vue';
      if (this.isDesktop) {
        message = 'NW.js & ' + message;
      }
      return message;
    }
  }
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logos {
  display: block;
  text-align: center;
}

.logos img {
  max-width: 125px;
  max-height: 125px;
  margin: 0rem 1rem 2rem 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: 15px;
  }

  .logo {
    margin: 0px 2rem 0px 0px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
