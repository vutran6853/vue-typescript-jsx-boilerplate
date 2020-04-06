import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';

const HelloWorldProp = Vue.extend({
  props: {
    msgS: {
      type: String,
      required: true
    }
  }
})

@Component
class HelloWorld extends HelloWorldProp {
  render(): VNode {
    return (
      <div class="hello">
        <h1>{this.msgS}</h1>
      </div>
    )
  }
}

export default HelloWorld