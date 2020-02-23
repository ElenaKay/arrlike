
# ARRLIKE: Does an object behave like an array?

## Installation

```sh
npm install arrlike
```

## Usage

`arrlike` exposes two functions; one is `isArrLikePure`, and the other is `isArrLikeLoose`.

### isArrLikePure(o: any, requireLength?: bool = false)

`isArrLikePure`  checks whether an object's **enumerable** keys are a sequence of ***consecutive*** integers starting from 0

```js
var isArrLikePure = require('arrlike').isArrLikePure;

isArrLikePure([0]); // true

isArrLikePure({0: 'a', 1: 'b'}); // true

isArrLikePure({0, 'a', 55: 'all right'}); // false -- `0 55` not a consecutiv sequence
```

`isArrLikePure` can optionally take a second argument; when `true`, this argument causes `isArrLikePure` to only accept objects which have an integer `length` property **and** their enumerable keys has a count equal to that `length`.

```js

var isArrLikePure = require('arrlike').isArrLikePure;

isArrLikePure(['a','b','c','d','e'], true); 
//  true; [1,2,8,40,120]['length'] === 5 and it has 5 enumerable consecutive keys: '0', '1', '2', '3', '4'

isArrLikePure({0: 'a', 1: 'b'}, true);
//  false; {0: 'a', 1: 'b'} has no 'length'

isArrLikePure({0: 'a', 1: 'b', 'length': 2}, true); 
//  false; {0: 'a', 1: 'b', 'length': 2}'s enumerable keys are '0', '1', 'length', which is not a consecutive sequence of integers
```

## isArrLikeLoose(o: any)

`isArrLikeLoose` is more lenient, and, consequently, more dangerous; it would return `true` if the list of its argument's enumerable integer keys constitute a **consecutive** sequence of integers starting from 0. otherwise, particularly when the object has no integer keys, it returns `false`.

```js
var isArrLikeLoose = require('arrlike').isArrLikeLoose;

// true; enumerable keys are '0','1','2','3','4' which constitute a sequence of consecutive integers starting from 0
isArrLikeLoose(['a', 'b', 'c'. 'd', 'e']);

// true! its enumebrable integer keys constitute a sequence of consecutive integers starting from 0
isArrLike({'a': 'apples', 'b': 'bananas', '0': 'got', '1': 'ya'});

// false
isArrLikeLoose({'a': 'avocados', 'b': 'blueberries', '1': 'not', '500': 'ya'})
```
