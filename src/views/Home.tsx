import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld';

interface IHomeState {
  msgS: string
}

@Component
class Home extends Vue {
  state: IHomeState = {
    msgS: "Welcome to Vue + Typescript + JSX"
  }
  render(): VNode {
    return (
      <div class="home">
        <HelloWorld msg-s={this.state.msgS} />
      </div>
    )
  }
}

export default Home