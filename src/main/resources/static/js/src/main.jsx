import "babelify/polyfill"; // Needed for Babel's experimental features.

import App from './components/App.jsx';
import TestButton from './components/TestButton.jsx';


React.render(
    <App />,
    document.getElementById('container')
);
