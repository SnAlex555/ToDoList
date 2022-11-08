import { Component } from './core';
import './components/button/Button';
import { todoList } from './services/to-do-list/todolist'

export class App extends Component {

    constructor() {
        this.state = {
            isLoading: false,
        };
    }

    registeredEvents() {
        this.addEventListener('input', (evt) => {
            if (evt.target.closest('.form-control')) {
                this.setState ((state) => {
                    return {
                        ...state,
                        value:evt.target.value
                    }
                })
            }
        })

        window.addEventListener('save-task', () => {
            this.state((state) => ({ ...state, isLoading: true }));
            todoList.createTask({ title: this.state.value }).finaly(() => {
                this.state((state) => ({ ...state, isLoading: false }));
            })

        })
    }

   
     render () {
        return `
            $(
                this.state.isLoading &&
            )
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

customElements.define ('my-app', App)