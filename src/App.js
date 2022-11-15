import { Component } from './core/Component';
import './components/atoms/button/Button';
import './components/atoms/input/Input';

export class App extends Component {

     render () {
        return `
          <div class='container mt-5'>
          <my-input-group></my-input-group>
          </div>
        `;
     }
    }

customElements.define('my-app', App);