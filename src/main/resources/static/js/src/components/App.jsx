import OrderItem from './OrderItem.jsx';

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    onBtnClick(a, b, c, d) {
        console.log("onBtnClick", a, b, c, d);
    }

    render() {
        return (
            <div>
                <OrderItem />
            </div>
        );
    }
};