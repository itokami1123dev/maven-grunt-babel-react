export default class OrderItem extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            unitPrice: 0,
            quantity: 0
        };
    }

    onClick(event) {
        console.log("event=", event);
        //this.props.onClick(event);
    }

    changeUnitPrice(/*SyntheticEvent*/ event) {
        var unitPrice = !event.target.value ? 0 : event.target.value - 0;
        this.setState({unitPrice: unitPrice});
    }

    changeQuantity(/*SyntheticEvent*/ event) {
        var quantity = !event.target.value ? 0 : event.target.value - 0;
        this.setState({quantity: quantity});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.unitPrice} onChange={this.changeUnitPrice.bind(this)}/>
                <input type="text" value={this.state.quantity} onChange={this.changeQuantity.bind(this)}/>
                <button onClick={this.onClick.bind(this)}>delete</button>
            </div>
        );
    }
}