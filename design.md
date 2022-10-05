## LOTR SDK Design

This document describes the design of the LOTR SDK. It is intended to be a
living document that will be updated as the SDK evolves.

### Goals

The LOTR SDK is intended to be a lightweight, easy-to-use SDK for interacting
with the LOTR API. It should be easy to use.


### Design

I got inspired by [NestJS](https://nestjs.com/) for the folder structure and
the way the SDK is built. I think it's a good idea to have a folder for each
resource. 
There is a main base service that is extended by each resource service.


### Posible Improvements

The LOTR SDK could be improved by adding 
- more tests (unit and integration)
- better documentation
- some examples
- support to fetch different resources from the same method (for example, 
  `getOneById` could return a book and its chapters)
  something like MikroORM does with `populate` method
- maybe add rate limiting and caching 
- stats and metrics (for example, how many requests are made to the API)
- add a logger
- better error handling
