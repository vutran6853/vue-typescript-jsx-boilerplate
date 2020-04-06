import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
class Home extends Vue {
  render(): VNode {
    return (
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    )
  }
}

export default Home