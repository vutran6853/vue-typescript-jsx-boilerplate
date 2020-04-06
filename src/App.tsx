import Vue, { VNode } from 'vue'
import './app.css'
import { Component } from 'vue-property-decorator'

@Component
class App extends Vue {
  render(): VNode {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
    )
  }
}

export default App