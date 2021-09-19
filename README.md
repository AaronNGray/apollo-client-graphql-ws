# apollo-client-graphql-ws
Package implementing :- https://github.com/enisdenjo/graphql-ws#apollo-client

## Usage
```
import { WebSocketLink } from 'apollo-client-graphql-ws';

const wsLink = new WebSocketLink({
  url: `ws://localhost:8000/graphql`,
  options: {
    reconnect: true,
  },
});
```
