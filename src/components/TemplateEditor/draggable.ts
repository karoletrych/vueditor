import Vue, {DirectiveOptions} from 'vue';
import { Sortable, Draggable } from '@shopify/draggable';

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


Vue.directive('sortable', sortableDirective);
Vue.directive('draggable', draggableDirective);

export {sortableDirective, draggableDirective};
