/// <reference types="zen-observable" />
import { ApolloLink, Operation, FetchResult, Observable } from '@apollo/client/core';
import { ClientOptions } from 'graphql-ws';
export declare class WebSocketLink extends ApolloLink {
    private client;
    constructor(options: ClientOptions);
    request(operation: Operation): Observable<FetchResult>;
}
