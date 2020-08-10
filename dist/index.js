"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
const app_1 = require("./components/app/app");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const reducer_js_1 = require("./reducer/reducer.js");
const api_1 = require("./api");
const redux_thunk_1 = require("redux-thunk");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const data_1 = require("./reducer/data/data");
const user_1 = require("./reducer/user/user");
const page_warring_jsx_1 = require("./components/page-warring/page-warring.jsx");
const error_message_jsx_1 = require("./components/error-message/error-message.jsx");
const onUnauthorized = () => {
    store.dispatch(user_1.ActionCreator.requireAuthorization(user_1.AuthorizationStatus.NO_AUTH));
};
const api = api_1.createAPI(onUnauthorized);
const store = redux_1.createStore(reducer_js_1.default, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default.withExtraArgument(api))));
new Promise((resolve) => {
    resolve(store.dispatch(user_1.Operation.checkAuth()));
})
    .finally(() => {
    Promise.all([
        store.dispatch(data_1.Operation.loadFilm()),
        store.dispatch(data_1.Operation.loadPromo())
    ])
        .then(() => {
        ReactDom.render(React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(app_1.default, null)), document.querySelector(`#root`));
    })
        .catch((err) => {
        ReactDom.render(React.createElement(page_warring_jsx_1.default, null,
            React.createElement(error_message_jsx_1.default, { errorCode: err.response.status })), document.querySelector(`#root`));
    });
});
//# sourceMappingURL=index.js.map