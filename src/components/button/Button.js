import { Component } from "../../core";

export class Button extends Component {

    registerEvents() {
        this.addEventListener ("click",() => {
            this.dispatchEvent(this.props.eventType)
    })
    };

    render() {
        const [ content, classname ] = this.props;
        return `
        <my-button type="button" class='btn btn-primary btn-${className}"> ${content}</my-button>
        `
    };

}

customElements.define('my-app', Button)