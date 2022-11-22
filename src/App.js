import { Component } from "./core";
import "./components/molecules/InputGroup/InputGroup";
import { todoList } from "./services/todoList/TodoList";
import "./components/molecules/Task/Task";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      isLoading:false,
    };
  }

  getTasks() {
    todoList.getTasks().then((data) => {
      this.setState((state) => {
        return {
          ...state,
          tasks: data.map((item) => ({...item,isEditting: false

          }})
        };
      });
    });
  }

  deleteTask = (id) =>{
    todoList.deleteTask(id)
  }

  onClick = (evt) =>{
    const target = evt.target;
    if(target.closest('.delete-action')) {
      const data = target.dataset;
      this.deleteTasks(data.id)
      .then(() => {
        this.getTasks()
      }
      ) 
    }

    if(target.closest('.edit-action')) {
      const data = target.dataset;
      this.setState ((state) => {
        return {
          ...state,
          tasks:state.tasks.map((item) => {
            if(item.id === data.id) {
              return {...item, isEdditing:true}
            }
            return item
          })
        }
      }
    }
  }

  saveTask = (evt) => {
    todoList.createTask({...evt.detail,isCompleted: false})
    .then(() => {
      this.getTasks()
    })
  }

  componentDidMount(){
    this.getTasks();
    this.addEventListener('save-task',this.saveTask);
    this.addEventListener('click',this.onClick);
  }

  componentWillMount(){
    this.removeEventListener('save-task',this.saveTask)
    this.removeEventListener('click',this.onClick)
  }

  render() {
    return `
        <div class='container mt-5'>
          <my-input-group></my-input-group>
          <ul class="list-group-item">
            ${this.state.tasks
              .map(
                (item) => `
              <li class="list-group-item">
                <div class="form-check d-flex justify-content-between align-items-center">
                  <div>
                      <input class="form-check-input" type="checkbox" 
                      ${item.isCompleted ? 'checked' : ''
                    } id="${item.id}">
                      <label class="form-check-label" for="flexCheckDefault">
                        ${item.title}
                      </label>s
                    </div>
                    <div class='d-flex'>
                      <button data-id="${item.id}"type="btn btn-danger btn-sm m-2 delete-action">Delete</my-button>
                      <button data-id="${item.id}" btn-danger primary-m-2 edit-action">Edit</my-button>
                    </div>
              </div>
            </li>
            `)
            .join(' ')}
          </ul>
        </div>
        `;
  }

customElements.define("my-app", App);

{
  /* <ul class="list-group">
  <li class="list-group-item">
    <div class="form-check d-flex justify-content-between align-items-center">
      <div>
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div class='d-flex'>
          <my-button content="Delete" classname="btn btn-danger btn-sm"></my-button>
          <my-button content="Update" classname="btn btn-sm btn-primary"></my-button>
        </div>
    </div>
  </li>
</ul> */
}
