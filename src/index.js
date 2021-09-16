"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var core_1 = require("@apollo/client/core");
var graphql_1 = require("graphql");
var graphql_ws_1 = require("graphql-ws");
var WebSocketLink = /** @class */ (function (_super) {
    __extends(WebSocketLink, _super);
    function WebSocketLink(options) {
        var _this = _super.call(this) || this;
        _this.client = (0, graphql_ws_1.createClient)(options);
        return _this;
    }
    WebSocketLink.prototype.request = function (operation) {
        var _this = this;
        return new core_1.Observable(function (sink) {
            return _this.client.subscribe(__assign(__assign({}, operation), { query: (0, graphql_1.print)(operation.query) }), {
                next: sink.next.bind(sink),
                complete: sink.complete.bind(sink),
                error: function (err) {
                    if (err instanceof Error) {
                        return sink.error(err);
                    }
                    if (err instanceof CloseEvent) {
                        return sink.error(
                        // reason will be available on clean closes
                        new Error("Socket closed with event " + err.code + " " + (err.reason || '')));
                    }
                    return sink.error(new Error(err
                        .map(function (_a) {
                        var message = _a.message;
                        return message;
                    })
                        .join(', ')));
                }
            });
        });
    };
    return WebSocketLink;
}(core_1.ApolloLink));
