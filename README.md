# is-thirteen-ws

[![Greenkeeper badge](https://badges.greenkeeper.io/BenoitAverty/is-thirteen-ws.svg)](https://greenkeeper.io/)
SaaS for [is-thirteen](https://github.com/jezen/is-thirteen) npm module.

Currently, this only supports the is(x).thirteen() method. Feel free to submit pull requests to improve coverage.

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

## examples

```
GET http://is-thirteen.cleverapps.io/is-thirteen?query=13

{
  13: {query: 13, isThirteen: true}
}
```

```
GET http://is-thirteen-ws.cleverapps.io/is-thirteen?query=13&query=thirte3n

{
  "13": {"query":"13","isThirteen":true},
  "thirte3n":{"query":"thirte3n","isThirteen":false}
}
```
