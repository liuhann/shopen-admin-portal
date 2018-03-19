import BootStrap from 'vue-spa-boot';

import rootApp from './App';

const boot = new BootStrap({
  rootApp,
  modules: [],
  servers: {},
});

boot.startUp();
