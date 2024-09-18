import { createRouter, createWebHistory } from 'vue-router';
import MovieDetails from '../components/MovieDetails.vue';


const routes = [
  {
    path: '/movies/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  },
 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;  // Mantener la posición guardada al retroceder
      } else {
        return { x: 0, y: 0 };  // Desplazarse a la parte superior de la página
      }
    }
  });

export default router;