# is-thirteen-ws
SaaS for [is-thirteen](https://github.com/jezen/is-thirteen) npm module.

## Hosted version

http://is-thirteen-ws.cleverapps.io

## Endpoints

```
GET /is-thirteen?query={q1}[&query={q2}...]

{
  q1: {query: "q1", isThirteen: true|false},
  q2: {query: "q2", isThirteen: true|false},
  ...
}
```
