// eslint-disable-next-line import/no-unassigned-import
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

ReactDOM.render(<Root />, document.getElementById('root'), () => console.info('react component rendered on DOM'));
