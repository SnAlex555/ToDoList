import { Component } from './core/Component';
import './components/button/Button';

export class App extends Component {

     render () {
        return `
          <div class='container mt-5'>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button eventtype='save-task' class="btn btn-outline-primary" type="button" id="button-addon2">save</button>
          </div>
          <ul class="list-group">
            <li class="list-group-item">
              <div class="form-check d-flex justify-content-between align-items-center">
                <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div class='d-flex'>
                    <my-button type="Delete" classname="btn btn-danger btn-sm">Delete</my-button>
                    <my-button type="Update" classname="btn btn-primary btn-sm">Update</my-button>
                  </div>
              </div>
            </li>
          </ul>
        </div>
       ` 
     }

}

customElements.define('my-app', App)