import { Component } from './core/Component';
import './components/atoms/Button/Button';
import './components/atoms/Input/Input';
import { todoList } from '../../../services/to-do-list/todolist';

export class InputGroup extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    onSave() {
        if (this.state.inputValue) {
            todoList.createTask({
                title:this.state.inputValue,
                isCompleted: false
            })
        }

    }

    oninput(evt) {
        this.setState ((state) => {
            return {
                ...state,
                inputValue: evt.detail.value
            }
        }
        )
    }

    componentDidMount() {
        this.addEventListener('save-task', this.onSave);
        this.addEventListener('custom-input', this.onInput)
    }

    render() {
        return `
        <div class="input-group mb-3">
            <my-input type="text" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button eventtype='save-task' class="btn btn-outline-primary" type="button" id="button-addon2">save</button>
          </div>
    `
    }
}

customElements.define('my-input-group', InputGroup)