import Vue from "vue";
import VueRouter from "vue-router";
import Portada from "../views/Portada.vue";
import SobreMi from "../views/SobreMi.vue";
import Contacto from "../views/Contacto.vue";
import Post from "../views/Post.vue";
import Articulo from "../views/Articulo.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Portada,
    name: "portada"
  },
  {
    path: "/sobremi",
    component: SobreMi,
    name: "sobremi"
  },
  {
    path: "/contacto",
    component: Contacto
  },
  {
    path: "/post",
    component: Post,
    children: [
      {
        path: ":articulo",
        component: Articulo
      }
    ]
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
