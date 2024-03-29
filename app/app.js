import Vue from "nativescript-vue";
import App from "./components/App";
import Home from "./components/Home";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import Pager from 'nativescript-pager/vue';

Vue.use(RadSideDrawer);
Vue.use(Pager);

Vue.config.silent = (TNS_ENV === 'production');
Vue.registerElement('BarcodeScanner', () => require('nativescript-barcodescanner').BarcodeScannerView)


new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Home, { slot: 'mainContent' })
          ]
        )
      }
  }).$start();
