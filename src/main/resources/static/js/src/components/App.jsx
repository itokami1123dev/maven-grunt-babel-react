import TestButton from './TestButton.jsx';

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
                <div>Hello maven grunt babel react</div>
                <TestButton onClick={this.onBtnClick.bind(this)}/>
            </div>
        );
    }

    //<TestButton onClick={this.onBtnClick} ></TestButton>
};