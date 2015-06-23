export default class TestButton extends React.Component {

    constructor(props) {
        console.log("Button constructor props=", props)
        super(props);
    }

    onClick(event) {
        console.log("event=", event);
        this.props.onClick(event);
    }

    render() {
        return (
            <div>
                <div onClick={this.onClick.bind(this)}>TestButton</div>
            </div>
        );
    }
}