export default class OrderItem extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            unitPrice: 0,
            quantity: 0
        };
    }

    onClearClick(/*SyntheticMouseEvent*/ event) {
        //console.log("event=", event);
        this.setState({
            unitPrice: 0,
            quantity: 0
        });
    }

    changeUnitPrice(/*SyntheticEvent*/ event) {
        var unitPrice = event.target.value - 0;
        unitPrice = isNaN(unitPrice) ? 0 : unitPrice;
        this.setState({unitPrice: unitPrice});
    }

    changeQuantity(/*SyntheticEvent*/ event) {
        var quantity = event.target.value - 0;
        quantity = isNaN(quantity) ? 0 : quantity;
        this.setState({quantity: quantity});
    }

    cancelSubmit(/*SyntheticEvent*/ event) {
        //console.log("#submit event=", event);
        event.preventDefault();
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.cancelSubmit}>
                <input
                    type="text"
                    value={this.state.unitPrice}
                    onChange={this.changeUnitPrice.bind(this)}
                    className="form-control"
                    />

                <p className="form-control-static"> x </p>

                <input
                    type="text"
                    value={this.state.quantity}
                    onChange={this.changeQuantity.bind(this)}
                    className="form-control"
                    />

                <p className="form-control-static"> = </p>

                <p className="form-control-static">
                    {this.state.unitPrice * this.state.quantity}
                </p>

                <button onClick={this.onClearClick.bind(this)}>
                    CLEAR!
                </button>
            </form>
        );
    }
}