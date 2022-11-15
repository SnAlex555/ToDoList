import { Component } from "../../../core";
import './components/atoms/Button/Button';
import './components/atoms/Input/Input';

export class Input extends Component {

    constructor() {
        super();
        this.state = {
            value: "" ,
        };

        this.onInput = this.onInput.bind(this)
    }


    componentWillUpdate(name, oldValue, newValue) {
        if(name === 'value') {
            this.setState ((state) => {
                return {
                    ...state,
                    value:newValue
                }
            }) 
        }
    }

    static get observedAttributes() {
        return ['type' , 'placeholder' , 'value']
    }

    onInput() {
        this.dispatchEvent("custom-input", {
            value: evt.target.value})
    //     this.setState ((state) => {
    //         return {
    //             ...state,
    //             value:evt.Target.value
    //         }
    //     }
    //     )
    // }

    componentDidMount() {
        this.addEventListener('input', debounce(this.onInput, 300));
    }

    render() {
        return `
        <input type="${this.props.type}" 
        class="form-control" 
        placeholder="${this.props.placeholder}" /> 
        `
    }
}

customElements.define("my-input", Input)