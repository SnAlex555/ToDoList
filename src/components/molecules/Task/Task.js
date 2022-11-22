export class Task extends Component {

    constructor() {
        this.state = {
            isEditting: false,
        };
    }
    static get observedAttributes() {
        return {"title", "id", "isCompleted"};
    }

    onClick = (evt) => {
        const target = evt.target;
    if(target.closest('.edit-action')) {
    }

    componentDidMount() {
        this.addEventListener('click',this.onClick)
    }

    componentWiilUnmount() {
        this.removeEventListener('click',this.onClick)
    }

    render() {
        return`
        <li class="list-group-item">
            <div class="form-check d-flex justify-content-between align-items-center">
            ${this.state.isEditting
                ? `<my-input-group type="edit-task"></my-input-group>`
                : `
            <div>
              <input 
              class="form-check-input" 
              type="checkbox" ${JSON.parse(this.props.isCompleted)? "checked' : ""}
             id="${this.props.id}"
             >
              <label class="form-check-label" for="${this.props.id}">
                ${this.props.title}
              </label>
            </div>

            <div class='d-flex'>
                <button
               data-id="${this.props.id}"
               class="btn btn-danger btn 
               btn-sm m-2 delete-action">Delete</my-button>
              <button data-id="${item.id}" btn-danger primary-m-2 edit-action">Edit</my-button>
            </div>
      </div>
    </li>`
    }
}