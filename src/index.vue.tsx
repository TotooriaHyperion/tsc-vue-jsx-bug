/** @jsx h */
import Vue, { CreateElement, VNode } from 'vue';

export default class VuePreview extends Vue {
  render(h: CreateElement): VNode {
    return <div>VuePreview</div>;
    // return h('div', undefined, 'VuePreview');
  }
}
