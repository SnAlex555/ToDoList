import { Component } from "../../core/Component";

export class Button extends Component {

    componentDidMount() {
        this.addEventListener("click", () =>{
            this.dispatch(this.props.eventype);
    });
}


    
    render() {
        const { content, classname } = this.props;
        return `
        <my-button type="button" class='btn btn-primary btn-${classname}"> ${content}</my-button>
        `
    };

}

customElements.define('my-button', Button)