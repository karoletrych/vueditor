import Vue, {DirectiveOptions} from 'vue';
import { Sortable } from '@shopify/draggable';

const sortableDirective: DirectiveOptions = {
   inserted(el: HTMLElement, node, vNode) {
      const S = Sortable;
      new S(el, node.value);
   }
};

Vue.directive('sortable', sortableDirective);

export default sortableDirective;
