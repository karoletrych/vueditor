import Vue, {DirectiveOptions} from 'vue';
import { Sortable, Draggable, Droppable } from '@shopify/draggable';

const sortableDirective: DirectiveOptions = {
   inserted(el: HTMLElement, node, vNode) {
      const S = Sortable;
      new S(el, node.value);
   }
};

const draggableDirective: DirectiveOptions = {
   inserted(el: HTMLElement, node, vNode) {
      const D = Draggable;
      new D(el, node.value);
   }
};

const droppableDirective: DirectiveOptions = {
    inserted(el: HTMLElement, node, vNode) {
       const D = Droppable;
       const x = new D(el, {
        draggable: 'li',
        dropzone: '.dropzone',
        mirror: {
          constrainDimensions: true,
        },
       });
        x.on('drag:start', (evt : any) => {
            console.log(evt);
      });
        
    }
 };
 

Vue.directive('sortable', sortableDirective);
Vue.directive('draggable', draggableDirective);
Vue.directive('droppable', droppableDirective);

export {sortableDirective, draggableDirective, droppableDirective};
