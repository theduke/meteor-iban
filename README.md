# meteor-iban
IBAN &amp; BBAN validation, formatting and conversion for the Meteor framework.


This [Atmosphere package](http://atmospherejs.com/theduke/iban) or [Meteor](https://www.meteor.com/) wraps the IBAN validation Javascript library by ARHS, which can be found here: https://github.com/arhs/iban.js .

The package supplies a global IBAN object that can be for validating and converting IBANs.


Version: 0.0.5
The version of this package will follow the library version.

## Installation


```bash
meteor add theduke:iban

```

## Usage

```javascript
IBAN.isValid('hello world'); // false
IBAN.isValid('BE68539007547034'); // true
```

Available methods:

```javascript
* isValid(iban)
* toBBAN(iban, separator)
* fromBBAN(countryCode, bban)
* isValidBBAN(countryCode, bban)
* printFormat(iban, separator)
* electronicFormat(iban)
```

For more information, check out https://github.com/arhs/iban.js.

## Issues

If you have any problems with the library functionality itself, please create an issue on the library Github page:
https://github.com/arhs/iban.js

Only create issues on this repository, if the issue is related to Meteor integration.

## Authors

The real work is done by the authors of the IBAN library, 
this is just a small wraper package.

* Christoph Herzog - chris@theduke.com
