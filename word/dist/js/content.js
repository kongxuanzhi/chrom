/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(1);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exposeLoader$Jquery = __webpack_require__(0);

var _exposeLoader$Jquery2 = _interopRequireDefault(_exposeLoader$Jquery);

var _words = __webpack_require__(6);

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var json = __webpack_require__(7);

if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function () {
    for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x) {}
    return this;
  };
}

var getWords = function getWords(offset, length) {
  if (offset + length > json.length) {
    offset = json.length - length;
  }

  return json.slice(offset, offset + length);
};

exports.default = {
  renderResult: function renderResult(offset) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return (0, _words2.default)({
      words: getWords(offset, length)
    });
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="word-slide-wrap">\n  <div id="word-slide">\n    <div class="section fp-auto-height">\n      ';
 words.forEach(function(word, index) { ;
__p += '\n      <div class="slide" data-index="' +
((__t = ( index )) == null ? '' : __t) +
'">' +
((__t = ( index )) == null ? '' : __t) +
'  ' +
((__t = ( word.en )) == null ? '' : __t) +
'  ' +
((__t = ( word.zh )) == null ? '' : __t) +
'</div>\n      ';
 }) ;
__p += '\n    </div>\n  </div>\n</div>';

}
return __p
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [{"en":"abandon","zh":"v.抛弃，放弃"},{"en":"abandonment","zh":"n.放弃"},{"en":"abbreviation","zh":"n.缩写"},{"en":"abeyance","zh":"n.缓办，中止"},{"en":"abide","zh":"v.遵守"},{"en":"ability","zh":"n.能力"},{"en":"able","zh":"adj.有能力的，能干的"},{"en":"abnormal","zh":"adj.反常的，变态的"},{"en":"aboard","zh":"adv.船(车)上"},{"en":"abolish","zh":"v.废除，取消"},{"en":"abolition","zh":"n.废除，取消"},{"en":"abortion","zh":"n.流产"},{"en":"abortive","zh":"adj.无效果的，失败的"},{"en":"about","zh":"prep.关于，大约"},{"en":"above","zh":"prep.在...之上，高于"},{"en":"above-mentioned","zh":"adj.上述的"},{"en":"abreast","zh":"adv.并肩，并列"},{"en":"abridge","zh":"v.省略，摘要"},{"en":"abroad","zh":"adv.国外，海外"},{"en":"abrogate","zh":"v.取消，废除"},{"en":"abrogation","zh":"n.取消，废除"},{"en":"abrupt","zh":"adj.突然的，生硬的"},{"en":"abruptly","zh":"adv.突然地"},{"en":"absence","zh":"n.缺席，缺乏"},{"en":"absent","zh":"adj.缺席的，不存在"},{"en":"absent-minded","zh":"adj.心不在焉的"},{"en":"absolute","zh":"adj.完全的，绝对的"},{"en":"absolutely","zh":"adv.绝对，完全"},{"en":"absorb","zh":"v.吸收，专心于"},{"en":"absorption","zh":"n.吸收，专注"},{"en":"abstract","zh":"adj.抽象的，难懂的"},{"en":"abstraction","zh":"n.抽象，提取"},{"en":"absurd","zh":"adj.荒唐的"},{"en":"absurdity","zh":"n.荒唐(事)"},{"en":"abundance","zh":"n.丰富，大量"},{"en":"abundant","zh":"adj.丰富的，充裕的"},{"en":"abuse","zh":"v.滥用，谩骂"},{"en":"abasement","zh":"n.滥用"},{"en":"academic","zh":"adj.学院的，学术的"},{"en":"academy","zh":"n.学院，研究院"},{"en":"accede","zh":"v.同意"},{"en":"accelerate","zh":"v.加速，加快"},{"en":"acceleration","zh":"v.加速，促进"},{"en":"accent","zh":"n.腔调  v.重读"},{"en":"accept","zh":"v.接受，同意"},{"en":"acceptable","zh":"adj.可接受的，合意的"},{"en":"acceptance","zh":"n.接受，承兑"},{"en":"access","zh":"n.接近，入口"},{"en":"accessible","zh":"adj.可接近的"},{"en":"accessory","zh":"n.附件，装饰品"},{"en":"accident","zh":"n.事故，意外之事"},{"en":"accidental","zh":"adj.意外的，偶然的"},{"en":"accidentally","zh":"adv.偶尔，附带"},{"en":"accommodate","zh":"v.提供便利，拆借"},{"en":"accommodation","zh":"n.便利，通融"},{"en":"accompaniment","zh":"n.伴侣，伴奏"},{"en":"accompany","zh":"v.伴随，伴奏"},{"en":"accomplish","zh":"v.完成，达到"},{"en":"accomplishment","zh":"n.成就"},{"en":"accord","zh":"v.符合，协调"},{"en":"accordance","zh":"n.按照，与...一致"},{"en":"according","zh":"adj.按照，据...说"},{"en":"accordingly","zh":"adj.相应地，从而"},{"en":"account","zh":"n.账目  v.说明"},{"en":"accountant","zh":"n.会计(师)"},{"en":"accounting","zh":"n.会计学"},{"en":"accrue","zh":"v.产生，发生"},{"en":"accrued","zh":"adj.增值的，应计的"},{"en":"accumulate","zh":"v.积累，积蓄"},{"en":"accumulation","zh":"n.积累"},{"en":"accumulative","zh":"adj.积累的"},{"en":"accuracy","zh":"n.准确(性)"},{"en":"accurate","zh":"adj.准确的，精密的"},{"en":"accurately","zh":"adj.准确地"},{"en":"accusation","zh":"n.控告"},{"en":"accuse","zh":"v.告发，指责"},{"en":"accustom","zh":"v.使...习惯于"},{"en":"ache","zh":"v.觉得疼  n.疼痛"},{"en":"aching","zh":"adj.疼痛的"},{"en":"achieve","zh":"v.完成，实现"},{"en":"achievement","zh":"n.完成，成就"},{"en":"acid","zh":"n.酸"},{"en":"acknowledge","zh":"v.承认，鸣谢"},{"en":"acknowledgment","zh":"n.承认，鸣谢，回执"},{"en":"acquaint","zh":"n.使熟悉，相识"},{"en":"acquaintance","zh":"n.熟悉人，相识"},{"en":"acquaintant","zh":"adj.熟悉的"},{"en":"acquire","zh":"v.求得，获得"},{"en":"acquisition","zh":"n.获得"},{"en":"acre","zh":"n.英亩"},{"en":"acrobat","zh":"n.杂技演员"},{"en":"acrobatics","zh":"n.杂技"},{"en":"across","zh":"prep.横越  adv.横穿"},{"en":"act","zh":"n.行为，法令  v.表演"},{"en":"action","zh":"n.行为，行动"},{"en":"activate","zh":"v.使活跃，开动"},{"en":"active","zh":"adj.活跃的，积极的"},{"en":"actively","zh":"adv.积极地，活跃地"},{"en":"activity","zh":"n.活动"},{"en":"actor","zh":"n.男演员"},{"en":"actress","zh":"n.女演员"},{"en":"actual","zh":"adj.现实的，实际的"},{"en":"actuality","zh":"n.实际"},{"en":"actually","zh":"adv.实际上，居然"},{"en":"acute","zh":"adj.剧烈的，敏锐的"},{"en":"a.d.","zh":"(缩)公元"},{"en":"ad","zh":"n.(缩)广告"},{"en":"adapt","zh":"v.使适应，改编"},{"en":"adaptation","zh":"n.适应"},{"en":"add","zh":"v.增添，加，补充"},{"en":"addition","zh":"n.增加，附加物"},{"en":"additional","zh":"adj.增加的，附加的"},{"en":"additive","zh":"adj.附加的  n.添加剂"},{"en":"address","zh":"n.地址  v.致词"},{"en":"adequate","zh":"adj.足够的，恰当的"},{"en":"adequately","zh":"adv.恰当地"},{"en":"adhere","zh":"v.粘附，坚持"},{"en":"adhesive","zh":"n.粘合剂"},{"en":"adjacent","zh":"adj.邻近的"},{"en":"adjective","zh":"n.形容词"},{"en":"adjoin","zh":"v.毗连"},{"en":"adjust","zh":"v.调整，修整"},{"en":"adjustable","zh":"adj.可调整的"},{"en":"adjustment","zh":"n.调整"},{"en":"administer","zh":"v.管理"},{"en":"administration","zh":"n.行政管理，管理机关"},{"en":"administrative","zh":"adj.行政管理的"},{"en":"admirable","zh":"adj.可钦佩的"},{"en":"admiration","zh":"n.羡慕，钦佩"},{"en":"admire","zh":"v.钦佩，赞美"},{"en":"admission","zh":"n.准入，承认"},{"en":"admit","zh":"v.承认，接纳"},{"en":"admittedly","zh":"adv.明白地"},{"en":"adolescence","zh":"n.青春期"},{"en":"adolescent","zh":"adj.青春期的"},{"en":"adopt","zh":"v.采用，采纳"},{"en":"adoption","zh":"n.采用"},{"en":"adore","zh":"v.崇拜，敬慕"},{"en":"adorn","zh":"v.装饰，佩带"},{"en":"adornment","zh":"n.装饰(品)"},{"en":"adult","zh":"n.成年人  adj.成年的"},{"en":"advance","zh":"v.前进"},{"en":"advanced","zh":"adj.先进的，发达的"},{"en":"advantage","zh":"n.优点，优势"},{"en":"advantageous","zh":"adj.有利的，有用的"},{"en":"adventure","zh":"n.冒险，惊险活动"},{"en":"adventurous","zh":"adj.冒险的"},{"en":"adverb","zh":"n.副词"},{"en":"adverbial","zh":"adj.副词的"},{"en":"adversary","zh":"adj.敌手，对手"},{"en":"adverse","zh":"v.逆的，相反的"},{"en":"adversity","zh":"n.逆境，不幸"},{"en":"advertise","zh":"v.登广告，推销"},{"en":"advertising","zh":"adj.广告的"},{"en":"advertisement","zh":"n.广告"},{"en":"advice","zh":"n.忠告，意见"},{"en":"advisable","zh":"adj.适当的，可行的"},{"en":"advise","zh":"v.劝告，通知"},{"en":"adviser","zh":"n.顾问"},{"en":"advocate","zh":"v.拥护，提倡"},{"en":"aerial","zh":"adj.天空的，航空的"},{"en":"aeroplane","zh":"n.飞机"},{"en":"affair","zh":"n.事件，事情"},{"en":"affect","zh":"v.影响，改变"},{"en":"affection","zh":"n.友爱，爱慕"},{"en":"affectionate","zh":"adj.充满感情的"},{"en":"affiliate","zh":"n.分号(公司)"},{"en":"affirm","zh":"v.断言，肯定"},{"en":"affirmation","zh":"n.确定，确认"},{"en":"affirmative","zh":"adj.肯定的"},{"en":"afford","zh":"v.买得起，经受得起"},{"en":"affordable","zh":"adj.买得起的"},{"en":"afloat","zh":"adj.航行中的"},{"en":"aforesaid","zh":"adj.上述的"},{"en":"afraid","zh":"adj.害怕的，恐怕"},{"en":"africa","zh":"n.非洲"},{"en":"african","zh":"adj.非洲的  n.非洲人"},{"en":"after","zh":"prep.在...后"},{"en":"afternoon","zh":"n.下午"},{"en":"afterward","zh":"adv.后来"},{"en":"again","zh":"adv.再，又"},{"en":"against","zh":"prep.反对，对着"},{"en":"age","zh":"n.年龄，时代"},{"en":"agency","zh":"n.代理，代理处"},{"en":"agent","zh":"n.代理人，试剂"},{"en":"aggravate","zh":"v.加重，恶化"},{"en":"aggravation","zh":"n.加重，恶化"},{"en":"aggregate","zh":"adj.合计(的)"},{"en":"aggregation","zh":"n.总计，集合"},{"en":"aggression","zh":"n.侵略"},{"en":"aggressive","zh":"adj.侵略的，进取的"},{"en":"aggressor","zh":"n.侵略者"},{"en":"agitate","zh":"v.鼓动"},{"en":"agitation","zh":"n.鼓动，不安"},{"en":"ago","zh":"adv....以前"},{"en":"agonize","zh":"v.使痛苦"},{"en":"agony","zh":"n.苦恼，痛苦"},{"en":"agree","zh":"v.同意，一致认为"},{"en":"agreeable","zh":"adj.惬意的，易相处的"},{"en":"agreeably","zh":"adv.欣然，依照"},{"en":"agreed","zh":"adj.商定的"},{"en":"agreement","zh":"n.一致，协议"},{"en":"agricultural","zh":"adj.农业的"},{"en":"agriculture","zh":"n.农业"},{"en":"ahead","zh":"adv.在...前"},{"en":"aid","zh":"v.援助，救护"},{"en":"aids","zh":"n.(缩)艾滋病"},{"en":"ailment","zh":"n.疾病"},{"en":"aim","zh":"n.目的  v.旨在，指向"},{"en":"aimless","zh":"adj.无目的的"},{"en":"air","zh":"n.空气，气派"},{"en":"aircraft","zh":"n.航空器"},{"en":"airline","zh":"n.航线，航空公司"},{"en":"airliner","zh":"n.定期航班"},{"en":"airmail","zh":"n.航空邮件"},{"en":"airplane","zh":"n.飞机"},{"en":"airport","zh":"n.机场"},{"en":"airway","zh":"n.航线"},{"en":"aisle","zh":"n.过道，走廊"},{"en":"ajar","zh":"adv.半开的"},{"en":"alarm","zh":"n.惊慌，警报"},{"en":"alarming","zh":"adj.警告的"},{"en":"alas","zh":"int.唉，哎呀"},{"en":"album","zh":"n.相册，地图册"},{"en":"alcohol","zh":"n.酒精"},{"en":"alcoholic","zh":"adj.含酒精的"},{"en":"alcoholism","zh":"n.嗜酒者，酒鬼"},{"en":"ale","zh":"n.淡啤酒"},{"en":"alert","zh":"adj.警惕的，灵活的"},{"en":"algebra","zh":"n.代数"},{"en":"alien","zh":"adj.异国的，异样的"},{"en":"alienate","zh":"v.疏远，转让，挪用"},{"en":"alienation","zh":"n.异化"},{"en":"alignment","zh":"n.对准，准线"},{"en":"alike","zh":"adj.相象的"},{"en":"alive","zh":"adj.活着的，有生命的"},{"en":"all","zh":"adj.所有的  n.一切"},{"en":"allergic","zh":"adj.过敏的，变态的"},{"en":"allergy","zh":"n.反感，过敏"},{"en":"alliance","zh":"n.联合，同盟"},{"en":"allied","zh":"adj.同盟的"},{"en":"allocate","zh":"v.分配"},{"en":"allocation","zh":"n.分配"},{"en":"allot","zh":"v.分配，配给"},{"en":"allotment","zh":"n.分配，份额"},{"en":"allow","zh":"v.允许，许可"},{"en":"allowance","zh":"n.补助，津贴"},{"en":"alloy","zh":"n.合金"},{"en":"ally","zh":"n.同盟者  v.结盟"},{"en":"almost","zh":"adv.几乎，差不多"},{"en":"alone","zh":"adj.单独的，仅仅"},{"en":"along","zh":"prep.沿着  adv.一起"},{"en":"alongside","zh":"prep.在...旁边"},{"en":"aloud","zh":"adv.大声地"},{"en":"alphabet","zh":"n.字母表"},{"en":"also","zh":"adv.也"},{"en":"alter","zh":"v.改变，变动"},{"en":"alternate","zh":"v.轮流，交替"},{"en":"alternation","zh":"n.改变，变更"},{"en":"alternative","zh":"v.两者取一"},{"en":"although","zh":"conj.虽然"},{"en":"altitude","zh":"n.高度"},{"en":"altogether","zh":"adv.全部地，总共"},{"en":"aluminum","zh":"n.铝"},{"en":"always","zh":"adv.总是，始终"},{"en":"a.m.","zh":"(缩)上午"},{"en":"amateur","zh":"adj.业余的"},{"en":"amaze","zh":"v.使惊叹"},{"en":"amazement","zh":"n.惊奇，诧异"},{"en":"ambassador","zh":"n.大使"},{"en":"ambient","zh":"adj.周围的，包围着的"},{"en":"ambiguity","zh":"n.歧义性，意义不明处"},{"en":"ambiguous","zh":"adj.模棱两可的"},{"en":"ambition","zh":"n.抱负，野心"},{"en":"ambitious","zh":"adj.雄心勃勃的"},{"en":"ambulance","zh":"n.救护车"},{"en":"amend","zh":"v.修改，更正"},{"en":"amendment","zh":"n.修改(通知书)"},{"en":"amends","zh":"n.赔偿"},{"en":"america","zh":"n.美国，美洲"},{"en":"american","zh":"adj.美国的  n.美国人"},{"en":"amiable","zh":"adj.和蔼的，亲切的"},{"en":"amicable","zh":"adj.友好的，和睦的"},{"en":"amid","zh":"prep.在...之间"},{"en":"ammunition","zh":"n.弹药"},{"en":"among","zh":"prep.在...之中"},{"en":"amount","zh":"n.数量，总数  v.合计"},{"en":"ampere","zh":"n.【电】安培"},{"en":"ample","zh":"adj.宽大的，充裕的"},{"en":"amplification","zh":"n.放大"},{"en":"amplifier","zh":"n.放大器，扩音机"},{"en":"amplify","zh":"v.详述，放大"},{"en":"amuse","zh":"v.逗乐，给娱乐"},{"en":"amusement","zh":"n.娱乐，乐趣"},{"en":"analogue","zh":"n.模拟，类似物"},{"en":"analogy","zh":"n.类似，类推"},{"en":"analysis","zh":"n.分析，分解"},{"en":"analytical","zh":"adj.分析的，解析的"},{"en":"analyze","zh":"v.分析，分解"},{"en":"ancestor","zh":"n.祖先，祖宗"},{"en":"anchor","zh":"n.锚  v.停泊"},{"en":"ancient","zh":"adj.古老的，古代的"},{"en":"and","zh":"conj.和，与，而"},{"en":"anecdote","zh":"n.轶事，轶闻"},{"en":"angel","zh":"n.天命，安琪儿"},{"en":"anger","zh":"n.生气，愤怒"},{"en":"angle","zh":"n.角，角度"},{"en":"angry","zh":"adj.生气的，愤怒的"},{"en":"angular","zh":"adj.角状的"},{"en":"animal","zh":"n.动物"},{"en":"animate","zh":"v.使有活力，激活"},{"en":"animation","zh":"n.生气，生机"},{"en":"ankle","zh":"n.踝，踝骨"},{"en":"annex","zh":"n.附录，附件"},{"en":"anniversary","zh":"n.周年纪念日"},{"en":"announce","zh":"v.宣布，通报"},{"en":"announcement","zh":"n.通知"},{"en":"announcer","zh":"n.播音员"},{"en":"annoy","zh":"v.烦扰，使生气"},{"en":"annoyance","zh":"n.烦恼，麻烦事"},{"en":"annual","zh":"adj.每年的，年度的"},{"en":"annually","zh":"adv.每年，年年"},{"en":"another","zh":"prep.另一个"},{"en":"answer","zh":"n.答案  v.答复"},{"en":"ant","zh":"n.蚂蚁"},{"en":"antagonism","zh":"n.对立，敌对"},{"en":"antagonist","zh":"n.对手，敌手"},{"en":"antarctic","zh":"adj.南极的"},{"en":"antibiotic","zh":"adj.抗菌的"},{"en":"antecedent","zh":"n.触角，天线"},{"en":"anticipate","zh":"v.期望，预料"},{"en":"anticipation","zh":"n.期望，预料"},{"en":"antique","zh":"adj.古老的  n.古玩"},{"en":"antonym","zh":"n.反义词"},{"en":"antonymous","zh":"adj.反义的"},{"en":"anxiety","zh":"n.焦虑，担心"},{"en":"anxious","zh":"adj.焦急的，切盼的"},{"en":"anxiously","zh":"adv.焦急地，急切地"},{"en":"any","zh":"adj.任何，一些"},{"en":"anybody","zh":"pron.任何人"},{"en":"anyhow","zh":"adv.无论如何"},{"en":"anyone","zh":"pron.无论谁"},{"en":"anything","zh":"pron.无论什么"},{"en":"anyway","zh":"adv.不管怎样"},{"en":"anywhere","zh":"adv.无论何地"},{"en":"apart","zh":"adv.分离，隔开"},{"en":"apartment","zh":"n.套房，公寓"},{"en":"ape","zh":"n.猿猴"},{"en":"apologize","zh":"v.道歉"},{"en":"apology","zh":"n.道歉"},{"en":"apparatus","zh":"n.仪器，设备"},{"en":"apparent","zh":"adj.明显的，表面上的"},{"en":"apparently","zh":"adj.显然，似乎"},{"en":"appeal","zh":"v.呼吁，上诉"},{"en":"appealing","zh":"adj.有吸引力的"},{"en":"appear","zh":"v.出现，好象"},{"en":"appearance","zh":"n.出现，外表"},{"en":"appendix","zh":"n.附录，盲肠"},{"en":"appetite","zh":"n.食欲，欲望"},{"en":"applaud","zh":"v.称赞，拍手喝彩"},{"en":"applause","zh":"n.喝彩，欢呼"},{"en":"apple","zh":"n.苹果"},{"en":"appliance","zh":"n.用具，器械"},{"en":"applicable","zh":"adj.生动的，适用的"},{"en":"applicant","zh":"n.申请人"},{"en":"application","zh":"n.申请，应用"},{"en":"apply","zh":"v.应用，申请"},{"en":"appoint","zh":"v.任命，约定"},{"en":"appointment","zh":"n.任命，约会"},{"en":"appreciable","zh":"adj.可看到的"},{"en":"appreciably","zh":"adv.相当大地"},{"en":"appreciate","zh":"v.欣赏，感激"},{"en":"appreciation","zh":"n.欣赏，感激"},{"en":"appreciative","zh":"adj.感激的"},{"en":"apprentice","zh":"n.学校"},{"en":"apprize","zh":"v.通知"},{"en":"approach","zh":"v.接近  n.途径"},{"en":"appropriate","zh":"adj.恰当的  v.拨给"},{"en":"approval","zh":"n.同意，批准"},{"en":"approve","zh":"v.赞成，批准"},{"en":"approximate","zh":"adv.近似，约略"},{"en":"approximately","zh":"adv.近乎，大约"},{"en":"approximation","zh":"n.近似值"},{"en":"april","zh":"n.四月"},{"en":"apt","zh":"adj.恰当的，易于..的"},{"en":"aptitude","zh":"n.才智，天资"},{"en":"arab","zh":"n.阿拉伯"},{"en":"arabian","zh":"n.阿拉伯人，阿拉伯语"},{"en":"arabic","zh":"adj.阿拉伯的"},{"en":"arbitrary","zh":"adj.专横的，任意的"},{"en":"arbitrate","zh":"v.仲裁"},{"en":"arbitration","zh":"n.仲裁"},{"en":"arbitrator","zh":"n.仲裁员"},{"en":"arc","zh":"n.弧"},{"en":"arch","zh":"n.拱门，弓形"},{"en":"archaeologist","zh":"n.考古学家"},{"en":"archaeology","zh":"n.考古学"},{"en":"architect","zh":"n.建筑师"},{"en":"architecture","zh":"n.建筑学"},{"en":"arctic","zh":"adj.北极的"},{"en":"ardent","zh":"adj.热心的，强烈的"},{"en":"arduous","zh":"adj.艰巨的，努力的"},{"en":"area","zh":"n.地区，面积，领域"},{"en":"arena","zh":"n.竞技场"},{"en":"argue","zh":"v.争论，辩论"},{"en":"argument","zh":"n.争论，论点"},{"en":"arise","zh":"v.起来，出现"},{"en":"aristocracy","zh":"n.贵族阶层"},{"en":"aristocrat","zh":"n.贵族"},{"en":"aristocratic","zh":"adj.贵族的"},{"en":"arithmetic","zh":"n.算术"},{"en":"arm","zh":"n.手臂，扶手  v.武装"},{"en":"arms","zh":"n.武器"},{"en":"armchair","zh":"n.手扶椅"},{"en":"armour","zh":"n.盔甲，装甲"},{"en":"army","zh":"n.军队，陆军"},{"en":"around","zh":"adv.在周围，大约"},{"en":"arouse","zh":"v.唤醒，唤起"},{"en":"arrange","zh":"v.整理，安排"},{"en":"arrangement","zh":"n.安排，计划"},{"en":"array","zh":"v.装扮，排列"},{"en":"arrear","zh":"n.欠款"},{"en":"arrest","zh":"v.逮捕，吸引"},{"en":"arrival","zh":"n.到达，到货"},{"en":"arrive","zh":"v.到达，达到"},{"en":"arrogance","zh":"n.傲慢"},{"en":"arrogant","zh":"adj.傲慢的"},{"en":"arrogantly","zh":"adv.傲慢地"},{"en":"arrow","zh":"n.箭，箭头"},{"en":"art","zh":"n.艺术，技艺"},{"en":"article","zh":"n.文章，物品，冠词"},{"en":"artificial","zh":"adj.人造的，假的"},{"en":"artist","zh":"n.艺术家"},{"en":"artistic","zh":"n.艺术的"},{"en":"as","zh":"adv.一样  prep.作为"},{"en":"ascend","zh":"v.登，上升"},{"en":"ascertain","zh":"v.查明，弄清"},{"en":"ascribe","zh":"v.归于"},{"en":"asean","zh":"n.(缩)东盟"},{"en":"ash","zh":"n.灰，灰烬"},{"en":"ashamed","zh":"adj.惭愧的，羞耻的"},{"en":"ashore","zh":"adv.在岸上，上岸"},{"en":"ashtray","zh":"n.烟灰缸"},{"en":"asia","zh":"n.亚洲"},{"en":"asian","zh":"adj.亚洲的  n.亚洲人"},{"en":"aside","zh":"adv.在旁边，搁在一边"},{"en":"ask","zh":"v.问，要求，邀请"},{"en":"asleep","zh":"adj.睡着的"},{"en":"aspect","zh":"n.容貌，方面"},{"en":"aspirin","zh":"n.阿斯匹林"},{"en":"ass","zh":"n.驴，愚蠢的人"},{"en":"assassinate","zh":"v.暗杀"},{"en":"assassination","zh":"n.暗杀"},{"en":"assassinator","zh":"n.暗杀者"},{"en":"assault","zh":"v.袭击，攻击"},{"en":"assemble","zh":"v.集合，装配"},{"en":"assembly","zh":"n.集合，装配"},{"en":"assert","zh":"v.断言，宣称"},{"en":"assertion","zh":"n.断言"},{"en":"assess","zh":"v.评定，估价"},{"en":"assessment","zh":"n.估值，评价"},{"en":"assign","zh":"v.分配，指定"},{"en":"assignment","zh":"n.任务，作业"},{"en":"assist","zh":"v.协助"},{"en":"assistance","zh":"n.协助，辅助"},{"en":"assistant","zh":"n.助手"},{"en":"associate","zh":"v.联想  adv.副的"},{"en":"associated","zh":"adj.联合的"},{"en":"association","zh":"n.协会，合营"},{"en":"associative","zh":"adj.联想的"},{"en":"assorted","zh":"adj.各种各样的"},{"en":"assortment","zh":"n.花色品种"},{"en":"assume","zh":"v.假定，担任"},{"en":"assumption","zh":"n.假定，假装"},{"en":"assurance","zh":"n.自信，保证"},{"en":"assure","zh":"v.使..放心，向..保证"},{"en":"assured","zh":"adj.感到放心的"},{"en":"astonish","zh":"v.使惊讶"},{"en":"astonishment","zh":"n.惊讶"},{"en":"astound","zh":"v.使惊讶"},{"en":"astray","zh":"adv.(信件)遗失、误传"},{"en":"astronaut","zh":"n.宇宙飞行员"},{"en":"astronomer","zh":"n.天文学家"},{"en":"astronomical","zh":"adj.天文学的"},{"en":"astronomy","zh":"n.天文学"},{"en":"at","zh":"prep.在，处于，以"},{"en":"athlete","zh":"n.田径运动员"},{"en":"athletic","zh":"adj.田径的"},{"en":"atlantic","zh":"adj.大西洋(的)"},{"en":"atlas","zh":"n.地图集"},{"en":"atmosphere","zh":"n.大气，气氛"},{"en":"atmospheric","zh":"adj.大气的，空气的"},{"en":"atom","zh":"n.原子，微粒"},{"en":"atomic","zh":"adj.原子的，原子能的"},{"en":"attach","zh":"v.附着于，依恋"},{"en":"attachment","zh":"n.依附，附件，爱慕"},{"en":"attack","zh":"v.进攻，侵袭"},{"en":"attain","zh":"v.赢得，到达"},{"en":"attempt","zh":"v.尝试，企图"},{"en":"attend","zh":"v.出席，照顾"},{"en":"attendance","zh":"n.出勤(率)，出席"},{"en":"attendant","zh":"n.随从，服务员"},{"en":"attention","zh":"n.注意，关心"},{"en":"attentive","zh":"adj.注意的，关心的"},{"en":"attentively","zh":"adv.关心地"},{"en":"attic","zh":"n.阁楼"},{"en":"attitude","zh":"n.态度，看法"},{"en":"attorney","zh":"n.辩护律师"},{"en":"attract","zh":"v.吸引，引力"},{"en":"attraction","zh":"adj.有吸引力的"},{"en":"attributable","zh":"adj.归于...的"},{"en":"attribute","zh":"v.属于  n.属性"},{"en":"attribution","zh":"n.属于"},{"en":"attributive","zh":"adj.定语的，属性的"},{"en":"auction","zh":"n.拍卖"},{"en":"audience","zh":"n.听众，观众"},{"en":"auditorium","zh":"n.礼堂"},{"en":"august","zh":"n.八月"},{"en":"aunt","zh":"n.伯(婶、姨、姑)母"},{"en":"aural","zh":"adj.听觉的，耳的"},{"en":"auspice","zh":"n.赞助，主办"},{"en":"australia","zh":"n.澳大利亚"},{"en":"australian","zh":"adj.澳大利亚的"},{"en":"author","zh":"n.作者，创造者"},{"en":"authority","zh":"n.权力，权威"},{"en":"authorization","zh":"n.授权"},{"en":"authorize","zh":"v.授权，批准"},{"en":"autobiography","zh":"n.自传"},{"en":"automate","zh":"v.自动化"},{"en":"automatic","zh":"adj.自动的"},{"en":"automation","zh":"n.自动化"},{"en":"automobile","zh":"n.汽车"},{"en":"autonomous","zh":"adj.自治的"},{"en":"autonomy","zh":"n.自治"},{"en":"autumn","zh":"n.秋天"},{"en":"auxiliary","zh":"adj.辅助的，补助的"},{"en":"avail","zh":"v.帮助，有用  n.效用"},{"en":"availability","zh":"n.可用性，可供货"},{"en":"available","zh":"adj.可得到的"},{"en":"avenge","zh":"v.报复"},{"en":"avenue","zh":"n.林荫道，途径"},{"en":"average","zh":"adj.平均的  n.平均数"},{"en":"averagely","zh":"adv.平均"},{"en":"aviation","zh":"n.航空"},{"en":"avoid","zh":"v.避免，逃避"},{"en":"await","zh":"v.等候，等待"},{"en":"awake","zh":"v.醒来 醒悟  adj.醒的"},{"en":"awaken","zh":"adj.醒着的"},{"en":"award","zh":"v.授予  n.奖，奖品"},{"en":"aware","zh":"adj.知道的，意识到的"},{"en":"away","zh":"adv.去，远离，在远处"},{"en":"awe","zh":"n.威惧"},{"en":"awesome","zh":"adj.可怕的"},{"en":"awful","zh":"adj.令人畏惧的"},{"en":"awfully","zh":"adv.可怕地，非常"},{"en":"awkward","zh":"adj.笨拙的，不熟练的"},{"en":"awkwardly","zh":"adv.笨拙地"},{"en":"awkwardness","zh":"n.笨拙"},{"en":"ax","zh":"n.斧子"},{"en":"axial","zh":"adj.轴的，轴向的"},{"en":"axis","zh":"n.轴，轴线，轴心"},{"en":"axle","zh":"n.(轮)轴"},{"en":"baby","zh":"n.婴儿，年龄最小的人"},{"en":"baby-sitter,","zh":"n"},{"en":"bachelor","zh":"n.单身汉，学士"},{"en":"back","zh":"n.背  adj.背后的"},{"en":"backbone","zh":"n.脊梁骨"},{"en":"backdate","zh":"v.回溯"},{"en":"background","zh":"n.背景，经历"},{"en":"backing","zh":"n.倒退，支持物"},{"en":"backlog","zh":"n.未交付的订货"},{"en":"backward","zh":"adv.向后，逆"},{"en":"backwardness","zh":"n.落后(状态)"},{"en":"bacon","zh":"n.咸肉，熏肉"},{"en":"bacterium","zh":"n.细菌"},{"en":"bad","zh":"adj.坏的，低劣的"},{"en":"badge","zh":"n.徽章"},{"en":"badly","zh":"adv.坏，非常，严重地"},{"en":"badminton","zh":"n.羽毛球"},{"en":"baffle","zh":"v.困扰，难倒"},{"en":"bag","zh":"n.袋子，提包"},{"en":"baggage","zh":"n.行李"},{"en":"baggy","zh":"adj.袋状的"},{"en":"bait","zh":"n.饵，诱饵"},{"en":"bake","zh":"v.烤，烘"},{"en":"baker","zh":"n.面包师"},{"en":"bakery","zh":"n.面包店"},{"en":"balance","zh":"n.平衡，天平，余额"},{"en":"balcony","zh":"n.阳台"},{"en":"bald","zh":"adj.秃的"},{"en":"ball","zh":"n.球，球状物，舞会"},{"en":"ballet","zh":"n.芭蕾舞"},{"en":"balloon","zh":"n.气球"},{"en":"ballooning","zh":"n.热气球飞行运动"},{"en":"ball-point ","zh":"penn.圆珠笔"},{"en":"ballroom","zh":"n.舞厅"},{"en":"bamboo","zh":"n.竹"},{"en":"banana","zh":"n.香蕉"},{"en":"band","zh":"n.乐队，带子  v.联合"},{"en":"bandage","zh":"n.绷带"},{"en":"bandit","zh":"n.盗匪，歹徒"},{"en":"bang","zh":"v.砰的一响"},{"en":"bank","zh":"n.岸，银行"},{"en":"banker","zh":"n.银行家"},{"en":"banking","zh":"n.银行业务、金融业"},{"en":"bankrupt","zh":"adj.破产"},{"en":"banner","zh":"n.旗帜，横幅"},{"en":"banquet","zh":"n.宴会"},{"en":"bar","zh":"n.棒，杆，酒吧"},{"en":"barber","zh":"n.理发师"},{"en":"bare","zh":"adj.裸的，直率的"},{"en":"barely","zh":"adv.赤裸裸地"},{"en":"bargain","zh":"n.交易，便宜货"},{"en":"barge","zh":"n.驳船"},{"en":"bark","zh":"n.狗吠，树皮  v.吠"},{"en":"barn","zh":"n.谷仓，牲口棚"},{"en":"barometer","zh":"n.晴雨表，标记"},{"en":"baron","zh":"n.男爵"},{"en":"baroness","zh":"n.男爵夫人，女男爵"},{"en":"barrel","zh":"n.桶，枪(炮)管"},{"en":"barren","zh":"adj.不育的，贫瘠的"},{"en":"barrier","zh":"n.障碍，壁垒"},{"en":"barter","zh":"n.易货贸易"},{"en":"base","zh":"n.基础，基地  v.基于"},{"en":"baseball","zh":"n.棒球"},{"en":"basement","zh":"n.地下室，地窖"},{"en":"basic","zh":"adj.基本的，基础的"},{"en":"basically","zh":"adv.基本上，主要地"},{"en":"basin","zh":"n.盆，盆地"},{"en":"basis","zh":"n.基础，根据"},{"en":"basket","zh":"n.篮子，筐"},{"en":"basketball","zh":"n.篮球"},{"en":"bat","zh":"n.球拍，蝙蝠  v.击打"},{"en":"bath","zh":"n.洗澡，浴室"},{"en":"bathe","zh":"v.洗澡，冲洗"},{"en":"bathroom","zh":"n.浴室，洗手间"},{"en":"batter","zh":"v.打击"},{"en":"battery","zh":"n.电池"},{"en":"battle","zh":"n.战斗，战役"},{"en":"bay","zh":"n.海湾，湾"},{"en":"bazaar","zh":"n.集市"},{"en":"b.c.","zh":"(缩)公元前"},{"en":"be","zh":"v.是，存在"},{"en":"beach","zh":"n.海滩，湖滨"},{"en":"bead","zh":"n.有孔小珠"},{"en":"beak","zh":"n.鸟嘴"},{"en":"beam","zh":"n.梁，射线  v.发光"},{"en":"bean","zh":"n.豆子"},{"en":"bear","zh":"v.负担，忍受，生育"},{"en":"bearing","zh":"n.举止，意义，轴承"},{"en":"bearish","zh":"adj.熊市的"},{"en":"beast","zh":"n.野兽，牲畜"},{"en":"beat","zh":"v.打，击败  n.击打"},{"en":"beautiful","zh":"adj.美丽的，绝妙的"},{"en":"beauty","zh":"n.美，美女"},{"en":"because","zh":"conj.因为，由于"},{"en":"become","zh":"v.变成"},{"en":"bed","zh":"n.床，河床，苗圃"},{"en":"bedroom","zh":"n.卧室"},{"en":"bee","zh":"n.蜜蜂"},{"en":"beef","zh":"n.牛肉"},{"en":"beer","zh":"n.啤酒"},{"en":"beetle","zh":"n.甲虫"},{"en":"before","zh":"prep.在...前面"},{"en":"beforehand","zh":"adv.事先，预先"},{"en":"beg","zh":"v.乞讨，恳求"},{"en":"beggar","zh":"n.乞丐"},{"en":"begin","zh":"v.开始，着手进行"},{"en":"beginner","zh":"n.初学者"},{"en":"beginning","zh":"n.开端，起点"},{"en":"behalf","zh":"n.代表"},{"en":"behave","zh":"v.行为，举动"},{"en":"behavior","zh":"n.行为，举止"},{"en":"behind","zh":"prep.在...后面"},{"en":"behindhand","zh":"adj.落后，事后"},{"en":"being","zh":"n.生物，存在"},{"en":"belief","zh":"n.信仰，信心"},{"en":"believe","zh":"v.相信，认为"},{"en":"bell","zh":"n.钟，铃"},{"en":"belly","zh":"n.肚子"},{"en":"belong","zh":"v.属于"},{"en":"beloved","zh":"adj.敬爱的  n.爱人"},{"en":"belt","zh":"n.带，腰带"},{"en":"bench","zh":"n.长凳，工作台"},{"en":"bend","zh":"v.弯曲，俯身  n.拐弯"},{"en":"beneath","zh":"prep.在...之下"},{"en":"beneficial","zh":"adj.有益的，有利的"},{"en":"beneficiary","zh":"n.受益者"},{"en":"benefit","zh":"n.益处，利益"},{"en":"benevolence","zh":"n.慈悲，捐助"},{"en":"benevolent","zh":"adj.乐善好施的"},{"en":"bent","zh":"adj.弯曲的"},{"en":"berry","zh":"n.浆果"},{"en":"beside","zh":"prep.在...之旁"},{"en":"besides","zh":"adj.而且  prep...之外"},{"en":"best","zh":"adj.最好的"},{"en":"best-selling,","zh":""},{"en":"bestow","zh":"v.赠给，授予"},{"en":"bet","zh":"v.打赌"},{"en":"betray","zh":"v.背叛，泄露"},{"en":"betrayal","zh":"n.背叛，暴露"},{"en":"better","zh":"adj.更好的  adv.较好"},{"en":"better-off,","zh":"adj."},{"en":"between","zh":"prep.在两者之间"},{"en":"beverage","zh":"n.饮料"},{"en":"beware","zh":"v.当心"},{"en":"bewilder","zh":"v.迷惑，茫然"},{"en":"beyond","zh":"prep.在...那边，超出"},{"en":"bias","zh":"n.偏好"},{"en":"bible","zh":"n.圣经"},{"en":"bicycle","zh":"n.自行车"},{"en":"bid","zh":"v.报价，投标"},{"en":"bidding","zh":"n.投标"},{"en":"big","zh":"adj.大的，重大的"},{"en":"bike","zh":"n.自行车"},{"en":"bill","zh":"n.帐单，议案，钞票"},{"en":"billion","zh":"n.十亿"},{"en":"bind","zh":"v.捆绑，约束"},{"en":"binding","zh":"n.装订"},{"en":"biographer","zh":"n.传记记者"},{"en":"biography","zh":"n.传记"},{"en":"biologist","zh":"n.生物学家"},{"en":"biology","zh":"n.生物学"},{"en":"bird","zh":"n.鸟"},{"en":"birth","zh":"n.出生，创始"},{"en":"birthday","zh":"n.生日，诞辰"},{"en":"birthplace","zh":"n.出生地"},{"en":"biscuit","zh":"n.饼干"},{"en":"bishop","zh":"n.主教"},{"en":"bit","zh":"n.小片，一点"},{"en":"bite","zh":"v.咬，叮  n.一口"},{"en":"bitter","zh":"adj.苦的，痛苦的"},{"en":"bitterly","zh":"adv.惨痛地，辛酸地"},{"en":"bitterness","zh":"n.苦味，苦难"},{"en":"b/l","zh":"n.(缩)提单"},{"en":"black","zh":"adj.黑的  n.黑色"},{"en":"blackboard","zh":"n.黑板"},{"en":"blacksmith","zh":"n.铁匠"},{"en":"blade","zh":"n.刀刃，叶片"},{"en":"blame","zh":"v.责备  n.过失"},{"en":"blank","zh":"adj.空白的  n.空格"},{"en":"blanket","zh":"n.毛毯"},{"en":"blast","zh":"n.阵风  v.爆炸"},{"en":"blaze","zh":"n.火光，光亮"},{"en":"bleach","zh":"v.漂白，变白"},{"en":"bleed","zh":"v.出血，流血"},{"en":"blend","zh":"v.混合，掺混"},{"en":"bless","zh":"v.保佑，祝福"},{"en":"blessing","zh":"n.祝福"},{"en":"blind","zh":"adj.瞎的  v.使失明"},{"en":"blink","zh":"adj.眨眼，闪烁"},{"en":"block","zh":"n.大块，街区，障碍物"},{"en":"blockage","zh":"n.封锁"},{"en":"blond","zh":"adj.金发的"},{"en":"blood","zh":"n.血，血统"},{"en":"bloody","zh":"adj.流血的，残忍的"},{"en":"bloom","zh":"n.花  v.开花"},{"en":"blossom","zh":"n.(果树的)花"},{"en":"blot","zh":"n.污迹"},{"en":"blouse","zh":"n.女衫"},{"en":"blow","zh":"v.吹，吹掉，刮风"},{"en":"blue","zh":"adj.蓝色的，忧郁的"},{"en":"blunder","zh":"n.大错"},{"en":"blunt","zh":"adj.钝的，生硬的"},{"en":"blush","zh":"v.脸红，害臊"},{"en":"blushy","zh":"adj.害羞的"},{"en":"board","zh":"n.木板，伙食，董事会"},{"en":"boarding","zh":"n.伙食"},{"en":"boast","zh":"v.夸口，以...而自豪"},{"en":"boat","zh":"n.小船，艇"},{"en":"body","zh":"n.身体，尸体，团体"},{"en":"bodyguard","zh":"n.保镖"},{"en":"boil","zh":"v.沸腾，煮沸"},{"en":"boiler","zh":"n.锅炉"},{"en":"boiling","zh":"adj.沸腾的"},{"en":"bold","zh":"adj.大胆的"},{"en":"boldness","zh":"n.胆略"},{"en":"bolt","zh":"n.螺检，插销  v.闩门"},{"en":"bomb","zh":"n.炸弹  v.轰炸"},{"en":"bomber","zh":"n.轰炸机"},{"en":"bona","zh":"fideadj.真诚的，无欺的"},{"en":"bond","zh":"n.束缚，联结，债券"},{"en":"bonded","zh":"adj.保税的"},{"en":"bone","zh":"n.骨，骨骼"},{"en":"bony","zh":"adj.骨头的"},{"en":"bonus","zh":"n.红利"},{"en":"book","zh":"n.书  v.预订(票)"},{"en":"booking","zh":"adj.定货"},{"en":"booklet","zh":"n.小册子"},{"en":"bookcase","zh":"n.书橱"},{"en":"bookshelf","zh":"n.书架"},{"en":"bookstore","zh":"n.书店"},{"en":"boom","zh":"v.隆隆响，兴旺，繁荣"},{"en":"booming","zh":"adj.兴旺的，繁荣的"},{"en":"boost","zh":"v.抬高，促进"},{"en":"boot","zh":"n.靴子"},{"en":"booth","zh":"n.货摊，电话亭"},{"en":"border","zh":"n.国界，边境"},{"en":"bore","zh":"v.烦扰，使厌烦，钻孔"},{"en":"boring","zh":"adj.讨厌的"},{"en":"born","zh":"adj.出生的，天生的"},{"en":"borrow","zh":"v.借，借用"},{"en":"borrowings","zh":"n.借款"},{"en":"bosom","zh":"n.胸，胸怀"},{"en":"boss","zh":"n.上司，老板"},{"en":"bossy","zh":"adj.好发号施令的"},{"en":"both","zh":"proadj.双方，两"},{"en":"bother","zh":"v.打扰，麻烦  n.麻烦"},{"en":"bottle","zh":"n.瓶子"},{"en":"bottle-neck,","zh":"n.节"},{"en":"bottom","zh":"n.底部，末尾"},{"en":"bottom-line,","zh":"n."},{"en":"bough","zh":"n.大树枝"},{"en":"bounce","zh":"v.跳起  n.跳跃"},{"en":"bound","zh":"v.缚，以...为界"},{"en":"boundary","zh":"n.界线，边界"},{"en":"bourgeois","zh":"n.资产阶级分子"},{"en":"bow","zh":"v.鞠躬，服从  n.弓"},{"en":"bowl","zh":"n.碗，钵"},{"en":"bowling","zh":"n.保龄球"},{"en":"box","zh":"n.箱，盒  v.拳击"},{"en":"boxer","zh":"n.拳击运动员"},{"en":"boxing","zh":"n.拳击"},{"en":"boy","zh":"n.男孩，小伙子"},{"en":"boycott","zh":"v.抵制"},{"en":"brace","zh":"n.支撑  v.激励"},{"en":"bracket","zh":"n.括号"},{"en":"brag","zh":"v.吹嘘，夸口"},{"en":"brain","zh":"n.脑子，头脑，智能"},{"en":"brake","zh":"n.  制动器  v.刹车"},{"en":"branch","zh":"n.树枝，分支，分部"},{"en":"brand","zh":"n.牌子，商标"},{"en":"brandy","zh":"n.白兰地"},{"en":"brass","zh":"n.黄铜"},{"en":"brave","zh":"adj.勇敢的  v.冒着"},{"en":"bravely","zh":"adv.勇敢地"},{"en":"bravery","zh":"n.勇敢"},{"en":"brazil","zh":"n.巴西"},{"en":"brazilian","zh":"adj.巴西的(人)"},{"en":"breach","zh":"n.违反(契约)"},{"en":"bread","zh":"n.面包，生计"},{"en":"bread-earner,","zh":"n"},{"en":"breadth","zh":"n.宽度，大量"},{"en":"break","zh":"n.打破，破坏  n.裂口"},{"en":"breakage","zh":"n.裂口"},{"en":"breakdown","zh":"n.故障，衰竭"},{"en":"breakthrough","zh":"n.突破"},{"en":"breakfast","zh":"n.早饭"},{"en":"breast","zh":"n.乳房，胸脯"},{"en":"breath","zh":"n.呼吸，气息"},{"en":"breathe","zh":"v.呼吸"},{"en":"breed","zh":"v.繁殖，饲养  n.品种"},{"en":"breeze","zh":"n.微风"},{"en":"bribe","zh":"v.贿赂"},{"en":"bribery","zh":"v.贿赂"},{"en":"brick","zh":"n.砖"},{"en":"bride","zh":"n.新娘"},{"en":"bridegroom","zh":"n.新郎"},{"en":"bridge","zh":"n.桥梁，桥牌"},{"en":"bridle","zh":"n.约束  v.抑制"},{"en":"brief","zh":"adj.简短的"},{"en":"briefing","zh":"n.简要情况"},{"en":"briefly","zh":"adv.简单地，简短地"},{"en":"bright","zh":"adj.明亮的，鲜明的"},{"en":"brighten","zh":"v.使发光"},{"en":"brightness","zh":"n.光辉，明亮"},{"en":"brilliance","zh":"n.辉煌，光彩"},{"en":"brilliant","zh":"v.辉煌的，杰出的"},{"en":"brim","zh":"n.边，边缘"},{"en":"bring","zh":"v.拿来，带来"},{"en":"brink","zh":"n.边缘"},{"en":"brisk","zh":"adj.敏捷的，活跃的"},{"en":"bristle","zh":"n.鬃毛"},{"en":"britain","zh":"n.不列颠，英国"},{"en":"british","zh":"adj.英国的，英属的"},{"en":"brittle","zh":"adj.易碎的，脆的"},{"en":"broad","zh":"adj.宽的，辽阔的"},{"en":"broadcast","zh":"v.广播"},{"en":"broadcasting","zh":"n.广播节目"},{"en":"broaden","zh":"v.加宽，扩大"},{"en":"brochure","zh":"n.产品介绍手册"},{"en":"broken","zh":"adj.破碎的，毁坏了的"},{"en":"broker","zh":"n.经纪人"},{"en":"bronze","zh":"n.青铜"},{"en":"brood","zh":"n.一窝"},{"en":"brook","zh":"n.小河，溪流"},{"en":"broom","zh":"n.扫帚"},{"en":"brother","zh":"n.兄弟，同胞"},{"en":"brotherhood","zh":"n.兄弟情谊"},{"en":"brother-in-","zh":"lawn.姻兄(弟)"},{"en":"brow","zh":"n.眉毛，额"},{"en":"brown","zh":"adj.褐色(的)"},{"en":"bruise","zh":"n.青肿  v.打伤"},{"en":"brush","zh":"n.刷子，画笔  v.刷"},{"en":"brutal","zh":"adj.野蛮的"},{"en":"brute","zh":"n.禽兽，畜生"},{"en":"bubble","zh":"n.气泡"},{"en":"bucket","zh":"n.水桶"},{"en":"bud","zh":"n.芽，蓓蕾"},{"en":"buddhism","zh":"n.佛教"},{"en":"buddhist","zh":"n.佛教徒"},{"en":"budget","zh":"n.预算"},{"en":"buffalo","zh":"n.水牛，野牛"},{"en":"buffet","zh":"n.冷餐"},{"en":"bug","zh":"n.臭虫，虫子"},{"en":"bugle","zh":"n.喇叭"},{"en":"build","zh":"v.建造，建设"},{"en":"builder","zh":"n.建筑工人，建设者"},{"en":"building","zh":"n.建筑物，大楼"},{"en":"bulb","zh":"n.球形物，灯泡"},{"en":"bulk","zh":"n.体积，大半"},{"en":"bulky","zh":"adj.庞大的，笨重的"},{"en":"bull","zh":"n.公牛"},{"en":"bullet","zh":"n.子弹"},{"en":"bulletin","zh":"n.公报"},{"en":"bullion","zh":"n.金块，金条"},{"en":"bullish","zh":"adj.行情看涨的"},{"en":"bump","zh":"v.碰，颠簸  n.碰撞"},{"en":"bumpy","zh":"adj.颠簸不平的"},{"en":"bunch","zh":"n.一束"},{"en":"bundle","zh":"v.捆，包"},{"en":"burden","zh":"n.担子，负担"},{"en":"burdensome","zh":"adj.沉重的"},{"en":"bureau","zh":"n.局，司，办公室"},{"en":"bureaucracy","zh":"n.官僚主义"},{"en":"bureaucratic","zh":"adj.官僚主义的"},{"en":"burglar","zh":"n.夜盗，窃贼"},{"en":"burglary","zh":"n.盗窃"},{"en":"burial","zh":"n.埋葬"},{"en":"burn","zh":"v.烧，燃烧，烧伤"},{"en":"burner","zh":"n.喷灯"},{"en":"burnt","zh":"adj.烧焦的，烧坏的"},{"en":"burst","zh":"v.爆炸，破裂"},{"en":"bury","zh":"v.掩埋，安葬"},{"en":"bus","zh":"n.公共汽车"},{"en":"bush","zh":"n.灌木"},{"en":"bushel","zh":"n.蒲式耳(重量单位)"},{"en":"business","zh":"n.行业，买卖，商号"},{"en":"businesslike","zh":"adj.事务式的"},{"en":"busy","zh":"adj.忙碌的，热闹的"},{"en":"but","zh":"prep.但是，除了"},{"en":"butcher","zh":"n.屠夫  v.屠宰"},{"en":"butchery","zh":"n.肉食店"},{"en":"butt","zh":"n.根端  v.顶撞"},{"en":"butter","zh":"n.黄油"},{"en":"butterfly","zh":"n.蝴蝶"},{"en":"button","zh":"n.钮扣，按钮"},{"en":"buy","zh":"v.买，购买"},{"en":"buyer","zh":"n.购买者"},{"en":"buzz","zh":"v.嗡嗡叫  n.嗡嗡声"},{"en":"by","zh":"prep.在...旁边，按照"},{"en":"bygone","zh":"n.已往的，过时的"},{"en":"bypass","zh":"n.旁道，分路"},{"en":"cab","zh":"n.出租汽车"},{"en":"cabbage","zh":"n.卷心菜；圆白菜"},{"en":"cabin","zh":"n.小屋，船舱"},{"en":"cabinet","zh":"n.橱柜，内阁"},{"en":"cable","zh":"n.电缆，海底电报"},{"en":"cafe","zh":"n.咖啡馆"},{"en":"cafeteria","zh":"n.自助餐厅"},{"en":"cage","zh":"n.笼子，鸟笼"},{"en":"cake","zh":"n.糕，饼"},{"en":"calculate","zh":"v.计算，估计"},{"en":"calculation","zh":"n.计算(结果)"},{"en":"calculus","zh":"n.微积分"},{"en":"calendar","zh":"n.日历"},{"en":"calf","zh":"n.小牛，腿肚子"},{"en":"calibration","zh":"n.刻度，核定"},{"en":"call","zh":"v.叫，称为，打电话"},{"en":"calm","zh":"adj.宁静的，镇静的"},{"en":"calmly","zh":"adv.平静地，沉着地"},{"en":"calorie","zh":"n.热卡，卡路里"},{"en":"camel","zh":"n.骆驼"},{"en":"camera","zh":"n.照相机"},{"en":"camp","zh":"n.帐篷，野营  n.宿营"},{"en":"campaign","zh":"n.战役，运动"},{"en":"camping","zh":"n.野营"},{"en":"campus","zh":"n.校园"},{"en":"can","zh":"v.aux.能，会，可以"},{"en":"canada","zh":"n.加拿大"},{"en":"canadian","zh":"adj.加拿大的(人)"},{"en":"canal","zh":"n.运河，渠道"},{"en":"canary","zh":"n.金丝雀"},{"en":"cancel","zh":"v.删除，取消"},{"en":"cancellation","zh":"n.删除，取消"},{"en":"cancer","zh":"n.癌"},{"en":"candid","zh":"adj.坦白的，直率的"},{"en":"candidate","zh":"n.候选人"},{"en":"candle","zh":"n.蜡烛"},{"en":"candy","zh":"n.糖果"},{"en":"cane","zh":"n.手杖，(藤、竹的)茎"},{"en":"canned","zh":"adj.罐装的"},{"en":"cannon","zh":"n.大炮"},{"en":"canoe","zh":"n.独木舟，游艇"},{"en":"canon","zh":"n.规范，准则"},{"en":"canteen","zh":"n.食堂"},{"en":"canvas","zh":"n.帆布，画布"},{"en":"canvass","zh":"v.游说"},{"en":"cap","zh":"n.帽子，盖子  v.覆盖"},{"en":"capability","zh":"n.才能，能力"},{"en":"capable","zh":"adj.有能力的"},{"en":"capacity","zh":"n.容量，容积，资格"},{"en":"cape","zh":"n.披肩，岬，海角"},{"en":"capita","zh":"n.人"},{"en":"capital","zh":"n.首都，资本"},{"en":"capital-intensive,","zh":"adj"},{"en":"capitalism","zh":"n.资本主义"},{"en":"capitalist","zh":"adj.资本主义的"},{"en":"capitalization","zh":"n.资本化"},{"en":"capitalize","zh":"v.大写，资本化"},{"en":"captain","zh":"n.队长，船长，上尉"},{"en":"caption","zh":"n.标题"},{"en":"captive","zh":"adj.被俘虏的  n.俘虏"},{"en":"capture","zh":"v.俘获，捉拿"},{"en":"car","zh":"n.小汽车"},{"en":"caravan","zh":"n.车队，大蓬车"},{"en":"carbon","zh":"n.碳，复写纸"},{"en":"card","zh":"n.卡片，纸牌，名片"},{"en":"cardboard","zh":"n.硬纸板"},{"en":"cardinal","zh":"adj.主要的"},{"en":"care","zh":"n.注意，小心  v.关心"},{"en":"career","zh":"n.职业，生涯"},{"en":"careful","zh":"adj.小心的，仔细的"},{"en":"careless","zh":"adj.粗心的，不关心的"},{"en":"carelessness","zh":"n.粗心"},{"en":"cargo","zh":"n.货物"},{"en":"carol","zh":"n.颂歌"},{"en":"carpenter","zh":"n.木匠"},{"en":"carpet","zh":"n.地毯"},{"en":"carriage","zh":"n.马车，(火车)车厢"},{"en":"carrier","zh":"n.运载工具，媒介"},{"en":"carrot","zh":"n.胡萝卜"},{"en":"carry","zh":"v.搬运，携带"},{"en":"cart","zh":"n.手推车"},{"en":"carton","zh":"n.纸箱"},{"en":"cartoon","zh":"n.漫画，动画片"},{"en":"cartridge","zh":"n.弹仓"},{"en":"carve","zh":"v.雕刻，切"},{"en":"carving","zh":"n.雕塑"},{"en":"case","zh":"n.事实，案例，箱子"},{"en":"cash","zh":"n.现金  v.兑现"},{"en":"cashier","zh":"n.出纳"},{"en":"cassette","zh":"n.小盒，磁盘盒"},{"en":"cast","zh":"v.掷，投射，铸造"},{"en":"castle","zh":"n.城堡"},{"en":"casual","zh":"adj.偶然的，随便的"},{"en":"casualty","zh":"n.伤亡"},{"en":"cat","zh":"n.猫"},{"en":"catalog","zh":"n.(商品)目录"},{"en":"catastrophe","zh":"n.灾难"},{"en":"catalyst","zh":"n.催化剂"},{"en":"catch","zh":"v.捕获，染病  n.捉"},{"en":"category","zh":"n.种类，范畴"},{"en":"cater","zh":"v.提供"},{"en":"cathedral","zh":"n.大教堂"},{"en":"catholic","zh":"adj.天主教的"},{"en":"cattle","zh":"n.牛(总称)"},{"en":"cause","zh":"n.原因，理由，事业"},{"en":"caution","zh":"n.谨慎，告诫"},{"en":"cautious","zh":"adj.谨慎的，当心的"},{"en":"cavalry","zh":"n.骑兵，马术"},{"en":"cave","zh":"n.洞穴，山洞"},{"en":"cavern","zh":"n.酒馆"},{"en":"cavity","zh":"n.坑，孔穴"},{"en":"cease","zh":"v.停止，平息"},{"en":"ceiling","zh":"n.天花板"},{"en":"celebrate","zh":"v.庆祝"},{"en":"celebration","zh":"n.庆祝仪式"},{"en":"celery","zh":"n.芹菜"},{"en":"cell","zh":"n.细胞，牢房，电池"},{"en":"cellar","zh":"n.地窖，地下室"},{"en":"cement","zh":"n.水泥"},{"en":"cemetery","zh":"n.墓场"},{"en":"censor","zh":"v.审查"},{"en":"censorship","zh":"n.审查"},{"en":"cent","zh":"n.分币"},{"en":"centigrade","zh":"adj.摄氏的"},{"en":"centimeter","zh":"n.厘米"},{"en":"central","zh":"adj.中心的，中央的"},{"en":"center","zh":"n.中心  v.集中"},{"en":"century","zh":"n.世纪"},{"en":"cereal","zh":"n.谷物"},{"en":"ceremonial","zh":"adj.仪式的"},{"en":"ceremony","zh":"n.仪式，典礼，礼节"},{"en":"certain","zh":"adj.确信的，一定的"},{"en":"certainly","zh":"adv.一定，当然，行"},{"en":"certainty","zh":"n.确实，必然的事"},{"en":"certificate","zh":"n.证书，执照"},{"en":"certification","zh":"n.证明"},{"en":"certify","zh":"v.证明"},{"en":"chain","zh":"n.链条，一系列，锁链"},{"en":"chair","zh":"n.椅子"},{"en":"chairman","zh":"n.主席，董事长"},{"en":"chairperson","zh":"n.主席(无性别之分)"},{"en":"chairwoman","zh":"n.女主席，女董事长"},{"en":"chalk","zh":"n.白垩，粉笔"},{"en":"challenge","zh":"v.挑战，质问"},{"en":"challenging","zh":"adj.具有挑战性的"},{"en":"chamber","zh":"n.房间"},{"en":"champion","zh":"n.优胜者，冠军"},{"en":"championship","zh":"n.锦标(赛)"},{"en":"chance","zh":"n.机会，可能性"},{"en":"change","zh":"n.变化，零钱  v.改变"},{"en":"changeable","zh":"adj.变化的"},{"en":"channel","zh":"n.沟渠，途径，频道"},{"en":"chaos","zh":"n.混乱"},{"en":"chap","zh":"n.伙计"},{"en":"chapter","zh":"n.章，节"},{"en":"character","zh":"n.性格，角色，特牲"},{"en":"characteristic","zh":"n.特征，特性"},{"en":"characteristical","zh":"adj....特征的"},{"en":"characterize","zh":"v.具有...特征"},{"en":"charcoal","zh":"n.木炭"},{"en":"charge","zh":"v.收费，冲向，控告"},{"en":"charity","zh":"n.施舍，仁慈"},{"en":"charm","zh":"n.魅力  v.迷惑"},{"en":"charming","zh":"adj.迷人的"},{"en":"chart","zh":"n.图表  v.制定计划"},{"en":"charter","zh":"n.特许证，宪章"},{"en":"chase","zh":"v.追逐，驱除"},{"en":"chat","zh":"v.聊天"},{"en":"chatter","zh":"v.喋喋不休，啁啾"},{"en":"cheap","zh":"adj.便宜的，可鄙的"},{"en":"cheat","zh":"v.欺骗，作弊  n.骗子"},{"en":"cheating","zh":"n.欺骗行为"},{"en":"check","zh":"v.检验，核对  n.支票"},{"en":"check-out,","zh":"n."},{"en":"check-up,","zh":""},{"en":"cheek","zh":"n.颊，脸"},{"en":"cheeky","zh":"adj.胖乎乎的"},{"en":"cheer","zh":"n.喝彩  v.向...喝彩"},{"en":"cheerful","zh":"adj.快活的"},{"en":"cheese","zh":"n.干酪，奶酪"},{"en":"chemical","zh":"adj.化学的"},{"en":"chemist","zh":"n.化学家，药剂师"},{"en":"chemistry","zh":"n.化学"},{"en":"cheque","zh":"n.支票"},{"en":"cherish","zh":"v.珍爱，怀有"},{"en":"cherry","zh":"n.樱桃"},{"en":"chess","zh":"n.国际象棋"},{"en":"chest","zh":"n.胸膛，柜子"},{"en":"chestnut","zh":"n.栗树，栗子"},{"en":"chew","zh":"v.咀嚼"},{"en":"chick","zh":"n.小鸡"},{"en":"chicken","zh":"n.鸡，鸡肉"},{"en":"chief","zh":"adj.首席的，首要的"},{"en":"chiefly","zh":"adv.多半，首要地"},{"en":"child","zh":"n.孩子，儿童"},{"en":"childhood","zh":"n.童年"},{"en":"childish","zh":"adj.孩子气的"},{"en":"childlike","zh":"adj.孩子似的，天真的"},{"en":"chill","zh":"n.寒意  v.冷却"},{"en":"chilly","zh":"adj.凉的，冷淡的"},{"en":"chimney","zh":"n.烟囱"},{"en":"chin","zh":"n.下巴，下颊"},{"en":"china","zh":"n.中国"},{"en":"china","zh":"n.瓷器，陶瓷"},{"en":"chinese","zh":"adj.中国的"},{"en":"chip","zh":"n.片，屑，缺口"},{"en":"chocolate","zh":"n.巧克力"},{"en":"choice","zh":"n.选择，选中的人或物"},{"en":"choke","zh":"v.闷死，窒息，阻塞"},{"en":"choose","zh":"v.选择，愿意"},{"en":"chop","zh":"v.劈，剁  n.带骨肉"},{"en":"chorus","zh":"n.合唱队，齐声"},{"en":"christ","zh":"n.基督"},{"en":"christian","zh":"adj.基督教的n.基督徒"},{"en":"christianity","zh":"n.基督教(精神)"},{"en":"christmas","zh":"n.圣诞节"},{"en":"church","zh":"n.教堂"},{"en":"cif","zh":"n.(缩)到岸价"},{"en":"cigar","zh":"n.雪茄"},{"en":"cigarette","zh":"n.卷烟"},{"en":"cinema","zh":"n.电影院"},{"en":"circle","zh":"n.圆，果  v.画圈于"},{"en":"circular","zh":"adj.圆圈的"},{"en":"circuit","zh":"n.巡回，电路"},{"en":"circulate","zh":"v.循环，流通，流传"},{"en":"circulation","zh":"n.循环，销路，周转"},{"en":"circumference","zh":"n.周围，圆周"},{"en":"circumstance","zh":"n.情况，环境"},{"en":"circus","zh":"n.马戏团"},{"en":"cite","zh":"v.引证，举例"},{"en":"citizen","zh":"n.公民，市民"},{"en":"citizenship","zh":"n.公民权"},{"en":"city","zh":"n.城市"},{"en":"civil","zh":"adj.民用的，民事的"},{"en":"civilization","zh":"n.文明，民族文化"},{"en":"civilize","zh":"v.使...文明，开化"},{"en":"claim","zh":"v.要求，索赔，声称"},{"en":"clamp","zh":"n.夹子  v.夹紧"},{"en":"clap","zh":"v.排手，鼓掌"},{"en":"clarify","zh":"v.弄清(问题)"},{"en":"clarification","zh":"n.澄清"},{"en":"clash","zh":"v.碰撞，冲突"},{"en":"clasp","zh":"n.扣子  v.紧握(抱)"},{"en":"class","zh":"n.阶级，种类，班级"},{"en":"classic","zh":"n.经典作品"},{"en":"classical","zh":"adj.经典的，古典的"},{"en":"classification","zh":"n.分类"},{"en":"classify","zh":"v.分类，分等"},{"en":"classmate","zh":"n.同班同学"},{"en":"classroom","zh":"n.教室"},{"en":"clatter","zh":"v.咔嗒响  n.卡嗒响"},{"en":"clause","zh":"n.条款，从句"},{"en":"claw","zh":"n.爪"},{"en":"clay","zh":"n.黏土"},{"en":"clean","zh":"adj.清洁的，干的"},{"en":"clear","zh":"adj.清楚的，明确的"},{"en":"clearance","zh":"n.结关"},{"en":"clearly","zh":"adv.清晰地，无疑地"},{"en":"clench","zh":"v.咬紧，握紧，决定"},{"en":"clerk","zh":"n.办事员，职员，店员"},{"en":"clever","zh":"adj.聪明的，灵巧的"},{"en":"cleverness","zh":"n.聪明，机灵"},{"en":"client","zh":"n.当事人，顾客，用户"},{"en":"clientele","zh":"n.顾客(总称)"},{"en":"cliff","zh":"n.悬崖，峭壁"},{"en":"climate","zh":"n.气候"},{"en":"climax","zh":"n.顶点，高潮"},{"en":"climb","zh":"v.爬，攀登，上升"},{"en":"cling","zh":"v.粘住，依附"},{"en":"clinic","zh":"n.诊所"},{"en":"clip","zh":"n.夹子，卡子  v.夹住"},{"en":"cloak","zh":"n.外套，借口"},{"en":"clock","zh":"n.时钟"},{"en":"clockwise","zh":"adv.顺时针的"},{"en":"close","zh":"v.关闭，结束  n.终结"},{"en":"closed","zh":"adj.关闭的，停业的"},{"en":"close","zh":"downn.倒闭"},{"en":"closely","zh":"adv.紧密地，严密地"},{"en":"closet","zh":"n.壁橱"},{"en":"cloth","zh":"n.织物，布，衣料"},{"en":"clothe","zh":"v.给...着衣"},{"en":"clothes","zh":"n.衣服(总称)"},{"en":"clothing","zh":"n.服装(总称)"},{"en":"cloud","zh":"n.云"},{"en":"cloudy","zh":"adj.多云的"},{"en":"clown","zh":"n.小丑，丑角"},{"en":"club","zh":"n.俱乐部，会，棍棒"},{"en":"clue","zh":"n.线索"},{"en":"clumsy","zh":"adj.笨拙的，愚蠢的"},{"en":"cluster","zh":"n.群，串"},{"en":"clutch","zh":"v.抓紧"},{"en":"c/o","zh":"v.(缩)请转交..."},{"en":"coach","zh":"n.客车，教练"},{"en":"coal","zh":"n.煤"},{"en":"coarse","zh":"adj.粗糙的，粗的"},{"en":"coast","zh":"n.海岸，海滨"},{"en":"coastal","zh":"adj.沿海的"},{"en":"coat","zh":"n.上衣，涂层"},{"en":"cock","zh":"n.公鸡"},{"en":"cocktail","zh":"n.鸡尾酒"},{"en":"code","zh":"n.法规，代码，密码"},{"en":"codify","zh":"v.编码"},{"en":"coefficient","zh":"n.系数"},{"en":"coffee","zh":"n.咖啡"},{"en":"coffin","zh":"n.棺材"},{"en":"coherence","zh":"n.凝聚性"},{"en":"coherent","zh":"adj.有条理的，粘着的"},{"en":"cohesion","zh":"n.凝聚力，团结"},{"en":"cohesive","zh":"adj.有粘性的"},{"en":"coil","zh":"v.卷曲  n.一卷，线圈"},{"en":"coin","zh":"n.硬币，创造新词"},{"en":"coinage","zh":"v.重合，一致"},{"en":"coincide","zh":"n.巧合，同时发生"},{"en":"coincidence","zh":"adj.同时发生的"},{"en":"coincident","zh":"adj.冷，冷冰冰的"},{"en":"coldness","zh":"n.寒冷，冷淡"},{"en":"collaborate","zh":"v.协作，勾结"},{"en":"collaboration","zh":"n.协作，通敌"},{"en":"collapse","zh":"v.倒塌  v.坍塌"},{"en":"collar","zh":"n.领子"},{"en":"colleague","zh":"n.同事，同行"},{"en":"collect","zh":"v.收集，征收，聚集"},{"en":"collection","zh":"n.收集，收藏"},{"en":"collective","zh":"n.集体  adj.集体的"},{"en":"college","zh":"n.学院"},{"en":"collide","zh":"v.猛烈碰撞，冲突"},{"en":"collision","zh":"n.猛烈碰拉，冲突"},{"en":"colonel","zh":"n.上校"},{"en":"colonial","zh":"adj.殖民的，殖民地的"},{"en":"colonist","zh":"n.殖民者，移民"},{"en":"colonist","zh":"n.殖民主义"},{"en":"colony","zh":"n.殖民地"},{"en":"color","zh":"n.颜色，色彩，气色"},{"en":"color-blind,","zh":""},{"en":"colorful","zh":"adj.色彩丰富的"},{"en":"colorless","zh":"adj.无色的"},{"en":"column","zh":"n.圆柱，栏"},{"en":"columnist","zh":"n.专栏作家"},{"en":"comb","zh":"v.梳  n.梳子"},{"en":"combat","zh":"v.战斗，斗争"},{"en":"combination","zh":"n.混合，组合"},{"en":"combine","zh":"v.组合，化合，结合"},{"en":"come","zh":"v.来到，出现，发生"},{"en":"comedian","zh":"n.喜剧演员"},{"en":"comedy","zh":"n.喜剧"},{"en":"comfort","zh":"n.舒适，慰藉  v.安慰"},{"en":"comfortable","zh":"adj.舒适的，自在的"},{"en":"comic","zh":"adj.喜剧的，滑稽的"},{"en":"command","zh":"v.命令，控制"},{"en":"commander","zh":"n.司令，指挥官"},{"en":"commemorate","zh":"n.纪念"},{"en":"commemoration","zh":"v.纪念"},{"en":"commence","zh":"v.开始"},{"en":"commend","zh":"v.称赞，推荐"},{"en":"commandment","zh":"n.称赞"},{"en":"comment","zh":"v.评论"},{"en":"commerce","zh":"n.商业"},{"en":"commercial","zh":"adj.商业的，商务的"},{"en":"commission","zh":"v.委托，委任"},{"en":"commit","zh":"v.委托，犯(错误)"},{"en":"commitment","zh":"n.责任"},{"en":"committee","zh":"n.委员会"},{"en":"commodity","zh":"n.商品"},{"en":"common","zh":"adj.共同的，普通的"},{"en":"commonly","zh":"adv.通常，平常"},{"en":"commonplace","zh":"adj.平凡的，平淡的"},{"en":"commonsense","zh":"n.常识"},{"en":"commonwealth","zh":"n.共同体，联邦"},{"en":"commune","zh":"n.公社"},{"en":"communicate","zh":"v.传播，通讯"},{"en":"communication","zh":"n.通信，通讯系统"},{"en":"communicative","zh":"adj.通讯的"},{"en":"communism","zh":"n.共产主义"},{"en":"communist","zh":"n.共产主义者"},{"en":"community","zh":"n.团体，共同体，群体"},{"en":"compact","zh":"adj.严密的，紧凑的"},{"en":"companion","zh":"n.同伴，伴侣"},{"en":"company","zh":"n.公司，同伴"},{"en":"comparable","zh":"adj.可比较的"},{"en":"comparative","zh":"adj.比较的，相当的"},{"en":"comparatively","zh":"adv.比较地"},{"en":"compare","zh":"v.比较，比作"},{"en":"comparison","zh":"n.比较"},{"en":"compass","zh":"n.指南针，圆规"},{"en":"compatible","zh":"adj.可兼容的，一致的"},{"en":"compel","zh":"v.强迫，逼迫"},{"en":"compensate","zh":"v.赔偿，补偿，酬报"},{"en":"compensation","zh":"n.赔偿，补偿"},{"en":"compete","zh":"v.竞争，比赛"},{"en":"competent","zh":"adj.称职的，有能力的"},{"en":"competition","zh":"n.竞争，比赛"},{"en":"competitive","zh":"adj.竞争的"},{"en":"competitiveness","zh":"n.竞争能力"},{"en":"competitor","zh":"n.竞争者，对手"},{"en":"compile","zh":"v.编(书)，编辑"},{"en":"complain","zh":"v.抱怨，控诉"},{"en":"complaint","zh":"n.怨言，控告"},{"en":"complement","zh":"n.补充，余数"},{"en":"complete","zh":"v.完成，结束"},{"en":"completely","zh":"adv.完全地，十分"},{"en":"completion","zh":"n.完成，完满"},{"en":"complex","zh":"adj.综合的，复杂的"},{"en":"complexity","zh":"n.复杂性"},{"en":"compliance","zh":"n.顺从，应允"},{"en":"complicate","zh":"v.使复杂"},{"en":"complicated","zh":"adj.错综复杂的"},{"en":"compliment","zh":"v.称赞，问候"},{"en":"complimentary","zh":"adj.称赞的"},{"en":"comply","zh":"v.履行，遵守"},{"en":"component","zh":"n.成分，组分"},{"en":"componential","zh":"adj.成分的"},{"en":"compose","zh":"v.由...组成，作曲"},{"en":"composed","zh":"adj.镇静的"},{"en":"composer","zh":"n.作曲家"},{"en":"composite","zh":"adj.合成的，组合的"},{"en":"composition","zh":"n.作文，组成"},{"en":"compound","zh":"n.化合物  v.混合"},{"en":"comprehend","zh":"v.理解，了解"},{"en":"comprehension","zh":"n.理解"},{"en":"comprehensive","zh":"adj.综合的，广泛的"},{"en":"compress","zh":"v.压缩"},{"en":"compression","zh":"n.压缩，凝缩"},{"en":"comprise","zh":"v.包括，由...组成"},{"en":"compromise","zh":"v.妥协，和解"},{"en":"compels","zh":"v.强迫"},{"en":"compulsory","zh":"adj.强制的，必修的"},{"en":"computation","zh":"n.计算"},{"en":"compute","zh":"v.计算"},{"en":"computer","zh":"n.计算机"},{"en":"computerization","zh":"n.计算机化"},{"en":"computerize","zh":"v.使...计算机化"},{"en":"comrade","zh":"n.同志"},{"en":"conceal","zh":"v.隐瞒，隐藏"},{"en":"concede","zh":"v.让步，输"},{"en":"conceit","zh":"n.自负，自大"},{"en":"conceited","zh":"adj.自负的"},{"en":"conceive","zh":"v.想象，怀孕"},{"en":"concentrate","zh":"v.集中，浓缩"},{"en":"concentrated","zh":"adj.全神贯注的"},{"en":"concentration","zh":"n.专心，浓度"},{"en":"concept","zh":"n.概念"},{"en":"conception","zh":"n.想法，概念"},{"en":"conceptive","zh":"adj.概念的"},{"en":"concern","zh":"v.涉及，关心  n.商行"},{"en":"concerned","zh":"adj.有关的"},{"en":"concerning","zh":"prep.关于"},{"en":"concert","zh":"n.音乐会"},{"en":"concerted","zh":"adj.齐心协力的"},{"en":"concess","zh":"v.让步"},{"en":"concession","zh":"n.让步，减免，租界"},{"en":"concise","zh":"adj.简明的，简要的"},{"en":"conclude","zh":"v.结束，缔结，断定"},{"en":"conclusion","zh":"n.结束，结论"},{"en":"conclusive","zh":"adj.结束的，结论性的"},{"en":"concrete","zh":"n.混凝土  adj.具体的"},{"en":"concur","zh":"v.同地发生"},{"en":"concurrence","zh":"n.合作，并发"},{"en":"concurrent","zh":"adj.同时发生的"},{"en":"condemn","zh":"v.谴责，判刑"},{"en":"condemnation","zh":"n.谴责，判决"},{"en":"condensation","zh":"n.凝聚"},{"en":"condense","zh":"v.凝结，冷凝，精简"},{"en":"condenser","zh":"n.冷凝器，聚光器"},{"en":"condition","zh":"n.状态，情形，条件"},{"en":"conditional","zh":"adj.有条件的"},{"en":"conduce","zh":"v.导致，有益于"},{"en":"conducive","zh":"adj.有助于...的"},{"en":"conduct","zh":"n.行为，管理  v.为人"},{"en":"conduction","zh":"n.传导，传热"},{"en":"conductor","zh":"n.(乐队)指挥，售票员"},{"en":"cone","zh":"n.锥体，锥形"},{"en":"confer","zh":"v.授予，颁布，商议"},{"en":"conference","zh":"n.会议"},{"en":"confess","zh":"v.坦白，供认"},{"en":"confession","zh":"n.供认，自由"},{"en":"confide","zh":"v.委托，吐露秘密"},{"en":"confidence","zh":"n.信任，信心"},{"en":"confident","zh":"adj.确信的，自信的"},{"en":"confidential","zh":"adj.机密的"},{"en":"confine","zh":"v.限制"},{"en":"confinement","zh":"n.限制"},{"en":"confirm","zh":"v.证实，确认，批准"},{"en":"confirmation","zh":"n.确认"},{"en":"conflict","zh":"v.冲突，斗争"},{"en":"conform","zh":"v.遵守，使...一致"},{"en":"conformity","zh":"n.遵照，一致"},{"en":"confront","zh":"v.面对，与...相对"},{"en":"confrontation","zh":"n.面对，对峙"},{"en":"confuse","zh":"v.混淆，弄糊涂，搅乱"},{"en":"confusion","zh":"n.混乱，糊涂"},{"en":"congestion","zh":"n.阻塞，消化不良"},{"en":"congratulate","zh":"v.祝贺"},{"en":"congratulation","zh":"n.祝贺，贺辞"},{"en":"congress","zh":"n.(代表)大会，国会"},{"en":"congressman","zh":"n.国会议员"},{"en":"conjunction","zh":"n.连词，联结"},{"en":"connect","zh":"v.连接，联想"},{"en":"connection","zh":"n.联系，社会关系"},{"en":"conquer","zh":"v.征服，战胜"},{"en":"conqueror","zh":"n.征服者，胜利者"},{"en":"conquest","zh":"n.征服"},{"en":"conscience","zh":"n.良心，良知"},{"en":"conscientious","zh":"adj.有良心的"},{"en":"conscientiously","zh":"adv.认真地"},{"en":"conscious","zh":"adj.意识到的，自觉的"},{"en":"consciousness","zh":"n.知觉，意识"},{"en":"consecutive","zh":"adj.连续的，连贯的"},{"en":"consent","zh":"v.同意，允许"},{"en":"consequence","zh":"n.后果，重要性"},{"en":"consequently","zh":"adv.因而，所以"},{"en":"conservation","zh":"n.保护，保存"},{"en":"conservative","zh":"adj.保守的，稳健的"},{"en":"consider","zh":"v.考虑，以为，体谅"},{"en":"considerable","zh":"adj.相当的，可观的"},{"en":"considerably","zh":"adv.相当"},{"en":"considerate","zh":"adj.考虑周全的"},{"en":"consideration","zh":"n.考虑，照顾"},{"en":"consign","zh":"v.委托，托运货物"},{"en":"consignment","zh":"n.委托，货物"},{"en":"consist","zh":"v.由...组成"},{"en":"consistency","zh":"n.一致(性)"},{"en":"consistent","zh":"adj.始终如一的，符合"},{"en":"console","zh":"v.安慰"},{"en":"consolidate","zh":"v.团结"},{"en":"consolidated","zh":"adj.加固的，统一的"},{"en":"consolidation","zh":"n.团结"},{"en":"consonant","zh":"adj.响亮的"},{"en":"conspicuous","zh":"adj.显眼的，出众的"},{"en":"conspiracy","zh":"n.阴谋"},{"en":"constable","zh":"adv.警官"},{"en":"constant","zh":"adj.不变的，恒定的"},{"en":"constantly","zh":"adv.经常地"},{"en":"constituent","zh":"adj.组成的  n.成分"},{"en":"constitute","zh":"v.组成，构成，设立"},{"en":"constitution","zh":"n.宪法，章程"},{"en":"constitutive","zh":"adj.宪法的，章程的"},{"en":"constraint","zh":"n.强制，拘束"},{"en":"construct","zh":"v.建设，建立"},{"en":"construction","zh":"n.建设，建筑"},{"en":"construe","zh":"v.翻译，解释"},{"en":"consul","zh":"n.领事"},{"en":"consulate","zh":"n.领事馆"},{"en":"consult","zh":"v.咨询，磋商"},{"en":"consultant","zh":"n.咨询顾问(公司)"},{"en":"consultation","zh":"n.咨询"},{"en":"consume","zh":"v.消费，消耗"},{"en":"consumer","zh":"n.消费者，用户"},{"en":"consumption","zh":"n.消费，消耗量"},{"en":"contact","zh":"v.接触，联系"},{"en":"contain","zh":"v.含有，容纳，抑制"},{"en":"container","zh":"n.容器，集装箱"},{"en":"contemplate","zh":"v.沉思"},{"en":"contemplation","zh":"n.苦思冥想"},{"en":"contemporarian","zh":"n.同时代人"},{"en":"contemporary","zh":"adj.当代的，同时代的"},{"en":"contempt","zh":"n.轻视，蔑视"},{"en":"contemptuous","zh":"adj.轻视的"},{"en":"content","zh":"n.含量，内容  v.满足"},{"en":"contest","zh":"v.争夺，比赛"},{"en":"contestant","zh":"n.参赛人"},{"en":"context","zh":"n.上下文，语境，环境"},{"en":"contextual","zh":"adj.上下文的，环境的"},{"en":"continent","zh":"adj.节制的  n.大陆"},{"en":"continental","zh":"adj.大陆的"},{"en":"contingency","zh":"n.事故，意外"},{"en":"continual","zh":"adj.连续的，频繁的"},{"en":"continuance","zh":"n.连续"},{"en":"continue","zh":"v.继续，连续，依旧"},{"en":"continuous","zh":"adj.持续的，不断的"},{"en":"continuously","zh":"adv.连续不断地"},{"en":"contract","zh":"n.契约，合同  v.订"},{"en":"contracted","zh":"adj.合同所规定的"},{"en":"contractual","zh":"adj.合同的，契约的"},{"en":"contradict","zh":"v.反驳，与...矛盾"},{"en":"contradiction","zh":"n.矛盾，反驳"},{"en":"contrary","zh":"adj.相反的  n.反面"},{"en":"contrast","zh":"v.对照，对比"},{"en":"contribute","zh":"v.捐献，贡献，投稿"},{"en":"contribution","zh":"n.贡献，捐献物"},{"en":"control","zh":"v.控制，管理"},{"en":"controversy","zh":"n.论战，论争"},{"en":"controversial","zh":"adj.有争议的"},{"en":"convenience","zh":"n.方便，便利"},{"en":"convenient","zh":"adj.便利的，方便的"},{"en":"convention","zh":"n.大会，协定，惯例"},{"en":"conventional","zh":"adj.传统的，常规的"},{"en":"conversant","zh":"adj.精通的，有交情的"},{"en":"conversation","zh":"n.会话，谈话"},{"en":"converse","zh":"v.谈话，对话，交往"},{"en":"conversely","zh":"adv.相反地"},{"en":"conversion","zh":"n.转变，转化，换算"},{"en":"convert","zh":"v.转换，改变信仰"},{"en":"convey","zh":"v.运输，传达"},{"en":"conveyance","zh":"n.运送，传达"},{"en":"convict","zh":"n.罪犯"},{"en":"conviction","zh":"n.定罪，确信"},{"en":"convince","zh":"v.使...确信，信服"},{"en":"convinced","zh":"adj.信服的"},{"en":"cook","zh":"v.烹调，烧  n.厨师"},{"en":"cooker","zh":"n.厨具，厨灶"},{"en":"cool","zh":"adj.凉的，冷静的"},{"en":"coolness","zh":"n.凉爽，冷淡"},{"en":"cooperate","zh":"v.合作，协作"},{"en":"cooperation","zh":"n.合作，协作"},{"en":"cooperative","zh":"adj.合作的  n.合作社"},{"en":"coordinate","zh":"v.协调，配合"},{"en":"coordination","zh":"n.协调，配合"},{"en":"cope","zh":"v.应付，对付"},{"en":"copper","zh":"n.铜"},{"en":"copy","zh":"v.抄写，复制  n.副本"},{"en":"cord","zh":"n.细绳，电线"},{"en":"cordial","zh":"adj.诚恳的，亲切的"},{"en":"cordially","zh":"adv.亲切地"},{"en":"core","zh":"n.核，核心"},{"en":"cork","zh":"n.软木塞"},{"en":"corn","zh":"n.谷物，玉米"},{"en":"corner","zh":"n.角落，拐角"},{"en":"corporate","zh":"n.有限公司"},{"en":"corporation","zh":"n.公司"},{"en":"correct","zh":"adj.正确的，恰当的"},{"en":"correction","zh":"n.修改，校正"},{"en":"correctly","zh":"adv.正确地"},{"en":"correlate","zh":"v.相关，关联"},{"en":"correlation","zh":"n.相互关系"},{"en":"correspond","zh":"v.符合，通信，相当于"},{"en":"correspondence","zh":"n.相应，通信"},{"en":"correspondent","zh":"adj.对应的  n.记者"},{"en":"corresponding","zh":"adj.相应的，通信的"},{"en":"corridor","zh":"n.走廓"},{"en":"corrode","zh":"v.腐蚀"},{"en":"corrosion","zh":"n.腐蚀"},{"en":"corrupt","zh":"adj.腐败的，腐化的"},{"en":"corruption","zh":"n.腐败，腐化"},{"en":"cosmetics","zh":"n.化妆品"},{"en":"cosmic","zh":"adj.宇宙的"},{"en":"cosmos","zh":"n.宇宙"},{"en":"cosmopolitan","zh":"n.大都市"},{"en":"cost","zh":"n.成本，费用  v.花费"},{"en":"costly","zh":"adj.昂贵的"},{"en":"cottage","zh":"n.村舍"},{"en":"cotton","zh":"n.棉花，棉布，棉纱"},{"en":"couch","zh":"n.躺椅"},{"en":"cough","zh":"v.咳嗽"},{"en":"council","zh":"n.理事会，委员会"},{"en":"counsel","zh":"n.劝告，辩护律师"},{"en":"counsellor","zh":"n.顾问"},{"en":"count","zh":"v.计算，数，认为"},{"en":"countable","zh":"adj.可计算的"},{"en":"countenance","zh":"n.容貌，支持"},{"en":"counter","zh":"n.柜台  adj.相反的"},{"en":"countermand","zh":"v.撤回，取消"},{"en":"countermeasure","zh":"n.对策"},{"en":"counter-offer,","zh":""},{"en":"counterpart","zh":"n.同类的人或物"},{"en":"countersign","zh":"v.副署，会签"},{"en":"countersignature","zh":"n.副署，会签"},{"en":"countless","zh":"adj.无数的"},{"en":"country","zh":"n.国家，乡间，故乡"},{"en":"countryside","zh":"n.乡下"},{"en":"county","zh":"n.县，郡"},{"en":"couple","zh":"n.一对，几个，夫妇"},{"en":"courage","zh":"n.勇气，胆量"},{"en":"courageous","zh":"adj.勇敢的"},{"en":"course","zh":"n.过程，路线，课程"},{"en":"court","zh":"n.法庭，宫廷，球场"},{"en":"courteous","zh":"adj.有礼貌的"},{"en":"courtesy","zh":"n.礼貌，礼仪，好意"},{"en":"courtyard","zh":"n.院子"},{"en":"cousin","zh":"n.堂(或表)兄弟姐妹"},{"en":"cover","zh":"v.盖，掩盖  n.盖子"},{"en":"coverage","zh":"n.覆盖率"},{"en":"covering","zh":"adj.包括的"},{"en":"cow","zh":"n.母牛，奶牛"},{"en":"coward","zh":"n.懦夫"},{"en":"cowardly","zh":"adv.胆小地"},{"en":"crab","zh":"n.蟹"},{"en":"crack","zh":"v.使...破裂  n.裂缝"},{"en":"cracker","zh":"n.苏打饼干，克力架"},{"en":"cradle","zh":"n.摇篮，发源地"},{"en":"craft","zh":"n.工艺，手艺，飞机"},{"en":"craftsman","zh":"n.手艺人"},{"en":"craftsmanship","zh":"n.手艺"},{"en":"crane","zh":"n.鹤，起重机"},{"en":"crash","zh":"v.碰撞  n.坠毁"},{"en":"crate","zh":"n.一箱，篓，筐"},{"en":"crave","zh":"v.渴望，恳求"},{"en":"crawl","zh":"v.爬行，徐徐行进"},{"en":"craziness","zh":"n.疯狂"},{"en":"crazy","zh":"adj.疯狂的，迷恋的"},{"en":"cream","zh":"n.乳脂，奶油"},{"en":"creamy","zh":"adj.奶油的，奶黄色的"},{"en":"create","zh":"v.创造，创作，造成"},{"en":"creation","zh":"n.创造，创造物"},{"en":"creative","zh":"adj.有创造力(性)的"},{"en":"creature","zh":"n.家伙，生物"},{"en":"credit","zh":"n.信誉，信用  v.相信"},{"en":"creditworthy","zh":"adj.有信誉的"},{"en":"creditworthiness","zh":"n.商誉"},{"en":"creek","zh":"n.小川，小湾"},{"en":"creep","zh":"v.爬行，蔓延"},{"en":"crew","zh":"n.(飞机等的)全体人员"},{"en":"cricket","zh":"n.板球，蟋蟀"},{"en":"crime","zh":"n.罪，罪行"},{"en":"criminal","zh":"n.罪犯  adj.犯罪的"},{"en":"crimson","zh":"adj.深红色(的)"},{"en":"cripple","zh":"n.跛子  v.使残废"},{"en":"crisis","zh":"n.危险，危险期"},{"en":"crisp","zh":"adj.松脆的，鲜嫩的"},{"en":"critic","zh":"n.评论家，爱挑剔的人"},{"en":"critical","zh":"adj.批评的，危急的"},{"en":"criticism","zh":"n.批评"},{"en":"criticize","zh":"v.批评，评论"},{"en":"crook","zh":"n.钩子"},{"en":"crooked","zh":"adj.弯曲的，歪的"},{"en":"crop","zh":"n.作物，庄稼"},{"en":"cross","zh":"n.十字，交叉  v.横过"},{"en":"crossing","zh":"n.交叉，十字路口"},{"en":"crossroads","zh":"n.交叉路口，十字路"},{"en":"crouch","zh":"v.蹲下，缩着"},{"en":"crow","zh":"n.乌鸦  v.鸦啼"},{"en":"crowd","zh":"n.人群  v.挤满"},{"en":"crown","zh":"n.王冠  v.加冕"},{"en":"crude","zh":"adj.未加工的，粗糙的"},{"en":"cruel","zh":"adj.残酷的，残忍的"},{"en":"cruelty","zh":"n.残忍，残酷行为"},{"en":"cruise","zh":"v.巡游，巡航"},{"en":"crumb","zh":"n.面包屑"},{"en":"crumble","zh":"adj.粉碎，崩溃"},{"en":"crush","zh":"v.压榨，粉碎"},{"en":"crust","zh":"n.面包皮，硬的表面"},{"en":"crutch","zh":"n.拐杖"},{"en":"cry","zh":"v.叫喊，哭泣"},{"en":"crystal","zh":"n.水晶，晶体"},{"en":"cube","zh":"n.立方体，三次方"},{"en":"cubic","zh":"adj.立方的"},{"en":"cubism","zh":"n.立体主义"},{"en":"cuckoo","zh":"n.布谷鸟，杜鹃"},{"en":"cucumber","zh":"n.黄瓜"},{"en":"cultivate","zh":"v.耕作，栽培，培养"},{"en":"cultivation","zh":"n.耕作，培养"},{"en":"cultural","zh":"adj.文化的"},{"en":"culture","zh":"n.文化，养殖"},{"en":"cunning","zh":"adj.狡猾的，狡诈的"},{"en":"cup","zh":"n.杯子，一杯"},{"en":"cupboard","zh":"n.碗橱"},{"en":"curb","zh":"v.制止，束缚"},{"en":"cure","zh":"v.治疗，矫正"},{"en":"curiosity","zh":"n.好奇心，古玩"},{"en":"curious","zh":"adj.好奇的，爱打听的"},{"en":"curl","zh":"v.卷曲，缭绕  n.卷发"},{"en":"curly","zh":"adj.卷曲的，波浪式的"},{"en":"currency","zh":"n.通货，货币"},{"en":"current","zh":"adj.现令的  n.流"},{"en":"currently","zh":"adv.当前，广泛地"},{"en":"curse","zh":"v.诅咒，咒骂"},{"en":"curtail","zh":"n.削减，剥夺"},{"en":"curtain","zh":"n.窗帘，幕布"},{"en":"curve","zh":"n.曲线，弯曲"},{"en":"cushion","zh":"n.垫子，靠垫"},{"en":"custody","zh":"n.保管，监护"},{"en":"custom","zh":"n.风俗，习惯"},{"en":"customary","zh":"adj.习惯的，通常的"},{"en":"customer","zh":"n.顾客，主顾"},{"en":"customs","zh":"n.海关"},{"en":"cut","zh":"v.割，切，削减，切断"},{"en":"cutlery","zh":"n.刀具，餐刀"},{"en":"cutter","zh":"n.刀具，裁剪者"},{"en":"cutting","zh":"n.切片，剪辑"},{"en":"cycle","zh":"n.周期，循环，自行车"},{"en":"cyclist","zh":"n.自行车运动员"},{"en":"cylinder","zh":"n.圆筒，柱，汽缸"},{"en":"d/a","zh":"n.(缩)承兑交单"},{"en":"dacron","zh":"n.涤纶"},{"en":"dad","zh":"n.爸爸"},{"en":"dagger","zh":"n.匕首"},{"en":"daily","zh":"adj.每日的  adv.天天"},{"en":"dainty","zh":"adj.优雅，考究"},{"en":"dairy","zh":"n.奶牛场，乳品商店"},{"en":"dam","zh":"n.坝"},{"en":"damage","zh":"v.损害，破坏"},{"en":"damn","zh":"v.诅咒"},{"en":"damp","zh":"adj.潮湿的  n.潮气"},{"en":"dance","zh":"v.跳舞  n.舞蹈"},{"en":"dancer","zh":"n.舞蹈者，舞蹈演员"},{"en":"danger","zh":"n.危险，威胁"},{"en":"dangerous","zh":"adj.有危险的"},{"en":"danish","zh":"adj.丹麦人(的)"},{"en":"denmark","zh":"n.丹麦"},{"en":"dare","zh":"v.敢，挑战，竟敢"},{"en":"daring","zh":"adj.大胆的，勇敢的"},{"en":"dark","zh":"adj.黑暗的  n.暗处"},{"en":"darken","zh":"v.变黑，转暗"},{"en":"darkness","zh":"n.黑暗"},{"en":"darling","zh":"n.爱人  adj.心爱的"},{"en":"dart","zh":"n.飞标游戏"},{"en":"dash","zh":"v.猛冲 泼溅  n.破折号"},{"en":"data","zh":"n.(复数)资料，数据"},{"en":"date","zh":"n.日期  v.注日期"},{"en":"dating","zh":"n.约会"},{"en":"daughter","zh":"n.女儿"},{"en":"daughter-in-","zh":"lawn.儿媳"},{"en":"dawn","zh":"n.黎明，开端"},{"en":"day","zh":"n.一天，白天"},{"en":"daybreak","zh":"n.破晓"},{"en":"daylight","zh":"n.日光，白昼"},{"en":"daytime","zh":"n.日间"},{"en":"daze","zh":"v.耀眼，使迷乱"},{"en":"dazzle","zh":"v.使...眼花缭乱"},{"en":"dazzling","zh":"adj.令人目眩的"},{"en":"dead","zh":"adj.死的  n.死者"},{"en":"deadline","zh":"n.期限"},{"en":"deadly","zh":"adj.致命的，死一般的"},{"en":"deaf","zh":"adj.聋的"},{"en":"deafen","zh":"v.使...聋，震聋"},{"en":"deal","zh":"v.处理，交易  n.买卖"},{"en":"dealer","zh":"n.商人，贩子"},{"en":"dealing","zh":"n.交往，生意"},{"en":"dean","zh":"n.系主任"},{"en":"dear","zh":"adj.亲爱的，敬爱的"},{"en":"death","zh":"n.死，死亡"},{"en":"deathly","zh":"adj.致死的"},{"en":"debate","zh":"v.辩论，讨论"},{"en":"debit","zh":"n.借方"},{"en":"debt","zh":"n.债，债务"},{"en":"decade","zh":"n.十年"},{"en":"decay","zh":"v.腐烂，衰败"},{"en":"deceased","zh":"adj.已死的"},{"en":"deceit","zh":"n.欺骗，欺诈行为"},{"en":"deceive","zh":"v.欺骗"},{"en":"deception","zh":"n.欺诈"},{"en":"deceitful","zh":"adj.欺骗性的"},{"en":"december","zh":"n.十二月"},{"en":"decency","zh":"n.体面"},{"en":"decent","zh":"adj.体面的，象样的"},{"en":"decide","zh":"v.决定，判决"},{"en":"decided","zh":"adj.明确的，果断的"},{"en":"decidedly","zh":"adv.明确地，果断的"},{"en":"decimal","zh":"adj.十进制的，小数的"},{"en":"decision","zh":"n.决定，决议"},{"en":"decisive","zh":"adj.决定性，明确的"},{"en":"deck","zh":"n.甲板"},{"en":"declaration","zh":"n.宣布，宣告"},{"en":"declare","zh":"v.宣布，声明"},{"en":"decline","zh":"v.婉谢，推辞  n.衰落"},{"en":"declining","zh":"adj.下降的，衰落的"},{"en":"decompose","zh":"v.分解，腐烂"},{"en":"decorate","zh":"v.装饰"},{"en":"decoration","zh":"n.装饰物"},{"en":"decorative","zh":"adj.装饰的，装璜的"},{"en":"decrease","zh":"v.减少"},{"en":"decree","zh":"n.法令  v.判决"},{"en":"dedicate","zh":"v.奉献，致力"},{"en":"deduce","zh":"v.演绎，推断"},{"en":"deduct","zh":"v.减"},{"en":"deduction","zh":"n.推断，减少"},{"en":"deed","zh":"n.行为，契据"},{"en":"deem","zh":"v.以为，认为"},{"en":"deep","zh":"adj.深的，深远的"},{"en":"deepen","zh":"v.加深，深化"},{"en":"deeply","zh":"adv.深深的，深切地"},{"en":"deer","zh":"n.鹿"},{"en":"default","zh":"v.不履行，不负责"},{"en":"defeat","zh":"v.击败  n.失败"},{"en":"defect","zh":"n.缺点，缺陷"},{"en":"defective","zh":"adj.有缺点的"},{"en":"defence","zh":"n.保卫，防御"},{"en":"defend","zh":"v.保卫，为...辩护"},{"en":"defer","zh":"v.拖延"},{"en":"defiance","zh":"n.蔑视，挑战"},{"en":"defiant","zh":"adj.无礼的，挑战的"},{"en":"deficiency","zh":"n.缺乏"},{"en":"deficient","zh":"adj.缺乏的，不足的"},{"en":"deficit","zh":"n.赤字"},{"en":"define","zh":"v.下定义，界定，规定"},{"en":"definite","zh":"adj.明确的，限定的"},{"en":"definitely","zh":"adv.明确地，肯定地"},{"en":"definition","zh":"n.定义，解释"},{"en":"definitive","zh":"adv.定义的"},{"en":"deflate","zh":"v.收缩，紧缩"},{"en":"deflect","zh":"v.偏斜"},{"en":"deflection","zh":"n.偏转，偏斜"},{"en":"deform","zh":"v.使变形，使残废"},{"en":"deformation","zh":"n.变形"},{"en":"defray","zh":"v.支付"},{"en":"defy","zh":"v.反抗，蔑视，使不能"},{"en":"degradation","zh":"n.降低，恶化"},{"en":"degrade","zh":"v.败低，下降，堕落"},{"en":"degree","zh":"n.程度，度，学位"},{"en":"delay","zh":"v.耽搁，延误"},{"en":"del","zh":"crederen.保付"},{"en":"delegate","zh":"n.代表  n.委派"},{"en":"delegation","zh":"n.代表团"},{"en":"delete","zh":"v.删除"},{"en":"deletion","zh":"n.删除"},{"en":"deliberate","zh":"adj.故意的，审慎的"},{"en":"deliberately","zh":"adv.故意地，从容地"},{"en":"deliberation","zh":"n.慎重，故意"},{"en":"delicacy","zh":"n.精致"},{"en":"delicate","zh":"adj.优雅的，精致的"},{"en":"delicious","zh":"adj.美味的"},{"en":"delight","zh":"n.快乐，乐事  n.喜爱"},{"en":"delightful","zh":"adj.令人高兴的"},{"en":"delinquency","zh":"n.轻微犯罪"},{"en":"delinquent","zh":"adj.拖欠的"},{"en":"deliver","zh":"v.交付，递送，讲述"},{"en":"deliverance","zh":"n.救助"},{"en":"delivery","zh":"n.交付，递送，讲述"},{"en":"delusion","zh":"n.错觉"},{"en":"delusive","zh":"adj.令人产生错觉的"},{"en":"demand","zh":"v.要求，需求"},{"en":"demanding","zh":"adj.对人要求严格的"},{"en":"democracy","zh":"n.民主，民主政体"},{"en":"democrat","zh":"n.民主党人"},{"en":"democratic","zh":"adj.民主的"},{"en":"demolish","zh":"v.拆除"},{"en":"demolition","zh":"n.拆除"},{"en":"demonstrate","zh":"v.论证，演示，表明"},{"en":"demonstration","zh":"n.示范，表演，示威"},{"en":"demurrage","zh":"n.滞期费"},{"en":"den","zh":"n.窝"},{"en":"denial","zh":"n.拒绝，否定"},{"en":"denominate","zh":"v.为...命名"},{"en":"denomination","zh":"n.命名"},{"en":"denote","zh":"v.表示"},{"en":"denounce","zh":"v.谴责，斥责"},{"en":"dense","zh":"adj.稠密的，浓厚的"},{"en":"density","zh":"n.密度，稠密"},{"en":"dent","zh":"n.牙，槽，凹陷"},{"en":"dentist","zh":"n.牙科医生"},{"en":"deny","zh":"v.否认，拒绝"},{"en":"depart","zh":"v.离去，出发，违反"},{"en":"department","zh":"n.部，部门，系"},{"en":"departure","zh":"n.离开，违背"},{"en":"depend","zh":"v.依靠，依赖"},{"en":"dependability","zh":"n.可依赖性"},{"en":"dependable","zh":"adj.可依赖的"},{"en":"dependant","zh":"n.受赡养者"},{"en":"dependence","zh":"n.依靠，依赖"},{"en":"dependent","zh":"adj.依靠的，随..而定"},{"en":"depict","zh":"v.描述，描画"},{"en":"depiction","zh":"n.描述"},{"en":"deplete","zh":"v.减少，耗尽"},{"en":"deposit","zh":"v.存放，储蓄  n.存款"},{"en":"deposition","zh":"n.免职，罢官"},{"en":"depreciate","zh":"v.降价，贬值，折旧"},{"en":"depreciation","zh":"n.折旧，贬值"},{"en":"depress","zh":"v.抑制，使人抑郁"},{"en":"depressed","zh":"adj.情绪低落的"},{"en":"depression","zh":"n.沮丧，萧条"},{"en":"deprive","zh":"v.剥夺，丧失"},{"en":"depth","zh":"n.深度"},{"en":"deputy","zh":"n.代表  adj.副职的"},{"en":"derivation","zh":"n.起源，衍生物"},{"en":"derive","zh":"v.从...而来，得来"},{"en":"derrick","zh":"n.钻塔，井架"},{"en":"descend","zh":"v.降临，下来，遗传"},{"en":"descendant","zh":"n.子孙，后裔"},{"en":"descent","zh":"n.下降，血统"},{"en":"describe","zh":"v.描写，作图"},{"en":"description","zh":"n.描述，形容"},{"en":"desert","zh":"v.遗弃，擅离  n.沙漠"},{"en":"deserve","zh":"v.应受，值得"},{"en":"design","zh":"v.设计，旨在  n.设计"},{"en":"designate","zh":"v.指明，指定"},{"en":"designation","zh":"n.指定，委派"},{"en":"designer","zh":"n.设计者"},{"en":"desirable","zh":"adj.合乎要求的"},{"en":"desire","zh":"n.欲望，要求  v.要求"},{"en":"desk","zh":"n.课桌，写字台"},{"en":"desolate","zh":"adj.荒芜的，凄凉的"},{"en":"desolation","zh":"n.荒凉，凄凉"},{"en":"despair","zh":"v.绝望"},{"en":"desperate","zh":"adj.不顾一切的"},{"en":"desperation","zh":"n.绝望"},{"en":"despise","zh":"v.鄙视，看不起"},{"en":"despite","zh":"prep.不管，任凭"},{"en":"dessert","zh":"n.(最后一道)甜食"},{"en":"destination","zh":"n.终点，目的地"},{"en":"destine","zh":"v.注定，预定"},{"en":"destiny","zh":"n.命运，定数"},{"en":"destroy","zh":"v.破坏，摧毁，消灭"},{"en":"destruction","zh":"n.破坏，毁灭"},{"en":"destructive","zh":"adj.破坏性的"},{"en":"detach","zh":"v.分离，拆开"},{"en":"detail","zh":"n.细节"},{"en":"detailed","zh":"adj.详细的，详尽的"},{"en":"detain","zh":"v.留住，阻止"},{"en":"detect","zh":"v.发现，侦察"},{"en":"detection","zh":"n.发现，侦查"},{"en":"detective","zh":"n.侦探"},{"en":"deteriorate","zh":"v.恶化，败坏"},{"en":"deterioration","zh":"n.退化"},{"en":"determination","zh":"n.决心，决定"},{"en":"determine","zh":"v.决心，决定，测定"},{"en":"detour","zh":"v.绕道，绕开"},{"en":"detract","zh":"v.降低"},{"en":"detriment","zh":"n.损害"},{"en":"detrimental","zh":"adj.有害的"},{"en":"devaluation","zh":"n.贬值"},{"en":"devalue","zh":"v.贬值"},{"en":"develop","zh":"v.发展，开发，成长"},{"en":"developing","zh":"adj.发展中的"},{"en":"development","zh":"n.进展，发展"},{"en":"deviate","zh":"v.背离"},{"en":"deviation","zh":"n.背离，偏向"},{"en":"device","zh":"n.装置，方法"},{"en":"devil","zh":"n.魔鬼，恶人"},{"en":"devise","zh":"v.设计，计划"},{"en":"devote","zh":"v.奉献，贡献"},{"en":"devoted","zh":"adj.献身于...的"},{"en":"devotion","zh":"n.献身，专心"},{"en":"devour","zh":"v.吞吃，吞没"},{"en":"dew","zh":"n.露水"},{"en":"diagnose","zh":"v.诊断"},{"en":"diagnosis","zh":"n.诊断"},{"en":"diagram","zh":"n.图表，图解"},{"en":"dial","zh":"n.钟盘  v.拨电话"},{"en":"dialect","zh":"n.方言"},{"en":"dialog","zh":"n.对话，对白"},{"en":"diameter","zh":"n.直径"},{"en":"diamond","zh":"n.钻石，金刚石"},{"en":"diary","zh":"n.日记"},{"en":"dictate","zh":"v.口授，命令"},{"en":"dictation","zh":"n.口授，听写"},{"en":"dictator","zh":"n.独裁者"},{"en":"dictatorship","zh":"n.独裁，专政"},{"en":"diction","zh":"n.措辞"},{"en":"dictionary","zh":"n.词典，字典"},{"en":"die","zh":"v.死，消亡"},{"en":"diesel","zh":"n.内燃机，柴油机"},{"en":"diet","zh":"n.饮食，节食"},{"en":"differ","zh":"v.不同，相异"},{"en":"difference","zh":"n.差异，差别"},{"en":"different","zh":"adj.不同的，各种"},{"en":"differential","zh":"adj.有差别的"},{"en":"differently","zh":"adv.不同地"},{"en":"difficult","zh":"adj.困难的"},{"en":"difficulty","zh":"n.困难，难题"},{"en":"dig","zh":"v.挖，采掘"},{"en":"digest","zh":"v.消化  n.摘要"},{"en":"digestion","zh":"n.消化"},{"en":"digit","zh":"n.数字"},{"en":"digital","zh":"adj.数字的"},{"en":"dignity","zh":"n.尊贵，尊严"},{"en":"dike","zh":"n.堤"},{"en":"dilute","zh":"v.稀释"},{"en":"diligent","zh":"adj.勤奋的，用功的"},{"en":"dim","zh":"adj.暗淡的，模糊的"},{"en":"dime","zh":"n.(美元)一角"},{"en":"dimension","zh":"n.维，方面，尺寸"},{"en":"dimensional","zh":"adj.尺寸的"},{"en":"diminish","zh":"v.减少，缩小"},{"en":"dine","zh":"v.用餐"},{"en":"dingy","zh":"adj.肮脏的"},{"en":"dinner","zh":"n.正餐，晚餐，宴会"},{"en":"dip","zh":"v.蘸，浸"},{"en":"diploma","zh":"n.毕业文凭，学位证书"},{"en":"diplomacy","zh":"n.外交"},{"en":"diplomat","zh":"n.外交人员"},{"en":"diplomatic","zh":"n.外交的"},{"en":"direct","zh":"v.支配，指挥，对准"},{"en":"direction","zh":"n.方向，指示，说明"},{"en":"directive","zh":"n.命令，指令"},{"en":"directly","zh":"adv.直接地，立即"},{"en":"director","zh":"n.指导者，导演，领导"},{"en":"directory","zh":"n.目录，地址录"},{"en":"dirt","zh":"n.尘埃，灰尘，泥土"},{"en":"dirty","zh":"adj.肮脏的"},{"en":"disable","zh":"v.使残废"},{"en":"disabled","zh":"adj.残废的  n.残疾人"},{"en":"disadvantage","zh":"n.不利之处"},{"en":"disadvantageous","zh":"adj.不利的"},{"en":"disagree","zh":"v.意见不合，不符"},{"en":"disagreement","zh":"n.不和，不一致"},{"en":"disallow","zh":"v.不允许"},{"en":"disappear","zh":"v.失踪，消失"},{"en":"disappearance","zh":"n.消失"},{"en":"disappoint","zh":"v.使...失望"},{"en":"disappointed","zh":"adj.失望的，扫兴的"},{"en":"disappointment","zh":"n.失望"},{"en":"disapproval","zh":"n.不批准"},{"en":"disaster","zh":"n.自然灾害，祸患"},{"en":"disastrous","zh":"adj.灾难性的"},{"en":"disburse","zh":"v.支付"},{"en":"disbursement","zh":"n.支付"},{"en":"disc","zh":"n.圆盘，唱片"},{"en":"discard","zh":"v.丢弃，扔掉"},{"en":"discern","zh":"v.操作别，辨明"},{"en":"discharge","zh":"v.解除，放出，卸货"},{"en":"disciplinary","zh":"adj.纪律的，学科的"},{"en":"discipline","zh":"n.训练，纪律  n.锻炼"},{"en":"disclaim","zh":"v.放弃，不承认"},{"en":"disclose","zh":"v.揭开，透露"},{"en":"discomfort","zh":"n.不安，不舒服"},{"en":"discomfortable","zh":"adj.不舒服的"},{"en":"discontinue","zh":"v.中断"},{"en":"discount","zh":"v.折扣"},{"en":"discourage","zh":"v.使...泄气，阻止"},{"en":"discourse","zh":"n.演说，谈话，话语"},{"en":"discover","zh":"v.发现"},{"en":"discovery","zh":"n.发现，发现物"},{"en":"discreet","zh":"adj.周到的，慎重的"},{"en":"discreetly","zh":"adv.慎重地"},{"en":"discrepancy","zh":"n.单货不符"},{"en":"discretion","zh":"n.慎重"},{"en":"discriminate","zh":"v.区别，岐视"},{"en":"discrimination","zh":"n.辨别，岐视"},{"en":"discuss","zh":"v.讨论"},{"en":"discussion","zh":"v.讨论，商议"},{"en":"disdain","zh":"v.轻视"},{"en":"disease","zh":"n.疾病"},{"en":"disgrace","zh":"n.耻辱  v.使受辱"},{"en":"disgraceful","zh":"adj.耻辱的，受辱的"},{"en":"disguise","zh":"v.伪装，掩饰"},{"en":"disgust","zh":"n.厌恶  v.使讨厌"},{"en":"disgustful","zh":"adj.令人生厌的"},{"en":"dish","zh":"n.盘子，碟子"},{"en":"dishonorable","zh":"adj.不名誉的"},{"en":"dishonor","zh":"n.耻辱  v.凌辱"},{"en":"disillusion","zh":"v.使觉醒，幻灭"},{"en":"disinclined","zh":"adj.不愿意的"},{"en":"disinfectant","zh":"n.消毒剂"},{"en":"disintegration","zh":"n.分散，解体"},{"en":"dislike","zh":"v.厌恶"},{"en":"disloyal","zh":"adj.不忠的"},{"en":"disloyalty","zh":"adj.不忠"},{"en":"dismal","zh":"adj.阴郁的，沉闷的"},{"en":"dismay","zh":"v.使沮丧  n.沮丧"},{"en":"dismiss","zh":"v.解散，开除"},{"en":"dismissal","zh":"n.解散，开除"},{"en":"disobey","zh":"v.不服从"},{"en":"disorder","zh":"n.紊乱，骚乱，失调"},{"en":"disparity","zh":"n.不同，悬殊"},{"en":"dispatch","zh":"v.迅速派遣  n.快件"},{"en":"dispel","zh":"v.驱散"},{"en":"dispense","zh":"v.分配，施予"},{"en":"disperse","zh":"v.驱散，散布"},{"en":"displace","zh":"v.置换，取代"},{"en":"displacement","zh":"n.置换，替换物"},{"en":"display","zh":"v.陈列，表现"},{"en":"displease","zh":"v.使生气，惹怒"},{"en":"displeasure","zh":"n.不快"},{"en":"disposal","zh":"n.处置，对付"},{"en":"dispose","zh":"v.处置，对付，解决"},{"en":"disposed","zh":"adj.有...倾向的"},{"en":"disposition","zh":"n.布置，处置"},{"en":"dispute","zh":"v.争论，质疑  n.争论"},{"en":"disregard","zh":"v.无视，不顾"},{"en":"dissatisfaction","zh":"n.不满"},{"en":"dissatisfy","zh":"v.使不满"},{"en":"dissimilar","zh":"adj.不同的"},{"en":"dissipate","zh":"v.驱散，消耗，浪费"},{"en":"dissolve","zh":"v.溶解，使终结"},{"en":"distance","zh":"n.距离，远处"},{"en":"distant","zh":"adj.远方的，疏远的"},{"en":"distillation","zh":"n.蒸馏"},{"en":"distinct","zh":"adj.不同的，明显的"},{"en":"distinction","zh":"n.差别，非凡"},{"en":"distinctly","zh":"adv.明晰地，清楚地"},{"en":"distinguish","zh":"v.辨别，认出"},{"en":"distinguished","zh":"adj.尊贵的，尊敬的"},{"en":"distort","zh":"v.扭曲，歪曲"},{"en":"distortion","zh":"n.曲解，失真，变形"},{"en":"distract","zh":"v.分神，迷惑"},{"en":"distraction","zh":"n.分心"},{"en":"distress","zh":"n.苦恼，不幸"},{"en":"distribute","zh":"v.分配，分布，分销"},{"en":"distribution","zh":"n.分配，分布"},{"en":"distributor","zh":"n.分销商"},{"en":"distributorship","zh":"n.分销权"},{"en":"district","zh":"v.区，区域，地区"},{"en":"disturb","zh":"v.打扰，打乱，使烦恼"},{"en":"disturbance","zh":"n.干扰，动乱"},{"en":"disunite","zh":"v.使分裂"},{"en":"disuse","zh":"v.废止"},{"en":"ditch","zh":"n.沟，渠，下水道"},{"en":"ditto","zh":"n.同上"},{"en":"dive","zh":"v.潜水，跳水，俯冲"},{"en":"diver","zh":"n.潜水员，跳水运动员"},{"en":"diverge","zh":"v.分歧，离题"},{"en":"divergence","zh":"n.分歧"},{"en":"diverse","zh":"adj.不同的，分歧的"},{"en":"diversion","zh":"n.转移，消遣"},{"en":"diversity","zh":"n.多样化"},{"en":"divert","zh":"v.使转向，消遣"},{"en":"divide","zh":"v.分开，分享，分裂"},{"en":"divine","zh":"adj.神的，神圣的"},{"en":"division","zh":"n.划分，部分"},{"en":"divorce","zh":"v.离婚，使脱离"},{"en":"dizzy","zh":"adj.晕眩的"},{"en":"do","zh":"v.做，干，足够，制作"},{"en":"dock","zh":"n.码头"},{"en":"doctor","zh":"n.医生，博士"},{"en":"doctrine","zh":"n.教义，学说"},{"en":"document","zh":"n.文件，公文"},{"en":"documentary","zh":"adj.文化的"},{"en":"documentation","zh":"n.提供文件"},{"en":"dodge","zh":"v.躲避"},{"en":"dog","zh":"n.狗"},{"en":"doggedly","zh":"adv.顽固地"},{"en":"doll","zh":"n.玩偶，娃娃"},{"en":"dollar","zh":"n.元，美元"},{"en":"domain","zh":"n.领土，领域"},{"en":"dome","zh":"n.圆顶，穹窿"},{"en":"domestic","zh":"adj.家里的，国内的"},{"en":"dominant","zh":"adj.统治的"},{"en":"dominate","zh":"v.统治，支配，占优势"},{"en":"donate","zh":"v.捐献"},{"en":"donation","zh":"n.捐献"},{"en":"donkey","zh":"n.驴，笨蛋"},{"en":"doom","zh":"n.命运，判决  v.命定"},{"en":"door","zh":"n.门，(一户)人家"},{"en":"doorway","zh":"n.门口，门道"},{"en":"dormitory","zh":"n.集体宿舍"},{"en":"dose","zh":"n.剂量，一服药"},{"en":"dot","zh":"n.点，圆点"},{"en":"double","zh":"adj.两倍的，双重的"},{"en":"doubt","zh":"v.怀疑，疑惑"},{"en":"doubtful","zh":"adj.怀疑的，可疑的"},{"en":"doubtless","zh":"adv.无疑地，大约"},{"en":"dough","zh":"n.面团"},{"en":"dove","zh":"n.鸽子"},{"en":"down","zh":"adv.向下，下降"},{"en":"downstairs","zh":"adv.在楼下"},{"en":"downtown","zh":"n.闹市  adv.去市里"},{"en":"downward","zh":"adj.向下的，下坡的"},{"en":"downwards","zh":"adv.向下，以下"},{"en":"doze","zh":"v.打瞌睡"},{"en":"dozen","zh":"n.一打"},{"en":"draft","zh":"n.草案，草稿，穿堂风"},{"en":"drag","zh":"v.拖，拽"},{"en":"dragon","zh":"n.龙"},{"en":"drain","zh":"v.排水，耗竭，泄"},{"en":"drainage","zh":"v.排水系统，污水"},{"en":"drama","zh":"n.戏剧，剧本"},{"en":"dramatic","zh":"adj.戏剧性的，显著的"},{"en":"dramatist","zh":"n.戏剧家"},{"en":"dramatize","zh":"v.使戏剧化"},{"en":"drastic","zh":"adj.激烈的，严厉的"},{"en":"draw","zh":"v.画，拉，吸引"},{"en":"drawback","zh":"n.不利，欠缺"},{"en":"drawer","zh":"n.抽屉"},{"en":"drawing","zh":"n.素描，绘画，图样"},{"en":"dread","zh":"v.恐惧，担心"},{"en":"dreadful","zh":"adj.可怕的，糟糕的"},{"en":"dream","zh":"n.梦，梦想  v.做梦"},{"en":"dreary","zh":"adj.疲劳的"},{"en":"drench","zh":"v.浸泡，充满"},{"en":"dress","zh":"n.服装  v.穿衣"},{"en":"dressing","zh":"n.打扮，调味品"},{"en":"drift","zh":"v.漂流，游荡"},{"en":"drill","zh":"n.钻头，操练  v.训练"},{"en":"drink","zh":"v.喝，饮  n.饮料，酒"},{"en":"drip","zh":"v.滴下，流下"},{"en":"drive","zh":"v.驾驶，乘车  n.车道"},{"en":"driver","zh":"n.司机"},{"en":"droop","zh":"v.下垂"},{"en":"drop","zh":"v.落下  n.滴，下降"},{"en":"dropout","zh":"n.中途退出者"},{"en":"drought","zh":"n.旱灾"},{"en":"drown","zh":"v.淹死"},{"en":"drug","zh":"n.药物，麻醉剂"},{"en":"drugstore","zh":"n.零食店"},{"en":"drum","zh":"n.鼓  v.敲鼓"},{"en":"drunk","zh":"adj.喝醉的"},{"en":"drunkard","zh":"n.醉鬼"},{"en":"dry","zh":"adj.干的，枯燥的"},{"en":"dubious","zh":"adj.怀疑的"},{"en":"duck","zh":"n.鸭子"},{"en":"due","zh":"adj.到期的，预定的"},{"en":"duke","zh":"n.公爵"},{"en":"dull","zh":"adj.沉闷的，钝的"},{"en":"duly","zh":"adv.按期地"},{"en":"dumb","zh":"adj.哑的"},{"en":"dummy","zh":"n.傀儡"},{"en":"dump","zh":"v.倾倒  n.垃圾堆"},{"en":"dumping","zh":"n.倾销"},{"en":"dung","zh":"n.粪"},{"en":"dungeon","zh":"n.地牢"},{"en":"duplicate","zh":"adj.二重的，复制的"},{"en":"durable","zh":"adj.持久的，耐用的"},{"en":"duration","zh":"n.期间，待续时间"},{"en":"during","zh":"prep.在...期间"},{"en":"dusk","zh":"n.黄昏"},{"en":"dust","zh":"n.尘土，粉末  v.掸土"},{"en":"dustbin","zh":"n.簸箕"},{"en":"dusty","zh":"adj.沾满灰尘的"},{"en":"duty","zh":"n.责任，义务，关税"},{"en":"duty-free,","zh":""},{"en":"dwarf","zh":"n.矮子，侏儒"},{"en":"dwell","zh":"v.居住"},{"en":"dweller","zh":"n.居住者，住客"},{"en":"dwelling","zh":"n.住宅"},{"en":"dye","zh":"n.染料  v.染色"},{"en":"dynamic","zh":"adj.动力的，动态的"},{"en":"dynasty","zh":"n.朝代，王朝"},{"en":"each","zh":"adv.名，每个"},{"en":"eager","zh":"adj.热切的，渴望的"},{"en":"eagle","zh":"n.鹰"},{"en":"ear","zh":"n.耳朵，穗"},{"en":"earl","zh":"n.伯爵"},{"en":"early","zh":"adj.早的，初期的"},{"en":"earmark","zh":"n.标记，特征"},{"en":"earn","zh":"v.挣钱，赢得"},{"en":"earnest","zh":"adj.认真的，诚恳的"},{"en":"earnings","zh":"n.收入，赚得的钱"},{"en":"earphone","zh":"n.耳机"},{"en":"earth","zh":"n.地球，地上，泥土"},{"en":"earthly","zh":"adj.世俗的"},{"en":"earthquake","zh":"n.地震"},{"en":"ease","zh":"n.安逸，轻易"},{"en":"easily","zh":"adv.容易地，安逸地"},{"en":"east","zh":"adj.东方的  n.东方"},{"en":"easter","zh":"n.复活节"},{"en":"eastern","zh":"adj.东的，朝东的"},{"en":"eastward","zh":"adv.向东"},{"en":"easy","zh":"adj.容易的，轻松的"},{"en":"easy-going,","zh":"ad"},{"en":"eat","zh":"v.吃"},{"en":"eccentric","zh":"adj.性格怪僻的"},{"en":"eccentricity","zh":"n.怪僻"},{"en":"echo","zh":"n.回声，反响，共呜"},{"en":"eclipse","zh":"n.(日、月)食，蚀"},{"en":"ecology","zh":"n.生态学"},{"en":"economic","zh":"adj.经济的，经济学的"},{"en":"economical","zh":"adj.节省的，经济的"},{"en":"economically","zh":"adv.经济上"},{"en":"economics","zh":"n.经济学"},{"en":"economize","zh":"v.节省"},{"en":"economy","zh":"n.经济，节约"},{"en":"ecstasy","zh":"n.狂喜"},{"en":"edge","zh":"n.边，边缘，刀刃"},{"en":"edit","zh":"v.校订，编辑"},{"en":"edition","zh":"n.片(本)"},{"en":"editor","zh":"n.编辑，编者"},{"en":"editorial","zh":"n.社论"},{"en":"educate","zh":"v.教育"},{"en":"education","zh":"n.教育，训练"},{"en":"educational","zh":"adj.教育的"},{"en":"eel","zh":"n.鳝鱼"},{"en":"effect","zh":"n.后果，效力  v.导致"},{"en":"effective","zh":"adj.有效的"},{"en":"effectively","zh":"adv.有效地"},{"en":"effectiveness","zh":"n.有效"},{"en":"efficiency","zh":"n.效率，功效"},{"en":"efficient","zh":"adj.效率高的"},{"en":"effort","zh":"n.努力，尽力，成果"},{"en":"egg","zh":"n.卵，蛋，鸡蛋"},{"en":"eggplant","zh":"n.茄子"},{"en":"egypt","zh":"n.埃及"},{"en":"egyptian","zh":"adj.埃及人(的)"},{"en":"eight","zh":"num.八"},{"en":"eighteen","zh":"num.十八"},{"en":"eighth","zh":"num.第八，八分之一"},{"en":"eighty","zh":"num.八十"},{"en":"either","zh":"adj.二者之一  adv.也"},{"en":"eject","zh":"v.喷射"},{"en":"ejection","zh":"n.喷射"},{"en":"elaborate","zh":"adj.详尽阐述"},{"en":"elaboration","zh":"n.详尽阐述"},{"en":"elapse","zh":"v.(时间)消逝"},{"en":"elastic","zh":"adj.弹性的，灵活的"},{"en":"elasticity","zh":"n.弹性"},{"en":"elbow","zh":"n.肘，弯管"},{"en":"elder","zh":"adj.年长的，资格老的"},{"en":"elect","zh":"v.选举  adj.当选的"},{"en":"election","zh":"n.选举"},{"en":"electric","zh":"adj.电的，电力的"},{"en":"electrical","zh":"adj.电的"},{"en":"electrician","zh":"n.电工"},{"en":"electricity","zh":"n.电"},{"en":"electrify","zh":"v.充电，电气化"},{"en":"electron","zh":"n.电子"},{"en":"electronic","zh":"adj.电子的"},{"en":"electronics","zh":"n.电子学"},{"en":"elegance","zh":"n.优雅"},{"en":"elegant","zh":"adj.优雅的，典雅的"},{"en":"element","zh":"n.成分，元素"},{"en":"elemental","zh":"adj.自然力的，基本的"},{"en":"elementary","zh":"adj.基础的，初步的"},{"en":"elephant","zh":"n.象"},{"en":"elevate","zh":"v.提升，抬高"},{"en":"elevation","zh":"n.海拔，提高，崇高"},{"en":"elevator","zh":"n.电梯"},{"en":"eleven","zh":"num.十一"},{"en":"eleventh","zh":"num.第十一"},{"en":"eliminate","zh":"v.消灭，删除"},{"en":"elimination","zh":"n.消灭，删除"},{"en":"elliptical","zh":"adj.椭圆的，省略的"},{"en":"ellipsis","zh":"n.省略"},{"en":"eloquence","zh":"n.雄辩，口才"},{"en":"eloquent","zh":"adj.雄辩的，有口才的"},{"en":"else","zh":"adj.别的  adv.否则"},{"en":"elsewhere","zh":"adv.在别处"},{"en":"elusive","zh":"adj.躲闪的"},{"en":"email","zh":"n.電子郵件"},{"en":"emancipate","zh":"v.解放"},{"en":"emancipation","zh":"n.解放"},{"en":"embargo","zh":"n.禁运"},{"en":"embark","zh":"v.登陆"},{"en":"embarrass","zh":"v.使窘，使为难"},{"en":"embarrassing","zh":"adj.令人尴尬的"},{"en":"embarrassment","zh":"n.窘迫，尴尬"},{"en":"embassy","zh":"n.使馆"},{"en":"embody","zh":"v.体现，包含"},{"en":"embrace","zh":"v.拥抱，接受，包括"},{"en":"embroider","zh":"v.绣"},{"en":"embroidery","zh":"v.刺绣(品)"},{"en":"emerge","zh":"v.出现，暴露"},{"en":"emergency","zh":"n.紧急情况，急诊"},{"en":"emigrant","zh":"n.移居国外的人"},{"en":"emigrate","zh":"v.移居国外，移民"},{"en":"emigration","zh":"n.向国外移民"},{"en":"eminent","zh":"adj.杰出的，突出的"},{"en":"emission","zh":"n.发射，散发"},{"en":"emit","zh":"v.发射，散发"},{"en":"emotion","zh":"n.感情，情绪"},{"en":"emotional","zh":"adj.感情的，激动的"},{"en":"emperor","zh":"n.皇帝"},{"en":"emphasis","zh":"n.强调，重点，重读"},{"en":"emphasize","zh":"v.强调，着重"},{"en":"emphatic","zh":"adj.强调的，着重的"},{"en":"empire","zh":"n.帝国，财团"},{"en":"empirical","zh":"adj.经验的"},{"en":"employ","zh":"v.雇用，使用，从事"},{"en":"employee","zh":"n.雇员"},{"en":"employer","zh":"n.雇主"},{"en":"employment","zh":"n.职业，就业"},{"en":"emptiness","zh":"n.空虚，空白"},{"en":"empty","zh":"adj.空的，空虚的"},{"en":"enable","zh":"v.使能够，使可能"},{"en":"enchant","zh":"v.迷住，陶醉"},{"en":"encircle","zh":"v.环绕，包围"},{"en":"enclose","zh":"v.围住，圈起，封入"},{"en":"enclosure","zh":"n.围绕，附件"},{"en":"encounter","zh":"v.面临，遭遇"},{"en":"encourage","zh":"v.鼓舞，鼓励，助长"},{"en":"encouragement","zh":"n.鼓舞，鼓励"},{"en":"encyclopaedia","zh":"n.百科全书"},{"en":"end","zh":"n.结尾  v.终止，结束"},{"en":"endanger","zh":"v.危及，危害"},{"en":"endeavor","zh":"v.努力，尽力"},{"en":"ending","zh":"n.结局"},{"en":"endless","zh":"adj.无穷无尽的"},{"en":"endorse","zh":"v.背签"},{"en":"endorsement","zh":"n.背书"},{"en":"endow","zh":"v.资助，赋予，授予"},{"en":"endurance","zh":"n.忍耐力，耐用"},{"en":"endure","zh":"v.忍受，容忍，持久"},{"en":"endures","zh":"n.最终用户"},{"en":"enemy","zh":"n.敌人，对手"},{"en":"energetic","zh":"adj.精力旺盛的"},{"en":"energy","zh":"n.精力，活力，能量"},{"en":"enforce","zh":"v.实施，强制"},{"en":"engage","zh":"v.从事，雇用，吸引"},{"en":"engaged","zh":"adj.占用的，从事..的"},{"en":"engagement","zh":"n.约束，约会，婚约"},{"en":"engine","zh":"n.发动机，火车头"},{"en":"engineer","zh":"n.工程师"},{"en":"engineering","zh":"n.工程"},{"en":"england","zh":"n.英格兰，英国"},{"en":"english","zh":"adj.英国的，英语"},{"en":"englishman","zh":"n.英国人"},{"en":"engrave","zh":"v.刻上，牢记"},{"en":"engraving","zh":"adj.雕刻"},{"en":"engulf","zh":"v.吞没"},{"en":"enhance","zh":"v.提高，增加"},{"en":"enhancement","zh":"n.提高"},{"en":"enjoy","zh":"v.欣赏，享有，享受"},{"en":"enjoyable","zh":"adj.愉快的"},{"en":"enjoyment","zh":"n.享受，乐趣"},{"en":"enlarge","zh":"v.扩大，扩展，放大"},{"en":"enlargement","zh":"n.扩大"},{"en":"enlighten","zh":"v.启发，教导"},{"en":"enlightening","zh":"adj.给人启发的"},{"en":"enormous","zh":"adj.巨大的，庞大的"},{"en":"enough","zh":"adv.足够(的)"},{"en":"enquire","zh":"v.询问"},{"en":"enquiry","zh":"v.询问"},{"en":"enrich","zh":"v.使富裕"},{"en":"enroll","zh":"v.登记，招收"},{"en":"enrolment","zh":"n.招收"},{"en":"en","zh":"routeadv.在途中"},{"en":"ensure","zh":"v.保证，担保，保护"},{"en":"entail","zh":"v.遗留给，引起"},{"en":"enter","zh":"v.进入，加入"},{"en":"enterprise","zh":"n.事业，企业"},{"en":"entertain","zh":"v.招待，使欢乐"},{"en":"entertainment","zh":"n.招待，娱乐"},{"en":"enthusiasm","zh":"v.热情，热心"},{"en":"enthusiastic","zh":"adj.热情的，热心的"},{"en":"entire","zh":"adj.完全的，全部的"},{"en":"entirely","zh":"adv.完全地，彻底地"},{"en":"entirety","zh":"n.全部"},{"en":"entitle","zh":"v.给...权利，资格"},{"en":"entrance","zh":"n.进入，入口"},{"en":"entreat","zh":"v.恳求，请求"},{"en":"entrust","zh":"v.委托"},{"en":"entry","zh":"n.进入，入口，词条"},{"en":"enumerate","zh":"v.列举"},{"en":"envelop","zh":"v.包，围绕"},{"en":"envelope","zh":"n.信封"},{"en":"envious","zh":"adj.嫉妒的"},{"en":"environment","zh":"n.环境"},{"en":"environmental","zh":"adj.环境的"},{"en":"envy","zh":"v.嫉妒，羡慕"},{"en":"epidemic","zh":"adj.传染的  n.传染病"},{"en":"episode","zh":"n.事件，情节，插曲"},{"en":"epoch","zh":"n.时代，纪元"},{"en":"epoch-making,","zh":"a"},{"en":"equal","zh":"adj.相等的，胜任的"},{"en":"equality","zh":"n.平等，相等"},{"en":"equally","zh":"adv.相等地，相同地"},{"en":"equation","zh":"n.等式，方程式"},{"en":"equator","zh":"n.赤道"},{"en":"equilibrium","zh":"n.平衡，均衡"},{"en":"equip","zh":"v.装备，配备"},{"en":"equipment","zh":"n.设备，器材，装置"},{"en":"equivalence","zh":"n.相等，等值"},{"en":"equivalent","zh":"adj.相等的，等值的"},{"en":"era","zh":"n.时代，年代"},{"en":"eradicate","zh":"v.根除"},{"en":"eradication","zh":"n.根除"},{"en":"erase","zh":"v.擦掉，抹去"},{"en":"erasure","zh":"n.抹去"},{"en":"erect","zh":"v.树立，建立，竖立"},{"en":"erection","zh":"n.竖立，建立"},{"en":"erosion","zh":"n.腐蚀，侵蚀"},{"en":"err","zh":"v.犯错误"},{"en":"errand","zh":"n.差事，差使"},{"en":"error","zh":"n.错误，过失"},{"en":"erupt","zh":"v.喷发，爆发"},{"en":"eruption","zh":"n.喷发，爆发"},{"en":"escalator","zh":"n.电动扶梯"},{"en":"escape","zh":"v.逃跑，避免，被遗忘"},{"en":"escort","zh":"v.护送  n.护卫队"},{"en":"especial","zh":"adj.特别的，专门的"},{"en":"especially","zh":"adv.特别地，专门地"},{"en":"essay","zh":"n.散文，论文，小品文"},{"en":"essayist","zh":"n.散文作家"},{"en":"essence","zh":"n.本质，情髓，香精"},{"en":"essential","zh":"adj.必需的，本质的"},{"en":"essentially","zh":"adj.本质上，实质上"},{"en":"establish","zh":"v.建立，设立，确立"},{"en":"established","zh":"adj.已建立的"},{"en":"establishment","zh":"n.建立，组织"},{"en":"estate","zh":"n.房地产，财产"},{"en":"esteem","zh":"v.尊重"},{"en":"estimate","zh":"v.估算，预算"},{"en":"estimation","zh":"n.估算，估计"},{"en":"etc","zh":"(缩)等等"},{"en":"eternal","zh":"adj.永恒的，无休止的"},{"en":"europe","zh":"n.欧洲"},{"en":"european","zh":"adj.欧洲人(的)"},{"en":"evaluate","zh":"v.估价，评价"},{"en":"evaluation","zh":"n.估价，评价"},{"en":"evaporate","zh":"v.蒸发，脱水，消失"},{"en":"evaporation","zh":"n.蒸发，升华"},{"en":"eve","zh":"n.前夕，前夜"},{"en":"even","zh":"adj.平坦的，均匀的"},{"en":"evening","zh":"n.傍晚，晚上"},{"en":"evenly","zh":"adv.平坦地，均匀地"},{"en":"event","zh":"n.事件，场合，比赛"},{"en":"eventful","zh":"adj.多事的"},{"en":"eventually","zh":"adv.最终，终于"},{"en":"ever","zh":"adv.曾经，总是，究竟"},{"en":"everlasting","zh":"adj.永久的，持久的"},{"en":"every","zh":"adj.每个，所有的"},{"en":"everybody","zh":"pron.人人，每人"},{"en":"everyday","zh":"adj.每日的，日常的"},{"en":"everyone","zh":"pron.人人，每人"},{"en":"everything","zh":"pron.事事，一切"},{"en":"everywhere","zh":"adv.处处，到处"},{"en":"evidence","zh":"n.证据，迹象"},{"en":"evident","zh":"adj.明显的，明白的"},{"en":"evidently","zh":"adv.明显地，显然"},{"en":"evil","zh":"adj.坏的，邪恶的"},{"en":"evolution","zh":"v.发展，渐进，进化"},{"en":"evolve","zh":"v.发展，进化"},{"en":"ex","zh":"prep.在...交货"},{"en":"exact","zh":"adj.精确的，精密的"},{"en":"exactly","zh":"adv.确切地，正是"},{"en":"exaggerate","zh":"v.夸张，夸大"},{"en":"exaggerated","zh":"adj.言过其辞的"},{"en":"exaggeration","zh":"n.夸张"},{"en":"exalt","zh":"v.抬高，发扬"},{"en":"exalted","zh":"adj.高贵的，得意的"},{"en":"exam","zh":"n.考试"},{"en":"examination","zh":"n.检查，考试"},{"en":"examine","zh":"v.检查，细看，考试"},{"en":"example","zh":"n.例子，榜样"},{"en":"exasperate","zh":"v.激怒，恶化"},{"en":"exasperation","zh":"n.愤慨，加剧"},{"en":"exceed","zh":"v.超过，过度"},{"en":"exceedingly","zh":"adv.非常，极端地"},{"en":"excel","zh":"v.胜过，优于"},{"en":"excellence","zh":"n.优秀，卓越"},{"en":"excellent","zh":"adj.优秀的，卓越的"},{"en":"except","zh":"prep.除...外  v.除外"},{"en":"exception","zh":"n.除外，例外"},{"en":"exceptional","zh":"adj.异常的，例外的"},{"en":"excess","zh":"n.过量，过剩"},{"en":"excessive","zh":"adj.过分的，极度的"},{"en":"exchange","zh":"v.交换，兑换  n.交易"},{"en":"excite","zh":"v.刺激，使兴奋"},{"en":"excited","zh":"adj.兴奋的"},{"en":"excitement","zh":"n.兴奋，激动"},{"en":"exciting","zh":"adj.令人激动的"},{"en":"exclaim","zh":"v.呼喊，感叹"},{"en":"exclamation","zh":"n.呼喊，感叹"},{"en":"exclude","zh":"v.排除，拒绝考虑"},{"en":"exclusion","zh":"n.排除"},{"en":"exclusive","zh":"adj.独有的"},{"en":"exclusively","zh":"adv.独占地"},{"en":"exclusivity","zh":"n.独家经营权"},{"en":"excursion","zh":"n.短途游览"},{"en":"excuse","zh":"v.原谅  n.借口"},{"en":"execute","zh":"v.执行，实施，处决"},{"en":"execution","zh":"n.执行，处决"},{"en":"executive","zh":"adj.执行的  n.执行者"},{"en":"exemplify","zh":"v.举例说明"},{"en":"exempt","zh":"v.免除"},{"en":"exercise","zh":"n.锻炼，练习，运用"},{"en":"exert","zh":"v.尽(力)，发挥"},{"en":"exertion","zh":"n.尽力，竭力"},{"en":"exhaust","zh":"v.竭尽，用完"},{"en":"exhausted","zh":"adj.精疲力竭的"},{"en":"exhaustion","zh":"n.用尽，详述"},{"en":"exhaustive","zh":"adj.详尽的"},{"en":"exhibit","zh":"v.展出 显示  n.展览品"},{"en":"exhibition","zh":"n.展览会，表现"},{"en":"exile","zh":"v.放逐  n.流亡者"},{"en":"exist","zh":"v.存在，生存"},{"en":"existence","zh":"n.存在，生存"},{"en":"existing","zh":"adj.现存的，已有的"},{"en":"exit","zh":"n.出口，安全门，离开"},{"en":"exonerate","zh":"v.昭雪，解除"},{"en":"exoneration","zh":"n.免罪，免除"},{"en":"expand","zh":"v.扩张，膨胀，扩充"},{"en":"expansion","zh":"n.扩张，扩大"},{"en":"expect","zh":"v.盼望，期待，预料"},{"en":"expectation","zh":"v.期待，前程"},{"en":"expedience","zh":"n.便利，权宜之计"},{"en":"expedient","zh":"adj.方便的，临时的"},{"en":"expedite","zh":"v.加快，急送"},{"en":"expedition","zh":"n.探险，考察队"},{"en":"expel","zh":"v.驱逐，开除"},{"en":"expend","zh":"v.花费，消耗"},{"en":"expenditure","zh":"n.支出，费用"},{"en":"expense","zh":"n.支出，开支"},{"en":"expensive","zh":"adj.昂贵的，高价的"},{"en":"experience","zh":"v.经历，经验"},{"en":"experienced","zh":"adj.有经验的"},{"en":"experiment","zh":"v.实验，试验"},{"en":"experimental","zh":"adj.实验的"},{"en":"experimentation","zh":"n.实验"},{"en":"expert","zh":"n.专家，能手"},{"en":"expertise","zh":"n.专家队伍(总称)"},{"en":"expiration","zh":"n.期满"},{"en":"expire","zh":"v.到期，断气"},{"en":"expiry","zh":"n.逾期"},{"en":"explain","zh":"v.解释，说明"},{"en":"explanation","zh":"n.说明，解释"},{"en":"explanatory","zh":"adj.说明的"},{"en":"explicit","zh":"adj.清楚的，明晰的"},{"en":"explicitly","zh":"adv.清晰地"},{"en":"explode","zh":"v.爆炸，激增"},{"en":"exploit","zh":"v.开发，利用，剥削"},{"en":"exploitation","zh":"n.开发，利用"},{"en":"exploration","zh":"n.勘探，考察"},{"en":"explore","zh":"v.勘探，考察"},{"en":"explorer","zh":"n.勘探者，探险家"},{"en":"explosion","zh":"n.爆炸，爆发，激增"},{"en":"explosive","zh":"adj.爆炸性的  n.炸药"},{"en":"export","zh":"v.输出，出口"},{"en":"exportation","zh":"n.出口"},{"en":"exporter","zh":"n.出口商"},{"en":"expose","zh":"v.暴露，揭露，陈列"},{"en":"exposition","zh":"n.展览会，说明"},{"en":"exposure","zh":"n.揭露，曝光"},{"en":"express","zh":"v.表达，快递  n.快车"},{"en":"expression","zh":"n.表达，措辞，表情"},{"en":"expressive","zh":"adj.有表现力的"},{"en":"expressly","zh":"adj.明确表示的"},{"en":"expressway","zh":"n.高速公路"},{"en":"exquisite","zh":"adj.精致的"},{"en":"extend","zh":"v.延伸，扩大，给予"},{"en":"extension","zh":"n.延伸，电话分机"},{"en":"extensive","zh":"adj.广泛的，密集的"},{"en":"extensively","zh":"adv.广泛地"},{"en":"extent","zh":"n.范围，限度，一大片"},{"en":"exterior","zh":"adj.外部(的)"},{"en":"external","zh":"adj.外部的，对外的"},{"en":"extinct","zh":"adj.绝灭的，熄灭的"},{"en":"extinction","zh":"n.绝灭，熄灭"},{"en":"extinguish","zh":"v.扑灭，熄灯"},{"en":"extra","zh":"adj.额外的，外加的"},{"en":"extract","zh":"v.取出，榨出，摘录"},{"en":"extraction","zh":"n.出身，摘要"},{"en":"extraordinary","zh":"n.特别的，格外的"},{"en":"extravagance","zh":"n.奢侈，浪费"},{"en":"extravagant","zh":"adj.奢侈的，浪费的"},{"en":"extreme","zh":"adj.极度的，极端的"},{"en":"extremely","zh":"adv.极其，非常"},{"en":"eye","zh":"n.眼睛，孔眼，视力"},{"en":"eyeball","zh":"n.眼球"},{"en":"eyebrow","zh":"n.眉毛"},{"en":"eyeglass","zh":"n.眼镜"},{"en":"eyelid","zh":"n.眼睑"},{"en":"eyesight","zh":"n.视力"},{"en":"fable","zh":"n.寓言"},{"en":"fabric","zh":"n.织物，结构，组织"},{"en":"fabricate","zh":"v.制作，捏造"},{"en":"fabrication","zh":"n.制作，虚构"},{"en":"face","zh":"n.脸，正面  v.面对"},{"en":"facilitate","zh":"v.使便利，使容易"},{"en":"facility","zh":"n.方便，设施，便利"},{"en":"fact","zh":"n.事实，真相"},{"en":"faction","zh":"n.宗派，派别"},{"en":"factor","zh":"n.因素，因数，要素"},{"en":"factory","zh":"n.工厂，制造厂"},{"en":"faculty","zh":"n.本领，学系"},{"en":"fade","zh":"v.褪色，枯萎"},{"en":"fahrenheit","zh":"adj.华氏(的)"},{"en":"fail","zh":"v.失败，不及格，不能"},{"en":"failing","zh":"adj.缺点"},{"en":"failure","zh":"n.失败，疏忽，破产"},{"en":"faint","zh":"adj.软弱的，模糊的"},{"en":"fair","zh":"adj.公平的  n.交易会"},{"en":"fairly","zh":"adj.公平地，相当"},{"en":"fairy","zh":"n.妖精，仙女"},{"en":"faith","zh":"n.信任，信念"},{"en":"faithful","zh":"adj.忠诚的，可靠的"},{"en":"faithfully","zh":"adv.忠诚地"},{"en":"fake","zh":"adj.冒片的  n.冒牌货"},{"en":"fall","zh":"v.落下，跌倒  n.瀑布"},{"en":"false","zh":"adj.假的，假造的"},{"en":"fame","zh":"n.名声，声誉"},{"en":"familiarity","zh":"n.熟悉，相似"},{"en":"familiar","zh":"adj.熟悉的，亲近的"},{"en":"family","zh":"n.家庭，家属"},{"en":"famine","zh":"n.饥荒，饥饿"},{"en":"famous","zh":"adj.著名的"},{"en":"fan","zh":"n.扇子，...迷  v.扇"},{"en":"fanatic","zh":"adj.狂热的，入迷的"},{"en":"fancy","zh":"n.幻想，爱好  v.想象"},{"en":"fantastic","zh":"adj.奇异的，荒谬的"},{"en":"far","zh":"adj.遥远的  adv.远"},{"en":"fare","zh":"n.车费  v.饮食"},{"en":"farewell","zh":"int.再见  adj.告别的"},{"en":"farm","zh":"n.农场，农庄"},{"en":"farmer","zh":"n.农夫，农场主"},{"en":"farmhand","zh":"n.农工，农场工人"},{"en":"farmhouse","zh":"n.农舍"},{"en":"farming","zh":"n.农业，种植业"},{"en":"farther","zh":"adv.较远，更进一步"},{"en":"fascinate","zh":"v.吸引，入迷，蛊惑"},{"en":"fascination","zh":"n.入迷"},{"en":"fascism","zh":"n.法西斯"},{"en":"fascist","zh":"n.法西斯分子"},{"en":"fashion","zh":"n.方式，时髦，时装"},{"en":"fashionable","zh":"adj.流行的，时髦的"},{"en":"fast","zh":"adj.快的  adv.快"},{"en":"fasten","zh":"v.捆紧，钉牢"},{"en":"fat","zh":"n.脂肪  adj.肥胖的"},{"en":"fatal","zh":"adj.致命的"},{"en":"fate","zh":"n.命运，厄运，宿命"},{"en":"father","zh":"n.父亲，神父，始祖"},{"en":"father-in-","zh":"lawn.岳父，公公"},{"en":"fathom","zh":"v.领会，推测"},{"en":"fatigue","zh":"v.(使)疲劳"},{"en":"fault","zh":"n.缺点，过失，断层"},{"en":"faultless","zh":"adj.完美的"},{"en":"faulty","zh":"adj.有缺点的"},{"en":"favor","zh":"n.帮助，偏爱  v.宠爱"},{"en":"favorable","zh":"adj.赞成的，有利的"},{"en":"favorably","zh":"adv.有利地，顺利地"},{"en":"favorite","zh":"n.adj.最喜爱的人或物"},{"en":"fbi","zh":"國際刑警"},{"en":"fear","zh":"v.害怕，担忧"},{"en":"fearful","zh":"adj.可怕的，吓人的"},{"en":"fearless","zh":"adj.毫不畏惧的"},{"en":"feasibility","zh":"n.可行性"},{"en":"feasible","zh":"adj.可行的，做得到的"},{"en":"feast","zh":"v.宴会，宴请"},{"en":"feat","zh":"n.功绩"},{"en":"feather","zh":"n.羽毛"},{"en":"feature","zh":"n.相貌，特征，特写"},{"en":"february","zh":"n.二月"},{"en":"federal","zh":"adj.联邦的"},{"en":"federation","zh":"n.联邦"},{"en":"fee","zh":"n.费用，酬金"},{"en":"feeble","zh":"adj.虚弱的，无力的"},{"en":"feed","zh":"v.喂养，吃东西"},{"en":"feedback","zh":"n.反馈"},{"en":"feel","zh":"v.感到，摸，意识到"},{"en":"feeling","zh":"n.知觉，感觉，感情"},{"en":"fell","zh":"v.砍到"},{"en":"fellow","zh":"n.家伙，同事"},{"en":"fellowship","zh":"n.交情，会员资格"},{"en":"female","zh":"adj.女性的，雌的"},{"en":"feminine","zh":"adj.女性的，妇女的"},{"en":"fence","zh":"n.围栏，篱笆"},{"en":"ferocious","zh":"adj.凶猛的，野蛮的"},{"en":"ferrous","zh":"adj.铁的，含铁的"},{"en":"ferry","zh":"n.渡船  v.渡运"},{"en":"ferryboat","zh":"n.渡船"},{"en":"fertile","zh":"adj.肥沃，多产的"},{"en":"fertilizer","zh":"n.肥料，化肥"},{"en":"fervent","zh":"adj.强烈的，热烈的"},{"en":"festival","zh":"n.节日  adj.喜庆的"},{"en":"fetch","zh":"v.去取来，去请来"},{"en":"feud","zh":"n.纠纷，封地"},{"en":"feudal","zh":"adj.封建的"},{"en":"feudalism","zh":"n.封建主义"},{"en":"fever","zh":"n.发烧，狂热"},{"en":"few","zh":"adj.少的  n.少数"},{"en":"fiber","zh":"n.纤维，质地"},{"en":"fiction","zh":"n.小说，虚构"},{"en":"fictional","zh":"adj.虚构的"},{"en":"fiddle","zh":"n.提琴"},{"en":"field","zh":"n.田野，战场，场"},{"en":"fierce","zh":"adj.凶猛的，猛烈的"},{"en":"fiery","zh":"adj.火的"},{"en":"fifteen","zh":"num.十五"},{"en":"fifth","zh":"num.第五，五分之一"},{"en":"fifty","zh":"num.五十"},{"en":"fig","zh":"n.无花果"},{"en":"fight","zh":"v.打仗，战斗，作斗争"},{"en":"fighter","zh":"n.战士"},{"en":"figurative","zh":"adj.比喻的，修饰的"},{"en":"figure","zh":"n.数字，图形，人物"},{"en":"file","zh":"n.档案，纵列，锉刀"},{"en":"filing","zh":"n.档案管理"},{"en":"fill","zh":"v.装满，充满，补缺"},{"en":"filling","zh":"n.充填物，馅"},{"en":"film","zh":"n.胶片，电影，薄膜"},{"en":"filter","zh":"n.滤器  v.过滤"},{"en":"filth","zh":"n.污秽，污物"},{"en":"filthy","zh":"adj.污秽的"},{"en":"final","zh":"adj.最终的  n.决赛"},{"en":"finalize","zh":"v.落实，定下来"},{"en":"finally","zh":"adv.最终，终于"},{"en":"finance","zh":"n.金融  v.资助"},{"en":"financial","zh":"adj.金融的，财政的"},{"en":"financier","zh":"n.金融家"},{"en":"financing","zh":"n.金融业，财政学"},{"en":"find","zh":"v.寻找，找到，发现"},{"en":"finding","zh":"n.发现，发现物"},{"en":"fine","zh":"adj.好的，精细的"},{"en":"finger","zh":"n.手指"},{"en":"finish","zh":"v.结束，抛光"},{"en":"finished","zh":"adj.制成的"},{"en":"finite","zh":"adj.有限的，限定的"},{"en":"fir","zh":"n.裘皮"},{"en":"fire","zh":"n.火，火灾  v.开火"},{"en":"fireman","zh":"n.消防队员"},{"en":"fireplace","zh":"n.壁炉"},{"en":"firework","zh":"n.焰火"},{"en":"firm","zh":"adj.坚固的  n.商号"},{"en":"firmly","zh":"adv.坚定地，坚固地"},{"en":"firmness","zh":"n.坚定，坚固"},{"en":"first","zh":"adj.第一的  adv.首先"},{"en":"first-rate,","zh":"a"},{"en":"fish","zh":"n.鱼  v.捞取，探听"},{"en":"fisherman","zh":"n.渔夫"},{"en":"fishery","zh":"n.渔业"},{"en":"fission","zh":"n.裂变，分裂"},{"en":"fist","zh":"n.拳头"},{"en":"fit","zh":"adj.适合的，健康的"},{"en":"fitness","zh":"n.适合，健康"},{"en":"fitting","zh":"adj.适当的"},{"en":"five","zh":"num.五"},{"en":"fix","zh":"v.固定，确定，修理"},{"en":"fixed","zh":"adj.固定的，已确定的"},{"en":"fixture","zh":"n.固定物，固定装置"},{"en":"flag","zh":"n.旗"},{"en":"flake","zh":"n.片，片状物"},{"en":"flame","zh":"n.火焰，热情"},{"en":"flank","zh":"n.侧面，胁腹"},{"en":"flannel","zh":"n.法兰绒"},{"en":"flap","zh":"v.拍打  n.垂下物"},{"en":"flare","zh":"v.闪烁"},{"en":"flash","zh":"v.闪光，闪现"},{"en":"flask","zh":"n.瓶，烧瓶"},{"en":"flat","zh":"adj.平的，平淡的"},{"en":"flatten","zh":"v.弄平，变平"},{"en":"flatter","zh":"v.奉承，谄媚"},{"en":"flavor","zh":"n.滋味，风趣"},{"en":"flaw","zh":"n.裂缝，瑕疵，缺点"},{"en":"flee","zh":"v.逃走，消散"},{"en":"fleece","zh":"n.羊毛"},{"en":"fleet","zh":"n.船队"},{"en":"flesh","zh":"n.肌肉，骨肉，果肉"},{"en":"fleshy","zh":"adj.肉的"},{"en":"flexibility","zh":"n.柔韧，灵活性"},{"en":"flexible","zh":"adj.柔韧的，灵活的"},{"en":"flicker","zh":"v.闪烁"},{"en":"flight","zh":"n.飞，航班，逃走"},{"en":"fling","zh":"v.抛，掷"},{"en":"float","zh":"v.浮，漂  n.彩车"},{"en":"flock","zh":"n.群  v.群集"},{"en":"flood","zh":"n.洪水，大量"},{"en":"floor","zh":"n.地板，(楼)层"},{"en":"flour","zh":"n.面粉"},{"en":"flourish","zh":"v.茂盛，兴旺"},{"en":"flow","zh":"v.流动  n.流动，流量"},{"en":"flower","zh":"n.花，盛期"},{"en":"flu","zh":"n.流感"},{"en":"fluctuate","zh":"v.波动，起伏"},{"en":"fluctuation","zh":"n.波动"},{"en":"fluency","zh":"n.流利，流畅"},{"en":"fluent","zh":"adj.流利的"},{"en":"fluid","zh":"n.液体  adj.流动的"},{"en":"flush","zh":"v.(脸)发红  n.红晕"},{"en":"flute","zh":"n.长笛，笛子"},{"en":"flutter","zh":"v.飘动，振翼"},{"en":"flux","zh":"n.流动，变迁"},{"en":"fly","zh":"v.飞，驾机  n.苍蝇"},{"en":"foam","zh":"n.泡沫  v.起泡"},{"en":"fob","zh":"(缩)离岸价"},{"en":"focus","zh":"n.焦点，中心  v.集中"},{"en":"fodder","zh":"n.饲料"},{"en":"foe","zh":"n.敌人，宿敌"},{"en":"fog","zh":"n.雾，翳"},{"en":"foggy","zh":"adj.有雾的，雾蒙蒙的"},{"en":"fold","zh":"v.折叠  n.折痕"},{"en":"foliage","zh":"n.叶子(总称)"},{"en":"folk","zh":"n.人们，乡亲，亲属"},{"en":"follow","zh":"v.跟随，听懂，遵循"},{"en":"follower","zh":"n.追随者，信徒"},{"en":"following","zh":"adj.下列的，其次的"},{"en":"follow-up,","zh":"的)"},{"en":"fond","zh":"adj.喜爱..的，慈爱的"},{"en":"food","zh":"n.食物，食粮"},{"en":"foodstuff","zh":"n.食品"},{"en":"fool","zh":"n.蠢人，傻瓜  v.愚弄"},{"en":"foolish","zh":"n.愚蠢的，笨的"},{"en":"foot","zh":"n.脚，英尺，最下部"},{"en":"football","zh":"n.足球"},{"en":"footing","zh":"n.立足点，立场"},{"en":"footstep","zh":"n.足迹，脚步声"},{"en":"for","zh":"prep.给，作...用的"},{"en":"forbid","zh":"v.禁止，不许"},{"en":"forbidden","zh":"adj.禁止的"},{"en":"force","zh":"n.力，力量  v.强迫"},{"en":"fore","zh":"adj.前面的adv.在前面"},{"en":"forecast","zh":"v.预测，预报"},{"en":"forefather","zh":"n.祖先，先辈"},{"en":"forefinger","zh":"n.食指"},{"en":"foregoing","zh":"adj.先行的，上述的"},{"en":"forehead","zh":"n.前额"},{"en":"foreign","zh":"adj.外国的，对外的"},{"en":"foreigner","zh":"n.外国人，异乡人"},{"en":"foreman","zh":"n.领班"},{"en":"foremost","zh":"adj.最初的，第一流的"},{"en":"foresee","zh":"v.预见，预知"},{"en":"forest","zh":"n.森林"},{"en":"forestry","zh":"n.林业"},{"en":"foretell","zh":"v.预告，预言"},{"en":"forever","zh":"adv.永远，总是"},{"en":"forge","zh":"v.打铁，锻造，伪造"},{"en":"forgery","zh":"n.锻炉，锻造厂"},{"en":"forget","zh":"v.忘记，疏忽，没想到"},{"en":"forgive","zh":"v.饶恕，原谅，豁免"},{"en":"fork","zh":"n.餐叉，岔口"},{"en":"form","zh":"n.形状，类型，表格"},{"en":"formal","zh":"adj.形式上的，正式的"},{"en":"formality","zh":"n.礼节，正式"},{"en":"format","zh":"n.格式，样式"},{"en":"formation","zh":"n.形成，构成"},{"en":"former","zh":"adj.以前的，前者"},{"en":"formerly","zh":"adv.从前，以前"},{"en":"formidable","zh":"adj.可怕的，难对付的"},{"en":"formula","zh":"n.公式"},{"en":"formulate","zh":"v.系统阐述"},{"en":"formulation","zh":"n.确切表述"},{"en":"forsake","zh":"v.遗弃，抛弃"},{"en":"fort","zh":"n.堡垒，要塞"},{"en":"forth","zh":"adv.向前，向外"},{"en":"forthcoming","zh":"adj.即将到来的"},{"en":"fortitude","zh":"n.坚毅"},{"en":"fortnight","zh":"n.两星期"},{"en":"fortress","zh":"n.堡垒，城堡"},{"en":"fortuity","zh":"n.偶然事件"},{"en":"fortunate","zh":"adj.幸运的，侥幸的"},{"en":"fortunately","zh":"adv.幸运地，幸而"},{"en":"fortune","zh":"n.运气，财富"},{"en":"forty","zh":"num.四十"},{"en":"forum","zh":"n.讨论会，座谈会"},{"en":"forward","zh":"adj.向前的  adv.向前"},{"en":"fossil","zh":"n.化石，守旧者"},{"en":"foster","zh":"v.养育，抚养"},{"en":"foul","zh":"adj.肮脏的，邪恶的"},{"en":"found","zh":"v.创办，使有根据"},{"en":"foundation","zh":"n.建立，基金，基础"},{"en":"founder","zh":"n.创办人，奠基人"},{"en":"fountain","zh":"n.泉，源泉，喷泉"},{"en":"four","zh":"num.四"},{"en":"fourteen","zh":"num.十四"},{"en":"fourth","zh":"num.第四，四分之一"},{"en":"fowl","zh":"n.家禽，鸡，禽肉"},{"en":"fox","zh":"n.狐狸，狡猾的人"},{"en":"fraction","zh":"n.片断，分数"},{"en":"fractional","zh":"adj.零碎的，不足的"},{"en":"fracture","zh":"n.断裂  v.折断"},{"en":"fragile","zh":"adj.易碎的，脆的"},{"en":"fragment","zh":"n.碎片，片断"},{"en":"fragrance","zh":"n.芬芳，香气"},{"en":"fragrant","zh":"adj.香的，芬芳的"},{"en":"frail","zh":"adj.脆弱的，虚弱的"},{"en":"frame","zh":"n.框架，骨骼  v.构造"},{"en":"framework","zh":"n.构架，机构"},{"en":"france","zh":"n.法国"},{"en":"franchise","zh":"n.特许权"},{"en":"frank","zh":"adj.坦率的，真诚的"},{"en":"frankly","zh":"adv.坦率地"},{"en":"free","zh":"adj.自由的，空闲的"},{"en":"freedom","zh":"n.自由，免除"},{"en":"freely","zh":"adv.自由地，随意地"},{"en":"freeze","zh":"v.结冰，楞住，冻结"},{"en":"freezer","zh":"n.冷冻箱"},{"en":"freight","zh":"n.货运，货物，运费"},{"en":"french","zh":"adj.法国的  n.法语"},{"en":"frenchman","zh":"n.法国人"},{"en":"frequency","zh":"n.频繁，频率"},{"en":"frequent","zh":"adj.频繁的，经常的"},{"en":"frequently","zh":"adv.时常，往往"},{"en":"fresh","zh":"adj.新鲜的，崭新的"},{"en":"freshen","zh":"v.使新鲜，使振作"},{"en":"freshman","zh":"n.新人，新生"},{"en":"fret","zh":"v.使烦恼  n.烦燥"},{"en":"friction","zh":"n.摩擦，摩擦力"},{"en":"friday","zh":"n.星期五"},{"en":"friend","zh":"n.朋友"},{"en":"friendly","zh":"adj.友好的，和气的"},{"en":"friendship","zh":"n.友谊，友好"},{"en":"fright","zh":"n.恐怖，惊吓"},{"en":"frighten","zh":"v.惊吓，吓唬"},{"en":"frightening","zh":"adj.令人害怕的"},{"en":"frightful","zh":"adj.可怕的"},{"en":"fringe","zh":"n.边缘，花边，穗子"},{"en":"frock","zh":"n.女上衣，童上装"},{"en":"frog","zh":"n.蛙"},{"en":"from","zh":"prep.自，从...来"},{"en":"front","zh":"n.正面，前线  v.面对"},{"en":"frontier","zh":"n.边界，国境，新领域"},{"en":"frost","zh":"n.霜，霜冻"},{"en":"frosty","zh":"adj.霜的"},{"en":"frown","zh":"v.皱眉头，厌恶"},{"en":"frugal","zh":"adj.节俭的"},{"en":"fruit","zh":"n.果子，水果，成果"},{"en":"fruitful","zh":"adj.果实累累的"},{"en":"frustrate","zh":"v.阻挠，使灰心"},{"en":"frustration","zh":"n.挫折，灰心"},{"en":"fry","zh":"v.油煎，炸"},{"en":"fuck","zh":"渾蛋，辱駡"},{"en":"fuel","zh":"n.燃料"},{"en":"fulfil","zh":"v.完成，满足要求"},{"en":"fulfillment","zh":"n.完成，成就"},{"en":"full","zh":"adj.满的，完全的"},{"en":"fully","zh":"adv.完全，彻底"},{"en":"fumble","zh":"v.摸索"},{"en":"fun","zh":"n.娱乐，玩笑，乐趣"},{"en":"function","zh":"n.作用，集会，函数"},{"en":"functional","zh":"adj.功能的"},{"en":"fund","zh":"n.基金，资金，蕴藏"},{"en":"fundamental","zh":"adj.基本的，根本的"},{"en":"funeral","zh":"n.葬礼"},{"en":"funny","zh":"adj.有趣的，好笑的"},{"en":"fur","zh":"n.毛皮，裘衣"},{"en":"furious","zh":"adj.狂怒的，狂暴的"},{"en":"furnace","zh":"n.熔炉"},{"en":"furnish","zh":"v.供应，装备，摆家具"},{"en":"furniture","zh":"n.家具(总称)"},{"en":"furrow","zh":"n.犁沟"},{"en":"further","zh":"adv.更远，进一步"},{"en":"furthermore","zh":"adv.而且"},{"en":"fury","zh":"n.狂暴，狂怒"},{"en":"fuse","zh":"n.保险丝，导火线"},{"en":"fuss","zh":"n.忙乱，大惊小怪的"},{"en":"fussy","zh":"adj.爱大惊小怪的"},{"en":"future","zh":"n.将来，前途"},{"en":"futures","zh":"n.期货"},{"en":"gain","zh":"v.获得，赢得  n.收益"},{"en":"gale","zh":"n.大风，定期交付"},{"en":"gallery","zh":"n.美术馆"},{"en":"gallon","zh":"n.加仑"},{"en":"gallop","zh":"v.奔驰，飞跑"},{"en":"gamble","zh":"v.赌博，投机"},{"en":"gambler","zh":"n.赌徒"},{"en":"game","zh":"n.游戏，比赛，猎物"},{"en":"gang","zh":"n.一群，一帮"},{"en":"gangster","zh":"n.匪徒，歹徒"},{"en":"gaol","zh":"n.监狱"},{"en":"gap","zh":"n.空隙，隔阂，山口"},{"en":"garage","zh":"n.车库，汽车修理站"},{"en":"garbage","zh":"n.垃圾"},{"en":"garden","zh":"n.花园，菜园"},{"en":"gardener","zh":"n.园丁"},{"en":"gardening","zh":"n.园艺"},{"en":"garlic","zh":"n.大蒜"},{"en":"garment","zh":"n.衣服，服装"},{"en":"garrison","zh":"n.要塞，警备队"},{"en":"gas","zh":"n.气体，煤气，汽油"},{"en":"gasoline","zh":"n.汽油"},{"en":"gasp","zh":"v.喘息，喘气"},{"en":"gate","zh":"n.大门，门票收入"},{"en":"gather","zh":"v.聚集，收集，采集"},{"en":"gathering","zh":"n.集会，聚集"},{"en":"gauge","zh":"n.规格，计量表"},{"en":"gay","zh":"adj.快活的，快乐的"},{"en":"gaze","zh":"v.凝视，注视"},{"en":"gear","zh":"n.齿轮，用品"},{"en":"gem","zh":"n.宝石"},{"en":"general","zh":"adj.一般的，总的"},{"en":"generalization","zh":"n.概括"},{"en":"generalize","zh":"v.总结，归纳"},{"en":"generally","zh":"adv.通常，大概"},{"en":"generate","zh":"v.产生，发生，生殖"},{"en":"generation","zh":"n.世代，一代人"},{"en":"generator","zh":"n.发电机"},{"en":"generosity","zh":"n.慷慨，大方"},{"en":"generous","zh":"adj.慷慨的，丰盛的"},{"en":"genius","zh":"n.天份，才华，天才"},{"en":"gentle","zh":"adj.温柔的，温和的"},{"en":"gentleman","zh":"n.绅士，先生，君子"},{"en":"gently","zh":"adv.轻轻地，温柔地"},{"en":"genuine","zh":"adj.真正的，道地的"},{"en":"geography","zh":"n.地理学，地形"},{"en":"geology","zh":"n.地质学"},{"en":"geometry","zh":"n.几何学"},{"en":"germ","zh":"n.萌芽，起源，细菌"},{"en":"german","zh":"adj.德国的  n.德语"},{"en":"germany","zh":"n.德国"},{"en":"gesture","zh":"n.姿势，手势，姿态"},{"en":"get","zh":"v.获得，记住，到达"},{"en":"get-together,","zh":""},{"en":"ghost","zh":"n.鬼魂，幽灵"},{"en":"giant","zh":"n.巨人  adj.巨大的"},{"en":"gift","zh":"n.礼品，天赋"},{"en":"gigantic","zh":"adj.巨大的"},{"en":"giggle","zh":"v.咯咯地笑"},{"en":"ginger","zh":"n.姜"},{"en":"girl","zh":"n.少女，姑娘"},{"en":"giver","zh":"v.给予，付出  n.让步"},{"en":"glad","zh":"adj.快乐的，高兴的"},{"en":"glance","zh":"v.看一眼  n.一瞥"},{"en":"glare","zh":"v.闪耀，瞪眼"},{"en":"glass","zh":"n.玻璃，镜子"},{"en":"glassware","zh":"n.玻璃制品"},{"en":"gleam","zh":"n.微光，闪光"},{"en":"glide","zh":"v.滑行，溜"},{"en":"glimpse","zh":"v.瞥见"},{"en":"glisten","zh":"v.闪光"},{"en":"glitter","zh":"v.闪闪发光"},{"en":"global","zh":"adj.全世界的，总的"},{"en":"globalization","zh":"n.全球化"},{"en":"globalize","zh":"v.使...全球化"},{"en":"globe","zh":"n.地球，球体，地球仪"},{"en":"gloom","zh":"n.黑暗，忧郁"},{"en":"gloomy","zh":"adj.阴沉的，忧郁的"},{"en":"glorious","zh":"adj.光荣的，辉煌的"},{"en":"glorify","zh":"v.颂扬，赞美"},{"en":"glory","zh":"n.光荣，壮丽，荣誉"},{"en":"glossary","zh":"n.词汇表"},{"en":"glove","zh":"n.手套"},{"en":"glow","zh":"v.发光，发红"},{"en":"glue","zh":"n.胶水  n.粘贴"},{"en":"glut","zh":"n.供过于求v.狼吞虎咽"},{"en":"gnaw","zh":"v.啃，咬"},{"en":"gnp","zh":"n.(缩)国民总收入"},{"en":"go","zh":"v.去，进行，打算"},{"en":"goal","zh":"n.目标，目的，球门"},{"en":"goat","zh":"n.山羊"},{"en":"god","zh":"n.神，上帝"},{"en":"goddess","zh":"n.女神"},{"en":"gold","zh":"n.黄金，金币，金色"},{"en":"golden","zh":"adj.黄色的，金黄色的"},{"en":"golf","zh":"n.高尔夫球"},{"en":"good","zh":"adj.好的，善良的"},{"en":"goodness","zh":"n.优良，天哪"},{"en":"goodself","zh":"n.你方"},{"en":"goods","zh":"n.货物，商品"},{"en":"goodwill","zh":"n.商誉"},{"en":"goose","zh":"n.鹅"},{"en":"gorge","zh":"n.咽喉，峡谷，山口"},{"en":"gorgeous","zh":"adj.绚丽的，了不起的"},{"en":"gorilla","zh":"n.大猩猩"},{"en":"gossip","zh":"n.闲谈，聊天"},{"en":"govern","zh":"v.统制，支配，决定"},{"en":"government","zh":"n.编制，政体，政府"},{"en":"governess","zh":"n.女家庭教师"},{"en":"governor","zh":"n.州长，总督"},{"en":"gown","zh":"n.长袍，法衣"},{"en":"grab","zh":"v.抓住，攫取"},{"en":"grace","zh":"n.优美，文雅，恩惠"},{"en":"graceful","zh":"adj.优美的，文雅的"},{"en":"gracious","zh":"adj.亲切的，客气的"},{"en":"grade","zh":"n.等级，年级"},{"en":"gradual","zh":"adj.逐渐的，逐步的"},{"en":"gradually","zh":"adv.逐渐地，逐步地"},{"en":"graduate","zh":"v.毕业生  v.毕业"},{"en":"graduation","zh":"n.毕业"},{"en":"grain","zh":"n.谷物，颗粒，一点点"},{"en":"gram","zh":"n.克"},{"en":"grammar","zh":"n.语法"},{"en":"grammatical","zh":"adj.语法的"},{"en":"gramophone","zh":"n.留声机"},{"en":"grand","zh":"adj.雄伟的，重大的"},{"en":"grandchild","zh":"n.(外)孙儿、女"},{"en":"granddaughter","zh":"n.孙女，外孙女"},{"en":"grandfather","zh":"n.祖父，外祖父"},{"en":"grandmother","zh":"n.祖母，外祖母"},{"en":"grandparent","zh":"n.(外)祖父(母)"},{"en":"grandson","zh":"n.孙子，外孙"},{"en":"granite","zh":"n.花岗石"},{"en":"grant","zh":"v.答应，授予，承认"},{"en":"grape","zh":"n.葡萄"},{"en":"graph","zh":"n.图象，图解"},{"en":"grasp","zh":"v.抓住，领悟"},{"en":"grass","zh":"n.草，禾本植物"},{"en":"grasshopper","zh":"n.蚱蜢"},{"en":"grateful","zh":"adj.感激的，致谢的"},{"en":"gratify","zh":"v.使满足，使高兴"},{"en":"gratifying","zh":"adj.可喜的"},{"en":"gratis","zh":"adj.免费的"},{"en":"gratitude","zh":"n.感激，感谢"},{"en":"grave","zh":"adj.严肃的，庄重的"},{"en":"gravel","zh":"n.砂砾，石子"},{"en":"gravity","zh":"n.引力，严肃"},{"en":"graze","zh":"v.吃草，擦碰"},{"en":"grease","zh":"v.润滑油脂"},{"en":"great","zh":"adj.大的，伟大的"},{"en":"greatly","zh":"adj.大大地，非常地"},{"en":"greatness","zh":"n.伟大，大"},{"en":"greece","zh":"n.希腊"},{"en":"greed","zh":"n.贪婪，贪心"},{"en":"greedy","zh":"adj.贪婪的"},{"en":"greek","zh":"adj.希腊人(的)"},{"en":"green","zh":"adj.绿的，没有经验的"},{"en":"greengrocer","zh":"n.蔬菜商"},{"en":"greenhouse","zh":"n.温室"},{"en":"greet","zh":"v.打招呼"},{"en":"greeting","zh":"n.问候，致意"},{"en":"grey","zh":"adj.灰色的，阴郁的"},{"en":"grief","zh":"n.悲哀，悲伤"},{"en":"grieve","zh":"v.使悲伤，伤心"},{"en":"grim","zh":"adj.冷酷的，不祥的"},{"en":"grin","zh":"v.露齿而笑"},{"en":"grind","zh":"v.碾碎，磨快，折磨"},{"en":"grip","zh":"v.紧握，吸引"},{"en":"groan","zh":"v呻吟"},{"en":"grocer","zh":"n.杂货铺"},{"en":"grocery","zh":"n.杂货店"},{"en":"groove","zh":"n.槽，沟，常规"},{"en":"grope","zh":"v.摸索，探索"},{"en":"gross","zh":"adj.总的，粗糙的"},{"en":"ground","zh":"n.地面，场，根据"},{"en":"groundless","zh":"adj.无根据的"},{"en":"group","zh":"n.群，组，团体"},{"en":"grove","zh":"n.林子，树丛"},{"en":"grow","zh":"v.增长，成长，种植"},{"en":"growl","zh":"v.咆哮，嗥叫"},{"en":"grown","zh":"adj.已长成的"},{"en":"grown-up,","zh":"nj.成人的"},{"en":"growth","zh":"n.增长，发展，生长"},{"en":"grudge","zh":"v.嫉妒，吝啬"},{"en":"grumble","zh":"v.抱怨，咕哝，发牢骚"},{"en":"grunt","zh":"v.(作)呼噜声"},{"en":"guarantee","zh":"v.保证，担保"},{"en":"guard","zh":"v.警卫，提防  v.哨兵"},{"en":"guardian","zh":"n.保护人"},{"en":"guess","zh":"v.猜想，推测"},{"en":"guest","zh":"n.客人，宾客，旅客"},{"en":"guesthouse","zh":"n.宾馆"},{"en":"guidance","zh":"n.向导，指导"},{"en":"guide","zh":"v.向导，指引  n.导游"},{"en":"guilt","zh":"n.犯罪，过失"},{"en":"guilty","zh":"adj.有罪的，内疚的"},{"en":"guitar","zh":"n.吉它，六弦琴"},{"en":"gulf","zh":"n.海湾，鸿沟"},{"en":"gulp","zh":"v.吞下"},{"en":"gum","zh":"n.树胶，口香糖，牙龈"},{"en":"gun","zh":"n.枪，炮"},{"en":"gunpowder","zh":"n.火药"},{"en":"gust","zh":"n.一阵(大风)"},{"en":"gutter","zh":"n.街沟"},{"en":"guy","zh":"n.家伙"},{"en":"gymnasium","zh":"n.体育馆，健身房"},{"en":"gymnastics","zh":"n.体操"},{"en":"gymnast","zh":"n.体操运动员"},{"en":"habit","zh":"n.习惯"},{"en":"habitual","zh":"adj.习惯的，惯常的"},{"en":"haggard","zh":"adj.消瘦的，憔悴的"},{"en":"haggle","zh":"n.争论，讨价还价"},{"en":"hail","zh":"v.欢呼  n.冰雹"},{"en":"hair","zh":"n.头发，毛发"},{"en":"haircut","zh":"n.理发"},{"en":"hairdress","zh":"n.美发"},{"en":"hairpin","zh":"n.发卡"},{"en":"hairy","zh":"adj.毛发的，多毛的"},{"en":"half","zh":"n.一半  adv.一半"},{"en":"halfway","zh":"adv.半途"},{"en":"hall","zh":"n.大厅，会堂"},{"en":"hallmark","zh":"n.标志"},{"en":"halt","zh":"v.停住"},{"en":"halve","zh":"v.对分，减半"},{"en":"ham","zh":"n.火腿"},{"en":"hamburger","zh":"n.汉堡包"},{"en":"hammer","zh":"n.锤子  v.锤击"},{"en":"hamper","zh":"v.妨碍"},{"en":"hand","zh":"n.手，人手，指针"},{"en":"handbag","zh":"n.手袋，手提包"},{"en":"handbook","zh":"n.手册"},{"en":"handful","zh":"adj.一把，少量"},{"en":"handicap","zh":"n.障碍  v.妨碍"},{"en":"handicapped","zh":"adj.有残疾的"},{"en":"handkerchief","zh":"n.手帕，手绢"},{"en":"handle","zh":"v.处理，对待  n.把"},{"en":"handling","zh":"n.处理，管理"},{"en":"handsome","zh":"adj.漂亮的，得体"},{"en":"handout","zh":"n.分发物(印刷品等)"},{"en":"handwriting","zh":"n.手写，书法，笔迹"},{"en":"handy","zh":"adj.方便的，近便的"},{"en":"hang","zh":"v.挂，垂，绞死"},{"en":"hanger","zh":"n.衣架"},{"en":"haphazard","zh":"adj.偶然的"},{"en":"happen","zh":"v.发生，碰巧，出事"},{"en":"happening","zh":"n.事件"},{"en":"happily","zh":"adv.幸运地"},{"en":"happiness","zh":"n.幸福"},{"en":"happy","zh":"adj.高兴的，幸运的"},{"en":"harbor","zh":"n.港口，停泊处"},{"en":"hard","zh":"adj.硬的  adv.努力"},{"en":"harden","zh":"v.硬化，变硬"},{"en":"hardly","zh":"adv.刚刚，几乎不"},{"en":"hardness","zh":"n.坚硬，硬度"},{"en":"hardship","zh":"n.困苦，艰难"},{"en":"hardware","zh":"n.硬件"},{"en":"hard-working,","zh":""},{"en":"hardy","zh":"adj.耐劳的，耐寒的"},{"en":"hare","zh":"n.野兔"},{"en":"harm","zh":"v.损害，伤害"},{"en":"harmful","zh":"adj.有害的"},{"en":"harmless","zh":"adj.无害的，无恶意的"},{"en":"harmonious","zh":"adj.和睦的，和谐的"},{"en":"harmony","zh":"n.融洽，和谐"},{"en":"harness","zh":"v.支配，治理"},{"en":"harsh","zh":"adj.刺耳的，严厉的"},{"en":"harvest","zh":"v.收获"},{"en":"haste","zh":"n.急忙，急速"},{"en":"hasten","zh":"v.赶紧，加快"},{"en":"hasty","zh":"adj.急促的，草率的"},{"en":"hat","zh":"n.帽子"},{"en":"hatch","zh":"v.孵化，策划"},{"en":"hate","zh":"v.恨，憎恶，不愿意"},{"en":"hateful","zh":"adj.可恨的，可憎的"},{"en":"hatred","zh":"n.憎恶，敌意"},{"en":"haughty","zh":"adj.傲慢的"},{"en":"haul","zh":"v.拉，拖  n.获得量"},{"en":"haunt","zh":"v.萦绕，作崇"},{"en":"have","zh":"v.有，不得不，拿"},{"en":"hawk","zh":"n.鹰隼"},{"en":"hay","zh":"n.干草"},{"en":"hazard","zh":"n.危险"},{"en":"he","zh":"pron.他"},{"en":"head","zh":"n.头，领导  v.率领"},{"en":"headache","zh":"n.头疼，头疼的事"},{"en":"heading","zh":"n.标题"},{"en":"headline","zh":"n.通栏标题"},{"en":"headlong","zh":"ad.头向前地，卤莽地"},{"en":"headmaster","zh":"n.(中、小学)校长"},{"en":"headquarters","zh":"n.司令部，总部"},{"en":"heal","zh":"v.治愈，医治"},{"en":"health","zh":"n.健康(状况)"},{"en":"healthy","zh":"adj.健康的"},{"en":"heap","zh":"n.一堆，许多  v.堆积"},{"en":"hear","zh":"v.听见，听取，听说"},{"en":"hearing","zh":"n.听力，审讯"},{"en":"heart","zh":"n.心，心肠，中心"},{"en":"heartfelt","zh":"adj.衷心的"},{"en":"hearth","zh":"n.壁炉，炉边"},{"en":"heartily","zh":"adv.精神饱满的"},{"en":"hearty","zh":"adj.衷心的，热诚的"},{"en":"heat","zh":"n.热，热烈  v.加热"},{"en":"heated","zh":"n.激烈的，热烈的"},{"en":"heating","zh":"n.取暖，供热"},{"en":"heave","zh":"v.起伏，举起，叹气"},{"en":"heaven","zh":"n.天空，天堂"},{"en":"heavily","zh":"adv.重，沉重的"},{"en":"heavy","zh":"adj.星的，繁重的"},{"en":"hedge","zh":"n.树篱，套期保值"},{"en":"hedgehog","zh":"n.刺猬"},{"en":"heed","zh":"v.注意，留心"},{"en":"heel","zh":"n.后跟"},{"en":"height","zh":"n.高度，顶点"},{"en":"heighten","zh":"v.加高，增加"},{"en":"heir","zh":"n.继承人"},{"en":"heiress","zh":"n.女继承人"},{"en":"helicopter","zh":"n.直升飞机"},{"en":"hell","zh":"n.地狱，苦境"},{"en":"hello","zh":"int.喂，你好"},{"en":"helmet","zh":"n.头盔"},{"en":"help","zh":"v.帮助，有助于"},{"en":"helpful","zh":"adj.有用的"},{"en":"helpless","zh":"adj.无用的，无效的"},{"en":"hemisphere","zh":"n.半球，领域"},{"en":"hen","zh":"n.母鸡"},{"en":"hence","zh":"adv.因此，由此"},{"en":"henceforth","zh":"adv.今后"},{"en":"her","zh":"pron.她的，她(宾格)"},{"en":"herald","zh":"n.先兆，先驱"},{"en":"herb","zh":"n.药草"},{"en":"herbal","zh":"adj.草药的"},{"en":"herd","zh":"v.放牧  n.(牲畜)群"},{"en":"here","zh":"adv.这里，在这里"},{"en":"hereafter","zh":"adv.此后"},{"en":"hereby","zh":"adv.以此"},{"en":"herein","zh":"adv.在此"},{"en":"hereinafter","zh":"adv.以下"},{"en":"hereof","zh":"adv.在本文件中"},{"en":"hereto","zh":"adv.对此"},{"en":"herewith","zh":"adv.与此一道"},{"en":"hero","zh":"n.英雄，男主角"},{"en":"heroic","zh":"adj.英雄的，英勇的"},{"en":"heroine","zh":"n.女英雄，女主角"},{"en":"herself","zh":"pron.她自己"},{"en":"hesitant","zh":"adj.犹豫的"},{"en":"hesitate","zh":"v.犹豫，不想"},{"en":"hesitation","zh":"n.犹豫，踌躇"},{"en":"hey","zh":"int.嗨"},{"en":"hi","zh":"int.嗨，你好"},{"en":"hide","zh":"v.躲藏，隐瞒，掩盖"},{"en":"hideous","zh":"adj.骇人听闻的"},{"en":"high","zh":"adj.高的，高度的"},{"en":"highland","zh":"n.高地"},{"en":"highly","zh":"adv.十分，赞许地"},{"en":"highway","zh":"n.公路"},{"en":"hijack","zh":"v.拦路抢劫"},{"en":"hijacker","zh":"n.栏路抢劫者"},{"en":"hike","zh":"v.徒步郊游"},{"en":"hill","zh":"n.小山，丘陵"},{"en":"hillside","zh":"n.山坡，山腰"},{"en":"him","zh":"pron.他(宾格)"},{"en":"himself","zh":"pron.他自己"},{"en":"hind","zh":"adj.后面的，后部的"},{"en":"hinder","zh":"v.妨碍，阻止"},{"en":"hinterland","zh":"n.内地"},{"en":"hindrance","zh":"n.障碍(物)"},{"en":"hinge","zh":"n.合页，绞链"},{"en":"hint","zh":"n.暗示，迹象  v.暗示"},{"en":"hip","zh":"n.臀部"},{"en":"hire","zh":"v.租，雇佣"},{"en":"his","zh":"pron.他的"},{"en":"hiss","zh":"v.(发)嘶嘶声"},{"en":"historian","zh":"n.历史学家"},{"en":"historic","zh":"adj.历史性的"},{"en":"historical","zh":"adj.历史的"},{"en":"history","zh":"n.历史"},{"en":"hit","zh":"v.打，碰，打击"},{"en":"hitchhike","zh":"v.搭车旅行"},{"en":"hitherto","zh":"adv.迄今，到那时"},{"en":"hoarse","zh":"adj.嘶哑的，沙哑的"},{"en":"hobby","zh":"n.嗜好，业余爱好"},{"en":"hoe","zh":"n.锄头  v.锄"},{"en":"hoist","zh":"v.升起，扯起"},{"en":"hold","zh":"v.握住，容纳  n.控制"},{"en":"holder","zh":"n.持有人，支架"},{"en":"holding","zh":"n.支持，控股"},{"en":"hold-up,","zh":""},{"en":"hole","zh":"n.洞，孔穴"},{"en":"holiday","zh":"n.节日，假日"},{"en":"hollow","zh":"adj.空心的，凹陷的"},{"en":"holy","zh":"adj.神圣的，圣洁的"},{"en":"home","zh":"n.家，故乡  adv.回家"},{"en":"homeless","zh":"adj.无家可归的"},{"en":"homely","zh":"adj.家常的，简便的"},{"en":"homesick","zh":"n.思乡的"},{"en":"homework","zh":"n.家庭作业"},{"en":"homogenous","zh":"adj.同质的，同类的"},{"en":"honest","zh":"adj.诚实的，正直的"},{"en":"honesty","zh":"n.诚实，正直"},{"en":"honey","zh":"n.蜂蜜"},{"en":"honeymoon","zh":"n.蜜月"},{"en":"honor","zh":"n.荣誉，名誉  v.尊敬"},{"en":"honorable","zh":"adj.可尊敬的，体面的"},{"en":"hook","zh":"n.钩  v.钩住"},{"en":"hop","zh":"v.跳跃"},{"en":"hope","zh":"v.希望，愿望"},{"en":"hopeful","zh":"adj.有希望的"},{"en":"hopefully","zh":"adv.可以指望"},{"en":"hopeless","zh":"adj.无望的，绝望的"},{"en":"horizon","zh":"n.地平线，视野"},{"en":"horizontal","zh":"adj.水平的，横的"},{"en":"horn","zh":"n.角，触须，号角"},{"en":"horrible","zh":"adj.可怕的，糟透的"},{"en":"horrify","zh":"v.使恐惧"},{"en":"horror","zh":"n.恐惧，恐怖"},{"en":"horse","zh":"n.马"},{"en":"horsepower","zh":"n.马力"},{"en":"hose","zh":"n.软水管，长统袜"},{"en":"hospital","zh":"n.医院"},{"en":"hospitable","zh":"adj.好客的"},{"en":"hospitality","zh":"n.好客，款待"},{"en":"host","zh":"n.一大群，男主人"},{"en":"hostage","zh":"n.人质"},{"en":"hostel","zh":"n.廉价旅馆"},{"en":"hostess","zh":"n.女主人，女主持人"},{"en":"hostile","zh":"adj.怀敌意的"},{"en":"hot","zh":"adj.热的，辣的"},{"en":"hotdog","zh":"n.热狗(面包)"},{"en":"hotel","zh":"n.旅馆"},{"en":"hotelling","zh":"n.旅馆业"},{"en":"hour","zh":"n.小时，点钟"},{"en":"hound","zh":"n.猎狗  v.追逐"},{"en":"house","zh":"n.房子，剧场，家"},{"en":"household","zh":"n.户  adj.家庭的"},{"en":"housekeeper","zh":"n.看门人，保姆"},{"en":"housewife","zh":"n.家庭主妇"},{"en":"housework","zh":"n.家务"},{"en":"hover","zh":"v.翱翔，盘旋，徘徊"},{"en":"how","zh":"adv.如何，多么，怎样"},{"en":"however","zh":"adv.可是，然而"},{"en":"howl","zh":"v.嚎叫，嚎哭"},{"en":"hug","zh":"v.紧抱"},{"en":"huge","zh":"adj.庞大的，巨大的"},{"en":"hull","zh":"n.豆荚，外壳，船壳"},{"en":"hum","zh":"v.哼，嗡嗡叫"},{"en":"human","zh":"adj.人的，人类的"},{"en":"humane","zh":"adj.人慈的"},{"en":"humanism","zh":"n.人道主义"},{"en":"humanitarian","zh":"n.慈善家"},{"en":"humanity","zh":"n.人类，人性"},{"en":"humble","zh":"adj.谦卑的，卑贱的"},{"en":"humid","zh":"adj.湿的，潮湿的"},{"en":"humidity","zh":"n.湿度，湿气"},{"en":"humiliate","zh":"v.使受辱"},{"en":"humiliation","zh":"n.羞辱，耻辱"},{"en":"humor","zh":"n.幽默(感)，心情"},{"en":"humorous","zh":"adj.幽默的，诙谐的"},{"en":"hundred","zh":"num.一百"},{"en":"hundredth","zh":"num.第一面，百分之一"},{"en":"hunger","zh":"n.饥饿，渴望"},{"en":"hungry","zh":"adj.饥饿的，渴望的"},{"en":"hunt","zh":"v.打猎，搜索，寻找"},{"en":"hunter","zh":"n.猎人，搜索者"},{"en":"hurl","zh":"v.猛掷，猛投"},{"en":"hurrah","zh":"int.好哇  n.喝彩声"},{"en":"hurry","zh":"v.赶紧，急忙，急运"},{"en":"hurt","zh":"v.使受伤，使痛，伤害"},{"en":"husband","zh":"n.丈夫"},{"en":"hush","zh":"int.嘘  n.沉默"},{"en":"hustle","zh":"v.奔忙"},{"en":"hut","zh":"n.小屋"},{"en":"hydraulic","zh":"adj.水力的，液压的"},{"en":"hydroelectric","zh":"adj.水电的"},{"en":"hydrogen","zh":"n.氢，氢气"},{"en":"hygiene","zh":"n.卫生"},{"en":"hymn","zh":"n.赞美诗，赞歌"},{"en":"hypocrisy","zh":"n.伪善"},{"en":"hypothesis","zh":"n.假设，前提"},{"en":"hypothetical","zh":"adj.假设的"},{"en":"hysteria","zh":"n.歇斯底里，癔病"},{"en":"hysteric","zh":"adj.亢奋的"},{"en":"i","zh":".我"},{"en":"ice","zh":"n.冰，冰块"},{"en":"iceland","zh":"n.冰岛"},{"en":"icy","zh":"adj.冰冷的，结了冰的"},{"en":"idea","zh":"n.思想，主意，打算"},{"en":"ideal","zh":"adj.理想的  n.理想"},{"en":"idealism","zh":"n.理想主义"},{"en":"idealize","zh":"v.使理想化"},{"en":"identical","zh":"adj.同一的，相同的"},{"en":"identification","zh":"n.识别，身分"},{"en":"identify","zh":"v.认出，认为...一致"},{"en":"identity","zh":"n.认同，同一性"},{"en":"idiom","zh":"n.习语，成语"},{"en":"idiomatic","zh":"adj.习语的，惯用的"},{"en":"idiot","zh":"n.傻子，白痴"},{"en":"idle","zh":"adj.空闲的，懒的"},{"en":"idleness","zh":"n.闲散，无所事事"},{"en":"idol","zh":"n.偶像，被崇拜的人"},{"en":"i.e.","zh":"(缩)即，也就是"},{"en":"if","zh":"conj.如果，虽然 是否"},{"en":"ignite","zh":"v.点燃"},{"en":"ignorance","zh":"n.无知，不知道"},{"en":"ignorant","zh":"adj.不知道的，无知的"},{"en":"ignore","zh":"v.忽视，不理睬"},{"en":"ill","zh":"adj.患病的，坏的"},{"en":"illegal","zh":"adj.不合法的，非法的"},{"en":"illegible","zh":"adj.字迹不清的"},{"en":"illiteracy","zh":"n.文盲"},{"en":"illiterate","zh":"adj.文盲的  n.文盲"},{"en":"illness","zh":"n.疾病，生病"},{"en":"illuminate","zh":"v.照亮，启发"},{"en":"illusion","zh":"n.幻想，幻觉"},{"en":"illusive","zh":"adj.幻觉的"},{"en":"illustrate","zh":"v.图解，用图说明"},{"en":"illustration","zh":"n.阐明，实例"},{"en":"image","zh":"n.图像，影像，形象"},{"en":"imaginary","zh":"adj.想象的，虚构的"},{"en":"imagination","zh":"n.想象力，想象"},{"en":"imagine","zh":"v.想象，猜想"},{"en":"imitate","zh":"v.模仿，仿造，模拟"},{"en":"imitation","zh":"n.模仿，仿制品"},{"en":"immaterial","zh":"adj.无形的，不重要的"},{"en":"immature","zh":"adj.不成熟的"},{"en":"immediate","zh":"adj.立即的，最近的"},{"en":"immediately","zh":"adv.立即，马上"},{"en":"immense","zh":"adj.巨大的，极大的"},{"en":"immerse","zh":"v.浸泡，埋头于"},{"en":"immigrant","zh":"n.移民"},{"en":"immigrate","zh":"v.移入"},{"en":"immigration","zh":"n.移居入境"},{"en":"imminent","zh":"adj.迫切的，危急的"},{"en":"immoral","zh":"adj.不道德的"},{"en":"immortal","zh":"adj.不朽的"},{"en":"impact","zh":"n.冲击，影响"},{"en":"impart","zh":"v.给予，告诉"},{"en":"impartial","zh":"adj.公证的"},{"en":"impatience","zh":"n.不耐烦"},{"en":"impatient","zh":"adj.急切的，不耐烦的"},{"en":"imperative","zh":"adj.绝对必要的"},{"en":"imperfect","zh":"adj.不完善的"},{"en":"imperialism","zh":"n.帝国主义"},{"en":"imperialist","zh":"n.帝国主义者"},{"en":"implement","zh":"v.实行  n.工具"},{"en":"implementation","zh":"n.实行，执行"},{"en":"implication","zh":"n.暗示，含义"},{"en":"implied","zh":"adj.暗含的，暗示的"},{"en":"implore","zh":"v.恳求，哀求"},{"en":"imply","zh":"v.暗示，意味"},{"en":"import","zh":"v.进口 引进  n.进口货"},{"en":"importance","zh":"n.重要性，意义"},{"en":"important","zh":"adj.重要的，重大的"},{"en":"importation","zh":"n.进口"},{"en":"importer","zh":"n.进口商"},{"en":"impose","zh":"v.征(税)，强加"},{"en":"imposition","zh":"n.强迫接受"},{"en":"impossibility","zh":"n.不可能性"},{"en":"impossible","zh":"adj.不可能的，不妥的"},{"en":"impost","zh":"n.进口税，关税"},{"en":"impractical","zh":"v.不可行的"},{"en":"impress","zh":"v.印，铭刻，产生印象"},{"en":"impression","zh":"n.印象，影响，印迹"},{"en":"impressive","zh":"adj.给人深刻印象的"},{"en":"imprison","zh":"v.关押，监禁"},{"en":"imprisonment","zh":"n.监禁，徒刑"},{"en":"improper","zh":"adj.不适当的"},{"en":"improve","zh":"v.改善，提高"},{"en":"improvement","zh":"n.改善，好转"},{"en":"impulse","zh":"n.冲击，冲动，脉搏"},{"en":"impurity","zh":"n.不纯，杂质"},{"en":"in","zh":"prep.在...内，穿戴"},{"en":"inability","zh":"n.无能"},{"en":"inaccessible","zh":"adj.很难得到的"},{"en":"inaccurate","zh":"adj.不准确的，不确切"},{"en":"inadequate","zh":"adj.不充足的，不足以"},{"en":"inasmuch","zh":"adv.因为，由于"},{"en":"inaugural","zh":"adj.开幕的"},{"en":"inaugurate","zh":"v.举行开幕、就职典礼"},{"en":"inauguration","zh":"n.开幕、就职典礼"},{"en":"incapable","zh":"adj.不能的，不会的"},{"en":"incense","zh":"v.使发怒  n.香"},{"en":"incentive","zh":"n.刺激的，鼓励的"},{"en":"inch","zh":"n.英寸"},{"en":"incident","zh":"n.事件，事变，插曲"},{"en":"incidentally","zh":"adv.偶然地，另外"},{"en":"inclination","zh":"n.倾斜，倾向"},{"en":"incline","zh":"v.低头，喜欢，倾斜"},{"en":"inclined","zh":"adj.倾向于...的"},{"en":"include","zh":"v.包括"},{"en":"inclusion","zh":"n.包括在内"},{"en":"inclusive","zh":"adj.包括在内的"},{"en":"income","zh":"n.收入，所得"},{"en":"incompatibility","zh":"n.不兼容"},{"en":"incompatible","zh":"adj.不相容的"},{"en":"incomplete","zh":"adj.不完全的，没完成"},{"en":"inconsistency","zh":"n.不一致"},{"en":"inconsistent","zh":"adj.不一致的"},{"en":"inconvenience","zh":"n.不便，不利"},{"en":"inconvenient","zh":"adj.不方便的"},{"en":"incorporate","zh":"v.合并，体现"},{"en":"incorporated","zh":"adj.有限的"},{"en":"incorrect","zh":"adj.不正确的"},{"en":"incoterms","zh":"n.(缩)国际贸易术语"},{"en":"increase","zh":"v.增加，增长"},{"en":"increasing","zh":"adj.不断增长的"},{"en":"increasingly","zh":"adv.日益，越来越"},{"en":"incredible","zh":"adj.不可信的，惊人的"},{"en":"incredulous","zh":"adj.表示怀疑的"},{"en":"increment","zh":"n.增值"},{"en":"incur","zh":"v.招致，承受"},{"en":"indebted","zh":"adj.感激的，感恩的"},{"en":"indebtedness","zh":"n.感激"},{"en":"indeed","zh":"adv.的确，实际上"},{"en":"indefinite","zh":"adj.不明确的，不确定"},{"en":"indefinitely","zh":"adv.不明确地"},{"en":"indemnify","zh":"v.赔偿，保护"},{"en":"indent","zh":"v.(书写)缩行"},{"en":"independence","zh":"n.独立，自主"},{"en":"independent","zh":"adj.独立的"},{"en":"independently","zh":"adv.独立地"},{"en":"index","zh":"n.索引，标志，指数"},{"en":"india","zh":"n.印度"},{"en":"indian","zh":"adj.印度人(的)"},{"en":"indicate","zh":"v.指明，表示"},{"en":"indication","zh":"n.表示，迹象"},{"en":"indicative","zh":"adj.表示...的"},{"en":"indifference","zh":"n.冷淡，不关心"},{"en":"indifferent","zh":"adj.冷淡的，不在乎的"},{"en":"indigestion","zh":"n.消化不良"},{"en":"indignant","zh":"adj.气愤的，愤慨的"},{"en":"indignation","zh":"n.愤慨，气愤"},{"en":"indirect","zh":"adj.间接的，侧面的"},{"en":"indirectly","zh":"adj.间接地"},{"en":"indispensable","zh":"adj.必不可少的"},{"en":"individual","zh":"adj.个人的，各自的"},{"en":"indoor","zh":"adj.室内的"},{"en":"indoors","zh":"adv.在户内，在屋里"},{"en":"induce","zh":"v.诱使，引起，归纳"},{"en":"inducement","zh":"n.诱导，动机"},{"en":"induction","zh":"n.感应，归纳"},{"en":"indulge","zh":"v.放纵，放任，纵容"},{"en":"industrial","zh":"adj.工业的"},{"en":"industrialize","zh":"v.使工业化"},{"en":"industrialization","zh":"n.工业化"},{"en":"industrialized","zh":"adj.工业化的"},{"en":"industrious","zh":"adj.勤劳的，勤奋的"},{"en":"industry","zh":"n.工业，产业，勤奋"},{"en":"ineffective","zh":"adj.效率低的"},{"en":"ineffectiveness","zh":"n.低效率"},{"en":"inefficiency","zh":"n.无效力"},{"en":"inefficient","zh":"adj.无效的"},{"en":"inertia","zh":"n.惯性，惰性，不活动"},{"en":"inevitable","zh":"adj.必然的，不可避免"},{"en":"inevitably","zh":"adv.必然地"},{"en":"inexpensive","zh":"adj.便宜的"},{"en":"infant","zh":"n.婴儿，幼儿"},{"en":"infantry","zh":"n.步兵"},{"en":"infect","zh":"v.感染，传染"},{"en":"infection","zh":"n.感染"},{"en":"infectious","zh":"adj.传染的"},{"en":"infer","zh":"v.推断，推论"},{"en":"inference","zh":"n.推断，推论的结果"},{"en":"inferior","zh":"adj.低级的  n.下级"},{"en":"inferiority","zh":"n.劣势"},{"en":"infinite","zh":"adj.无限大的，无穷的"},{"en":"infinitely","zh":"adv.无限地，无穷地"},{"en":"infinitive","zh":"adj.不定式的"},{"en":"infinity","zh":"n.  无限，无数，极多"},{"en":"inflammable","zh":"adj.不易燃的"},{"en":"inflation","zh":"n.充气，通货膨胀"},{"en":"inflict","zh":"v.打击"},{"en":"influence","zh":"n.影响，势力(范围)"},{"en":"influential","zh":"adj.有影响的"},{"en":"influenza","zh":"n.流行性感冒"},{"en":"inform","zh":"v.通知，告诉，告密"},{"en":"informal","zh":"adj.非正式的"},{"en":"information","zh":"n.通知，情报，资料"},{"en":"informative","zh":"adj.提供资料的"},{"en":"infrequent","zh":"adj.不经常的"},{"en":"infringe","zh":"v.侵权"},{"en":"infringement","zh":"n.侵权"},{"en":"ingenious","zh":"adj.灵巧的，精巧的"},{"en":"ingenious","zh":"adj.独创的，机智的"},{"en":"ingenuity","zh":"n.灵巧，机灵，巧妙"},{"en":"inhabit","zh":"v.居住，栖身"},{"en":"inhabitant","zh":"n.居民"},{"en":"inherent","zh":"adj.生来俱有的"},{"en":"inherit","zh":"v.继承，遗传"},{"en":"initial","zh":"adj.最初的"},{"en":"initially","zh":"adv.最初"},{"en":"initiate","zh":"v.发动，开始，使入门"},{"en":"initiative","zh":"n.积极性，首创精神"},{"en":"inject","zh":"v.注射"},{"en":"injection","zh":"n.注射"},{"en":"injure","zh":"v.伤害，损害"},{"en":"injury","zh":"n.伤害，损害"},{"en":"injustice","zh":"n.不公正"},{"en":"ink","zh":"n.墨水，油墨"},{"en":"inland","zh":"n.内地的，内陆的"},{"en":"inlet","zh":"n.水湾，入口"},{"en":"inn","zh":"n.客栈"},{"en":"inner","zh":"adj.里面的，内心的"},{"en":"innocence","zh":"n.清白，天真"},{"en":"innocent","zh":"adj.无罪的"},{"en":"innovate","zh":"v.革新，变革，创始"},{"en":"innovation","zh":"n.革新，创新"},{"en":"innumerable","zh":"adj.无数的"},{"en":"inorganic","zh":"adj.无机的"},{"en":"input","zh":"n.输入，投入"},{"en":"inquire","zh":"v.询问"},{"en":"inquiry","zh":"n.询问，查询，调查"},{"en":"insane","zh":"adj.疯狂的"},{"en":"insect","zh":"n.昆虫"},{"en":"insert","zh":"v.插入，嵌入"},{"en":"insertion","zh":"n.插入"},{"en":"inside","zh":"n.里面  adj.里面的"},{"en":"insider","zh":"n.知情者"},{"en":"insight","zh":"n.洞察力"},{"en":"insignificant","zh":"adj.无足轻重的"},{"en":"insist","zh":"v.坚持，坚决要求"},{"en":"insistent","zh":"adj.紧迫的，坚持的"},{"en":"insofar","zh":"adv.在...范围内"},{"en":"insolvent","zh":"adj.无偿付能力的"},{"en":"inspect","zh":"v.检查，视察，审查"},{"en":"inspection","zh":"n.检查，视察"},{"en":"inspector","zh":"n.检查员，视察者"},{"en":"inspiration","zh":"n.灵感"},{"en":"inspire","zh":"v.鼓舞，激励，受启发"},{"en":"instable","zh":"adj.不稳定的"},{"en":"install","zh":"v.安装，安置"},{"en":"installation","zh":"n.安装，装置"},{"en":"installment","zh":"n.分期付款"},{"en":"instance","zh":"n.例子"},{"en":"instant","zh":"adj.立即的，速溶的"},{"en":"instantly","zh":"adv.立即，立刻"},{"en":"instead","zh":"adv.代替，而是"},{"en":"instinct","zh":"n.本能，直觉，天性"},{"en":"instinctive","zh":"adj.本能的，天性的"},{"en":"institute","zh":"n.(专科)学院  v.建立"},{"en":"institution","zh":"n.机构，制度"},{"en":"instruct","zh":"v.指导，指示，告知"},{"en":"instruction","zh":"n.指导，指示"},{"en":"instructive","zh":"adj.指示的，教育的"},{"en":"instructor","zh":"n.教员，教练"},{"en":"instrument","zh":"n.仪器，乐器，手段"},{"en":"instrumental","zh":"adj.仪器的，工具的"},{"en":"insufficient","zh":"adj.不充足的"},{"en":"insulate","zh":"v.绝缘，隔离，使孤立"},{"en":"insulation","zh":"n.隔离，绝缘"},{"en":"insult","zh":"adj.侮辱"},{"en":"insurance","zh":"n.保险(业)，保障"},{"en":"insure","zh":"v.保险，确保"},{"en":"intangible","zh":"adj.无形的"},{"en":"integral","zh":"adj.组成的，整体的"},{"en":"integrate","zh":"v.整合，结合"},{"en":"integration","zh":"n.结合，整体"},{"en":"integrity","zh":"n.完整性，诚实"},{"en":"intellect","zh":"n.理智，才智"},{"en":"intellectual","zh":"n.知识分子"},{"en":"intelligence","zh":"n.智慧，情报"},{"en":"intelligent","zh":"adj.聪明的，明智的"},{"en":"intend","zh":"v.打算"},{"en":"intense","zh":"adj.强烈的，极度的"},{"en":"intensity","zh":"n.强烈，强度"},{"en":"intensive","zh":"adj.强化的，密集的"},{"en":"intent","zh":"n.意图  adj.专心的"},{"en":"intention","zh":"n.意图，目的"},{"en":"intentional","zh":"adj.有意的，故意的"},{"en":"interact","zh":"v.相互作用，相互影响"},{"en":"interaction","zh":"n.相互作用"},{"en":"intercourse","zh":"n.交流，往来"},{"en":"interest","zh":"n.兴趣，利息，利益"},{"en":"interested","zh":"adj.感兴趣的"},{"en":"interesting","zh":"adj.有趣的"},{"en":"interface","zh":"n.交界，接口"},{"en":"interfere","zh":"v.妨碍，干涉"},{"en":"interference","zh":"n.干涉，干扰"},{"en":"interior","zh":"n.内部，内地，内政"},{"en":"intermediate","zh":"adj.中间的"},{"en":"internal","zh":"adj.内部的，国内的"},{"en":"international","zh":"adj.国际的"},{"en":"internationalization","zh":"n.国际化"},{"en":"internationalize","zh":"v.使国际化"},{"en":"interpret","zh":"v.解释，当...译员"},{"en":"interpretation","zh":"n.解释，口译"},{"en":"interpreter","zh":"n.译员"},{"en":"interrupt","zh":"v.打断，中断"},{"en":"interruption","zh":"n.中断，打扰"},{"en":"interval","zh":"n.间隔，中间休息"},{"en":"intervene","zh":"v.介入，调解"},{"en":"interview","zh":"v.会见，面谈"},{"en":"intimate","zh":"adj.亲密的，熟悉的"},{"en":"intimation","zh":"n.亲密，熟悉"},{"en":"into","zh":"prep.到...里面，..成"},{"en":"intonation","zh":"n.语调，声调"},{"en":"introduce","zh":"v.介绍，引进，采用"},{"en":"introduction","zh":"n.介绍，引言"},{"en":"introductory","zh":"adj.介绍的，入门的"},{"en":"intrude","zh":"v.侵入，强加于"},{"en":"inundate","zh":"adj.使充满"},{"en":"invade","zh":"v.入侵，侵犯"},{"en":"invader","zh":"n.入侵者"},{"en":"invalid","zh":"adj.伤残的，无效的"},{"en":"invalidate","zh":"v.使无效"},{"en":"invaluable","zh":"adj.非常宝贵的"},{"en":"invariably","zh":"adv.不变地，总是"},{"en":"invasion","zh":"n.侵略，侵袭"},{"en":"invent","zh":"v.发明，创造，编造"},{"en":"invention","zh":"n.发明，创造"},{"en":"inventor","zh":"n.发明者"},{"en":"inverse","zh":"adj.相反的，倒转的"},{"en":"inversely","zh":"adv.相反地"},{"en":"invest","zh":"v.投资，花费"},{"en":"investigate","zh":"v.调查，研究"},{"en":"investigation","zh":"n.调查"},{"en":"investment","zh":"n.投资(额)"},{"en":"invisible","zh":"adj.看不见的"},{"en":"invitation","zh":"n.邀请(信)"},{"en":"invite","zh":"v.邀请，招致，征求"},{"en":"invoice","zh":"n.发票，装货清单"},{"en":"involve","zh":"v.使卷入，忙于"},{"en":"involved","zh":"adj.涉及的，复杂的"},{"en":"involvement","zh":"n.卷入，涉足"},{"en":"inward","zh":"adj.里面的，内心的"},{"en":"inwards","zh":"adv.向内的"},{"en":"ireland","zh":"n.爱尔兰"},{"en":"iIrish","zh":"adj.爱尔兰人(的)"},{"en":"iron","zh":"n.铁，熨斗  v.熨平"},{"en":"ironical","zh":"adj.反讽的，讽刺的"},{"en":"irony","zh":"n.反讽，讽刺"},{"en":"irregular","zh":"adj.不规则的"},{"en":"irregularity","zh":"n.不规则"},{"en":"irresistible","zh":"adj.不可抗拒的"},{"en":"irrespective","zh":"adj.不论，不考虑"},{"en":"irrevocable","zh":"adj.不可撤消的"},{"en":"irrigate","zh":"v.灌溉"},{"en":"irrigation","zh":"n.灌溉"},{"en":"irritate","zh":"v.使生气，刺激"},{"en":"irritation","zh":"n.刺激，恼怒"},{"en":"islam","zh":"n.伊斯兰教，回教"},{"en":"island","zh":"n.岛屿"},{"en":"isolate","zh":"v.隔离，孤立"},{"en":"isolation","zh":"n.隔离，孤立状态"},{"en":"issue","zh":"v.发行 发布  n.发行物"},{"en":"it","zh":"pron.它"},{"en":"italian","zh":"adj.意大利人(的)"},{"en":"italy","zh":"n.意大利"},{"en":"itch","zh":"v.痒，热望"},{"en":"item","zh":"n.条款，项目"},{"en":"itemize","zh":"v.分列"},{"en":"its","zh":"pron.它的"},{"en":"itself","zh":"pron.它自己"},{"en":"ivory","zh":"n.象牙，象牙色"},{"en":"jack","zh":"n.千斤顶，船首旗"},{"en":"jacket","zh":"n.短外套，茄克衫"},{"en":"jail","zh":"n.监狱  v.监禁"},{"en":"jam","zh":"n.果酱，阻塞"},{"en":"january","zh":"n.一月"},{"en":"japan","zh":"n.日本"},{"en":"japanese","zh":"adj.日本人(的)"},{"en":"jar","zh":"n.罐子，坛子，刺耳声"},{"en":"jaw","zh":"n.下颚，下巴"},{"en":"jazz","zh":"n.爵士乐"},{"en":"jealousy","zh":"n.妒忌"},{"en":"jealous","zh":"adj.妒忌的"},{"en":"jeans","zh":"n.牛仔裤"},{"en":"jelly","zh":"n.果冻"},{"en":"jeep","zh":"n.吉普车"},{"en":"jeopardize","zh":"v.危及"},{"en":"jerk","zh":"n.颠簸，猛推"},{"en":"jesus","zh":"n.耶稣"},{"en":"jet","zh":"v.喷射  v.喷气发动机"},{"en":"jettison","zh":"n.投弃货物  v.抛弃"},{"en":"jew","zh":"n.犹太人"},{"en":"jewel","zh":"n.珠宝，宝石"},{"en":"jewelry","zh":"n.珠宝(总称)"},{"en":"jewish","zh":"adj.犹太人的"},{"en":"jingle","zh":"v.(发)叮当声"},{"en":"job","zh":"n.工作，活儿，差使"},{"en":"jobless","zh":"adj.失业的"},{"en":"jog","zh":"v.慢跑"},{"en":"join","zh":"v.连接，加入，参加"},{"en":"joint","zh":"n.接着，关节"},{"en":"joke","zh":"n.笑话  v.开玩笑"},{"en":"jot","zh":"v.匆匆记下"},{"en":"journal","zh":"n.刊物，日志"},{"en":"journalism","zh":"n.新闻体"},{"en":"journalist","zh":"n.记者"},{"en":"journey","zh":"n.旅行，旅程"},{"en":"joy","zh":"n.高兴，乐事"},{"en":"joyful","zh":"adj.令人高兴的"},{"en":"judge","zh":"n.法官，裁判  v.审判"},{"en":"judgement","zh":"n.判决，意见，判断"},{"en":"jug","zh":"n.大壶，罐"},{"en":"juice","zh":"n.汁，液"},{"en":"juicy","zh":"adj.多汁的"},{"en":"july","zh":"n.七月"},{"en":"jumble","zh":"n.搞乱，混乱"},{"en":"jump","zh":"v.跳跃，跳动"},{"en":"junction","zh":"n.连接，结合处，接头"},{"en":"june","zh":"n.六月"},{"en":"jungle","zh":"n.密林，热带丛林"},{"en":"junior","zh":"adj.年少的，低级的"},{"en":"jupiter","zh":"n.木屋"},{"en":"jury","zh":"n.陪审团，评奖团"},{"en":"just","zh":"adv.只，刚才"},{"en":"justice","zh":"n.公正，正直"},{"en":"justifiable","zh":"adj.有理由的"},{"en":"justification","zh":"n.辩护，正当理由"},{"en":"justify","zh":"v.认为...有理"},{"en":"juvenile","zh":"adj.青少年的"},{"en":"kangaroo","zh":"n.带鼠"},{"en":"keen","zh":"adj.锋利的，敏捷的"},{"en":"keep","zh":"v.保持，保留，防止"},{"en":"keeper","zh":"n.保管人，管理员"},{"en":"keeping","zh":"n.一致，协调"},{"en":"kernel","zh":"n.核(仁)，核心"},{"en":"kerosene","zh":"n.煤油"},{"en":"kettle","zh":"n.水壶"},{"en":"key","zh":"n.钥匙，关键，答案"},{"en":"keyboard","zh":"n.键盘"},{"en":"keyhole","zh":"n.钥匙孔"},{"en":"kick","zh":"v.踢"},{"en":"kid","zh":"n.小孩  v.哄骗"},{"en":"kidnap","zh":"v.绑架，诱拐"},{"en":"kidnaper","zh":"n.绑架者"},{"en":"kidney","zh":"n.肾，腰子"},{"en":"kill","zh":"v.杀死，杀害"},{"en":"killer","zh":"n.杀人者，杀手"},{"en":"kilo","zh":"n.(缩)公斤，公里"},{"en":"kilogram","zh":"n.公斤"},{"en":"kilometer","zh":"n.公里"},{"en":"kilowatt","zh":"n.千瓦"},{"en":"kind","zh":"n.种类  adj.仁慈的"},{"en":"kindergarten","zh":"n.幼儿园"},{"en":"kindle","zh":"v.点燃，激发"},{"en":"kindly","zh":"adv.仁慈地，好心地"},{"en":"kindness","zh":"n.仁慈，好意"},{"en":"king","zh":"n.国王"},{"en":"kingdom","zh":"n.王国"},{"en":"kiss","zh":"v.接吻，亲嘴"},{"en":"kit","zh":"n.全套工具、装备"},{"en":"kitchen","zh":"n.厨房"},{"en":"kite","zh":"n.风筝"},{"en":"knee","zh":"n.膝"},{"en":"kneel","zh":"v.跪下"},{"en":"knife","zh":"n.小刀"},{"en":"knight","zh":"n.骑士，爵士"},{"en":"knit","zh":"v.编织，皱(眉)"},{"en":"knob","zh":"n.球形把手"},{"en":"knock","zh":"v.敲，击倒  n.敲门声"},{"en":"knot","zh":"n.结，树节  v.打结"},{"en":"know","zh":"n.知道，认识，懂"},{"en":"know-how,","zh":"n."},{"en":"knowledge","zh":"n.知识，学识"},{"en":"knowledgeable","zh":"adj.博学的"},{"en":"lab","zh":"n.(缩)实验室"},{"en":"label","zh":"n.标签  v.标明"},{"en":"laboratory","zh":"n.实验室"},{"en":"labor","zh":"n.劳动，劳动力"},{"en":"laborer","zh":"n.劳工，劳动者"},{"en":"labor-intensive,","zh":"adj"},{"en":"lace","zh":"n.花边，鞋带"},{"en":"lack","zh":"v.缺少"},{"en":"lad","zh":"n.少年，小伙子"},{"en":"ladder","zh":"n.梯子，阶梯"},{"en":"lady","zh":"n.女士，贵妇人，夫人"},{"en":"lag","zh":"v.落后，滞后"},{"en":"lake","zh":"n.湖，湖泊"},{"en":"lamb","zh":"n.羔羊，小羊肉"},{"en":"lame","zh":"adj.跛的，站不住脚的"},{"en":"lamp","zh":"n.灯"},{"en":"land","zh":"n.陆地，土地  v.着陆"},{"en":"landed","zh":"adj.卸货的"},{"en":"landing","zh":"n.楼梯平台，着陆"},{"en":"landlady","zh":"n.女房东"},{"en":"landlord","zh":"n.房东，地主"},{"en":"landscape","zh":"n.风景(画)，地形"},{"en":"lane","zh":"n.小巷，跑道，行车道"},{"en":"langkap","zh":"冷甲(馬來西亞 霹靂洲内一地方名)"},{"en":"language","zh":"n.语言"},{"en":"lantern","zh":"n.灯笼"},{"en":"lap","zh":"n.膝盖"},{"en":"lapse","zh":"v.(时间)流失"},{"en":"large","zh":"adj.大的，巨大的"},{"en":"largely","zh":"adv.大部分，基本上"},{"en":"lark","zh":"n.云雀，百灵鸟"},{"en":"laser","zh":"n.激光"},{"en":"last","zh":"adj.最后的  adv.上次"},{"en":"lasting","zh":"adj.持久的，持续的"},{"en":"late","zh":"adj.迟到的，晚的"},{"en":"lately","zh":"adv.近来，最后"},{"en":"latent","zh":"adj.潜伏的，潜在的"},{"en":"later","zh":"adv.更晚，以后，过后"},{"en":"lateral","zh":"adj.横向的，侧向的"},{"en":"lathe","zh":"n.车床"},{"en":"latin","zh":"adj.拉丁语(的)"},{"en":"latitude","zh":"n.纬度，活动余地"},{"en":"latter","zh":"adj.后面的，后者的"},{"en":"lattice","zh":"n.结构，点阵"},{"en":"laugh","zh":"v.笑，嘲笑"},{"en":"laughter","zh":"n.笑，笑声"},{"en":"launch","zh":"v.发射，发动，开始"},{"en":"laundry","zh":"n.洗衣店，送洗的衣物"},{"en":"lavatory","zh":"n.盥洗室，厕所"},{"en":"law","zh":"n.法律，定律"},{"en":"lawful","zh":"adj.合法的，法律的"},{"en":"lawn","zh":"n.草地，草坪"},{"en":"lawyer","zh":"n.律师，法学家"},{"en":"lay","zh":"v.放，安排，打基础"},{"en":"layday","zh":"n.装卸日期"},{"en":"layer","zh":"n.层，层次"},{"en":"layout","zh":"n.设计，规划，图案"},{"en":"laziness","zh":"n.懒惰"},{"en":"lazy","zh":"adj.懒惰的"},{"en":"l/c","zh":"n.(缩)信用证"},{"en":"lead","zh":"v.引导，领先，率领"},{"en":"leader","zh":"n.领导，领袖"},{"en":"leadership","zh":"n.领导"},{"en":"leading","zh":"adj.领先的，一流的"},{"en":"leaf","zh":"n.叶子，页"},{"en":"leaflet","zh":"n.传单，单页宣传品"},{"en":"league","zh":"n.同盟，协会"},{"en":"leak","zh":"v.漏，泄漏"},{"en":"leakage","zh":"n.渗漏"},{"en":"lean","zh":"v.俯身，倚  adj.瘦的"},{"en":"leap","zh":"v.跳跃  adj.闰年的"},{"en":"learn","zh":"v.学习，获悉"},{"en":"learned","zh":"adj.有学问的"},{"en":"learner","zh":"n.学习者，学生"},{"en":"learning","zh":"n.学问，学习"},{"en":"lease","zh":"v.租凭，出租  n.租约"},{"en":"least","zh":"adj.最少的"},{"en":"leather","zh":"n.皮革  adj.皮革制的"},{"en":"leave","zh":"v.出发，离开  n.休假"},{"en":"lecture","zh":"v.演讲，讲课"},{"en":"lecturer","zh":"n.演讲者，讲师"},{"en":"leeway","zh":"adj.活动余地"},{"en":"left","zh":"adj.左的  adv.向左"},{"en":"left-handed,","zh":"adj."},{"en":"leftover","zh":"n.剩余物"},{"en":"leg","zh":"n.腿，裤脚"},{"en":"legal","zh":"adj.合法的，法律的"},{"en":"legend","zh":"n.传说，传奇"},{"en":"legendary","zh":"adj.传说的，传奇的"},{"en":"legislation","zh":"n.立法，法规"},{"en":"legitimate","zh":"adj.合法的，合理的"},{"en":"legitimation","zh":"n.合法"},{"en":"leisure","zh":"n.闲暇，闲空"},{"en":"lemon","zh":"n.柠檬"},{"en":"lemonade","zh":"n.柠檬汽水"},{"en":"lend","zh":"v.出借，贷款"},{"en":"lending","zh":"n.贷款，借款"},{"en":"length","zh":"n.长度，期限"},{"en":"lengthen","zh":"v.延长，变长"},{"en":"leninism","zh":"n.列宁主义"},{"en":"lens","zh":"n.透镜，镜片，晶体"},{"en":"leopard","zh":"n.豹"},{"en":"less","zh":"adj.更少的  adv.较小"},{"en":"lessen","zh":"v.减少，变小，变弱"},{"en":"lesson","zh":"n.功课，课程，教训"},{"en":"lest","zh":"prep.唯恐，以免"},{"en":"let","zh":"v.让，使"},{"en":"letter","zh":"n.字母，信，函件"},{"en":"level","zh":"n.水平，级  v.弄平"},{"en":"lever","zh":"n.杠杆"},{"en":"levy","zh":"v.征税  n.关税"},{"en":"liability","zh":"n.责任，义务，债务"},{"en":"liable","zh":"adj.有责任的"},{"en":"liar","zh":"n.说谎者"},{"en":"liberal","zh":"adj.思想开放的"},{"en":"liberate","zh":"v.解放，释放，使自由"},{"en":"liberation","zh":"n.解放"},{"en":"liberty","zh":"n.自由"},{"en":"librarian","zh":"n.图书管理员"},{"en":"library","zh":"n.图书馆，藏书"},{"en":"license","zh":"n.许可(证)，执照"},{"en":"lick","zh":"v.舔"},{"en":"lid","zh":"n.盖，脸"},{"en":"lie","zh":"v.躺，位于  v.说谎"},{"en":"lieutenant","zh":"n.中尉，副职"},{"en":"life","zh":"n.生活，生命，一生"},{"en":"lifetime","zh":"n.一生"},{"en":"lift","zh":"v.举起，吊  n.电梯"},{"en":"light","zh":"n.光，灯  adj.明亮的"},{"en":"lighten","zh":"v.发亮，使...愉快"},{"en":"lighter","zh":"n.打火机"},{"en":"lighthouse","zh":"n.灯塔"},{"en":"lightly","zh":"adv.轻轻地，轻易地"},{"en":"lightning","zh":"n.闪电"},{"en":"like","zh":"v.喜欢  prep.像"},{"en":"likelihood","zh":"n.可能，相似性"},{"en":"likely","zh":"adj.可信的adv.很可能"},{"en":"likeness","zh":"n.相像，类似"},{"en":"likewise","zh":"adv.同样，照样"},{"en":"liking","zh":"n.兴趣，嗜好"},{"en":"lily","zh":"n.百合，睡莲"},{"en":"limb","zh":"n.肢，树枝"},{"en":"lime","zh":"n.石灰"},{"en":"limestone","zh":"n.石灰岩"},{"en":"limit","zh":"n.界限，限度  v.限制"},{"en":"limitation","zh":"n.限制，局限"},{"en":"limited","zh":"adj.有限的，限定的"},{"en":"limousine","zh":"n.豪华轿车"},{"en":"limp","zh":"adj.柔软的  v.跛行"},{"en":"line","zh":"n.行，线条，界线"},{"en":"linear","zh":"adj.线性的，线状的"},{"en":"linen","zh":"n.亚麻(织物)"},{"en":"liner","zh":"n.班轮，班机"},{"en":"linger","zh":"v.徘徊，逗留，拖延"},{"en":"linguist","zh":"n.语言学者"},{"en":"linguistics","zh":"n.语言学"},{"en":"lining","zh":"n.夹里，衬里"},{"en":"link","zh":"v.联系，连结  n.纽带"},{"en":"lion","zh":"n.狮子"},{"en":"lioness","zh":"n.母狮子"},{"en":"lip","zh":"n.嘴唇"},{"en":"lipstick","zh":"n.口红，唇膏"},{"en":"liquid","zh":"n.液体  adj.液体的"},{"en":"liquor","zh":"n.烈性酒"},{"en":"list","zh":"n.表，名单  v.列表"},{"en":"listen","zh":"v.听，听从"},{"en":"listener","zh":"n.听者"},{"en":"literacy","zh":"n.识字"},{"en":"literal","zh":"adj.字面的，不夸张的"},{"en":"literally","zh":"adv.简直，字面上"},{"en":"literary","zh":"adj.文学的"},{"en":"literate","zh":"n.有文化的"},{"en":"literature","zh":"n.文学，文献"},{"en":"litre","zh":"n.公升"},{"en":"litter","zh":"v.乱丢废物  n.废物"},{"en":"little","zh":"adj.小的，一点，少的"},{"en":"live","zh":"v.居住 生存  adj.活的"},{"en":"livelihood","zh":"n.生活"},{"en":"lively","zh":"adj.活跃的，热闹的"},{"en":"liver","zh":"n.肝"},{"en":"livestock","zh":"n.牲畜"},{"en":"living","zh":"adj.活着的  n.生计"},{"en":"living-room,","zh":"n"},{"en":"load","zh":"n.负载，负担  v.装载"},{"en":"loaf","zh":"n.面包  v.游荡"},{"en":"loan","zh":"n.贷款  v.出借"},{"en":"lobby","zh":"n.前厅  v.游说"},{"en":"lobster","zh":"n.龙虾"},{"en":"local","zh":"adj.地方的，当地的"},{"en":"locality","zh":"n.地点，现场"},{"en":"locate","zh":"v.找出，确定地点"},{"en":"location","zh":"n.地点，位置"},{"en":"lock","zh":"v.锁上  n.锁，绺"},{"en":"lock-up,","zh":"n"},{"en":"locomotive","zh":"n.火车头，机车"},{"en":"locust","zh":"n.蝗虫"},{"en":"lodge","zh":"v.寄宿"},{"en":"lodging","zh":"n.住处，住房"},{"en":"lofty","zh":"adj.崇高的，高耸的"},{"en":"log","zh":"n.原木，航海日志"},{"en":"logic","zh":"n.逻辑，论理学"},{"en":"logical","zh":"adj.逻辑的"},{"en":"loneliness","zh":"n.孤独，寂寞"},{"en":"lonely","zh":"adj.孤独的，寂寞的"},{"en":"lonesome","zh":"adj.寂寞的"},{"en":"long","zh":"adj.长的  adv.长久"},{"en":"longevity","zh":"n.长寿"},{"en":"longing","zh":"n.渴望，思慕"},{"en":"longitude","zh":"n.经度，经线"},{"en":"long-term,","zh":""},{"en":"look","zh":"v.看，看上去  n.外表"},{"en":"loom","zh":"v.隐隐出现  n.织布机"},{"en":"loop","zh":"n.环，回路  v.环绕"},{"en":"loose","zh":"adj.松的，自由自在的"},{"en":"loosen","zh":"v.解开，放松"},{"en":"lord","zh":"n.君主，贵族，上帝"},{"en":"lorry","zh":"n.卡车，载重汽车"},{"en":"lose","zh":"v.失去，丢失，输"},{"en":"loss","zh":"n.丧失，失利，损失"},{"en":"lost","zh":"adj.失去的"},{"en":"lot","zh":"n.许多，地  adv.相当"},{"en":"lottery","zh":"n.抽彩，抓阄，彩票"},{"en":"loud","zh":"adj.响亮的，大声的"},{"en":"loudness","zh":"n.响亮"},{"en":"loudspeaker","zh":"n.扬声器，扩音器"},{"en":"lounge","zh":"n.休息室"},{"en":"lovable","zh":"adj.可爱的"},{"en":"love","zh":"v.爱，喜欢  n.爱情"},{"en":"lovely","zh":"adj.好看的，可爱的"},{"en":"lover","zh":"n.爱人，情人，爱好者"},{"en":"low","zh":"adj.低的，低廉的"},{"en":"lower","zh":"v.降低，减弱"},{"en":"loyal","zh":"adj.忠诚的，忠贞的"},{"en":"loyalty","zh":"n.忠诚，忠贞"},{"en":"lubricate","zh":"v.润滑"},{"en":"lubrication","zh":"n.润滑"},{"en":"luck","zh":"n.运气，幸运"},{"en":"lucky","zh":"adj.幸运的"},{"en":"luggage","zh":"n.行李"},{"en":"lumber","zh":"n.木材，木料"},{"en":"luminous","zh":"adj.发光的，明晰的"},{"en":"lump","zh":"n.块，肿块"},{"en":"lumpsum","zh":"n.总数"},{"en":"lunar","zh":"adj.月亮的，阴历的"},{"en":"lunch","zh":"n.午饭，便餐"},{"en":"luncheon","zh":"n.午餐，午宴"},{"en":"lung","zh":"n.肺"},{"en":"luxurious","zh":"adj.豪华的，奢侈的"},{"en":"luxury","zh":"n.奢侈(品)"},{"en":"machine","zh":"n.机器"},{"en":"machinery","zh":"n.机械(总称)"},{"en":"mackintosh","zh":"n.雨衣"},{"en":"macroeconomics","zh":"n.宏观经济学"},{"en":"mad","zh":"adj.疯狂的，狂热的"},{"en":"madam","zh":"n.夫人，太太，女士"},{"en":"madman","zh":"nn.疯子"},{"en":"madness","zh":"n.疯狂，疯病"},{"en":"magazine","zh":"n.杂志，期刊"},{"en":"magic","zh":"n.魔法，魔术，魅力"},{"en":"magician","zh":"n.魔术师"},{"en":"magistrate","zh":"n.地方法官"},{"en":"magnet","zh":"n.磁性，磁铁"},{"en":"magnetic","zh":"adj.磁性的"},{"en":"magnetism","zh":"n.磁性，磁力，吸引力"},{"en":"magnificent","zh":"adj.壮丽的，宏伟的"},{"en":"magnify","zh":"v.放大，扩大"},{"en":"magnitude","zh":"n.宏大，重要(性)"},{"en":"maid","zh":"n.女仆，侍女"},{"en":"maiden","zh":"n.少女  adj.未婚的"},{"en":"mail","zh":"n.邮件  v.邮寄"},{"en":"mailbox","zh":"n.信箱"},{"en":"main","zh":"adj.主要的"},{"en":"mainland","zh":"n.大陆，本土"},{"en":"mainly","zh":"adv.主要地，大部分"},{"en":"mainstream","zh":"n.主流"},{"en":"maintain","zh":"v.维持，保养，坚持"},{"en":"maintenance","zh":"n.保养，维修"},{"en":"maize","zh":"n.玉米"},{"en":"majesty","zh":"n.陛下，雄伟，庄严"},{"en":"major","zh":"adj.主要的，多数的"},{"en":"majority","zh":"n.多数，过半数"},{"en":"make","zh":"v.做，制造  n.种类"},{"en":"maker","zh":"n.制造者，制造商"},{"en":"make-shift,","zh":"adj.临计"},{"en":"make-up,","zh":"n"},{"en":"malady","zh":"n.病"},{"en":"malaria","zh":"n.疟疾"},{"en":"malaise","zh":"n.马来西亚"},{"en":"malaysia","zh":"n.马来西亚"},{"en":"male","zh":"adj.男性的，雄的"},{"en":"malice","zh":"n.恶意，恶感"},{"en":"malicious","zh":"adj.恶意的"},{"en":"man","zh":"n.人，男人，人类"},{"en":"manage","zh":"v.管理，处理，设法"},{"en":"management","zh":"n.管理(人员)，经营"},{"en":"manager","zh":"n.经理"},{"en":"managerial","zh":"adj.管理的"},{"en":"manhood","zh":"n.男子气"},{"en":"manifest","zh":"v.表明  adj.明白的"},{"en":"manifestation","zh":"n.表明"},{"en":"manifesto","zh":"n.宣言"},{"en":"manipulate","zh":"v.操纵，操作，摆布"},{"en":"manipulation","zh":"n.操纵，操作"},{"en":"mankind","zh":"n.人类"},{"en":"manly","zh":"adj.大丈夫的"},{"en":"manner","zh":"n.方法，方式，礼貌"},{"en":"mansion","zh":"n.宅第，官邸，大厦"},{"en":"manual","zh":"adj.用手的  n.手册"},{"en":"manufacture","zh":"v.制造"},{"en":"manufactured","zh":"adj.制成的"},{"en":"manufacturer","zh":"n.制造商"},{"en":"manuscript","zh":"n.手稿，原稿"},{"en":"many","zh":"adj.许多的  n.许多"},{"en":"map","zh":"n.地图  v.筹划"},{"en":"maple","zh":"n.枫树"},{"en":"marble","zh":"n.大理石，弹子"},{"en":"march","zh":"n.三月"},{"en":"march","zh":"v.行进，行军"},{"en":"margin","zh":"n.余地，边缘"},{"en":"marginal","zh":"adj.边缘的，边际的"},{"en":"marine","zh":"adj.海的，海生的"},{"en":"mariner","zh":"n.海员，水手"},{"en":"mark","zh":"n.痕迹，符号，标记"},{"en":"marked","zh":"adj.有标记的，标明的"},{"en":"market","zh":"n.市场，销路"},{"en":"marketable","zh":"adj.有销路的"},{"en":"marketing","zh":"n.市场学，营销学"},{"en":"marketplace","zh":"n.市场，集市"},{"en":"marking","zh":"n.唛头，标记"},{"en":"marriage","zh":"n.婚姻，婚礼"},{"en":"married","zh":"adj.已婚的"},{"en":"marry","zh":"v.娶，嫁，为...主婚"},{"en":"mars","zh":"n.火星"},{"en":"marsh","zh":"n.沼泽"},{"en":"marshal","zh":"n.元帅"},{"en":"martyr","zh":"n.烈士，殉道者"},{"en":"marvel","zh":"n.奇迹  v.惊奇"},{"en":"marvellous","zh":"adj.奇异的，绝妙的"},{"en":"marxism","zh":"n.马克思主义"},{"en":"marxist","zh":"n.马克思主义者"},{"en":"masculine","zh":"adj.男性的，阳性的"},{"en":"mask","zh":"n.假面具  v.掩饰"},{"en":"mass","zh":"n.堆，大量，群众"},{"en":"massacre","zh":"v.屠杀，残杀"},{"en":"massage","zh":"n.按摩，推拿"},{"en":"massive","zh":"adj.粗大的，厚重的"},{"en":"mass","zh":"median.传媒工具，新闻界"},{"en":"mast","zh":"n.桅杆"},{"en":"master","zh":"n.主人，大师，硕士"},{"en":"masterpiece","zh":"n.杰作"},{"en":"mat","zh":"n.垫子，席子"},{"en":"match","zh":"n.火柴，对手，比赛"},{"en":"mate","zh":"n.伙伴  v.配对"},{"en":"material","zh":"n.材料，资料，原料"},{"en":"materialism","zh":"n.唯物主义"},{"en":"materialize","zh":"v.使具体化，物质化"},{"en":"mathematical","zh":"adj.数学的"},{"en":"mathematics","zh":"n.数学"},{"en":"mathematician","zh":"n.数字家"},{"en":"maths","zh":"n.(缩)数学"},{"en":"matinee","zh":"n.日场演出"},{"en":"matter","zh":"n.事情，物资，毛病"},{"en":"mattress","zh":"n.床垫"},{"en":"mature","zh":"adj.成熟的，到期的"},{"en":"maturity","zh":"n.成熟，到期"},{"en":"maximize","zh":"v.增加到最大程度"},{"en":"maximum","zh":"n.最大量，极限"},{"en":"may","zh":"n.五月"},{"en":"may","zh":"v.可以，也许，祝愿"},{"en":"maybe","zh":"adv.或许，大概"},{"en":"mayor","zh":"n.市长"},{"en":"me","zh":"pron.我(宾格)"},{"en":"meadow","zh":"n.牧场，草地"},{"en":"meal","zh":"n.膳食，一顿饭"},{"en":"mean","zh":"v.打算，意指"},{"en":"meaning","zh":"n.意义，意图"},{"en":"means","zh":"n.手段，财力"},{"en":"meantime","zh":"adv.同时，在这期间"},{"en":"meanwhile","zh":"adv.在这期间"},{"en":"measure","zh":"n.尺寸，量具，措施"},{"en":"measurement","zh":"n.测量(结果)"},{"en":"meat","zh":"n.肉"},{"en":"mechanic","zh":"n.技工"},{"en":"mechanical","zh":"adj.机械的、机动的"},{"en":"mechanically","zh":"adv.机械地"},{"en":"mechanics","zh":"n.力学，机械学"},{"en":"mechanism","zh":"n.机制，机械装置"},{"en":"medal","zh":"n.奖章，勋章，纪念章"},{"en":"medical","zh":"adj.医学的，医务的"},{"en":"medicine","zh":"n.药，医学"},{"en":"medieval","zh":"adj.中世纪的"},{"en":"meditate","zh":"v.考虑，沉思"},{"en":"meditation","zh":"n.考虑，沉思冥想"},{"en":"mediterranean","zh":"n.地中海"},{"en":"medium","zh":"n.中间，媒介，中庸"},{"en":"meek","zh":"adj.温顺的"},{"en":"meet","zh":"v.遇到，会见，迎接"},{"en":"meeting","zh":"n.会议，集会"},{"en":"melancholy","zh":"adj.忧郁(的)"},{"en":"melody","zh":"n.旋律，曲调"},{"en":"melon","zh":"n.瓜，甜瓜"},{"en":"melt","zh":"v.熔化，融解"},{"en":"member","zh":"n.成员，会员"},{"en":"membership","zh":"n.会员资格，全体成员"},{"en":"memo","zh":"n.备忘录"},{"en":"memoir","zh":"n.回忆录"},{"en":"memorial","zh":"adj.纪念的，追悼的"},{"en":"memorize","zh":"v.记住，记忆"},{"en":"memory","zh":"n.记忆(力)，回忆"},{"en":"menace","zh":"v.威胁，恐吓"},{"en":"mend","zh":"v.修理，修补，好转"},{"en":"mental","zh":"adj.心理的，精神的"},{"en":"mentality","zh":"n.心理，意识"},{"en":"mention","zh":"v.提及，讲到"},{"en":"menu","zh":"n.菜单"},{"en":"merchandise","zh":"n.商品，货物"},{"en":"merchant","zh":"n.商人  adj.商业的"},{"en":"mercantile","zh":"n.商品"},{"en":"merciful","zh":"adj.仁慈的，宽大的"},{"en":"mercury","zh":"n.水星"},{"en":"mercury","zh":"n.汞，水银"},{"en":"mercy","zh":"n.宽大，慈悲，怜悯"},{"en":"mere","zh":"adj.仅仅的，起码的"},{"en":"merely","zh":"adv.仅仅，只"},{"en":"merge","zh":"v.合并"},{"en":"merit","zh":"n.价值，功绩  v.应得"},{"en":"mermaid","zh":"n.美人鱼"},{"en":"merry","zh":"adj.欢乐的"},{"en":"mesh","zh":"n.网孔，筛眼"},{"en":"mess","zh":"n.肮脏，凌乱  v.弄脏"},{"en":"message","zh":"n.音讯，消息"},{"en":"messenger","zh":"n.通讯员，使者"},{"en":"metal","zh":"n.金属"},{"en":"metallic","zh":"adj.金属的"},{"en":"metallurgy","zh":"n.冶金学"},{"en":"meter","zh":"n.量器，仪表"},{"en":"method","zh":"n.方法"},{"en":"methodology","zh":"n.方法(论)"},{"en":"meticulous","zh":"adj.小心翼翼的"},{"en":"meticulously","zh":"adv.胆小地"},{"en":"metre","zh":"n.米，公尺"},{"en":"metric","zh":"adj.公制的，米的"},{"en":"metropolitan","zh":"n.大都市"},{"en":"mexican","zh":"adj.墨西哥人(的)"},{"en":"mexico","zh":"n.墨西哥"},{"en":"microeconomics","zh":"n.微观经济学"},{"en":"microphone","zh":"n.扩音器，话筒"},{"en":"microprocessor","zh":"n.微处理机"},{"en":"microscope","zh":"n.显微镜"},{"en":"microwave","zh":"n.微波"},{"en":"midday","zh":"n.正午，晌午"},{"en":"middle","zh":"n.当中  adj.中部的"},{"en":"middleman","zh":"n.中人，中间人"},{"en":"middling","zh":"n.中等的，第二流的"},{"en":"midnight","zh":"n.午夜"},{"en":"midst","zh":"n.中间，中部"},{"en":"might","zh":"v.或许，可以  n.力"},{"en":"mighty","zh":"adj.强有力的"},{"en":"migrant","zh":"adj.迁移的，候鸟的"},{"en":"migrate","zh":"v.迁移(海外)，移栖"},{"en":"migration","zh":"n.迁移，移居海外"},{"en":"mild","zh":"adj.温和的，味淡的"},{"en":"mile","zh":"n.英里"},{"en":"mileage","zh":"n.里程"},{"en":"milestone","zh":"n.里程碑"},{"en":"military","zh":"adj.军事的，好斗的"},{"en":"militia","zh":"n.民兵(组织)"},{"en":"milk","zh":"n.奶，乳夜  v.挤奶"},{"en":"milkman","zh":"n.送奶人"},{"en":"milky","zh":"adj.加奶的，乳白色的"},{"en":"mill","zh":"n.磨坊，工厂  v.滚乱"},{"en":"miller","zh":"n.磨坊主"},{"en":"millimetre","zh":"n.毫米"},{"en":"million","zh":"n.百万"},{"en":"millionaire","zh":"n.百万富翁"},{"en":"mince","zh":"v.切碎，绞碎"},{"en":"mincer","zh":"n.粉碎机"},{"en":"mind","zh":"n.头脑，智力  v.介意"},{"en":"mine","zh":"pron.我的  n.矿山"},{"en":"miner","zh":"n.矿工"},{"en":"mineral","zh":"n.矿物  adj.矿物的"},{"en":"mingle","zh":"v.混合，混入"},{"en":"miniature","zh":"n.雏形，缩影，袖珍"},{"en":"minicomputer","zh":"n.微型计算机"},{"en":"minimize","zh":"v.使减到最小"},{"en":"minimum","zh":"n.最少量  adj.最小的"},{"en":"minister","zh":"n.教士，部长，大臣"},{"en":"ministry","zh":"n.(政府)部"},{"en":"minor","zh":"adj.较小的，次要的"},{"en":"minority","zh":"n.少数，少数民族"},{"en":"mint","zh":"n.造币厂，薄荷"},{"en":"minus","zh":"prep.减去  adj.减的"},{"en":"minute","zh":"n.分钟，片刻"},{"en":"miracle","zh":"n.奇迹，令人惊讶的事"},{"en":"miraculous","zh":"adj.奇迹(般)的"},{"en":"mirror","zh":"n.镜子  v.反映"},{"en":"miscarriage","zh":"n.未到目的地"},{"en":"miscarry","zh":"v.未运到(目的地)"},{"en":"mischief","zh":"n.伤害，恶作剧"},{"en":"miser","zh":"n.吝啬鬼，守财奴"},{"en":"miserable","zh":"adj.悲惨的，糟糕的"},{"en":"misery","zh":"n.痛苦，悲惨，苦难"},{"en":"misfortune","zh":"n.不幸"},{"en":"misgiving","zh":"n.疑虑，担心"},{"en":"mishandle","zh":"v.装卸不慎"},{"en":"mishap","zh":"n.事故"},{"en":"misinterpret","zh":"v.误解"},{"en":"mislead","zh":"v.引入岐途"},{"en":"miss","zh":"v.未击中 错过  n.小姐"},{"en":"missile","zh":"n.导弹，发射物"},{"en":"missing","zh":"adj.丢失的，缺少的"},{"en":"mission","zh":"n.使团，使命，天职"},{"en":"missionary","zh":"n.传教士"},{"en":"mist","zh":"n.薄雾  v.使迷糊"},{"en":"mistake","zh":"n.错误，误解  v.搞错"},{"en":"mistaken","zh":"adj.搞错了的，误解的"},{"en":"mister","zh":"n.先生(缩写为Mr.)"},{"en":"mistress","zh":"n.女主人，情妇"},{"en":"misty","zh":"adj.雾蒙蒙的，有雾的"},{"en":"misunderstand","zh":"v.误解，误会"},{"en":"misunderstanding","zh":"n.误会，曲解"},{"en":"mitten","zh":"n.连指手套，露指手套"},{"en":"mix","zh":"v.混合，配料，交往"},{"en":"mixer","zh":"n.混合器"},{"en":"mixture","zh":"n.混合物，混和"},{"en":"moan","zh":"v.呻吟，悲叹"},{"en":"mob","zh":"n.暴民，乌合之众"},{"en":"mobile","zh":"adj.机动的，流动的"},{"en":"mobilize","zh":"v.动员"},{"en":"mock","zh":"v.嘲笑，愚弄"},{"en":"mode","zh":"n.方式，方法"},{"en":"model","zh":"n.模范，模型，模特儿"},{"en":"moderate","zh":"adj.适度的  v.缓和"},{"en":"moderately","zh":"adv.适度地，适中地"},{"en":"modern","zh":"adj.现代的，时髦的"},{"en":"modernization","zh":"n.现代化"},{"en":"modernize","zh":"v.使...现代化"},{"en":"modest","zh":"adj.谦虚的，质朴的"},{"en":"modesty","zh":"n.谦虚"},{"en":"modification","zh":"n.修改，缓和"},{"en":"modified","zh":"adj.改良的，改进的"},{"en":"modify","zh":"v.修改，减轻，修饰"},{"en":"modulate","zh":"v.调整，改变"},{"en":"module","zh":"n.模量，模件"},{"en":"moist","zh":"adj.潮湿的"},{"en":"moisture","zh":"n.潮气"},{"en":"molecular","zh":"adj.分子的"},{"en":"molecule","zh":"n.分子"},{"en":"moment","zh":"n.时刻，瞬间"},{"en":"momentary","zh":"adj.片刻的，瞬间的"},{"en":"momentous","zh":"adj.重要的，重大的"},{"en":"monarch","zh":"n.君主，王室"},{"en":"monastery","zh":"adj.修道院，寺院"},{"en":"monday","zh":"n.星期一"},{"en":"monetary","zh":"adj.货币的，金融的"},{"en":"money","zh":"n.金钱，货币，财富"},{"en":"monitor","zh":"n.班长 监视器  v.监视"},{"en":"monk","zh":"n.和尚，修道士"},{"en":"monkey","zh":"n.猴子"},{"en":"monopolize","zh":"v.垄断，独占"},{"en":"monopoly","zh":"n.垄断，独占"},{"en":"monotonous","zh":"adj.单调的，枯燥的"},{"en":"monotony","zh":"n.单调，枯燥"},{"en":"monster","zh":"n.怪兽，怪物，魔鬼"},{"en":"monstrous","zh":"adj.可怕的，极恶的"},{"en":"month","zh":"n.月份"},{"en":"monthly","zh":"adj.每月的  n.月刊"},{"en":"monument","zh":"n.纪念章，不朽之物"},{"en":"monumental","zh":"adj.纪念碑式的"},{"en":"mood","zh":"n.心情，心境，情绪"},{"en":"moon","zh":"n.月亮"},{"en":"moonlight","zh":"n.月光"},{"en":"moonlighting","zh":"n.业余干活"},{"en":"moor","zh":"v.系泊，把船栓定"},{"en":"mop","zh":"n.拖把，墩布"},{"en":"moral","zh":"adj.道德的  n.教训"},{"en":"morale","zh":"n.士气，斗志"},{"en":"morality","zh":"n.道德品质"},{"en":"more","zh":"adj.更多的 更  adv.更"},{"en":"moreover","zh":"adv.此外，而且"},{"en":"morning","zh":"n.早晨，上午"},{"en":"mortal","zh":"adj.致命的"},{"en":"moslem","zh":"adj.穆斯林"},{"en":"mosque","zh":"n.清真寺"},{"en":"mosquito","zh":"n.蚊子"},{"en":"moss","zh":"n.苔藓，地衣"},{"en":"most","zh":"adj.最多的  adv.非常"},{"en":"mostly","zh":"adv.主要地，大多"},{"en":"motel","zh":"n.汽车旅馆"},{"en":"moth","zh":"n.蛾"},{"en":"mother","zh":"n.母亲  adj.出生地的"},{"en":"mother-in-","zh":"lawn.岳母，婆婆"},{"en":"motion","zh":"n.运动，议案"},{"en":"motionless","zh":"adj.不动的"},{"en":"motivate","zh":"v.促进，激发"},{"en":"motivation","zh":"n.动机"},{"en":"motive","zh":"n.动机"},{"en":"motor","zh":"n.发动机"},{"en":"motorcar","zh":"n.汽车"},{"en":"motorcycle","zh":"n.摩托车"},{"en":"motorist","zh":"n.摩托车手"},{"en":"motorway","zh":"n.汽车道，高速公路"},{"en":"motto","zh":"n.座右铭"},{"en":"mould","zh":"n.模子，型，霉菌"},{"en":"mount","zh":"n.山，岳  v.登上"},{"en":"mountain","zh":"n.山"},{"en":"mountainous","zh":"adj.多山的，山一般的"},{"en":"mourn","zh":"v.悲悼，哀痛"},{"en":"mournful","zh":"adj.悲悼的，哀痛的"},{"en":"mourning","zh":"n.哀痛"},{"en":"mouse","zh":"n.老鼠"},{"en":"moustache","zh":"n.胡子，须"},{"en":"mouth","zh":"n.口，嘴巴，河口"},{"en":"mouthful","zh":"n.一口，满口"},{"en":"move","zh":"v.移动，推动，搬家"},{"en":"movement","zh":"n.活动，运动，动作"},{"en":"movie","zh":"n.电影(院)"},{"en":"mr.","zh":"n.(缩)先生"},{"en":"mrs.","zh":"n.(缩)夫人，太太"},{"en":"ms.","zh":"n.(缩)女士"},{"en":"much","zh":"adj.许多的  n.许多"},{"en":"mud","zh":"n.泥浆"},{"en":"muddy","zh":"adj.泥泞的"},{"en":"muffle","zh":"v.裹住，捂住"},{"en":"muffler","zh":"n.围巾，消音器"},{"en":"mug","zh":"n.(有柄)大杯"},{"en":"mule","zh":"n.骡子"},{"en":"multiple","zh":"adj.复合的，多次方的"},{"en":"multiplication","zh":"n.乘法，增加"},{"en":"multiply","zh":"v.乘，增加，繁殖"},{"en":"multifunction","zh":"n.多功能的"},{"en":"multitude","zh":"n.大批，大群"},{"en":"municipal","zh":"adj.市的，市政的"},{"en":"mumble","zh":"v.咕哝，嘟囔"},{"en":"mumps","zh":"n.腮腺炎"},{"en":"murder","zh":"v.谋杀(案)"},{"en":"murderer","zh":"n.凶手，杀人犯"},{"en":"murmur","zh":"v.低声说"},{"en":"muscle","zh":"n.筋，肌肉"},{"en":"muscular","zh":"adj.肌肉发达的"},{"en":"muse","zh":"v.沉思，默想"},{"en":"museum","zh":"n.博物馆，陈列馆"},{"en":"mushroom","zh":"n.“蘑菇"},{"en":"music","zh":"n.音乐，乐曲"},{"en":"musical","zh":"adj.音乐的  n.歌舞片"},{"en":"musician","zh":"n.音乐家，作曲家"},{"en":"must","zh":"v.必须，准是  n.必须"},{"en":"mustard","zh":"n.芥末"},{"en":"mute","zh":"adj.缄默的  n.哑巴"},{"en":"mutter","zh":"v.咕哝，抱怨"},{"en":"mutton","zh":"n.羊肉"},{"en":"mutual","zh":"adj.相互的，共同的"},{"en":"my","zh":"pron.我的"},{"en":"myriad","zh":"adj.无数(的)"},{"en":"myself","zh":"pron.我自己，我亲自"},{"en":"mysterious","zh":"adj.神秘的，玄妙的"},{"en":"mystery","zh":"n.神秘，奥妙，秘事"},{"en":"mystic","zh":"adj.神秘的"},{"en":"myth","zh":"n.神话"},{"en":"oak","zh":"n.橡树，栎树"},{"en":"oar","zh":"n.橹，桨"},{"en":"oath","zh":"n.誓言，誓约"},{"en":"obedience","zh":"n.服从，顺从"},{"en":"obedient","zh":"adj.服从的，顺从的"},{"en":"obey","zh":"v.服从，遵守"},{"en":"object","zh":"n.物体，目的  v.反对"},{"en":"objection","zh":"n.反对，异议，不愿"},{"en":"objective","zh":"n.目标  adj.客观的"},{"en":"obligation","zh":"n.义务，责任"},{"en":"oblige","zh":"v.责成，使感激"},{"en":"obliterate","zh":"adj.删去，抹掉"},{"en":"oblong","zh":"adj.椭圆形的"},{"en":"obscure","zh":"adj.无名的  v.遮蔽"},{"en":"observance","zh":"n.仪式，习惯"},{"en":"observation","zh":"n.观察，评述"},{"en":"observe","zh":"v.观察，遵守，注视"},{"en":"observer","zh":"n.观察员"},{"en":"obstacle","zh":"n.障碍(物)"},{"en":"obstinate","zh":"adj.固执的，顽强的"},{"en":"obstruction","zh":"n.堵塞，妨碍"},{"en":"obtain","zh":"v.获得"},{"en":"obtainable","zh":"adj.可得到的"},{"en":"obvious","zh":"adj.明显的"},{"en":"obviously","zh":"adv.明显地，显然"},{"en":"occasion","zh":"n.场合，盛事，机会"},{"en":"occasional","zh":"adj.偶然的，有时的"},{"en":"occasionally","zh":"adv.偶而，有时"},{"en":"occident","zh":"n.西方"},{"en":"occidental","zh":"adj.西方的，西洋的"},{"en":"occupation","zh":"n.职业，占有"},{"en":"occupy","zh":"v.占据，占领，担任"},{"en":"occur","zh":"v.发生，出现，想到"},{"en":"occurrence","zh":"n.发生，出现，事件"},{"en":"ocean","zh":"n.海洋，大洋"},{"en":"oceania","zh":"n.大洋洲"},{"en":"oceanography","zh":"n.海洋学"},{"en":"o'clock","zh":"adv.点钟"},{"en":"october","zh":"n.十月"},{"en":"odd","zh":"adj.古怪的，奇数的"},{"en":"odour","zh":"n.气味"},{"en":"of","zh":"prep..的(表示领属等)"},{"en":"off","zh":"adv....去  prep.离开"},{"en":"off-duty,","zh":"a"},{"en":"offence","zh":"n.过错，冒犯，攻击"},{"en":"offend","zh":"v.冒犯，得罪"},{"en":"offensive","zh":"adj.冒犯的，攻击的"},{"en":"offer","zh":"v.提供，报盘"},{"en":"offering","zh":"n.报盘，提供的货物"},{"en":"off-grade,","zh":"adj."},{"en":"office","zh":"n.办公室，事务所"},{"en":"officer","zh":"n.军官，警官，官员"},{"en":"official","zh":"n.官员  adj.官方的"},{"en":"offset","zh":"v.抵消，弥补"},{"en":"offspring","zh":"n.子女，子孙"},{"en":"often","zh":"adv.经常，常常"},{"en":"oh","zh":"int.哦，嗬"},{"en":"oil","zh":"n.油，石油"},{"en":"o.k.","zh":"adj.(缩)对，行"},{"en":"old","zh":"adj.老的，...岁的"},{"en":"olive","zh":"n.橄榄(树)"},{"en":"omen","zh":"n.前兆"},{"en":"ominous","zh":"adj.不祥的"},{"en":"omission","zh":"n.省略"},{"en":"omit","zh":"v.省略，遗漏"},{"en":"on","zh":"prep.在...上，关于"},{"en":"once","zh":"adv.一度，一次"},{"en":"one","zh":"num.一，一个"},{"en":"oneself","zh":"pron.自己，自身"},{"en":"onion","zh":"n.洋葱"},{"en":"only","zh":"adj.唯一的  adv.仅仅"},{"en":"onset","zh":"n.攻击，着手"},{"en":"onto","zh":"prep.到...上"},{"en":"onward","zh":"adadj.向前(的)"},{"en":"opal","zh":"n.蛋白石"},{"en":"opaque","zh":"adj.不透明的"},{"en":"open","zh":"adj.开的  v.打开"},{"en":"opener","zh":"n.开罐器，起子"},{"en":"opening","zh":"n.开始，通路，孔"},{"en":"opera","zh":"n.歌剧"},{"en":"operate","zh":"v.运转，操作，开刀"},{"en":"operation","zh":"n.操作，生效，手术"},{"en":"operational","zh":"adj.业务上的，操作的"},{"en":"operative","zh":"adj.有效的"},{"en":"operator","zh":"n.操作人员，接线员"},{"en":"opinion","zh":"n.意见，评论，看法"},{"en":"opium","zh":"n.鸦片"},{"en":"opponent","zh":"n.对手，敌手"},{"en":"opportune","zh":"adj.及时的，凑巧的"},{"en":"opportunity","zh":"n.机会，机遇，时机"},{"en":"oppose","zh":"v.反对，反抗"},{"en":"opposite","zh":"adj.对立的，对面的"},{"en":"opposition","zh":"n.敌对，反抗"},{"en":"oppress","zh":"v.压抑，压迫，压制"},{"en":"oppression","zh":"n.压迫"},{"en":"optical","zh":"adj.视觉的，光学的"},{"en":"optimal","zh":"adj.最佳的"},{"en":"optimism","zh":"n.乐观(主义)"},{"en":"optimistic","zh":"adj.乐观(主义)的"},{"en":"optimize","zh":"v.最佳化"},{"en":"optimum","zh":"n.最佳条件"},{"en":"option","zh":"n.选择，可选择的东西"},{"en":"optional","zh":"adj.可任选的，随意的"},{"en":"or","zh":"conj.或者，即，否则"},{"en":"oral","zh":"adj.口头的，口的"},{"en":"orange","zh":"n.柑桔，橙色"},{"en":"orbit","zh":"n.轨道"},{"en":"orchard","zh":"n.果园"},{"en":"orchestra","zh":"n.管弦乐队，交响乐"},{"en":"order","zh":"n.命令，订货，次序"},{"en":"orderly","zh":"adj.整齐的  n.勤务员"},{"en":"ordinarily","zh":"adv.通常"},{"en":"ordinary","zh":"adj.普通的，一般的"},{"en":"ore","zh":"n.矿石，矿物"},{"en":"organ","zh":"n.器官，风琴"},{"en":"organic","zh":"adj.器官的，有机的"},{"en":"organism","zh":"n.有机体"},{"en":"organization","zh":"n.组织，团体"},{"en":"organizational","zh":"adj.组织的"},{"en":"organize","zh":"v.组织，筹备，编排"},{"en":"orient","zh":"n.东方  v.定方针"},{"en":"oriental","zh":"adj.东方的(人)"},{"en":"orientation","zh":"n.定向，倾向性"},{"en":"origin","zh":"n.起源，产地"},{"en":"original","zh":"adj.原始的  n.原物"},{"en":"originality","zh":"n.独创性"},{"en":"originally","zh":"adv.原来，当初"},{"en":"originate","zh":"v.起源，首创"},{"en":"ornament","zh":"n.装饰(品)"},{"en":"ornamental","zh":"adj.装饰的"},{"en":"orphan","zh":"n.孤儿"},{"en":"oscillation","zh":"n.摆动，振动"},{"en":"other","zh":"adj.其他的，别的"},{"en":"otherwise","zh":"adv.另外的  conj.否则"},{"en":"ought","zh":"v.应该，大概"},{"en":"ounce","zh":"n.盎司"},{"en":"our","zh":"pron.我们的"},{"en":"ourselves","zh":"pron.我们自己"},{"en":"out","zh":"adv.出外，向外，完"},{"en":"outbreak","zh":"n.爆发，发作"},{"en":"outcome","zh":"n.结果"},{"en":"outdoor","zh":"adj.野外的，露天的"},{"en":"outdoors","zh":"adv.在外的，在野外的"},{"en":"outer","zh":"adj.外部的，外面的"},{"en":"outermost","zh":"adj.最外的"},{"en":"outland","zh":"n.偏僻地区"},{"en":"outlandish","zh":"adj.外国的"},{"en":"outlaw","zh":"n.逃犯，歹徒"},{"en":"outlay","zh":"n.费用，支出"},{"en":"outlet","zh":"n.出口，销路"},{"en":"outline","zh":"n.轮廓，略图，大纲"},{"en":"outlook","zh":"n.看法，景色，展望"},{"en":"output","zh":"n.出产，产量"},{"en":"outrage","zh":"n.暴行"},{"en":"outrageous","zh":"adj.残暴的"},{"en":"outright","zh":"adj.公然地，直率地"},{"en":"outset","zh":"n.开头，起初"},{"en":"outside","zh":"n.外部  adv.在外面"},{"en":"outsider","zh":"n.局外人"},{"en":"outskirts","zh":"n.郊区"},{"en":"outstanding","zh":"adj.杰出的，未付款的"},{"en":"outturn","zh":"n.卸货情况"},{"en":"outward","zh":"adv.向外(的)"},{"en":"oval","zh":"adj.椭圆(形)的"},{"en":"oven","zh":"n.烤炉，锅灶"},{"en":"over","zh":"prep.在...上方，越过"},{"en":"overall","zh":"adj.总的，全面的"},{"en":"overcast","zh":"adj.多云的"},{"en":"overcharge","zh":"v.多收(的)钱"},{"en":"overcoat","zh":"n.外套，大衣"},{"en":"overcome","zh":"v.征服，克服，压倒"},{"en":"overestimate","zh":"v.估计过高"},{"en":"overextend","zh":"v.使..承担过多的义务"},{"en":"overflow","zh":"v.泛滥，溢出，满怀"},{"en":"overhead","zh":"adadj.头上(的)"},{"en":"overhear","zh":"v.偶然听到，偷听"},{"en":"overjoy","zh":"n.使大喜"},{"en":"overlap","zh":"v.重叠"},{"en":"overlapping","zh":"adj.相互重叠的"},{"en":"overload","zh":"v.超载"},{"en":"overlook","zh":"v.视察，俯瞰，宽容"},{"en":"overnight","zh":"adadj.终夜(的)"},{"en":"overpayment","zh":"n.多付的款项"},{"en":"overseas","zh":"adadj.海外(的)"},{"en":"oversight","zh":"n.监视，疏忽"},{"en":"overtake","zh":"v.赶上，压倒"},{"en":"overthrow","zh":"v.推翻，颠覆"},{"en":"overtime","zh":"n.超时，加班"},{"en":"overwhelm","zh":"v.压倒，淹没"},{"en":"overwhelming","zh":"adj.压倒的"},{"en":"owe","zh":"v.欠，归功于"},{"en":"owing","zh":"adj.该付的"},{"en":"owl","zh":"n.猫头鹰"},{"en":"own","zh":"adj.自己的  v.拥有"},{"en":"owner","zh":"n.物主，所有人"},{"en":"ownership","zh":"n.所有权，所有制"},{"en":"ox","zh":"n.公牛"},{"en":"oxide","zh":"n.氧化物"},{"en":"oxygen","zh":"n.氧，氧化"},{"en":"oyster","zh":"n.牡蛎，蚝"},{"en":"pace","zh":"n.步，速度，步调"},{"en":"pacific","zh":"n.太平洋"},{"en":"pack","zh":"v.包装，挤满  n.背包"},{"en":"package","zh":"n.包裹  v.打包"},{"en":"packaging","zh":"n.包装"},{"en":"packet","zh":"n.一盒，小件包裹"},{"en":"packing","zh":"n.装箱，收拾行李"},{"en":"pad","zh":"n.垫，便笺本"},{"en":"page","zh":"n.(书)页"},{"en":"pail","zh":"n.提桶"},{"en":"pain","zh":"n.疼痛，悲痛  v.作痛"},{"en":"painful","zh":"adj.痛苦的"},{"en":"paint","zh":"n.涂料，油漆  v.刷漆"},{"en":"painter","zh":"n.画家，油漆匠"},{"en":"painting","zh":"n.画，绘画(艺术)"},{"en":"pair","zh":"n.对，双，夫妇"},{"en":"palace","zh":"n.宫殿"},{"en":"pale","zh":"adj.苍白的，淡的"},{"en":"palm","zh":"n.手掌，掌心，棕榈树"},{"en":"pamphlet","zh":"n.小册子"},{"en":"pan","zh":"n.平底锅"},{"en":"panda","zh":"n.熊猫"},{"en":"pane","zh":"n.窗(门)玻璃"},{"en":"panel","zh":"n.镶板，仪表盘，小组"},{"en":"panic","zh":"v.恐慌，惊慌"},{"en":"panorama","zh":"n.全景"},{"en":"panoramic","zh":"adj.全景的"},{"en":"pant","zh":"v.喘气"},{"en":"panther","zh":"n.豹，美洲豹"},{"en":"pantry","zh":"n.配膳室，食品室"},{"en":"pants","zh":"n.长裤，衬裤"},{"en":"paper","zh":"n.纸，报纸，文件"},{"en":"papercut","zh":"n.剪纸，刻纸"},{"en":"papercutting","zh":"n.剪纸艺术"},{"en":"papers","zh":"n.文件，证书"},{"en":"par","zh":"n.(跟)原价相等"},{"en":"parachute","zh":"n.降落伞"},{"en":"parade","zh":"v.游行"},{"en":"paradise","zh":"n.天堂，天国"},{"en":"paragraph","zh":"n.段落，节"},{"en":"parallel","zh":"adj.平行的，类似的"},{"en":"paralyse","zh":"v.使麻痹，惊呆"},{"en":"parameter","zh":"n.参数，参量"},{"en":"parasite","zh":"n.寄生虫，寄生物"},{"en":"parcel","zh":"n.包裹，邮包"},{"en":"pardon","zh":"v.原谅，赦免"},{"en":"parent","zh":"n.父或母亲，母体"},{"en":"paris","zh":"n.巴黎"},{"en":"parish","zh":"n.教区"},{"en":"park","zh":"n.公园  v.停放车辆"},{"en":"parking","zh":"n.停放车辆"},{"en":"parliament","zh":"n.议会，国会"},{"en":"parlimental","zh":"adj.国会的，议会的"},{"en":"parlor","zh":"n.客厅"},{"en":"parrot","zh":"n.鹦鹉"},{"en":"part","zh":"n.部分，零件，角色"},{"en":"partial","zh":"adj.局部的，偏颇的"},{"en":"partially","zh":"adv.局部地，部分地"},{"en":"participant","zh":"n.参加者，参与者"},{"en":"participate","zh":"v.参与，分享"},{"en":"participation","zh":"n.参加，参与"},{"en":"particle","zh":"n.颗粒，微粒，虚词"},{"en":"particular","zh":"adj.特殊的  n.项目"},{"en":"particularly","zh":"adv.特别地"},{"en":"partition","zh":"v.划分，隔开"},{"en":"partly","zh":"adv.部分地"},{"en":"partner","zh":"n.伙伴，合伙人，搭档"},{"en":"partnership","zh":"n.伙伴关系，合伙"},{"en":"part-time,","zh":"a活)的"},{"en":"party","zh":"n.聚会，政党，一方"},{"en":"pass","zh":"v.经过，传给  n.关口"},{"en":"passable","zh":"adj.过得去的"},{"en":"passage","zh":"n.一段，通过，通道"},{"en":"passenger","zh":"n.旅客，乘客"},{"en":"passion","zh":"n.激情，热衷"},{"en":"passionate","zh":"adj.多情的，热烈的"},{"en":"passive","zh":"adj.被动的，消极的"},{"en":"passport","zh":"n.护照"},{"en":"past","zh":"adj.过去的  n.过去"},{"en":"past-due,","zh":""},{"en":"paste","zh":"n.浆糊，糊状物"},{"en":"pastime","zh":"n.消谴，娱乐"},{"en":"pasture","zh":"n.牧场"},{"en":"pat","zh":"v.轻拍，抚摸"},{"en":"patch","zh":"n.补丁，眼罩"},{"en":"patent","zh":"n.专利权，专利证"},{"en":"path","zh":"n.小径，路线"},{"en":"pathetic","zh":"adj.凄婉动人的"},{"en":"patience","zh":"n.耐心，忍耐力"},{"en":"patient","zh":"adj.耐心的  n.病人"},{"en":"patriot","zh":"n.爱国者"},{"en":"patriotic","zh":"adj.爱国的"},{"en":"patriotism","zh":"n.爱国主义"},{"en":"patrol","zh":"v.巡逻  n.巡逻队"},{"en":"patron","zh":"n.赞助人，保护人"},{"en":"patronage","zh":"n.保护人身分"},{"en":"pattern","zh":"n.模式，式样，图案"},{"en":"pause","zh":"v.暂停，中止"},{"en":"pave","zh":"v.铺路，为..铺平道路"},{"en":"pavement","zh":"n.人行道"},{"en":"paw","zh":"n.脚瓜"},{"en":"pawn","zh":"v.产卵"},{"en":"pay","zh":"v.支付  n.工资"},{"en":"payable","zh":"adj.支付给...的"},{"en":"payment","zh":"n.支付，付款"},{"en":"pea","zh":"n.豌豆"},{"en":"peace","zh":"n.和平，平静，和约"},{"en":"peaceful","zh":"adj.和平的，平静的"},{"en":"peach","zh":"n.桃子"},{"en":"peacock","zh":"n.孔雀"},{"en":"peak","zh":"n.顶点，巅，山峰"},{"en":"peanut","zh":"n.花生"},{"en":"pear","zh":"n.梨"},{"en":"pearl","zh":"n.珍珠"},{"en":"peasant","zh":"n.农民"},{"en":"peasantry","zh":"n.农民(总称)"},{"en":"pebble","zh":"n.鹅卵石"},{"en":"peck","zh":"v.啄"},{"en":"peculiar","zh":"adj.古怪的，独特的"},{"en":"peculiarity","zh":"n.特性，怪癖"},{"en":"pedal","zh":"n.踏板  v.骑车"},{"en":"pedestrian","zh":"n.行人"},{"en":"pedlar","zh":"n.小贩"},{"en":"peel","zh":"n.果皮  v.削、剥皮"},{"en":"peep","zh":"v.偷看，窥视"},{"en":"peer","zh":"n.同行  v.盯，凝视"},{"en":"peg","zh":"n.桩  v.(汇率)钉住"},{"en":"pen","zh":"n.钢笔，栏，圈"},{"en":"penalty","zh":"n.刑罚，处罚，罚款"},{"en":"pencil","zh":"n.铅笔"},{"en":"pending","zh":"adj.未决的，紧迫的"},{"en":"penetrate","zh":"v.贯穿，穿透，弥漫"},{"en":"penetration","zh":"n.贯穿，洞察力"},{"en":"penicillin","zh":"n.青霉素，盘尼西林"},{"en":"peninsular","zh":"n.半岛"},{"en":"penny","zh":"n.便士"},{"en":"pension","zh":"n.养老金，年金"},{"en":"people","zh":"n.人们，人民，人员"},{"en":"pepper","zh":"n.胡椒"},{"en":"per","zh":"prep.每，由，按照"},{"en":"perceive","zh":"v.知觉，觉察，领悟"},{"en":"percent","zh":"n.每百，百分之"},{"en":"percentage","zh":"n.百分率"},{"en":"perception","zh":"n.感觉，理解力"},{"en":"perch","zh":"v.栖息"},{"en":"perfect","zh":"adj.完美的，完备的"},{"en":"perfection","zh":"n.完成，完善"},{"en":"perfectly","zh":"adv.完全地，完美地"},{"en":"perform","zh":"v.执行，表演"},{"en":"performance","zh":"n.执行，演出"},{"en":"performer","zh":"n.执行者，表演者"},{"en":"perfume","zh":"n.香味，香水"},{"en":"perhaps","zh":"adv.也许，多半"},{"en":"peril","zh":"n.危难，巨大危险"},{"en":"perimeter","zh":"n.周长"},{"en":"period","zh":"n.时期，句号"},{"en":"periodic","zh":"adj.周期的，定时的"},{"en":"periodical","zh":"n.期刊"},{"en":"peripheral","zh":"adj.边缘的，周边的"},{"en":"perish","zh":"v.死亡，枯萎"},{"en":"permanence","zh":"n.永久，持久"},{"en":"permanent","zh":"n.永久性的，持久的"},{"en":"permanently","zh":"adv.永久地"},{"en":"permission","zh":"n.允许，许可"},{"en":"permissive","zh":"adj.允许的，许可的"},{"en":"permit","zh":"v.允许  n.许可证"},{"en":"perpendicular","zh":"adj.垂直的"},{"en":"perpetual","zh":"adj.永久的，永恒的"},{"en":"perplex","zh":"v.迷惑，难住"},{"en":"persecute","zh":"v.迫害"},{"en":"persecution","zh":"n.迫害"},{"en":"persevere","zh":"v.坚持"},{"en":"perseverance","zh":"n.坚持"},{"en":"persist","zh":"v.坚持，固执，持续"},{"en":"persistence","zh":"n.坚持，持续"},{"en":"person","zh":"n.人，人称，身体"},{"en":"personal","zh":"adj.私人的，个人的"},{"en":"personality","zh":"n.人格，个性，人物"},{"en":"personally","zh":"adv.亲自，就个人而言"},{"en":"personnel","zh":"n.全体人员，人事部门"},{"en":"perspective","zh":"n.展望，观点，透视"},{"en":"persuade","zh":"v.说服，劝导"},{"en":"persuasion","zh":"n.说服，信念"},{"en":"pertain","zh":"v.属于"},{"en":"pertinence","zh":"n.中肯"},{"en":"pertinent","zh":"adj.中肯的，恰当的"},{"en":"perturb","zh":"v.扰乱"},{"en":"perturbed","zh":"adj.烦燥不安的"},{"en":"perusal","zh":"n.细读"},{"en":"peruse","zh":"v.仔细阅读，审查"},{"en":"pessimist","zh":"n.悲观(主义)"},{"en":"pessimistic","zh":"adj.悲观的"},{"en":"pest","zh":"n.害虫"},{"en":"pet","zh":"n.爱畜，宠儿"},{"en":"petition","zh":"v.请愿(书)"},{"en":"petrol","zh":"n.石油，汽油"},{"en":"petroleum","zh":"n.石油"},{"en":"petty","zh":"adj.细小的，不重要的"},{"en":"phase","zh":"n.阶段，时期，侧面"},{"en":"phenomenon","zh":"n.现象，非凡的人"},{"en":"philosopher","zh":"n.哲学家"},{"en":"philosophical","zh":"adj.哲学上的"},{"en":"philosophy","zh":"n.哲学，基本原则"},{"en":"phone","zh":"n.电话  v.打电话"},{"en":"phonetics","zh":"n.语音学"},{"en":"photo","zh":"n.照片"},{"en":"photograph","zh":"n.照片  v.拍照"},{"en":"photographer","zh":"n.摄影师"},{"en":"photography","zh":"n.摄影术"},{"en":"photostatic","zh":"adj.静电复印的"},{"en":"phrase","zh":"n.词组，短语"},{"en":"physical","zh":"adj.身体的，物质的"},{"en":"physically","zh":"adv.物质上，身体上"},{"en":"physician","zh":"n.内科医生"},{"en":"physicist","zh":"n.物理学家"},{"en":"physics","zh":"n.物理学"},{"en":"pianist","zh":"n.钢琴家"},{"en":"piano","zh":"n.钢琴"},{"en":"pick","zh":"v.拣，采  n.精华，镐"},{"en":"pickle","zh":"n.腌渍品，泡菜"},{"en":"pickpocket","zh":"n.扒手，小偷"},{"en":"picnic","zh":"v.郊游，野餐"},{"en":"pictorial","zh":"n.画报"},{"en":"picture","zh":"n.图片，画，照片"},{"en":"picturesque","zh":"adj.风景如画的"},{"en":"pie","zh":"n.馅饼"},{"en":"piece","zh":"n.件，片段，张"},{"en":"pier","zh":"n.码头，栈桥"},{"en":"pig","zh":"n.猪"},{"en":"pigeon","zh":"n.鸽子"},{"en":"pigment","zh":"n.色料"},{"en":"pile","zh":"n.堆  v.堆积"},{"en":"pilferage","zh":"v.偷窃"},{"en":"pilgrim","zh":"n.香客，朝圣者"},{"en":"pilgrimage","zh":"n.朝圣"},{"en":"pill","zh":"n.药片，药丸"},{"en":"pillar","zh":"n.柱子"},{"en":"pillow","zh":"n.枕头"},{"en":"pilot","zh":"n.飞行员，领航员"},{"en":"pin","zh":"n.别针，发卡  v.别住"},{"en":"pinch","zh":"v.捏，掐，挤痛"},{"en":"pine","zh":"n.松树"},{"en":"pineapple","zh":"n.菠萝"},{"en":"pink","zh":"adj.桃色，粉红色"},{"en":"pint","zh":"n.品脱(容量单位)"},{"en":"pioneer","zh":"n.先驱者  v.倡导"},{"en":"pioneering","zh":"n.先驱的"},{"en":"pious","zh":"adj.虔诚的"},{"en":"pipe","zh":"n.管子，烟斗"},{"en":"pipeline","zh":"n.管道，管线"},{"en":"pirate","zh":"n.海盗  adj.盗版的"},{"en":"pistol","zh":"n.手枪"},{"en":"piston","zh":"n.活塞"},{"en":"pit","zh":"n.坑，洼，煤矿，桃核"},{"en":"pitch","zh":"v.搭帐篷，投掷"},{"en":"pitcher","zh":"n.水罐"},{"en":"pity","zh":"n.怜悯，惋惜，憾事"},{"en":"place","zh":"n.地方，位置  v.放置"},{"en":"plague","zh":"n.瘟疫"},{"en":"plain","zh":"adj.明白的，朴素的"},{"en":"plan","zh":"n.计划 平面图  v.打算"},{"en":"plane","zh":"n.水平，平面，飞机"},{"en":"planet","zh":"n.行星"},{"en":"plant","zh":"n.植物，工厂  v.栽培"},{"en":"plantation","zh":"n.种植园"},{"en":"plaster","zh":"n.灰泥  v.粘贴"},{"en":"plastic","zh":"n.塑料  adj.可塑的"},{"en":"plastics","zh":"n.塑料(制品)"},{"en":"plate","zh":"n.盘子，金属牌"},{"en":"plateau","zh":"n.高原，高地"},{"en":"platform","zh":"n.讲台，站台，政纲"},{"en":"platinum","zh":"n.白金"},{"en":"play","zh":"v.玩，扮演，演奏"},{"en":"player","zh":"n.选手，演奏者"},{"en":"playground","zh":"n.运动场，操场"},{"en":"playmate","zh":"n.游伴"},{"en":"playwright","zh":"n.剧作家"},{"en":"plea","zh":"n.请求，恳求，辩解"},{"en":"plead","zh":"v.恳求，辩解"},{"en":"pleasant","zh":"adj.令人愉快的"},{"en":"please","zh":"v.使高兴，喜欢，请"},{"en":"pleased","zh":"adj.高兴的，乐意的"},{"en":"pleasure","zh":"n.快乐，乐事，乐趣"},{"en":"pledge","zh":"n.暂约，抵押  v.保证"},{"en":"plenary","zh":"adj.完全的"},{"en":"plentiful","zh":"adj.大量的，丰富的"},{"en":"plenty","zh":"n.大量，丰富"},{"en":"plight","zh":"n.保证，困境"},{"en":"plot","zh":"n.阴谋，情节  v.密谋"},{"en":"plough","zh":"v.犁"},{"en":"pluck","zh":"v.拔，摘  n.勇气"},{"en":"plug","zh":"n.塞子，插头  v.堵住"},{"en":"plumb","zh":"v.测锤，垂直"},{"en":"plumber","zh":"n.管子工"},{"en":"plume","zh":"n.羽毛，羽饰"},{"en":"plump","zh":"adj.丰满的"},{"en":"plunder","zh":"v.掠夺，抢劫"},{"en":"plunge","zh":"v.插进，跳入"},{"en":"plural","zh":"adj.复数的"},{"en":"plus","zh":"prep.加  n.加号，正号"},{"en":"ply","zh":"v.出力，努力从事"},{"en":"p.m.","zh":"(缩)下午"},{"en":"pneumatic","zh":"adj.气体的，空气的"},{"en":"pneumonia","zh":"n.风湿病"},{"en":"pocket","zh":"n.衣袋  adj.袖珍的"},{"en":"poem","zh":"n.诗歌"},{"en":"poet","zh":"n.诗人"},{"en":"poetry","zh":"n.诗，诗意，诗艺"},{"en":"point","zh":"n.尖，点，分  v.指"},{"en":"pointed","zh":"adj.尖的"},{"en":"poison","zh":"n.毒，毒药  v.放毒"},{"en":"poisonous","zh":"adj.有毒的"},{"en":"poke","zh":"v.戳，刺"},{"en":"poker","zh":"n.扑克"},{"en":"polar","zh":"adj.极的"},{"en":"polarity","zh":"n.极性，极端"},{"en":"pole","zh":"n.柱，杆，极"},{"en":"police","zh":"n.警察(局)"},{"en":"policeman","zh":"n.警察"},{"en":"policy","zh":"n.政策，方针，保险单"},{"en":"polish","zh":"v.擦亮，磨光，润色"},{"en":"polite","zh":"adj.有礼貌的，客气的"},{"en":"politeness","zh":"n.礼貌，客气"},{"en":"political","zh":"adj.政治的"},{"en":"politician","zh":"n.政治家，政客"},{"en":"politics","zh":"n.政治学，政治活动"},{"en":"poll","zh":"n.选举投票，民意测验"},{"en":"pollute","zh":"v.污染，弄脏"},{"en":"pollution","zh":"n.污染"},{"en":"polymer","zh":"n.聚合物"},{"en":"pond","zh":"n.池塘"},{"en":"ponder","zh":"v.考虑，沉思"},{"en":"pony","zh":"n.小马"},{"en":"pool","zh":"n.水塘，游泳池"},{"en":"poor","zh":"adj.穷的，差的"},{"en":"pop","zh":"v.砰的一声，爆裂"},{"en":"popcorn","zh":"n.爆米花"},{"en":"pope","zh":"n.教皇"},{"en":"popular","zh":"adj.受欢迎的"},{"en":"popularity","zh":"n.名望，知名"},{"en":"popularize","zh":"v.普及，宣传"},{"en":"population","zh":"n.人口"},{"en":"porcelain","zh":"n.瓷，瓷器"},{"en":"porch","zh":"n.门廊"},{"en":"pore","zh":"n.毛孔"},{"en":"pork","zh":"n.猪肉"},{"en":"porridge","zh":"n.粥，麦片粥"},{"en":"port","zh":"n.港口，港"},{"en":"portable","zh":"adj.手提的，经便的"},{"en":"porter","zh":"n.搬运工"},{"en":"portion","zh":"n.一份，部分"},{"en":"portrait","zh":"n.肖像，画像，描写"},{"en":"portray","zh":"v.描写，给...画像"},{"en":"portugal","zh":"n.葡萄牙"},{"en":"portuguese","zh":"adj.葡萄牙人(的)"},{"en":"pose","zh":"v.作姿态，提供考虑"},{"en":"position","zh":"n.位置，地位，处境"},{"en":"positive","zh":"adj.明确的，肯定的"},{"en":"positively","zh":"adv.断言地，绝对地"},{"en":"possess","zh":"v.占有，拥有，控制"},{"en":"possession","zh":"n.所有，财产"},{"en":"possessive","zh":"adj.所有(格)的"},{"en":"possibility","zh":"n.可能性"},{"en":"possible","zh":"adj.可能的"},{"en":"possibly","zh":"adv.可能，或许"},{"en":"post","zh":"n.柱，职位  v.邮寄"},{"en":"postage","zh":"n.邮资"},{"en":"postal","zh":"adj.邮政的"},{"en":"postcard","zh":"n.明信片"},{"en":"posterity","zh":"n.子孙，后代"},{"en":"postman","zh":"n.邮递员"},{"en":"postpone","zh":"v.推迟，延迟"},{"en":"postponement","zh":"n.推迟"},{"en":"postulate","zh":"v.假定，主张"},{"en":"pot","zh":"n.罐，壶，锅"},{"en":"potato","zh":"n.马铃薯，土豆"},{"en":"potent","zh":"adj.有效的"},{"en":"potential","zh":"adj.潜在的  n.潜力"},{"en":"potentiality","zh":"n.潜在性"},{"en":"poultry","zh":"n.家禽"},{"en":"pound","zh":"n.英镑，磅  v.重击"},{"en":"pour","zh":"v.注，灌，倒，涌出"},{"en":"poverty","zh":"n.贫穷，缺乏"},{"en":"powder","zh":"n.粉末"},{"en":"power","zh":"n.力，动力，权力"},{"en":"powerful","zh":"adj.有力的，强的"},{"en":"practicable","zh":"adj.可行的"},{"en":"practical","zh":"adj.实用的，可行的"},{"en":"practically","zh":"adj.实际地，几乎"},{"en":"practice","zh":"n.练习，习惯，实施"},{"en":"practise","zh":"v.练习，习惯于做"},{"en":"prairie","zh":"n.大草原"},{"en":"praise","zh":"v.赞美，称颂"},{"en":"pray","zh":"v.祈祷"},{"en":"prayer","zh":"v.祷告，祷文"},{"en":"preach","zh":"v.说教，鼓吹，布道"},{"en":"preacher","zh":"n.鼓吹者，宣教士"},{"en":"precaution","zh":"n.预防，防备"},{"en":"precede","zh":"v.在前，高于"},{"en":"precedence","zh":"n.领先，优先权"},{"en":"precedent","zh":"n.先例，惯例"},{"en":"preceding","zh":"adj.前面的，上述的"},{"en":"precious","zh":"adj.宝贵的，珍爱的"},{"en":"precise","zh":"adj.精确的，严格的"},{"en":"precisely","zh":"adv.精确地"},{"en":"precision","zh":"n.精确，精度"},{"en":"predecessor","zh":"n.前任，原有物"},{"en":"predict","zh":"v.预言"},{"en":"prediction","zh":"n.预言，预报"},{"en":"predominance","zh":"n.优越，杰出"},{"en":"predominant","zh":"adj.主要的，有势力的"},{"en":"preface","zh":"n.序言，开场白"},{"en":"prefer","zh":"v.较喜欢，宁愿"},{"en":"preferable","zh":"adj.更喜爱的"},{"en":"preferably","zh":"adv.更好地"},{"en":"preference","zh":"n.偏爱(之物)"},{"en":"preferential","zh":"adj.优惠的"},{"en":"prefix","zh":"n.前缀"},{"en":"pregnancy","zh":"n.怀孕"},{"en":"pregnant","zh":"adj.怀孕的"},{"en":"prejudice","zh":"n.偏见，成见"},{"en":"preliminary","zh":"adj.初步的，预备的"},{"en":"prelude","zh":"n.序言，前兆，序曲"},{"en":"premature","zh":"adj.早熟的"},{"en":"premier","zh":"n.首相，总理"},{"en":"premises","zh":"n.建筑物"},{"en":"premium","zh":"n.津贴"},{"en":"preoccupy","zh":"v.使迷住，专心于"},{"en":"preparation","zh":"n.准备，预备"},{"en":"prepare","zh":"v.准备，配制"},{"en":"prepared","zh":"adj.准备好的，预制的"},{"en":"preposition","zh":"n.介词"},{"en":"prescribe","zh":"v.命令，规定，开处方"},{"en":"prescribed","zh":"adj.规定的"},{"en":"prescription","zh":"n.药方"},{"en":"presence","zh":"n.出席，在场"},{"en":"present","zh":"adj.在场的  n.现在"},{"en":"presentation","zh":"n.提出，演出"},{"en":"presently","zh":"adv.不久，目前"},{"en":"preservation","zh":"n.保藏，保存"},{"en":"preserve","zh":"v.保护，保藏，保持"},{"en":"preset","zh":"v.预先安排"},{"en":"preside","zh":"v.主持"},{"en":"president","zh":"n.总统，总经理，校长"},{"en":"presidential","zh":"adj.总统的"},{"en":"press","zh":"v.压，榨，按  n.印刷"},{"en":"pressing","zh":"adj.急迫的"},{"en":"pressure","zh":"n.压力，繁忙，紧迫"},{"en":"prestige","zh":"n.威望，声望"},{"en":"presumably","zh":"adv.也许，大概"},{"en":"presume","zh":"v.假定，推测"},{"en":"pretend","zh":"v.假装，佯称"},{"en":"pretense","zh":"n.借口"},{"en":"pretentious","zh":"adj.自负的，虚伪的"},{"en":"pretty","zh":"adj.精致的，漂亮的"},{"en":"prevail","zh":"v.获胜，流行"},{"en":"prevailing","zh":"adj.占上风的"},{"en":"prevalence","zh":"n.流行"},{"en":"prevalent","zh":"adj.流行的，普遍的"},{"en":"prevent","zh":"v.防止，阻碍"},{"en":"prevention","zh":"n.防止，预防"},{"en":"previous","zh":"adj.早先的，先前的"},{"en":"previously","zh":"adv.预先，先前"},{"en":"prey","zh":"n.猎物，牺牲品"},{"en":"price","zh":"n.价格，代价  v.定价"},{"en":"pricing","zh":"n.定价"},{"en":"prick","zh":"v.刺穿  n.刺痛"},{"en":"pride","zh":"n.骄傲，自豪，自负"},{"en":"priest","zh":"n.教士，神父"},{"en":"primarily","zh":"adv.首要地，主要地"},{"en":"primary","zh":"adj.首要的，初级的"},{"en":"prime","zh":"adj.首要的，第一的"},{"en":"primitive","zh":"adj.原始的，简朴的"},{"en":"prince","zh":"n.王子，诸侯"},{"en":"princess","zh":"n.公主，王妃"},{"en":"principal","zh":"adj.重要的，主要的"},{"en":"principally","zh":"adv.主要地"},{"en":"principle","zh":"n.原则，原理，主义"},{"en":"print","zh":"v.印刷，出版  n.字体"},{"en":"printer","zh":"n.印刷者"},{"en":"prior","zh":"adj.较早的，在前的"},{"en":"priority","zh":"n.优先，居先"},{"en":"prism","zh":"n.棱镜"},{"en":"prison","zh":"n.监狱，牢房"},{"en":"prisoner","zh":"n.囚犯"},{"en":"privacy","zh":"n.私事，隐私"},{"en":"private","zh":"adj.私人的，秘密的"},{"en":"privilege","zh":"n.特权  v.给特权"},{"en":"privileged","zh":"adj.有特权的"},{"en":"prize","zh":"n.奖品，奖赏"},{"en":"probability","zh":"n.可能性，概率"},{"en":"probable","zh":"adj.很可能的"},{"en":"probably","zh":"adv.或许，大概"},{"en":"probe","zh":"v.细察，查究"},{"en":"problem","zh":"n.课题，难题，问题"},{"en":"problematic","zh":"adj.有问题的"},{"en":"procedure","zh":"n.手续，程序"},{"en":"proceed","zh":"v.前进，继续向前"},{"en":"proceeding","zh":"n.进行，诉讼"},{"en":"proceeds","zh":"n.收益"},{"en":"process","zh":"n.程序，过程  v.处理"},{"en":"processing","zh":"adj.加工(的)"},{"en":"procession","zh":"n.行列，仪仗"},{"en":"proclaim","zh":"v.宣布，公布"},{"en":"procure","zh":"v.采购"},{"en":"procurement","zh":"n.采购"},{"en":"produce","zh":"v.生产，制造，创作"},{"en":"producer","zh":"n.生产者"},{"en":"product","zh":"n.产品，作品"},{"en":"production","zh":"n.生产，制造"},{"en":"productive","zh":"adj.能生产的，多产的"},{"en":"productivity","zh":"n.生产力，生产率"},{"en":"profess","zh":"v.表白"},{"en":"profession","zh":"n.职业，专业，表白"},{"en":"professional","zh":"adj.职业的n.专业人员"},{"en":"professor","zh":"n.教授"},{"en":"proficiency","zh":"n.熟练，精通"},{"en":"proficient","zh":"adj.熟练的，精通的"},{"en":"profile","zh":"n.侧面，轮廓"},{"en":"profit","zh":"n.利润  v.获益"},{"en":"profitable","zh":"adj.有利可图的"},{"en":"proforma","zh":"adj.形式的"},{"en":"profound","zh":"adj.深奥的，深深的"},{"en":"program","zh":"n.节目，规划，项目"},{"en":"programer","zh":"n.项目，程序制定者"},{"en":"programing","zh":"n.程序编排"},{"en":"progress","zh":"v.进步，进展"},{"en":"progressive","zh":"adj.前进的，进步的"},{"en":"prohibit","zh":"v.禁止，阻止"},{"en":"prohibition","zh":"n.禁止，禁令"},{"en":"prohibitive","zh":"adj.禁止的"},{"en":"project","zh":"n.计划  v.设计，射出"},{"en":"projection","zh":"n.射出，投射"},{"en":"projector","zh":"n.电影放映机"},{"en":"proletarian","zh":"adj.无产阶级"},{"en":"prolong","zh":"v.延长"},{"en":"prominence","zh":"n.显著，突出"},{"en":"prominent","zh":"adj.著名的，显著的"},{"en":"promise","zh":"v.允诺，预示  n.诺言"},{"en":"promising","zh":"adj.有希望的"},{"en":"promissory","zh":"adj.约定的"},{"en":"promote","zh":"v.提升，促进，宣传"},{"en":"promotion","zh":"n.晋级，提高，促销"},{"en":"prompt","zh":"adj.及时的，迅速的"},{"en":"promptly","zh":"adv.及时地，敏捷地"},{"en":"prone","zh":"adj.俯伏的"},{"en":"pronoun","zh":"n.代词"},{"en":"pronounce","zh":"v.发音，宣布"},{"en":"pronunciation","zh":"n.发音"},{"en":"proof","zh":"n.证明，证据，实验"},{"en":"propaganda","zh":"n.宣传"},{"en":"propagate","zh":"v.繁殖，传播，宣传"},{"en":"propagation","zh":"n.繁殖，传播"},{"en":"propel","zh":"v.推进，推动"},{"en":"propellent","zh":"adj.推进的"},{"en":"propeller","zh":"n.推进器，螺旋桨"},{"en":"proper","zh":"adj.合适的，本来的"},{"en":"properly","zh":"adv.合适地"},{"en":"property","zh":"n.财产，地产，特性"},{"en":"prophesy","zh":"n.预言"},{"en":"prophet","zh":"n.预言家"},{"en":"proportion","zh":"n.比例，部分"},{"en":"proportional","zh":"adj.成比例的"},{"en":"proposal","zh":"n.建议，计划"},{"en":"propose","zh":"v.建议，打算，求婚"},{"en":"proposition","zh":"n.建议，提议"},{"en":"proprietor","zh":"n.所有者，业主"},{"en":"proprietorship","zh":"n.业主资格"},{"en":"prose","zh":"n.散文"},{"en":"prosecute","zh":"v.迫害"},{"en":"prosecution","zh":"n.迫害"},{"en":"prosecutor","zh":"n.检查官"},{"en":"prospect","zh":"n.前景  v.勘探"},{"en":"prosperity","zh":"n.繁荣，兴旺"},{"en":"prosperous","zh":"adj.繁荣的，兴旺的"},{"en":"protect","zh":"v.保护，警戒"},{"en":"protection","zh":"n.保护，警戒"},{"en":"protectionism","zh":"n.贸易保护主义"},{"en":"protective","zh":"adj.保护的"},{"en":"protein","zh":"n.蛋白质"},{"en":"protest","zh":"v.抗议，反对"},{"en":"protestant","zh":"n.清教徒，新教徒"},{"en":"protocol","zh":"n.协议，议定书"},{"en":"prototype","zh":"n.原型"},{"en":"protracted","zh":"adj.延长了的"},{"en":"proud","zh":"adj.骄傲的，得意的"},{"en":"prove","zh":"v.证明，表明是"},{"en":"proverb","zh":"n.谚语，格言"},{"en":"provide","zh":"v.供给，提供，准备"},{"en":"provided","zh":"conj.只要"},{"en":"province","zh":"n.省份，领域"},{"en":"provincial","zh":"adj.省级的，省的"},{"en":"provision","zh":"n.准备，条款，辎重"},{"en":"provisional","zh":"adj.临时的"},{"en":"provocation","zh":"n.刺激，煸动"},{"en":"provoke","zh":"v.激怒，引起"},{"en":"proximo","zh":"adj.下月的"},{"en":"prudence","zh":"n.谨慎"},{"en":"prudent","zh":"adj.谨慎的"},{"en":"psychological","zh":"adj.心理(上)的"},{"en":"psychologist","zh":"n.心理学家"},{"en":"psychology","zh":"n.心理学，心理状态"},{"en":"public","zh":"adj.公众的，公共的"},{"en":"publication","zh":"n.出版物，发表"},{"en":"publicity","zh":"n.公开"},{"en":"publicly","zh":"adv.公开地"},{"en":"publish","zh":"v.出版，发表，公布"},{"en":"publisher","zh":"n.出版商"},{"en":"pudding","zh":"n.布丁"},{"en":"puff","zh":"n.一阵  v.喘气"},{"en":"pull","zh":"v.拖，拔，  扯  n.牵引"},{"en":"pulley","zh":"n.滑轮"},{"en":"pulse","zh":"n.脉搏  v.跳动"},{"en":"pump","zh":"n.泵  v.抽水，打气"},{"en":"pumpkin","zh":"n.南瓜"},{"en":"punch","zh":"v.用拳击，冲孔"},{"en":"punctual","zh":"adj.准时的，守时的"},{"en":"punctuality","zh":"n.准时"},{"en":"punctuation","zh":"n.准时"},{"en":"punish","zh":"v.处罚，惩罚"},{"en":"punishment","zh":"n.处罚，刑罚"},{"en":"pupil","zh":"n.小学生，瞳孔"},{"en":"puppet","zh":"n.木偶，傀儡"},{"en":"puppy","zh":"n.小狗"},{"en":"purchase","zh":"v.购买"},{"en":"purchaser","zh":"n.买主"},{"en":"pure","zh":"adj.纯洁的，纯净的"},{"en":"purely","zh":"adv.全然，纯然"},{"en":"purify","zh":"v.净化"},{"en":"purity","zh":"n.纯粹，纯净"},{"en":"purple","zh":"n.紫色  adj.紫色的"},{"en":"purpose","zh":"n.目的，用途，意图"},{"en":"purse","zh":"n.钱包"},{"en":"pursuance","zh":"n.追求，实行"},{"en":"pursuant","zh":"n.追逐者"},{"en":"pursue","zh":"v.追逐，从事，追求"},{"en":"pursuit","zh":"n.追逐，追求，职业"},{"en":"push","zh":"v.推，推动  n.推力"},{"en":"put","zh":"v.放置，估价，表达"},{"en":"puzzle","zh":"v.使困惑  n.难题 谜语"},{"en":"pyjamas","zh":"n.睡衣"},{"en":"pyramid","zh":"n.金字塔"},{"en":"qualification","zh":"n.资格，条件"},{"en":"qualified","zh":"adj.有资格的"},{"en":"qualify","zh":"v.使合格，使胜任"},{"en":"qualitative","zh":"adj.质量的，定性的"},{"en":"quality","zh":"n.特性，属性，质量"},{"en":"quantitative","zh":"adj.数量的，定量的"},{"en":"quantity","zh":"n.量，大量"},{"en":"quarrel","zh":"v.争吵"},{"en":"quart","zh":"n.夸脱(容量单位)"},{"en":"quarter","zh":"n.四分之一，一刻钟"},{"en":"quarterly","zh":"adj.季度的  n.季刊"},{"en":"quartz","zh":"n.石英"},{"en":"quay","zh":"n.码头"},{"en":"queen","zh":"n.王后，女王"},{"en":"queer","zh":"adj.奇妙的，古怪的"},{"en":"quench","zh":"v.抑制，熄灭，淬火"},{"en":"query","zh":"v.询问"},{"en":"quest","zh":"n.寻找，搜索"},{"en":"question","zh":"n.问题，疑问  v.询问"},{"en":"questionnaire","zh":"n.调查表"},{"en":"queue","zh":"n.辫子，队  v.排队"},{"en":"quick","zh":"adj.快的，灵敏的"},{"en":"quicken","zh":"v.加快，加速，刺激"},{"en":"quickly","zh":"adv.快，迅速地"},{"en":"quiet","zh":"adj.安静的，轻声的"},{"en":"quietly","zh":"adv.安静地，静静地"},{"en":"quietness","zh":"n.平静，安定，安静"},{"en":"quilt","zh":"n.被子"},{"en":"quit","zh":"v.停止，放弃，退出"},{"en":"quite","zh":"adv.完全，十分，相当"},{"en":"quiver","zh":"v.颤抖"},{"en":"quiz","zh":"n.测验，问答比赛"},{"en":"quota","zh":"n.定额，配额"},{"en":"quotation","zh":"n.引语，语录，报价单"},{"en":"quote","zh":"v.引用，引证，报价"},{"en":"rabbit","zh":"n.兔子"},{"en":"race","zh":"n.种族，竞赛  v.赛跑"},{"en":"racial","zh":"adj.种族的，人种的"},{"en":"rack","zh":"n.搁班，行李架"},{"en":"racket","zh":"n.喧闹，球拍"},{"en":"radar","zh":"n.雷达"},{"en":"radial","zh":"adj.放射的，辐射的"},{"en":"radiant","zh":"adj.发光的"},{"en":"radiate","zh":"v.辐射，放射，发光"},{"en":"radiation","zh":"n.辐射，发射"},{"en":"radical","zh":"adj.基本的，激进的"},{"en":"radio","zh":"n.无线电，收音机"},{"en":"radioactive","zh":"adj.放射性的"},{"en":"radioactivity","zh":"n.放射性"},{"en":"radish","zh":"n.萝卜"},{"en":"radium","zh":"n.镭"},{"en":"radius","zh":"n.半径，活动范围"},{"en":"rag","zh":"n.抹布，破衣服"},{"en":"rage","zh":"n.盛怒，流行  v.大怒"},{"en":"raid","zh":"v.袭击，搜查"},{"en":"rail","zh":"n.栏杆，钢轨"},{"en":"railroad","zh":"n.铁路"},{"en":"railway","zh":"n.铁路，铁路公司"},{"en":"rain","zh":"n.雨  v.下雨"},{"en":"rainbow","zh":"n.虹"},{"en":"raincoat","zh":"n.雨衣"},{"en":"rainfall","zh":"n.下雨，降雨量"},{"en":"rainy","zh":"adj.有雨的"},{"en":"raise","zh":"v.举起，提高，唤起"},{"en":"rake","zh":"v.耙"},{"en":"rally","zh":"v.集会"},{"en":"ramble","zh":"n.漫步"},{"en":"ranch","zh":"n.牧场"},{"en":"random","zh":"adj.胡乱的，随便的"},{"en":"range","zh":"n.射程，范围，一系列"},{"en":"rank","zh":"n.军衔，等级  v.排列"},{"en":"rapid","zh":"adj.快的，急速的"},{"en":"rapidly","zh":"adv.迅速地，急速地"},{"en":"rapture","zh":"n.狂喜"},{"en":"rare","zh":"adj.稀有的，罕见的"},{"en":"rarely","zh":"adv.难得，少有"},{"en":"rascal","zh":"n.无赖，恶棍"},{"en":"rash","zh":"adj.轻率的，鲁莽的"},{"en":"rat","zh":"n.老鼠，耗子"},{"en":"rate","zh":"n.比率，速度，费率"},{"en":"rather","zh":"adv.相当，颇，宁愿"},{"en":"ratification","zh":"n.批准，认可"},{"en":"ratify","zh":"v.批准，认可，追认"},{"en":"ratio","zh":"n.比，比率"},{"en":"ration","zh":"n.理性"},{"en":"rational","zh":"adj.合理的，有理性的"},{"en":"rattle","zh":"v.嘎吱响"},{"en":"ravage","zh":"n.破坏，暴力"},{"en":"raw","zh":"adj.生的，未加工的"},{"en":"ray","zh":"n.光线，射线，辐射"},{"en":"razor","zh":"n.剃须刀"},{"en":"re","zh":"prep.关于"},{"en":"reach","zh":"v.到达，伸手，够到"},{"en":"react","zh":"v.反应，起反应，反抗"},{"en":"reaction","zh":"n.反应，反动"},{"en":"reactionary","zh":"adj.反动的"},{"en":"reactor","zh":"n.反应堆"},{"en":"read","zh":"v.读，阅读，朗诵"},{"en":"reader","zh":"n.读者，读本"},{"en":"readily","zh":"adv.容易地，乐意地"},{"en":"reading","zh":"n.读书，读数，读本"},{"en":"ready","zh":"adj.准备好的，乐意的"},{"en":"real","zh":"adj.真的，纯粹的"},{"en":"realism","zh":"n.现实主义，写实主义"},{"en":"realist","zh":"n.adj.现实主义者(的)"},{"en":"realistic","zh":"adj.现实的，实在的"},{"en":"reality","zh":"n.现实，真实性"},{"en":"realization","zh":"n.实现"},{"en":"realize","zh":"v.认识到，实现，执行"},{"en":"really","zh":"adv.真正地，果然"},{"en":"realm","zh":"n.王国，领域"},{"en":"reap","zh":"v.收割，收获"},{"en":"rear","zh":"n.后部  adj.后面的"},{"en":"reason","zh":"n.原因，理由  v.推论"},{"en":"reasonable","zh":"adj.有理的，讲理的"},{"en":"reasonably","zh":"adv.合理地，适当地"},{"en":"reassure","zh":"v.使...放心"},{"en":"rebate","zh":"n.回扣，折扣"},{"en":"rebel","zh":"v.起义，反叛"},{"en":"rebellion","zh":"n.叛乱，起义"},{"en":"rebuke","zh":"v.斥责"},{"en":"recall","zh":"v.想到，召回，取消"},{"en":"recede","zh":"v.归还，撤回"},{"en":"receipt","zh":"n.收到，收据"},{"en":"receive","zh":"v.收到，接待，  接见"},{"en":"receiver","zh":"n.受领人，听筒"},{"en":"recent","zh":"adj.近来的，新近的"},{"en":"recently","zh":"adv.近来，最近"},{"en":"reception","zh":"n.招待会，欢迎会"},{"en":"receptionist","zh":"n.接待员"},{"en":"recession","zh":"n.衰退"},{"en":"recipe","zh":"n.菜谱，配方"},{"en":"recipient","zh":"n.接受者"},{"en":"reciprocal","zh":"adj.相互的，互易的"},{"en":"recitation","zh":"n.朗诵"},{"en":"recite","zh":"v.背诵，朗诵，讲述"},{"en":"reckless","zh":"adj.鲁莽的"},{"en":"reckon","zh":"v.数，计算，认为"},{"en":"reclaim","zh":"v.收回，开垦"},{"en":"recognition","zh":"n.认出，承认"},{"en":"recognize","zh":"v.认出，识别，承认"},{"en":"recollect","zh":"v.回忆，追想"},{"en":"recollection","zh":"n.回忆"},{"en":"recommend","zh":"v.推荐，介绍，劝告"},{"en":"recommendation","zh":"n.推荐(书)"},{"en":"recompense","zh":"v.回报，赔偿"},{"en":"reconcile","zh":"v.使和好，调停"},{"en":"reconnaissance","zh":"n.探索，勘查"},{"en":"record","zh":"v.记录，录音  n.记录"},{"en":"recorder","zh":"n.记录员，录音机"},{"en":"recourse","zh":"n.求助"},{"en":"recover","zh":"v.寻回，恢复，复原"},{"en":"recovery","zh":"n.寻回，恢复"},{"en":"recreation","zh":"n.消遣，文娱活动"},{"en":"recruit","zh":"v.招募，征兵"},{"en":"recruitment","zh":"n.招募"},{"en":"rectangle","zh":"n.长方形，矩形"},{"en":"rectification","zh":"n.纠正"},{"en":"rectify","zh":"v.纠正，订正"},{"en":"recur","zh":"v.再发生，复发"},{"en":"recurrence","zh":"n.再发生"},{"en":"red","zh":"adj.红的  n.红色"},{"en":"redeem","zh":"v.买回，赎回"},{"en":"redound","zh":"v.增加，促进"},{"en":"reduce","zh":"v.减少，贬为"},{"en":"reduction","zh":"n.减少，缩减"},{"en":"reed","zh":"n.芦苇，芦笛"},{"en":"reef","zh":"n.礁石"},{"en":"reel","zh":"n.卷，线轴  v.卷绕"},{"en":"reexport","zh":"v.再出口"},{"en":"refer","zh":"v.查阅，提及"},{"en":"referee","zh":"n.裁判员"},{"en":"reference","zh":"n.参考(书)，推荐书"},{"en":"referent","zh":"n.被谈到的事"},{"en":"refine","zh":"v.精炼，精制"},{"en":"refined","zh":"adj.精炼的，精的"},{"en":"refinement","zh":"n.精炼"},{"en":"refinery","zh":"n.精炼厂"},{"en":"reflect","zh":"v.反射，反映，反省"},{"en":"reflection","zh":"n.反射，映象，反思"},{"en":"reform","zh":"v.改革，改造"},{"en":"refrain","zh":"v.抑制"},{"en":"refresh","zh":"v.使清醒，使振作"},{"en":"refreshment","zh":"n.茶点，饮料"},{"en":"refrigerator","zh":"n.冰箱"},{"en":"refuge","zh":"n.藏身处，避难所"},{"en":"refugee","zh":"n.难民"},{"en":"refund","zh":"v.再投资 归还  n.退款"},{"en":"refusal","zh":"n.拒绝，谢绝"},{"en":"refuse","zh":"v.拒绝  n.渣，废物"},{"en":"refute","zh":"v.驳斥，反驳"},{"en":"regard","zh":"v.认为，尊重，关于"},{"en":"regarding","zh":"prep.关于"},{"en":"regardless","zh":"adv.不顾的(地)"},{"en":"regime","zh":"n.政体，制度"},{"en":"regiment","zh":"n.团，大量"},{"en":"region","zh":"n.地区，地域，地带"},{"en":"regional","zh":"adj.地区的，区域的"},{"en":"regionalization","zh":"n.区域化"},{"en":"regionalize","zh":"v.使区域化"},{"en":"register","zh":"v.登记，注册，挂号"},{"en":"registered","zh":"adj.登记的，注册的"},{"en":"registration","zh":"n.登记"},{"en":"regret","zh":"v.懊悔  n.遗憾"},{"en":"regretful","zh":"adj.遗憾的"},{"en":"regretfully","zh":"adv.遗憾地"},{"en":"regrettable","zh":"adj.可遗憾的"},{"en":"regular","zh":"adj.正常的，有规律的"},{"en":"regularity","zh":"n.整齐，规律"},{"en":"regularly","zh":"adv.整齐地，有规律地"},{"en":"regulate","zh":"v.管理，调整"},{"en":"regulation","zh":"n.管理，规则，法令"},{"en":"rehearsal","zh":"n.排练，彩排"},{"en":"rehearse","zh":"v.排练"},{"en":"reign","zh":"n.统治  v.统治，盛行"},{"en":"reimburse","zh":"v.偿还"},{"en":"reimbursement","zh":"n.偿还，还款"},{"en":"rein","zh":"n.缰绳  v.驾驭，约束"},{"en":"reinforce","zh":"v.增援，加强"},{"en":"reinforcement","zh":"n.加强，援兵"},{"en":"reiterate","zh":"v.重申"},{"en":"reject","zh":"v.拒绝"},{"en":"rejection","zh":"n.拒绝"},{"en":"rejoice","zh":"v.欢欣，使喜悦"},{"en":"relate","zh":"v.叙述，关联，涉及"},{"en":"related","zh":"adj.与...有关的"},{"en":"relation","zh":"n.关系，得害关系"},{"en":"relationship","zh":"n.关系，联系"},{"en":"relative","zh":"n.亲戚  adj.有关系的"},{"en":"relatively","zh":"adv.比较地，相对地"},{"en":"relativity","zh":"n.相关性，相对论"},{"en":"relax","zh":"v.松弛，舒张，休息"},{"en":"relaxation","zh":"n.放松，松弛"},{"en":"relay","zh":"v.转播，中继"},{"en":"release","zh":"v.释放，透露，发行"},{"en":"relevant","zh":"adj.相关的"},{"en":"reliability","zh":"n.可靠性"},{"en":"reliable","zh":"adj.可靠的，可依赖的"},{"en":"reliance","zh":"n.依靠，信赖"},{"en":"relief","zh":"n.解除，减轻，安慰"},{"en":"relieve","zh":"v.解除，减轻，换班"},{"en":"religion","zh":"n.宗教(信仰)"},{"en":"religious","zh":"adj.宗教的，信教的"},{"en":"relinquish","zh":"v.放弃"},{"en":"relish","zh":"n.味道，风味"},{"en":"reluctance","zh":"n.不愿，勉强"},{"en":"reluctant","zh":"adj.不愿的，勉强的"},{"en":"rely","zh":"v.依靠，依赖"},{"en":"remain","zh":"n.依旧的，剩余，逗留"},{"en":"remainder","zh":"n.剩余部分"},{"en":"remains","zh":"n.剩余，遗迹，遗体"},{"en":"remark","zh":"v.说起，留意，评论"},{"en":"remarkable","zh":"adj.显著的，异常的"},{"en":"remedy","zh":"n.药品，治疗(方法)"},{"en":"remember","zh":"v.记得，想起，记住"},{"en":"remembrance","zh":"n.记得，记忆"},{"en":"remind","zh":"v.提醒，使想起"},{"en":"reminiscence","zh":"n.回想，回忆，怀念"},{"en":"reminiscent","zh":"adj.使想起...的"},{"en":"remit","zh":"v.汇款，汇出"},{"en":"remittance","zh":"n.汇款"},{"en":"remnant","zh":"n.残余，残迹"},{"en":"remote","zh":"adj.遥远的，疏远的"},{"en":"remoteness","zh":"n.遥远，疏远"},{"en":"removal","zh":"n.移开，除去，移居"},{"en":"remove","zh":"v.移开，除去，罢免"},{"en":"remuneration","zh":"n.列举"},{"en":"renaissance","zh":"n.(文艺)复兴"},{"en":"render","zh":"v.使得，给予，翻译"},{"en":"renew","zh":"v.更新，续期"},{"en":"renewable","zh":"adj.可续期的"},{"en":"renewal","zh":"n.更新，续订"},{"en":"rent","zh":"n.租金  v.租"},{"en":"rental","zh":"adj.租借的，租金的"},{"en":"repair","zh":"v.修理，纠正"},{"en":"repairmen","zh":"n.修理，修补，纠正"},{"en":"repay","zh":"v.偿付，报答"},{"en":"repeal","zh":"v.撤消，废除"},{"en":"repeat","zh":"v.重复，背诵"},{"en":"repeatedly","zh":"adj.重复地，一再地"},{"en":"repel","zh":"v.驱逐，推开"},{"en":"repent","zh":"v.后悔，悔悟"},{"en":"repetition","zh":"n.重复，反复，复制"},{"en":"repetitive","zh":"adj.重复的，反复的"},{"en":"replace","zh":"v.归还原处，代替"},{"en":"replacement","zh":"n.归回，代替(物)"},{"en":"replenish","zh":"v.补充"},{"en":"replenishment","zh":"n.补充(货物)"},{"en":"reply","zh":"v.回答，答复"},{"en":"report","zh":"v.报告，报导，报道"},{"en":"reportage","zh":"n.报告文学"},{"en":"reporter","zh":"n.报告人，记者"},{"en":"represent","zh":"v.表示，表现，代表"},{"en":"representation","zh":"n.表示，代表"},{"en":"representative","zh":"adj.代表"},{"en":"reproach","zh":"v.责备，指责"},{"en":"reproduce","zh":"v.复制，再造，繁殖"},{"en":"reproduction","zh":"n.复制(器)"},{"en":"reptile","zh":"n.爬行动物"},{"en":"republic","zh":"n.共和国"},{"en":"republican","zh":"adj.共和(派)的"},{"en":"repudiate","zh":"n.拒绝接收，拒付"},{"en":"reputable","zh":"adj.声誉好的"},{"en":"reputation","zh":"n.名声，声誉"},{"en":"repute","zh":"n.声誉  v.看作，评价"},{"en":"request","zh":"n.请求"},{"en":"require","zh":"v.需要，请求"},{"en":"requirement","zh":"n.要求，需要"},{"en":"requisite","zh":"adj.必要的，需要的"},{"en":"rescind","zh":"adj.退还，取消"},{"en":"rescue","zh":"v.救援，救出"},{"en":"research","zh":"v.调查，研究"},{"en":"researcher","zh":"n.调查者，研究人员"},{"en":"resemblance","zh":"n.相仿，类似"},{"en":"resemble","zh":"v.象，类似"},{"en":"resent","zh":"v.不满于，愤恨"},{"en":"resentful","zh":"adj.不满的，怨恨的"},{"en":"resentment","zh":"n.不满，愤恨"},{"en":"reservation","zh":"n.贮存物，预定"},{"en":"reserve","zh":"v.贮备，保存，预定"},{"en":"reservoir","zh":"n.水库"},{"en":"reside","zh":"v.居住，存在"},{"en":"residence","zh":"n.住宅，住处"},{"en":"resident","zh":"n.居民"},{"en":"residual","zh":"adj.剩余的"},{"en":"resign","zh":"v.辞职"},{"en":"resignation","zh":"n.辞职"},{"en":"resist","zh":"v.抵抗，忍住"},{"en":"resistance","zh":"n.抵抗，阻力，反感"},{"en":"resistant","zh":"n.抵抗的，反对的"},{"en":"resolute","zh":"adj.坚决的，果断的"},{"en":"resolution","zh":"n.决议，决定，决心"},{"en":"resolutely","zh":"adj.坚决地，果断地"},{"en":"resolve","zh":"v.决定，解决，分解"},{"en":"resort","zh":"v.诉诸，求助  n.胜地"},{"en":"resource","zh":"n.资源，机智，策略"},{"en":"respect","zh":"v.尊重，重视，尊敬"},{"en":"respectable","zh":"adj.可敬的"},{"en":"respectful","zh":"adj.恭敬的，尊重的"},{"en":"respectfully","zh":"adv.恭敬地"},{"en":"respective","zh":"adj.各自的，各个的"},{"en":"respectively","zh":"adv.各自，分别地"},{"en":"respond","zh":"v.答复，反应，响应"},{"en":"response","zh":"v.答复，反应，响应"},{"en":"responsibility","zh":"n.责任，职责"},{"en":"responsible","zh":"adj.负责的，尽责的"},{"en":"rest","zh":"v.休息  n.休息，休止"},{"en":"restaurant","zh":"n.饭馆，餐厅"},{"en":"restless","zh":"adj.没休息的，不安的"},{"en":"restock","zh":"v.重新进货"},{"en":"restore","zh":"v.恢复，复原，归还"},{"en":"restrain","zh":"v.抑制，制止"},{"en":"restraint","zh":"n.抑制，自制"},{"en":"restrict","zh":"v.限制，约束"},{"en":"restriction","zh":"n.限制，约束"},{"en":"restrictive","zh":"n.限制的"},{"en":"result","zh":"n.结果，效果，后果"},{"en":"resultant","zh":"adj.结果的，合成的"},{"en":"resume","zh":"v.继续，再度"},{"en":"resume","zh":"n.个人简历，摘要"},{"en":"retail","zh":"v.零售"},{"en":"retailer","zh":"n.零售商"},{"en":"retain","zh":"v.保留，记忆，雇"},{"en":"retell","zh":"v.复述"},{"en":"retire","zh":"v.退休，退隐，就寝"},{"en":"retirement","zh":"n.退休，隐居"},{"en":"retort","zh":"v.反驳，回嘴"},{"en":"retreat","zh":"v.退却，撤退"},{"en":"retroactive","zh":"adj.可追溯的"},{"en":"return","zh":"v.回归，归还  n.归来"},{"en":"reveal","zh":"v.揭露，透露，显示"},{"en":"revenge","zh":"v.报仇，报复"},{"en":"revenue","zh":"n.岁入，收入"},{"en":"reverence","zh":"n.尊敬，崇敬"},{"en":"reverse","zh":"adj.颠倒的，相反的"},{"en":"revert","zh":"v.回复到，重议"},{"en":"review","zh":"v.检查，复习"},{"en":"revise","zh":"v.修改，校订，复习"},{"en":"revision","zh":"n.修改，修订"},{"en":"revival","zh":"n.复苏，再生"},{"en":"revive","zh":"v.苏醒，复苏"},{"en":"revoke","zh":"v.废除，取消，撤回"},{"en":"revolt","zh":"v.起义，反抗"},{"en":"revolution","zh":"n.革命，变革"},{"en":"revolutionary","zh":"adj.革命的"},{"en":"revolve","zh":"v.旋转，绕行"},{"en":"reward","zh":"n.报酬，酬金，报答"},{"en":"rewarding","zh":"adj.有收获的"},{"en":"rheumatism","zh":"n.风湿病"},{"en":"rhyme","zh":"n.韵，脚韵"},{"en":"rhythm","zh":"n.韵律，节奏"},{"en":"rib","zh":"n.肋，肋骨"},{"en":"ribbon","zh":"n.带子，缎带"},{"en":"rice","zh":"n.稻子，大米，米饭"},{"en":"rich","zh":"adj.富的，富饶的"},{"en":"richness","zh":"n.富饶，富有"},{"en":"rid","zh":"v.使摆脱，使除去"},{"en":"riddle","zh":"n.谜语，谜"},{"en":"ride","zh":"v.乘坐，骑  n.乘车"},{"en":"ridge","zh":"n.山脉，岭，屋脊"},{"en":"ridicule","zh":"v.嘲笑，挖苦"},{"en":"rediculous","zh":"adj.可笑的，荒谬的"},{"en":"rifle","zh":"n.步枪，来福枪"},{"en":"right","zh":"adj.正确的，右的"},{"en":"righteous","zh":"adj.正直的，公正的"},{"en":"rigid","zh":"adj.僵硬的，严厉的"},{"en":"rigidity","zh":"adj.僵硬，严厉，死板"},{"en":"rigor","zh":"n.严格，严肃"},{"en":"rigorous","zh":"adj.严厉的，酷热的"},{"en":"rim","zh":"n.边缘，眼镜架"},{"en":"ring","zh":"v.鸣，打铃，打电话"},{"en":"rinse","zh":"v.漂洗，润丝"},{"en":"riot","zh":"v.骚乱，闹事"},{"en":"riotous","zh":"adj.骚乱的，喧扰的"},{"en":"rip","zh":"v.撕破，扯碎"},{"en":"ripe","zh":"adj.熟的，成熟的"},{"en":"ripen","zh":"v.成熟，变热"},{"en":"ripple","zh":"n.波纹，涟漪"},{"en":"rise","zh":"v.起立，晋级，增长"},{"en":"risk","zh":"v.冒险，风险"},{"en":"risky","zh":"adj.有风险的，冒险的"},{"en":"rival","zh":"n.对手  adj.竞争的"},{"en":"rivalry","zh":"n.竞争，对抗"},{"en":"river","zh":"n.河，江"},{"en":"road","zh":"n.道路，路"},{"en":"roam","zh":"v.漫步，漫游"},{"en":"roar","zh":"v.吼，怒号，轰鸣"},{"en":"roast","zh":"v.烤，炙  adj.烘烤的"},{"en":"rob","zh":"v.抢劫，偷"},{"en":"robber","zh":"n.强盗"},{"en":"robbery","zh":"n.抢劫(案)"},{"en":"robe","zh":"n.长袍"},{"en":"robot","zh":"n.机器人"},{"en":"robust","zh":"adj.强壮的，粗壮的"},{"en":"rock","zh":"n.岩石  v.摇摆，摇晃"},{"en":"rock-bottom,","zh":"n格)最低(的)"},{"en":"rocket","zh":"n.火箭"},{"en":"rod","zh":"n.小棒，竿"},{"en":"role","zh":"n.角色，作用"},{"en":"roll","zh":"v.滚，卷，转动，压平"},{"en":"roller","zh":"n.滚筒，压路机"},{"en":"roman","zh":"adj.古罗马的n.罗马人"},{"en":"romance","zh":"n.浪漫文学，浪漫故事"},{"en":"romantic","zh":"adj.浪漫的，好幻想的"},{"en":"romanticism","zh":"n.浪漫主义"},{"en":"rome","zh":"n.罗马"},{"en":"roof","zh":"n.屋顶"},{"en":"room","zh":"n.房间，室，空间"},{"en":"rooster","zh":"n.公鸡"},{"en":"root","zh":"n.根，根源"},{"en":"rope","zh":"n.绳，索"},{"en":"rose","zh":"n.玫瑰，蔷薇"},{"en":"rosy","zh":"adj.玫瑰红的，幻想的"},{"en":"rot","zh":"v.腐烂，枯朽"},{"en":"rotary","zh":"adj.旋转的"},{"en":"rotate","zh":"v.旋转，循环，转流"},{"en":"rotation","zh":"n.旋转，更替"},{"en":"rotten","zh":"adj.腐烂的，发臭的"},{"en":"rough","zh":"adj.粗糙的，粗野的"},{"en":"roughly","zh":"adv.大约地，粗略地"},{"en":"round","zh":"adj.圆形的adv.在周围"},{"en":"roundabout","zh":"adj.迂回的，转弯抹角"},{"en":"rouse","zh":"v.唤醒，惊起"},{"en":"route","zh":"n.路线，航线"},{"en":"routine","zh":"n.日常事务"},{"en":"row","zh":"v.划船  n.排，列"},{"en":"royal","zh":"adj.王室的，皇家的"},{"en":"royalty","zh":"n.皇家，皇族"},{"en":"rub","zh":"v.擦，摩擦，涂抹"},{"en":"rubber","zh":"n.橡胶，橡皮"},{"en":"rubbish","zh":"n.垃圾，废物，废话"},{"en":"rude","zh":"adj.粗鲁的，下流的"},{"en":"rug","zh":"n.小块地毯"},{"en":"ruin","zh":"n.废墟  v.毁坏，破坏"},{"en":"ruinous","zh":"adj.毁灭性的"},{"en":"rule","zh":"n.法规，常规，统治"},{"en":"ruler","zh":"n.统治者，直尺"},{"en":"ruling","zh":"adj.统治的"},{"en":"rumor","zh":"v.传闻，谣言"},{"en":"run","zh":"v.跑，竞选，行驶"},{"en":"runner","zh":"n.奔跑者，赛跑运动员"},{"en":"running","zh":"adj.连续的  n.经营"},{"en":"rural","zh":"adj.农村的"},{"en":"rush","zh":"v.冲，冲进"},{"en":"russia","zh":"n.俄罗斯，俄语"},{"en":"russian","zh":"adj.俄国(人)的"},{"en":"rust","zh":"n.锈  v.生锈，衰退"},{"en":"rusty","zh":"adj.生锈的"},{"en":"ruthless","zh":"adj.无情的，冷酷的"},{"en":"sack","zh":"n.麻袋  v.解雇"},{"en":"sacred","zh":"adj.神圣的"},{"en":"sacrifice","zh":"v.牺牲(品)"},{"en":"sad","zh":"adj.悲哀的，可悲的"},{"en":"saddle","zh":"n.马鞍"},{"en":"sadly","zh":"adv.悲哀地，可惜"},{"en":"sadness","zh":"n.悲哀"},{"en":"safe","zh":"adj.安全的，无风险的"},{"en":"safely","zh":"adv.安全地，平安地"},{"en":"safety","zh":"n.安全  adj.保险的"},{"en":"sag","zh":"v.下跌"},{"en":"said","zh":"adj.上述的，该"},{"en":"sail","zh":"n.帆  v.行驶，开航"},{"en":"sailing","zh":"adj.启航的  n.航行"},{"en":"sailor","zh":"n.水手，海员"},{"en":"saint","zh":"n.圣人，圣徒"},{"en":"sake","zh":"n.缘故，利益"},{"en":"salad","zh":"n.色拉，拌凉菜"},{"en":"salability","zh":"n.适销性"},{"en":"salable","zh":"adj.有销路的，适销的"},{"en":"salary","zh":"n.工资，薪水"},{"en":"sale","zh":"n.出售，贱卖"},{"en":"sales","zh":"n.销售  adj.出售的"},{"en":"salesman","zh":"n.售货员，推销员"},{"en":"salmon","zh":"n.鲑，大马哈鱼"},{"en":"salt","zh":"n.盐"},{"en":"salty","zh":"adj.咸的"},{"en":"salute","zh":"v.行礼，致敬"},{"en":"salution","zh":"n.致敬"},{"en":"same","zh":"adj.同样的"},{"en":"sample","zh":"n.样品  v.抽样"},{"en":"sampling","zh":"n.抽样"},{"en":"sand","zh":"n.沙子"},{"en":"sandwich","zh":"n.三明治  v.夹入"},{"en":"sandy","zh":"adj.沙的，沙色的"},{"en":"sanitary","zh":"n.疗养院"},{"en":"santa","zh":"Clausn.圣诞老人"},{"en":"sarcasm","zh":"n.讽刺，挖苦"},{"en":"sarcastic","zh":"adj.讽刺的"},{"en":"sardine","zh":"n.沙丁鱼"},{"en":"satellite","zh":"n.卫星"},{"en":"satire","zh":"n.讽刺作品"},{"en":"satisfaction","zh":"n.满足，满意"},{"en":"satisfactorily","zh":"adv.圆满地"},{"en":"satisfactory","zh":"adj.令人满意的"},{"en":"satisfy","zh":"v.满足，使满意，偿还"},{"en":"saturation","zh":"n.浸透，饱和"},{"en":"saturday","zh":"n.星期六"},{"en":"saturn","zh":"n.土星"},{"en":"sauce","zh":"n.调味汁，酱油"},{"en":"saucer","zh":"n.茶碟"},{"en":"sausage","zh":"n.香肠，腊肠"},{"en":"savage","zh":"adj.野蛮的，残暴的"},{"en":"save","zh":"v.救，拯救，储蓄"},{"en":"savings","zh":"n.存款，储蓄额"},{"en":"saw","zh":"v.锯"},{"en":"say","zh":"v.说  n.发言(权)"},{"en":"scale","zh":"n.刻度，等级，秤"},{"en":"scaly","zh":"adj.鱼鳞状的"},{"en":"scan","zh":"v.浏览，细察，扫描"},{"en":"scandal","zh":"n.丑闻"},{"en":"scar","zh":"n.疤，疤痕"},{"en":"scarce","zh":"adj.缺乏的，罕见的"},{"en":"scarcely","zh":"adv.几乎没有，将近"},{"en":"scarcity","zh":"n.缺乏，不足"},{"en":"scare","zh":"v.惊吓  n.惊恐"},{"en":"scarf","zh":"n.围巾，头巾"},{"en":"scarlet","zh":"adj.n.猩红的，鲜红的"},{"en":"scatter","zh":"v.散布，撒播"},{"en":"scene","zh":"n.现场，情景，一场戏"},{"en":"scenery","zh":"n.风景，布景"},{"en":"scenic","zh":"adj.风景如画的"},{"en":"scent","zh":"n.气味，香味"},{"en":"schedule","zh":"n.时间表  v.排定"},{"en":"scheme","zh":"n.计划，方案，图谋"},{"en":"scholar","zh":"n.学者"},{"en":"scholarship","zh":"n.奖学金，学问"},{"en":"school","zh":"n.学校，上学，学系"},{"en":"schooling","zh":"n.学校教育"},{"en":"science","zh":"n.科学，学科"},{"en":"scientific","zh":"adj.科学的"},{"en":"scientist","zh":"n.科学家"},{"en":"scissors","zh":"n.剪刀"},{"en":"scoff","zh":"v.嘲笑，嘲弄"},{"en":"scold","zh":"v.训斥，责骂"},{"en":"scope","zh":"n.范围"},{"en":"scorch","zh":"v.烧焦"},{"en":"scorching","zh":"adj.灼热的"},{"en":"score","zh":"n.得分，成绩，二十"},{"en":"scorn","zh":"v.蔑视，不屑"},{"en":"scornful","zh":"adj.蔑视的，轻视的"},{"en":"scotch","zh":"n.苏格兰"},{"en":"scotsman","zh":"n.苏格兰人"},{"en":"scottish","zh":"adj.苏格兰的"},{"en":"scotland","zh":"n.苏格兰"},{"en":"scout","zh":"n.侦察员，童子军"},{"en":"scramble","zh":"v.爬，攀，争夺"},{"en":"scrap","zh":"n.碎片，废品，屑"},{"en":"scrape","zh":"v.擦，刮，凑集"},{"en":"scratch","zh":"v.抓破，挠  n.抓痕"},{"en":"scream","zh":"v.尖叫声"},{"en":"screech","zh":"v.尖叫(声)"},{"en":"screen","zh":"n.屏，帘  v.甄别"},{"en":"screw","zh":"v.拧  n.螺钉"},{"en":"screwdriver","zh":"n.螺丝刀，改锥"},{"en":"script","zh":"n.临时单据"},{"en":"scrub","zh":"v.擦洗，刷"},{"en":"scrutiny","zh":"n.细看，复查"},{"en":"sculptor","zh":"n.雕塑家"},{"en":"sculpture","zh":"n.雕塑，雕刻"},{"en":"sea","zh":"n.海，海洋"},{"en":"seal","zh":"v.封  n.图章，封条"},{"en":"seam","zh":"n.接缝"},{"en":"seaman","zh":"n.海员，水手"},{"en":"seaport","zh":"n.海港，港口"},{"en":"search","zh":"v.搜查，寻找"},{"en":"seashore","zh":"n.海滨"},{"en":"seaside","zh":"n.海边"},{"en":"season","zh":"n.季节  v.调味"},{"en":"seasonal","zh":"adj.季节性的"},{"en":"seat","zh":"n.座位，席位  v.就座"},{"en":"second","zh":"num.第二  n.第二，秒"},{"en":"secondary","zh":"adj.第二的，次要的"},{"en":"secondhand","zh":"adj.二手的，间接的"},{"en":"secondly","zh":"adv.第二，其次"},{"en":"secrecy","zh":"n.秘密(状态)"},{"en":"secret","zh":"adj.秘密的  n.秘密"},{"en":"secretariat","zh":"n.秘书处"},{"en":"secretary","zh":"n.秘书，部长，书记"},{"en":"section","zh":"n.部分，区域"},{"en":"sector","zh":"n.部分，部门"},{"en":"secure","zh":"adj.安全的，可靠的"},{"en":"security","zh":"n.安全，有价证券"},{"en":"see","zh":"v.看见，明白，查看"},{"en":"seed","zh":"n.种子  v.播种"},{"en":"seek","zh":"v.寻觅，企图获得"},{"en":"seem","zh":"v.好象，似乎"},{"en":"seemingly","zh":"adv.表面上"},{"en":"segment","zh":"n.部分，节，片"},{"en":"seize","zh":"v.抓住，夺取，占领"},{"en":"seizure","zh":"n.强占，没收"},{"en":"seldom","zh":"adv.难得，不常"},{"en":"select","zh":"v.挑选  adj.精选的"},{"en":"selection","zh":"n.选择，选集"},{"en":"self","zh":"n.自己，自身，品质"},{"en":"selfish","zh":"adj.自私的，利己的"},{"en":"sell","zh":"v.卖，出售"},{"en":"seller","zh":"n.卖方"},{"en":"seminar","zh":"n.研讨会，学术讲座"},{"en":"semiconductor","zh":"n.半导体"},{"en":"senate","zh":"n.参议院"},{"en":"senator","zh":"n.参议员"},{"en":"send","zh":"v.派遣，送，寄出，请"},{"en":"sender","zh":"n.寄信人"},{"en":"senior","zh":"adj.年长的，老资格的"},{"en":"sensation","zh":"n.感觉，感动"},{"en":"sensational","zh":"adj.轰动的"},{"en":"sense","zh":"n.感官，感觉，见识"},{"en":"senseless","zh":"adj.无意义的"},{"en":"sensible","zh":"adj.明智的，感知的"},{"en":"sensitive","zh":"adj.敏感的"},{"en":"sensitivity","zh":"n.灵敏度"},{"en":"sentence","zh":"n.句子  v.判决"},{"en":"sentiment","zh":"n.感情，情绪"},{"en":"sentimental","zh":"adj.多愁善感的"},{"en":"separate","zh":"v.分离，分隔，分手"},{"en":"separately","zh":"adv.分别地"},{"en":"separation","zh":"n.分离，分开"},{"en":"september","zh":"n.九月"},{"en":"sequence","zh":"n.一连串，顺序"},{"en":"serene","zh":"adj.清澈的，晴朗的"},{"en":"serenity","zh":"n.晴朗"},{"en":"series","zh":"n.系列，从书"},{"en":"serious","zh":"adj.慎重的，严重的"},{"en":"seriously","zh":"adv.严肃地，严重地"},{"en":"sermon","zh":"n.布道，说教"},{"en":"serpent","zh":"n.大蛇"},{"en":"servant","zh":"n.仆人"},{"en":"serve","zh":"v.服务，任职，服役"},{"en":"service","zh":"n.服务，公共设施"},{"en":"serviceable","zh":"adj.有用的，耐用的"},{"en":"session","zh":"n.会议，会期，市，盘"},{"en":"set","zh":"v.放，指定  n.全套"},{"en":"setting","zh":"n.安置，背景，环境"},{"en":"settle","zh":"v.解决，安置，支付"},{"en":"settlement","zh":"n.解决，结算"},{"en":"seven","zh":"num.七"},{"en":"seventeen","zh":"num.十七"},{"en":"seventh","zh":"num.第七，七分之一"},{"en":"seventy","zh":"num.七十"},{"en":"several","zh":"adj.几个"},{"en":"severe","zh":"adj.严厉的，苛刻的"},{"en":"severely","zh":"adv.严厉地，苛刻地"},{"en":"sew","zh":"v.缝纫"},{"en":"sex","zh":"n.性，性别"},{"en":"sexual","zh":"adj.性的，性感的"},{"en":"sexuality","zh":"n.性欲"},{"en":"shabby","zh":"adj.褴褛的，不体面的"},{"en":"shade","zh":"n.阴影，遮光物，浓淡"},{"en":"shadow","zh":"n.影子，阴影"},{"en":"shadowy","zh":"adj.有阴影的，模糊的"},{"en":"shady","zh":"adj.遮阴的，背阴的"},{"en":"shaft","zh":"n.柄，竖井"},{"en":"shake","zh":"v.摇动，发抖，握手"},{"en":"shall","zh":"v.将"},{"en":"shallow","zh":"adj.浅的，浅薄的"},{"en":"sham","zh":"n.赝品  v.假冒"},{"en":"shame","zh":"n.羞耻，耻辱"},{"en":"shameful","zh":"adj.可耻的，丢脸的"},{"en":"shampoo","zh":"n.洗发香波"},{"en":"shape","zh":"n.形状，轮廓  v.形成"},{"en":"shapeless","zh":"adj.不定形的"},{"en":"share","zh":"n.份，股份  v.分配"},{"en":"shark","zh":"n.鲨鱼"},{"en":"sharp","zh":"adj.锐利的，明显的"},{"en":"sharpen","zh":"v.削尖，磨快"},{"en":"sharpener","zh":"n.铅笔刀，磨石"},{"en":"sharply","zh":"adv.尖锐地，敏锐地"},{"en":"shatter","zh":"v.粉碎，毁坏"},{"en":"shave","zh":"v.剃，修脸"},{"en":"she","zh":"pron.她"},{"en":"shear","zh":"v.剪毛，切割"},{"en":"shed","zh":"v.流下  n.棚子"},{"en":"sheep","zh":"n.绵羊"},{"en":"sheepish","zh":"adj.胆怯的"},{"en":"sheer","zh":"adj.全然的，极薄的"},{"en":"sheet","zh":"n.被单，张，大片"},{"en":"shelf","zh":"n.架子，搁板"},{"en":"shell","zh":"n.壳，英，炮弹，外壳"},{"en":"shelter","zh":"n.躲避处，庇护"},{"en":"shepherd","zh":"n.牧羊人"},{"en":"sheriff","zh":"n.郡长，警官"},{"en":"shield","zh":"n.盾牌  v.防护"},{"en":"shift","zh":"v.转变  n.转移，轮班"},{"en":"shilling","zh":"n.先令"},{"en":"shine","zh":"v.发光，照射，照耀"},{"en":"shiny","zh":"adj.耀眼的"},{"en":"ship","zh":"n.船，舰  v.船运"},{"en":"shipbuilding","zh":"n.造船业"},{"en":"shipmail","zh":"n.随船带交"},{"en":"shipment","zh":"n.船运，一船货"},{"en":"shipowner","zh":"n.船主"},{"en":"shipping","zh":"n.船运，装运"},{"en":"shipwreck","zh":"n.(船只)失事"},{"en":"shipyard","zh":"n.船坞"},{"en":"shirt","zh":"n.衬衣"},{"en":"shiver","zh":"v.发抖"},{"en":"shock","zh":"n.震惊，电击  v.震动"},{"en":"shoe","zh":"n.鞋"},{"en":"shoemaker","zh":"n.鞋匠"},{"en":"shoot","zh":"v.射击，发芽  n.嫩芽"},{"en":"shop","zh":"n.商店，车间"},{"en":"shopkeeper","zh":"n.店主"},{"en":"shopping","zh":"n.购物"},{"en":"shore","zh":"n.岸，滨"},{"en":"short","zh":"adj.短的，矮的"},{"en":"shortage","zh":"n.缺少，不足"},{"en":"shortcoming","zh":"n.短处，缺点"},{"en":"shortcut","zh":"n.捷径"},{"en":"shorten","zh":"v.缩短"},{"en":"shorthand","zh":"n.速记"},{"en":"shortly","zh":"adv.立刻，不久"},{"en":"shorts","zh":"n.短裤"},{"en":"short-weight,","zh":""},{"en":"shot","zh":"n.射击，弹丸"},{"en":"should","zh":"v.应该，会"},{"en":"shoulder","zh":"n.肩膀"},{"en":"shout","zh":"v.叫喊"},{"en":"shove","zh":"v.推，推开"},{"en":"shovel","zh":"n.铲子"},{"en":"show","zh":"v.显示，表明  n.演出"},{"en":"shower","zh":"n.阵雨，淋浴"},{"en":"showroom","zh":"n.展室，陈列室"},{"en":"shrewd","zh":"adj.机敏的，精明的"},{"en":"shriek","zh":"v.尖叫(声)"},{"en":"shrill","zh":"v.刺耳的  v.尖叫"},{"en":"shrine","zh":"n.神龛"},{"en":"shrimp","zh":"n.虾"},{"en":"shrink","zh":"v.收缩，畏缩"},{"en":"shroud","zh":"n.遮蔽物"},{"en":"shrub","zh":"n.灌木"},{"en":"shrug","zh":"v.耸肩"},{"en":"shuffle","zh":"v.拖脚走"},{"en":"shun","zh":"v.躲避，躲开"},{"en":"shut","zh":"v.关闭，合拢"},{"en":"shutter","zh":"n.百叶窗，快门"},{"en":"shuttle","zh":"n.梭  v.穿梭"},{"en":"shy","zh":"adj.害羞的，腼腆的"},{"en":"sick","zh":"adj.有病的，厌恶的"},{"en":"sickness","zh":"n.病"},{"en":"sickle","zh":"n.镰刀"},{"en":"side","zh":"n.边，面，侧面，一方"},{"en":"sidewalk","zh":"n.人行道"},{"en":"sideways","zh":"adv.侧面地"},{"en":"siege","zh":"v.包围，围攻"},{"en":"sieve","zh":"n.筛子"},{"en":"sift","zh":"v.筛，细查"},{"en":"sigh","zh":"v.叹息，叹气"},{"en":"sight","zh":"n.视力，情景"},{"en":"sightseeing","zh":"n.观光，游览"},{"en":"sign","zh":"n.告示，迹象，符号"},{"en":"signal","zh":"n.信号  v.做手势"},{"en":"signature","zh":"n.签字"},{"en":"significance","zh":"n.重要性，意义"},{"en":"significant","zh":"adj.重要的，有意义的"},{"en":"signify","zh":"v.表示，意味"},{"en":"signpost","zh":"n.路标，广告柱"},{"en":"silence","zh":"n.寂静，沉默"},{"en":"silent","zh":"adj.寂静的，沉默的"},{"en":"silicon","zh":"n.硅"},{"en":"silk","zh":"n.丝，绸  adj.丝的"},{"en":"silky","zh":"adj.丝绸般的"},{"en":"silly","zh":"adj.糊涂的，愚蠢的"},{"en":"silver","zh":"n.银，银餐具"},{"en":"similar","zh":"adj.类似的，相象的"},{"en":"similarity","zh":"n.类似，相似"},{"en":"simple","zh":"adj.简单的，朴素的"},{"en":"simplicity","zh":"n.简单，简朴，单纯"},{"en":"simplify","zh":"v.简单化"},{"en":"simply","zh":"adv.简单地，仅"},{"en":"simulate","zh":"v.假装，佯伪"},{"en":"simultaneous","zh":"adj.同时(发生)的"},{"en":"simultaneously","zh":"adv.同时地"},{"en":"sin","zh":"n.罪，罪恶"},{"en":"since","zh":"prep.自从  conj.既然"},{"en":"sincere","zh":"adj.真诚的，诚挚的"},{"en":"sincerely","zh":"adv.真诚地"},{"en":"sincerity","zh":"n.真诚，诚挚"},{"en":"sinful","zh":"adj.有罪的，罪恶的"},{"en":"sing","zh":"v.唱"},{"en":"singer","zh":"n.歌手"},{"en":"single","zh":"adj.单个的，单身的"},{"en":"singular","zh":"adj.非凡的，单数的"},{"en":"sink","zh":"v.沉，下落  n.水槽"},{"en":"sir","zh":"n.先生"},{"en":"siren","zh":"n.汽笛，报警器"},{"en":"sister","zh":"n.姊，妹"},{"en":"sit","zh":"v.坐，栖息"},{"en":"site","zh":"n.场所，场地"},{"en":"situate","zh":"v.位于，坐落在"},{"en":"situation","zh":"n.形势，局面"},{"en":"six","zh":"num.六"},{"en":"sixteen","zh":"num.十六"},{"en":"sixth","zh":"num.第六，六分之一"},{"en":"sixty","zh":"num.六十"},{"en":"sizable","zh":"adj.相当大的"},{"en":"size","zh":"n.大小，规模，尺寸"},{"en":"skate","zh":"n.冰鞋  v.滑冰"},{"en":"skating","zh":"n.滑冰，溜冰"},{"en":"skeleton","zh":"n.骨架"},{"en":"sketch","zh":"n.素描，速写，草图"},{"en":"ski","zh":"n.雪撬  v.滑雪"},{"en":"skiing","zh":"n.滑雪"},{"en":"skill","zh":"n.技能，技艺"},{"en":"skillful","zh":"adj.熟练的"},{"en":"skim","zh":"v.撇去，掠过，略谈"},{"en":"skin","zh":"n.皮，皮肤  v.剥皮"},{"en":"skip","zh":"v.跳过，遗漏"},{"en":"skirmish","zh":"n.小冲突"},{"en":"skirt","zh":"n.裙子"},{"en":"skull","zh":"n.颅骨"},{"en":"sky","zh":"n.天，天空"},{"en":"skyrocket","zh":"v.猛涨"},{"en":"skyscraper","zh":"n.摩天大楼"},{"en":"slack","zh":"adj.松驰的，不景气的"},{"en":"slam","zh":"v.砰地关上"},{"en":"slander","zh":"v.诽谤，污蔑"},{"en":"slang","zh":"n.俚语"},{"en":"slap","zh":"v.掌击，掴"},{"en":"slaughter","zh":"v.屠宰，屠杀"},{"en":"slave","zh":"n.奴隶  v.做苦工"},{"en":"slavery","zh":"n.奴隶制，奴役"},{"en":"slay","zh":"v.屠杀"},{"en":"sleep","zh":"v.睡眠"},{"en":"sleepy","zh":"adj.欲睡的"},{"en":"sleet","zh":"n.雨加雪"},{"en":"sleeve","zh":"n.袖子"},{"en":"slender","zh":"adj.细长的，苗条的"},{"en":"slice","zh":"n.薄片  v.切成薄片"},{"en":"slide","zh":"v.滑，溜"},{"en":"slight","zh":"adj.轻微的，纤瘦的"},{"en":"slightly","zh":"adv.轻微地，稍稍"},{"en":"slim","zh":"adj.苗条的"},{"en":"slip","zh":"v.滑，滑行，溜走"},{"en":"slipper","zh":"n.便鞋，拖鞋"},{"en":"slippery","zh":"adj.滑的"},{"en":"slit","zh":"v.割裂  n.狭口，裂缝"},{"en":"slogan","zh":"n.标语，口号"},{"en":"slope","zh":"v.倾斜  n.坡，坡度"},{"en":"slow","zh":"adj.慢的，迟钝的"},{"en":"slowdown","zh":"n.放慢，迟缓"},{"en":"slowly","zh":"adj.慢慢地"},{"en":"slum","zh":"n.贫民窟"},{"en":"slumber","zh":"n.睡眠，微睡"},{"en":"slump","zh":"n.暴跌，不景气"},{"en":"sly","zh":"adj.狡猾的"},{"en":"smack","zh":"n.滋味  v.劈啪地响"},{"en":"small","zh":"adj.小的，不重要的"},{"en":"smart","zh":"adj.聪明的，漂亮的"},{"en":"smash","zh":"v.打破，粉碎，猛撞"},{"en":"smell","zh":"v.嗅 发出气味  n.气味"},{"en":"smile","zh":"v.微笑"},{"en":"smog","zh":"n.烟雾"},{"en":"smoke","zh":"v.冒烟，抽烟  n.烟"},{"en":"smoker","zh":"n.抽烟者"},{"en":"smoking","zh":"n.抽烟"},{"en":"smooth","zh":"adj.平稳的，光滑的"},{"en":"smoothly","zh":"adv.顺利地，安稳地"},{"en":"smuggle","zh":"v.走私，夹带"},{"en":"smuggler","zh":"n.走私者"},{"en":"smuggling","zh":"n.走私"},{"en":"snack","zh":"n.快餐，小吃"},{"en":"snail","zh":"n.蜗牛"},{"en":"snake","zh":"n.蛇"},{"en":"snap","zh":"v.折断(声)"},{"en":"snatch","zh":"v.抢夺，攫取"},{"en":"sneak","zh":"v.偷偷地逃走、做"},{"en":"sneakers","zh":"n.旅游鞋"},{"en":"sneer","zh":"v.嘲笑，讥笑"},{"en":"sneeze","zh":"v.打喷嚏"},{"en":"sniff","zh":"v.嗅，闻"},{"en":"snob","zh":"n.势利小人"},{"en":"snobbery","zh":"n.势利"},{"en":"snobbish","zh":"adj.势利的"},{"en":"snore","zh":"v.打鼾"},{"en":"snow","zh":"n.雪  v.下雪"},{"en":"snowman","zh":"n.雪人"},{"en":"snowstorm","zh":"n.暴风雪"},{"en":"snowy","zh":"adj.有雪的，下雪的"},{"en":"so","zh":"adv.这样，也一样"},{"en":"soak","zh":"v.浸，吸水，湿透"},{"en":"soap","zh":"n.肥皂"},{"en":"soar","zh":"v.急速上升，暴涨"},{"en":"sob","zh":"v.呜咽，啜泣"},{"en":"sober","zh":"adj.清醒的，冷静的"},{"en":"so-called,","zh":""},{"en":"soccer","zh":"n.足球"},{"en":"sociable","zh":"adj.善交际的，社交的"},{"en":"social","zh":"adj.社会的，社会性的"},{"en":"socialism","zh":"n.社会主义"},{"en":"socialist","zh":"n.adj.社会主义者、的"},{"en":"society","zh":"n.社会，协会，社交界"},{"en":"sociologist","zh":"n.社会学家"},{"en":"sociology","zh":"n.社会学"},{"en":"sock","zh":"n.短袜"},{"en":"soda","zh":"n.苏打，碱，苏打水"},{"en":"sodium","zh":"n.钠"},{"en":"sofa","zh":"n.沙发，软椅"},{"en":"soft","zh":"adj.柔软的，温和的"},{"en":"soften","zh":"v.使柔软，变软"},{"en":"softly","zh":"adv.柔软地，温和地"},{"en":"softness","zh":"n.柔软，温和"},{"en":"software","zh":"n.软件"},{"en":"soil","zh":"n.土壤，国土，污秽"},{"en":"solar","zh":"adj.太阳的"},{"en":"soldier","zh":"n.士兵，兵"},{"en":"sole","zh":"adj.唯一的，单独的"},{"en":"solely","zh":"adv.唯一地，只"},{"en":"solemn","zh":"adj.正式的，严肃的"},{"en":"solicitor","zh":"n.律师"},{"en":"solid","zh":"adj.固体的，牢固的"},{"en":"solidarity","zh":"n.团结"},{"en":"solitary","zh":"adj.独自的，孤独的"},{"en":"solitude","zh":"n.寂寞，独居"},{"en":"solo","zh":"n.独唱，独奏"},{"en":"solution","zh":"n.解决，溶液"},{"en":"solve","zh":"v.解答，溶解"},{"en":"solvency","zh":"n.偿付能力"},{"en":"solvent","zh":"adj.有偿付能力的"},{"en":"some","zh":"adj.若干，某一"},{"en":"somebody","zh":"pron.某人，重要人物"},{"en":"somehow","zh":"adv.以某种方式"},{"en":"someone","zh":"pron.有人，某人"},{"en":"something","zh":"pron.某事，某物"},{"en":"sometime","zh":"adv.日后，曾经"},{"en":"sometimes","zh":"adv.有时，不时"},{"en":"somewhat","zh":"adv.稍微，有点"},{"en":"somewhere","zh":"adv.某地，到某处"},{"en":"son","zh":"n.儿子"},{"en":"song","zh":"n.歌，歌词，鸟鸣"},{"en":"son-in-","zh":"lawn.女婿"},{"en":"sonnet","zh":"n.十四行诗"},{"en":"sonyericsson","zh":"n.索尼愛立信通訊手機公司"},{"en":"soon","zh":"adv.不久，很快，早"},{"en":"soot","zh":"n.油烟，煤烟"},{"en":"soothe","zh":"v.安慰，使镇定"},{"en":"sophisticated","zh":"adj.复杂的，先进的"},{"en":"sophistication","zh":"n.世故"},{"en":"sore","zh":"adj.疼痛的，恼火的"},{"en":"sorrow","zh":"n.伤心，悲哀，忧患"},{"en":"sorrowful","zh":"adj.悲哀的，忧愁的"},{"en":"sorry","zh":"adj.难过的，遗憾的"},{"en":"sort","zh":"n.种类  v.分类，拣"},{"en":"soul","zh":"v.灵魂，心灵，人"},{"en":"sound","zh":"n.声，声音  v.听起来"},{"en":"soup","zh":"n.汤"},{"en":"sour","zh":"adj.酸的，不高兴的"},{"en":"source","zh":"n.来源，出处，源泉"},{"en":"south","zh":"n.南 南方  adj.南方的"},{"en":"southeast","zh":"n.东南(部)"},{"en":"southern","zh":"adj.南的，南方的"},{"en":"southward","zh":"adv.向南"},{"en":"southwest","zh":"n.西南(部)"},{"en":"souvenir","zh":"n.纪念品"},{"en":"sovereign","zh":"n.君主  adj.主权的"},{"en":"sovereignty","zh":"n.主权"},{"en":"sow","zh":"v.播种，散布  n.母猪"},{"en":"soy","zh":"n.酱油"},{"en":"space","zh":"n.空间，太空，空地"},{"en":"spacecraft","zh":"n.宇宙飞船"},{"en":"spaceship","zh":"n.太空船，宇宙飞船"},{"en":"spaceshuttle","zh":"n.航天飞机"},{"en":"spacious","zh":"adj.广阔的，宽敞的"},{"en":"spade","zh":"n.铲子，铁锹，黑桃"},{"en":"spain","zh":"n.西班牙"},{"en":"span","zh":"n.跨度；指距  v.跨越"},{"en":"spanish","zh":"adj.西班牙人(的)"},{"en":"spare","zh":"v.腾出时间adj.备用的"},{"en":"spark","zh":"n.火花，火星"},{"en":"sparkle","zh":"v.发火花，闪耀"},{"en":"sparrow","zh":"n.麻雀"},{"en":"spatial","zh":"adj.空间的"},{"en":"speak","zh":"v.说话，发言，讲"},{"en":"speaker","zh":"n.说话者，发言人"},{"en":"spear","zh":"n.矛，枪"},{"en":"special","zh":"adj.特别的，专门的"},{"en":"specialist","zh":"n.专家"},{"en":"specialize","zh":"v.专攻，专门研究"},{"en":"specialized","zh":"adj.专业的，专门的"},{"en":"specially","zh":"adv.特地，专门地"},{"en":"specialty","zh":"n.专业，专长"},{"en":"species","zh":"n.物种，种类"},{"en":"specific","zh":"adj.特殊的，明确的"},{"en":"specification","zh":"n.规格，明细表"},{"en":"specify","zh":"v.详细说明，指定"},{"en":"specimen","zh":"n.标本，样本"},{"en":"spectacle","zh":"n.眼镜，场面，壮观"},{"en":"spectacular","zh":"adj.壮观的"},{"en":"spectator","zh":"n.观众，旁观者"},{"en":"spectrum","zh":"n.光谱"},{"en":"speculate","zh":"v.推测，投机"},{"en":"speculation","zh":"n.推测，投机"},{"en":"speculator","zh":"n.投机商"},{"en":"speech","zh":"n.演说，语言能力"},{"en":"speed","zh":"n.速度  v.飞驰"},{"en":"speedy","zh":"adj.快速的"},{"en":"spell","zh":"v.拼写，咒语"},{"en":"spelling","zh":"n.拼音，拼写"},{"en":"spend","zh":"v.花费，消耗"},{"en":"sphere","zh":"n.球体，范围，领域"},{"en":"spice","zh":"n.香料，调味品"},{"en":"spicy","zh":"adj.辛辣的"},{"en":"spider","zh":"n.蜘蛛"},{"en":"spill","zh":"v.溢出，流出"},{"en":"spin","zh":"v.自转，纺"},{"en":"spiral","zh":"adj.螺旋(的)"},{"en":"spirit","zh":"n.精神，心灵  n.酒精"},{"en":"spiritual","zh":"adj.精神上的，心灵的"},{"en":"spit","zh":"v.吐，倾吐  n.唾液"},{"en":"spite","zh":"n.恶意，怨恨"},{"en":"splash","zh":"v.溅，泼"},{"en":"splendid","zh":"adj.辉煌的，灿烂的"},{"en":"split","zh":"v.劈，分割"},{"en":"spoil","zh":"v.损坏，宠坏"},{"en":"spokesman","zh":"n.发言人"},{"en":"sponge","zh":"n.海绵"},{"en":"sponsor","zh":"n.发起人，主办者"},{"en":"sponsorship","zh":"n.发起，主办"},{"en":"spontaneous","zh":"adj.自发的"},{"en":"spoon","zh":"n.汤匙"},{"en":"spoonful","zh":"adj.一匙的量"},{"en":"sport","zh":"v.运动，嬉戏"},{"en":"sportsman","zh":"n.运动员"},{"en":"sportsmanship","zh":"n.体育精神"},{"en":"spot","zh":"n.点，斑，污点，场所"},{"en":"sprain","zh":"v.扭伤"},{"en":"spray","zh":"n.水雾  v.喷射"},{"en":"spread","zh":"v.伸开，散布，传播"},{"en":"spring","zh":"v.跳跃，萌芽  n.春季"},{"en":"sprinkle","zh":"v.洒，撒，不细雨"},{"en":"sprout","zh":"n.幼芽  v.出芽"},{"en":"spur","zh":"v.刺激，鼓舞"},{"en":"spy","zh":"n.间谍"},{"en":"square","zh":"n.正方形，广场，平方"},{"en":"squash","zh":"v.压碎  n.果子汁"},{"en":"squat","zh":"v.蹲"},{"en":"squeeze","zh":"v.压，榨，挤"},{"en":"s.","zh":"s.n.(缩)轮船"},{"en":"squirrel","zh":"n.松鼠"},{"en":"stab","zh":"v.刺，戳"},{"en":"stability","zh":"n.稳定性"},{"en":"stable","zh":"adj.稳固的，稳定的"},{"en":"stack","zh":"v.推放，垛"},{"en":"stadium","zh":"n.露天运动场"},{"en":"staff","zh":"n.工作人员，棒子"},{"en":"stage","zh":"n.舞台，阶段  v.上演"},{"en":"stagger","zh":"v.蹒跚"},{"en":"stagnation","zh":"n.停滞"},{"en":"stain","zh":"n.污点，瑕疵  v.弄脏"},{"en":"stainless","zh":"adj.无瑕的，不锈的"},{"en":"stair","zh":"n.楼梯"},{"en":"staircase","zh":"n.扶手楼梯"},{"en":"stake","zh":"n.桩，赌注"},{"en":"stale","zh":"adj.陈旧的"},{"en":"stalk","zh":"n.主茎，叶柄"},{"en":"stall","zh":"n.厩，货摊"},{"en":"stammer","zh":"v.口吃，结巴"},{"en":"stamp","zh":"n.邮票，图章  v.盖章"},{"en":"stand","zh":"v.站立，坐落，忍受"},{"en":"standard","zh":"n.标准  adj.标准的"},{"en":"standardize","zh":"v.标准化"},{"en":"standing","zh":"adj.常务的  n.地位"},{"en":"standpoint","zh":"n.立场，观点"},{"en":"standstill","zh":"n.停顿"},{"en":"staple","zh":"n.钉书钉，主要产品"},{"en":"stapler","zh":"n.钉书机"},{"en":"star","zh":"n.星  v.主演"},{"en":"stare","zh":"v.凝视"},{"en":"start","zh":"v.开始，着手，发动"},{"en":"starting","zh":"n.出发，开始"},{"en":"startle","zh":"v.惊吓，使吃惊"},{"en":"starvation","zh":"n.饥饿"},{"en":"starve","zh":"v.挨饿，渴求"},{"en":"state","zh":"n.状态，国家，州"},{"en":"statement","zh":"n.声明，陈述"},{"en":"statesman","zh":"n.政治家，国务活动家"},{"en":"static","zh":"adj.静止的，静态的"},{"en":"station","zh":"n.站，台  v.驻扎"},{"en":"stationary","zh":"adj.固定的，稳定的"},{"en":"stationery","zh":"n.文具"},{"en":"statistical","zh":"adj.统计的"},{"en":"statistics","zh":"n.统计(学)"},{"en":"statue","zh":"n.雕像，铸像"},{"en":"status","zh":"n.形势，身分"},{"en":"statute","zh":"n.法令，章程，条例"},{"en":"stay","zh":"v.停留，暂住，保持"},{"en":"steadily","zh":"adv.稳固地，稳步地"},{"en":"steady","zh":"adj.平稳的，稳健的"},{"en":"steak","zh":"n.牛排，排骨"},{"en":"steal","zh":"v.偷窃"},{"en":"steam","zh":"n.汽，蒸汽  v.蒸"},{"en":"steamer","zh":"n.汽船"},{"en":"steel","zh":"n.钢"},{"en":"steep","zh":"adj.陡峭的"},{"en":"steer","zh":"v.驾驶，行驶"},{"en":"stem","zh":"n.茎"},{"en":"stencil","zh":"n.复写纸，蜡纸"},{"en":"step","zh":"n.脚步，台阶，步骤"},{"en":"stereo","zh":"n.立体声"},{"en":"sterling","zh":"adj.英镑的"},{"en":"stern","zh":"adj.严厉的，坚决的"},{"en":"stevedore","zh":"n.码头工人"},{"en":"stew","zh":"v.炖，煮  n.炖菜"},{"en":"steward","zh":"n.乘务员，男仆"},{"en":"stewardess","zh":"n.女乘务员，空姐"},{"en":"stick","zh":"n.枝，杆，手杖  v.扎"},{"en":"sticky","zh":"adj.黏的"},{"en":"stiff","zh":"adj.僵硬的，生硬的"},{"en":"still","zh":"adj.静止的  adv.仍旧"},{"en":"stillness","zh":"n.寂静，静止"},{"en":"stimulate","zh":"v.刺激，使兴奋"},{"en":"stimulation","zh":"n.刺激"},{"en":"sting","zh":"n.刺痛  v.刺，叮"},{"en":"stink","zh":"adj.臭的"},{"en":"stipulate","zh":"v.合同规定，约定"},{"en":"stipulation","zh":"n.规定"},{"en":"stir","zh":"v.搅拌，激起  n.骚动"},{"en":"stirring","zh":"adj.动人的"},{"en":"stitch","zh":"n.一针  v.缝合"},{"en":"stock","zh":"n.存货，股份  v.贮存"},{"en":"stocking","zh":"n.长袜"},{"en":"stomach","zh":"n.胃"},{"en":"stone","zh":"n.石头，石料，宝石"},{"en":"stony","zh":"adj.石头多的"},{"en":"stool","zh":"n.凳子"},{"en":"stoop","zh":"v.弯腰，屈从  n.俯身"},{"en":"stop","zh":"v.停止，终止  n.停止"},{"en":"storage","zh":"n.贮藏，货栈"},{"en":"store","zh":"n.商店  v.贮藏，储备"},{"en":"storey","zh":"n.楼层"},{"en":"storm","zh":"n.暴风雨，暴怒"},{"en":"stormy","zh":"adj.有暴风雨的"},{"en":"story","zh":"n.故事，小说，经历"},{"en":"stout","zh":"adj.肥胖的，结实的"},{"en":"stove","zh":"n.炉子，火炉"},{"en":"stow","zh":"v.装载，理舱"},{"en":"stowage","zh":"n.装载"},{"en":"straight","zh":"adj.直的  adv.笔直地"},{"en":"straightforward","zh":"adj.直爽的"},{"en":"straighten","zh":"v.弄直"},{"en":"strain","zh":"v.拉紧，扭伤，使紧张"},{"en":"strait","zh":"n.海峡"},{"en":"strand","zh":"n.(绳)股，缕"},{"en":"strange","zh":"adj.奇怪的，陌生的"},{"en":"stranger","zh":"n.新人，陌生人"},{"en":"strap","zh":"n.带，皮带"},{"en":"strategic","zh":"adj.战略的"},{"en":"strategy","zh":"n.战略，策略，计谋"},{"en":"straw","zh":"n.麦杆，稻草，吸管"},{"en":"strawberry","zh":"n.草莓"},{"en":"stray","zh":"v.迷路  adj.走失的"},{"en":"streak","zh":"n.纹理，条纹"},{"en":"stream","zh":"n.小溪，流"},{"en":"streamline","zh":"n.流线型  v.精简"},{"en":"street","zh":"n.大街"},{"en":"streetcar","zh":"n.有轨电车"},{"en":"strength","zh":"n.力气，力量，强度"},{"en":"strengthen","zh":"v.加强，巩固"},{"en":"stress","zh":"v.强调，压力"},{"en":"stretch","zh":"v.伸展，拉长  n.伸展"},{"en":"strict","zh":"adj.严格的，精确的"},{"en":"strictly","zh":"adv.严格地，绝对"},{"en":"stride","zh":"adv.阔步走  n.阔步"},{"en":"strife","zh":"n.冲突，争斗"},{"en":"strike","zh":"v.打，攻击，罢工"},{"en":"striking","zh":"adj.引人注目的"},{"en":"string","zh":"n.细绳，弦，一串"},{"en":"strip","zh":"v.剥  n.窄条"},{"en":"stripe","zh":"n.条纹"},{"en":"strive","zh":"v.努力，奋斗"},{"en":"stroke","zh":"n.敲，笔划  v.抚摸"},{"en":"stroll","zh":"v.散步，闲逛"},{"en":"stroller","zh":"n.散步者"},{"en":"strong","zh":"adj.强壮的，强烈的"},{"en":"strongly","zh":"adv.强烈地，强有力地"},{"en":"stronghold","zh":"n.堡垒，要塞"},{"en":"structural","zh":"adj.结构的，组织上的"},{"en":"structure","zh":"n.结构，构造，组织"},{"en":"struggle","zh":"v.斗争，奋斗"},{"en":"stubborn","zh":"adj.顽固的，倔强的"},{"en":"student","zh":"n.学生，研究人员"},{"en":"studio","zh":"n.画室，工作间"},{"en":"study","zh":"v.学习，研究"},{"en":"stuff","zh":"n.材料，东西  v.塞满"},{"en":"stuffy","zh":"adj.闷热的，不透气的"},{"en":"stumble","zh":"v.绊跌"},{"en":"stump","zh":"n.树桩，残茬"},{"en":"stupid","zh":"adj.愚蠢的，迟钝的"},{"en":"stupidity","zh":"n.愚蠢"},{"en":"sturdy","zh":"adj.健壮的"},{"en":"style","zh":"n.风格，时尚，作风"},{"en":"stylist","zh":"n.时装设计师"},{"en":"subdivide","zh":"v.细分，再分"},{"en":"subdue","zh":"v.战胜，征服"},{"en":"subject","zh":"n.题目，学科，主语"},{"en":"subjective","zh":"adj.主观的"},{"en":"subjunctive","zh":"adj.虚拟的"},{"en":"submarine","zh":"adj.海底的  n.潜水艇"},{"en":"submerge","zh":"v.浸没，淹没"},{"en":"submit","zh":"v.服从，呈交"},{"en":"subordinate","zh":"adj.下级的，辅助的"},{"en":"subordination","zh":"n.服从"},{"en":"subscribe","zh":"v.订购，订阅"},{"en":"subscription","zh":"n.预订，订购"},{"en":"subsequence","zh":"n.后果"},{"en":"subsequent","zh":"adj.以后的，后起的"},{"en":"subsequently","zh":"adv.后来，其后"},{"en":"subsidiary","zh":"adj.辅助的，次要的"},{"en":"substance","zh":"n.物质，实质"},{"en":"substantial","zh":"adj.可观的，实质的"},{"en":"substantiate","zh":"v.证实"},{"en":"substitute","zh":"v.代替，代用品"},{"en":"substitution","zh":"n.代替"},{"en":"subtle","zh":"adj.敏锐的，微妙的"},{"en":"subtract","zh":"v.减去"},{"en":"subtraction","zh":"n.减法，减去"},{"en":"suburb","zh":"n.郊区，郊外"},{"en":"suburban","zh":"adj.郊区的"},{"en":"subway","zh":"n.地铁"},{"en":"succeed","zh":"v.成功，后继"},{"en":"success","zh":"n.成功"},{"en":"successful","zh":"adj.成功的"},{"en":"successfully","zh":"adv.成功地"},{"en":"succession","zh":"n.接连，继任"},{"en":"successive","zh":"adj.接连的，连续的"},{"en":"successor","zh":"n.继承人，继任者"},{"en":"such","zh":"adj.这样的，如此的"},{"en":"suck","zh":"v.吮，咂"},{"en":"sudden","zh":"adj.突然的，意外的"},{"en":"suddenly","zh":"adv.突然，忽然"},{"en":"suffer","zh":"v.遭受，受苦，忍受"},{"en":"suffering","zh":"n.苦难"},{"en":"suffice","zh":"v.足够，满足需要"},{"en":"sufficient","zh":"adj.充足的，充分的"},{"en":"sufficiently","zh":"adv.充分地，足够地"},{"en":"suffix","zh":"n.后缀"},{"en":"sugar","zh":"n.糖"},{"en":"suggest","zh":"v.建议，暗示"},{"en":"suggestion","zh":"n.建议，示意"},{"en":"suicide","zh":"n.自杀"},{"en":"suit","zh":"n.一身西服，起诉"},{"en":"suitable","zh":"adj.合适的，适宜的"},{"en":"suitcase","zh":"n.手提箱"},{"en":"suite","zh":"n.随员，一套(房间)"},{"en":"sullen","zh":"adj.板着脸的"},{"en":"sultry","zh":"adj.闷热的"},{"en":"sum","zh":"n.总数，会计  v.总结"},{"en":"summarize","zh":"v.概括，总结"},{"en":"summary","zh":"n.概要  adj.概括的"},{"en":"summer","zh":"n.夏季"},{"en":"summit","zh":"n.顶峰，最高点"},{"en":"summon","zh":"v.召唤，召集"},{"en":"sun","zh":"n.太阳，阳光"},{"en":"sunburn","zh":"v.晒黑"},{"en":"sunday","zh":"n.星期日"},{"en":"sunflower","zh":"n.葵花"},{"en":"sunlight","zh":"n.阳光"},{"en":"sunny","zh":"adj.向阳的，晴朗的"},{"en":"sunrise","zh":"n.日出"},{"en":"sunset","zh":"n.日落"},{"en":"sunshine","zh":"n.日照，日光"},{"en":"super","zh":"adj.特级的，超级的"},{"en":"superb","zh":"adj.华丽的，超等的"},{"en":"superficial","zh":"adj.表面的，肤浅的"},{"en":"superinrtendent","zh":"n.管理人，负责人"},{"en":"superior","zh":"adj.优良的，上级的"},{"en":"superiority","zh":"n.优越(性)"},{"en":"supermarket","zh":"n.超级市场"},{"en":"supersede","zh":"v.代替"},{"en":"supersonic","zh":"adj.超音速的"},{"en":"superstition","zh":"n.迷信"},{"en":"superstitious","zh":"adj.迷信的"},{"en":"supervise","zh":"v.管理，监督，监考"},{"en":"supervision","zh":"n.监督"},{"en":"supervisor","zh":"n.监考人，监查"},{"en":"supper","zh":"n.晚餐"},{"en":"supplement","zh":"v.增补，补充"},{"en":"supplementary","zh":"adj.补充的"},{"en":"supplier","zh":"n.供应商"},{"en":"supply","zh":"v.供应，供给"},{"en":"support","zh":"v.支持，资助，支援"},{"en":"supporter","zh":"n.支持者"},{"en":"suppose","zh":"v.猜想，假设"},{"en":"supposing","zh":"conj.假使"},{"en":"suppress","zh":"v.镇压，压制，遏止"},{"en":"suppression","zh":"n.镇压，压制"},{"en":"supreme","zh":"adj.最高的"},{"en":"surcharge","zh":"n.附加费，超载"},{"en":"sure","zh":"adj.有把握的，一定的"},{"en":"surely","zh":"adv.一定，肯定，谅必"},{"en":"surface","zh":"n.表面  adj.表面的"},{"en":"surge","zh":"v.汹涌，波动"},{"en":"surgeon","zh":"n.外科医生"},{"en":"surgery","zh":"n.外科(学)"},{"en":"surmise","zh":"v.猜想，推测"},{"en":"surname","zh":"n.姓"},{"en":"surpass","zh":"v.超过，胜过"},{"en":"surplus","zh":"n.过剩  adj.剩余的"},{"en":"surprise","zh":"v.使惊诧  n.惊奇"},{"en":"surprising","zh":"adj.惊人的"},{"en":"surrender","zh":"v.放弃，交出，投降"},{"en":"surround","zh":"v.包围"},{"en":"surroundings","zh":"n.环境，周围事物"},{"en":"survey","zh":"v.视察，测量  n.调查"},{"en":"surveyor","zh":"n.调查人，检验人"},{"en":"survival","zh":"n.幸存，遗风"},{"en":"survive","zh":"v.幸免于，幸存"},{"en":"survivor","zh":"n.幸存者"},{"en":"suspect","zh":"v.怀疑  n.嫌疑犯"},{"en":"suspend","zh":"v.吊，悬，暂停，停学"},{"en":"suspense","zh":"n.暂停，中止"},{"en":"suspicion","zh":"n.怀疑，嫌疑"},{"en":"suspicious","zh":"adj.可疑的，猜疑的"},{"en":"sustain","zh":"v.支撑，遭受"},{"en":"swallow","zh":"n.燕子  v.吞咽"},{"en":"swamp","zh":"n.沼泽"},{"en":"swan","zh":"n.天鹅"},{"en":"swarm","zh":"n.群  v.云集"},{"en":"sway","zh":"v.摇晃，影响"},{"en":"swear","zh":"v.宣誓，诅咒"},{"en":"sweat","zh":"v.出汗  n.汗水"},{"en":"sweater","zh":"n.运动衫，毛衣"},{"en":"swede","zh":"n.瑞典人"},{"en":"sweden","zh":"n.瑞典"},{"en":"swedish","zh":"adj.瑞典人(的)"},{"en":"sweep","zh":"v.扫除，席卷"},{"en":"sweet","zh":"adj.甜的，甜蜜的"},{"en":"sweeten","zh":"v.变甜，加糖"},{"en":"sweetheart","zh":"n.心肝，宝贝"},{"en":"sweetness","zh":"n.甜味"},{"en":"swell","zh":"v.膨胀，肿"},{"en":"swift","zh":"adj.快的，迅速的"},{"en":"swim","zh":"v.游泳，游"},{"en":"swing","zh":"v.摇摆  n.秋千"},{"en":"swiss","zh":"n.瑞士人"},{"en":"switch","zh":"v.转换  n.开关"},{"en":"switzerland","zh":"n.瑞士"},{"en":"sword","zh":"n.剑"},{"en":"syllable","zh":"n.音节"},{"en":"symbol","zh":"n.象征，符号"},{"en":"symbolize","zh":"v.象征"},{"en":"symmetric","zh":"adj.对称的，匀称的"},{"en":"symmetry","zh":"n.对称"},{"en":"sympathetic","zh":"adj.同情的，有共鸣的"},{"en":"sympathize","zh":"v.同情"},{"en":"sympathy","zh":"n.同情，同感，共鸣"},{"en":"symphony","zh":"n.交响乐"},{"en":"symposium","zh":"n.座谈会，学术讨论会"},{"en":"symptom","zh":"n.症状，征兆"},{"en":"synonym","zh":"n.同义词"},{"en":"synthesis","zh":"n.综合，合成"},{"en":"synthetic","zh":"adj.合成的，人造的"},{"en":"system","zh":"n.系统，体制，制度"},{"en":"systematic","zh":"adj.系统的，有组织的"},{"en":"systematically","zh":"adv.有系统地"},{"en":"table","zh":"n.桌子，表格"},{"en":"tablet","zh":"n.药片"},{"en":"tabulate","zh":"v.制表，将...列表"},{"en":"tack","zh":"n.图钉"},{"en":"tackle","zh":"n.用具，辘轳  v.抓住"},{"en":"tact","zh":"n.机敏，圆滑"},{"en":"tactful","zh":"adj.机智的，老练的"},{"en":"tactics","zh":"n.战术，策略"},{"en":"tag","zh":"n.标签，货签"},{"en":"tail","zh":"n.尾巴，尾部"},{"en":"tailor","zh":"n.裁缝  v.缝制"},{"en":"take","zh":"v.拿，带，吃，乘"},{"en":"tale","zh":"n.故事"},{"en":"talent","zh":"n.人才，天资"},{"en":"talk","zh":"v.谈话  n.讲话，会谈"},{"en":"talkative","zh":"adj.罗嗦的"},{"en":"tall","zh":"adj.高的"},{"en":"tally","zh":"v.吻合，符合"},{"en":"tame","zh":"v.驯养，制报"},{"en":"tan","zh":"n.黄褐色  v.鞣草"},{"en":"tangle","zh":"v.缠绕，纠缠"},{"en":"tank","zh":"n.油箱，水箱，坦克"},{"en":"tanker","zh":"n.油轮"},{"en":"tap","zh":"v.叩击  n.轻敲"},{"en":"tape","zh":"n.条，带，磁带"},{"en":"tar","zh":"n.沥青，柏油"},{"en":"target","zh":"n.目标，对象，靶"},{"en":"tare","zh":"n.皮重"},{"en":"tariff","zh":"n.关税"},{"en":"task","zh":"n.工作，任务"},{"en":"taste","zh":"n.味道，趣味  v.品尝"},{"en":"tasteful","zh":"adj.有滋味的，好吃的"},{"en":"tax","zh":"n.税  v.征税"},{"en":"taxation","zh":"n.税(总称)，税务"},{"en":"taxi","zh":"n.出租汽车"},{"en":"tea","zh":"n.茶，茶叶"},{"en":"teach","zh":"v.教，教书，教导"},{"en":"teacher","zh":"n.教员，老师"},{"en":"teaching","zh":"n.教学，教导"},{"en":"teacup","zh":"n.茶杯"},{"en":"team","zh":"n.小队  v.协同工作"},{"en":"teapot","zh":"n.茶壶"},{"en":"tear","zh":"n.眼泪  v.撕，拔"},{"en":"tease","zh":"v.取笑，逗乐"},{"en":"technical","zh":"adj.技术的，技能的"},{"en":"technician","zh":"n.技术员，技师"},{"en":"technique","zh":"n.技术，技巧"},{"en":"technological","zh":"adj.技术的，工艺的"},{"en":"technology","zh":"n.技术，工艺"},{"en":"tedious","zh":"adj.腻烦的，乏味的"},{"en":"teenager","zh":"n.(十几岁的)少年"},{"en":"teens","zh":"n.十多岁"},{"en":"telefax","zh":"n.传真  v.发传真"},{"en":"telegram","zh":"n.电报"},{"en":"telegraph","zh":"n.电报"},{"en":"telephone","zh":"n.电话  v.打电话"},{"en":"telescope","zh":"n.望远镜"},{"en":"television","zh":"n.电视，电视机"},{"en":"telex","zh":"n.电传  v.发电传"},{"en":"tell","zh":"v.告诉，讲，说出"},{"en":"teller","zh":"n.出纳"},{"en":"temper","zh":"n.情绪，脾气"},{"en":"temperature","zh":"n.温度，体温"},{"en":"temple","zh":"n.庙，寺院，太阳穴"},{"en":"temporary","zh":"adj.暂时的，临时的"},{"en":"tempt","zh":"v.引诱，诱惑"},{"en":"tempatation","zh":"n.诱惑，引诱"},{"en":"ten","zh":"num.十"},{"en":"tenant","zh":"n.房客，承租人"},{"en":"tend","zh":"v.趋向，照料，投标"},{"en":"tendency","zh":"n.趋势，倾向"},{"en":"tender","zh":"n.投标人  adj.温柔的"},{"en":"tenis","zh":"n.网球"},{"en":"tenor","zh":"n.(支票)限期"},{"en":"tense","zh":"adj.紧张的  v.拉紧"},{"en":"tension","zh":"n.紧张状态，张力"},{"en":"tent","zh":"n.帐篷"},{"en":"tentative","zh":"adj.试探性的"},{"en":"tenth","zh":"num.第十，十分之一"},{"en":"term","zh":"n.期限，学期，术语"},{"en":"terminable","zh":"adj.可终止的"},{"en":"terminal","zh":"n.终点  adj.末端的"},{"en":"terminate","zh":"v.终止，结束"},{"en":"termination","zh":"n.终止，结束"},{"en":"terminology","zh":"n.术语(总称)"},{"en":"terrace","zh":"n.平台，台阶"},{"en":"terrible","zh":"adj.可怕的，极度的"},{"en":"terribly","zh":"adv.可怕地，极"},{"en":"terrific","zh":"adj.了不起的，极好的"},{"en":"terrify","zh":"v.惊吓，使恐怖"},{"en":"territory","zh":"n.领土，领域，地区"},{"en":"terror","zh":"n.恐怖，令人恐怖的事"},{"en":"terrorism","zh":"n.恐怖主义"},{"en":"terrorist","zh":"n.恐怖分子"},{"en":"test","zh":"v.测验，试验"},{"en":"testify","zh":"v.证明，证实"},{"en":"testimony","zh":"n.证据"},{"en":"text","zh":"n.正文，课文，原文"},{"en":"textbook","zh":"n.课本，教科书"},{"en":"textile","zh":"n.纺织品"},{"en":"textual","zh":"adj.课文的，正文的"},{"en":"than","zh":"conj.比，除...外"},{"en":"thank","zh":"v.谢谢，感谢"},{"en":"thankful","zh":"adj.感谢的，欣慰的"},{"en":"thanks","zh":"n.感谢  int.谢谢"},{"en":"thanksgiving","zh":"day]n.感恩节"},{"en":"that","zh":"adj.那 那个  adv.那么"},{"en":"the","zh":"(定冠词)那，这"},{"en":"theatre","zh":"n.剧场，戏剧，舞台"},{"en":"theatrical","zh":"adj.戏剧的"},{"en":"theft","zh":"n.偷盗"},{"en":"their","zh":"adj.他们的，它们的"},{"en":"them","zh":"pron.他(她)们，它们"},{"en":"theme","zh":"n.主题，题目"},{"en":"themselves","zh":"pron.他们、它们自己"},{"en":"then","zh":"adv.当时，然后，那么"},{"en":"theoretical","zh":"adj.理论的"},{"en":"theory","zh":"n.理论，学说"},{"en":"there","zh":"adv.那里，到那里"},{"en":"thereafter","zh":"adv.此后，其后"},{"en":"thereby","zh":"adv.因此，由此"},{"en":"therefor","zh":"adv.为此"},{"en":"therefore","zh":"adv.因而，所以"},{"en":"therefrom","zh":"adv.由此"},{"en":"therein","zh":"adv.在那里，其中"},{"en":"thereof","zh":"adv.及其，由此，它的"},{"en":"thereon","zh":"adv.关于那"},{"en":"therewith","zh":"adv.对此"},{"en":"thermometer","zh":"n.温度计"},{"en":"these","zh":"pron.这些"},{"en":"thesis","zh":"n.论文"},{"en":"they","zh":"pron.他(她)们，它们"},{"en":"thick","zh":"adj.厚的，浓的"},{"en":"thicken","zh":"v.加厚，变浓"},{"en":"thickness","zh":"n.厚，厚度，浓"},{"en":"thief","zh":"n.窃贼，小偷"},{"en":"thigh","zh":"n.大腿"},{"en":"thin","zh":"adj.薄的，瘦的"},{"en":"thing","zh":"n.东西，事情"},{"en":"think","zh":"v.想，相信，认为"},{"en":"thinking","zh":"n.思想"},{"en":"thinker","zh":"n.思想家"},{"en":"third","zh":"num.第三，三分之一"},{"en":"thirst","zh":"n.渴，渴望"},{"en":"thirsty","zh":"adj.渴的，渴望的"},{"en":"thirteen","zh":"num.十三"},{"en":"thirty","zh":"num.三十"},{"en":"this","zh":"adj.pron.这，这个"},{"en":"thorn","zh":"n.刺，荆棘"},{"en":"thorough","zh":"adj.充分的，彻底的"},{"en":"thoroughly","zh":"adv.充分地，彻底地"},{"en":"those","zh":"proadj.那些"},{"en":"though","zh":"conj.虽然，可是"},{"en":"thought","zh":"n.想法，思想，关怀"},{"en":"thoughtful","zh":"adj.深思的，体贴的"},{"en":"thoughtless","zh":"adj.轻率的，粗心的"},{"en":"thousand","zh":"num.千"},{"en":"thrash","zh":"v.抽打"},{"en":"thread","zh":"n.线，思路"},{"en":"threat","zh":"n.恐吓，威胁"},{"en":"threaten","zh":"v.恐吓，威胁"},{"en":"three","zh":"num.三"},{"en":"threshold","zh":"n.开端，门槛"},{"en":"thrift","zh":"n.节俭"},{"en":"thrifty","zh":"adj.节俭的"},{"en":"thrill","zh":"v.发抖  n.激动"},{"en":"thriller","zh":"n.惊险小说，电影"},{"en":"thrive","zh":"v.兴旺，繁荣"},{"en":"throat","zh":"n.咽喉"},{"en":"throne","zh":"n.王位"},{"en":"throng","zh":"n.一群人  v.挤满"},{"en":"through","zh":"prep.通过，借助"},{"en":"throughout","zh":"prep.贯穿  adv.全部"},{"en":"throw","zh":"v.投，扔，抛"},{"en":"thrust","zh":"v.强推，插入，刺"},{"en":"thumb","zh":"n.拇指"},{"en":"thumbtack","zh":"n.按钉，图钉"},{"en":"thunder","zh":"n.雷  v.隆隆响"},{"en":"thunderstorm","zh":"n.雷雨"},{"en":"thus","zh":"adv.如此，这样，因而"},{"en":"tick","zh":"n.滴答声  v.打勾号"},{"en":"ticket","zh":"n.票，标签，价目单"},{"en":"tickle","zh":"v.挠，搔，逗乐"},{"en":"tide","zh":"n.潮汐，潮流  v.度过"},{"en":"tidy","zh":"adj.整齐的，整洁的"},{"en":"tie","zh":"v.捆，打结  n.领带"},{"en":"tiger","zh":"n.虎"},{"en":"tight","zh":"adj.紧的，密封的"},{"en":"tighten","zh":"v.拉紧"},{"en":"tightly","zh":"adv.紧紧地，紧密地"},{"en":"tigress","zh":"n.母虎"},{"en":"tile","zh":"n.瓦，瓷砖"},{"en":"till","zh":"prep.直到"},{"en":"tilt","zh":"v.倾斜"},{"en":"timber","zh":"n.木材"},{"en":"time","zh":"n.时间，时候，次数"},{"en":"timely","zh":"adj.及时的"},{"en":"timetable","zh":"n.时刻表，时间表"},{"en":"timid","zh":"adj.胆怯的，害羞的"},{"en":"tin","zh":"n.锡，锡器"},{"en":"tiny","zh":"adj.微小的"},{"en":"tip","zh":"n.梢，尖，小费"},{"en":"tiptoe","zh":"v.用脚尖走"},{"en":"tire","zh":"v.疲劳，厌倦"},{"en":"tired","zh":"adj.疲劳的，厌倦的"},{"en":"tiresome","zh":"adj.使人厌倦的"},{"en":"tissue","zh":"n.组织，卫生纸"},{"en":"title","zh":"n.标题，题目，称号"},{"en":"to","zh":"prep.向，到"},{"en":"toad","zh":"n.蟾蜍，癞蛤蟆"},{"en":"toast","zh":"n.烤面包，祝酒  v.烘"},{"en":"tobacco","zh":"n.烟草"},{"en":"today","zh":"adv.今天 现在  n.今日"},{"en":"toe","zh":"n.脚趾，鞋头"},{"en":"together","zh":"adv.共同，一起，同时"},{"en":"toil","zh":"v.苦干"},{"en":"toilet","zh":"n.卫生间，便桶"},{"en":"token","zh":"n.象征，纪念章"},{"en":"tolerable","zh":"adj.可容忍的"},{"en":"tolerance","zh":"n.宽容，容忍"},{"en":"tolerant","zh":"adj.宽容的，宽大的"},{"en":"tolerate","zh":"v.容忍，宽容"},{"en":"toll","zh":"n.税"},{"en":"tomato","zh":"n.蕃茄，西红柿"},{"en":"tomb","zh":"n.坟"},{"en":"tombstone","zh":"n.墓碑"},{"en":"tomorrow","zh":"n.明天  adv.在明天"},{"en":"ton","zh":"n.吨"},{"en":"tone","zh":"n.语气，腔调，市况"},{"en":"tongue","zh":"n.舌，语言"},{"en":"tonight","zh":"n.今晚  adv.在今晚"},{"en":"tonnage","zh":"n.吨位，吨数"},{"en":"tonne","zh":"n.公吨"},{"en":"too","zh":"adv.也，非常"},{"en":"tool","zh":"n.工具，手段"},{"en":"tooth","zh":"n.牙齿"},{"en":"toothache","zh":"n.牙疼"},{"en":"toothbrush","zh":"n.牙刷"},{"en":"toothpaste","zh":"n.牙膏"},{"en":"top","zh":"n.顶，盖子  v.高于"},{"en":"topic","zh":"n.课题，主题"},{"en":"torch","zh":"n.火炬，手电筒"},{"en":"torment","zh":"v.折磨，虐待"},{"en":"torpedo","zh":"n.鱼雷"},{"en":"torrent","zh":"n.激流，山洪"},{"en":"tortoise","zh":"n.龟"},{"en":"torture","zh":"v.拷打，折磨"},{"en":"toss","zh":"v.向上扔，颠簸，辗转"},{"en":"total","zh":"adj.总  n.总和，合计"},{"en":"totally","zh":"adv.统统，完全地"},{"en":"touch","zh":"v.碰，接触，触动"},{"en":"tough","zh":"adj.坚韧的，难嚼烂的"},{"en":"tour","zh":"v.旅行，周游"},{"en":"tourism","zh":"n.旅游业"},{"en":"tourist","zh":"n.旅游者，游客"},{"en":"tow","zh":"v.拖，牵引"},{"en":"toward","zh":"prep.向，对于，将近"},{"en":"towel","zh":"n.毛巾"},{"en":"tower","zh":"n.塔  v.高耸"},{"en":"town","zh":"n.市镇，城市，闹市"},{"en":"toy","zh":"n.玩具"},{"en":"trace","zh":"n.痕迹，微量  v.追踪"},{"en":"track","zh":"n.径赛，轨道，路径"},{"en":"tractor","zh":"n.拖拉机"},{"en":"trade","zh":"n.贸易，交换  v.经商"},{"en":"trader","zh":"n.商人"},{"en":"trademark","zh":"n.商标"},{"en":"tradesman","zh":"n.商人"},{"en":"tradition","zh":"n.传统，惯例"},{"en":"traditional","zh":"adj.传统的"},{"en":"traffic","zh":"n.交通，交易，运输"},{"en":"tragedy","zh":"n.悲剧，惨事，灾难"},{"en":"tragic","zh":"adj.悲剧的，悲惨的"},{"en":"trail","zh":"v.拖曳，尾随  n.踪迹"},{"en":"train","zh":"n.列车，一列  v.训练"},{"en":"trainee","zh":"n.受训练者"},{"en":"trainer","zh":"n.教练"},{"en":"training","zh":"n.训练"},{"en":"traitor","zh":"n.叛徒"},{"en":"tram","zh":"n.有轨电车"},{"en":"tramp","zh":"n.跋涉，流浪者"},{"en":"trample","zh":"v.践踏，蹂躏"},{"en":"tranquil","zh":"adj.平静的，安宁的"},{"en":"transact","zh":"v.交易"},{"en":"transaction","zh":"n.交易"},{"en":"transfer","zh":"v.转移，转让"},{"en":"transferable","zh":"adj.可转让的"},{"en":"transform","zh":"v.转变，转化"},{"en":"transformation","zh":"n.转化，转变"},{"en":"transformer","zh":"n.变压器"},{"en":"transcient","zh":"adj.短暂的，瞬时的"},{"en":"transistor","zh":"n.晶体管(收音机)"},{"en":"transit","zh":"v.运输，转运"},{"en":"transition","zh":"n.过渡，转变"},{"en":"translate","zh":"v.翻译"},{"en":"translation","zh":"n.翻译，译文"},{"en":"translator","zh":"n.译音"},{"en":"transmission","zh":"n.传送，播送"},{"en":"transmit","zh":"v.传播，传导，发射"},{"en":"transparent","zh":"adj.透明的"},{"en":"transplant","zh":"v.移植"},{"en":"transport","zh":"v.运送  v.运输"},{"en":"transportation","zh":"n.运输，交通"},{"en":"transship","zh":"v.转运，转船"},{"en":"transshipment","zh":"n.转运"},{"en":"transverse","zh":"adj.横向的，横断的"},{"en":"trap","zh":"n.陷井，圈套  v.诱捕"},{"en":"traverse","zh":"v.横断，横过"},{"en":"travel","zh":"v.旅行，传导"},{"en":"traveler","zh":"n.旅行者"},{"en":"tray","zh":"n.托盘"},{"en":"tread","zh":"v.踩，践踏"},{"en":"treason","zh":"n.谋反，叛国"},{"en":"treasure","zh":"n.财宝，珍宝  v.珍藏"},{"en":"treasurer","zh":"n.司库"},{"en":"treat","zh":"v.对待，医治，论述"},{"en":"treatment","zh":"n.待遇，疗法"},{"en":"treaty","zh":"n.条约"},{"en":"tree","zh":"n.树"},{"en":"tremble","zh":"v.哆嗦，发抖"},{"en":"tremendous","zh":"adj.巨大的，惊人的"},{"en":"trench","zh":"n.沟，壕"},{"en":"trend","zh":"n.走向，趋势"},{"en":"trial","zh":"n.审讯，尝试，试验"},{"en":"triangle","zh":"n.三角(形)"},{"en":"triangular","zh":"adj.三角形的，三方的"},{"en":"tribe","zh":"n.部落"},{"en":"tribute","zh":"n.颂词，献礼"},{"en":"trick","zh":"n.诡计，骗局，伎俩"},{"en":"trickle","zh":"v.滴下，流下"},{"en":"tricky","zh":"adj.巧妙的，狡猾的"},{"en":"trifle","zh":"n.小事，琐事"},{"en":"trigger","zh":"n.扳机  v.触发"},{"en":"trim","zh":"v.修剪，修整"},{"en":"trip","zh":"n.旅行，远足"},{"en":"triple","zh":"adj.三倍的，三重的"},{"en":"triplicate","zh":"n.一式二份"},{"en":"triumph","zh":"n.胜利  v.战胜"},{"en":"triumphant","zh":"adj.得胜的，得意的"},{"en":"trivial","zh":"adj.琐碎的"},{"en":"trolley","zh":"n.手推车，电车"},{"en":"troop","zh":"n.队，军队"},{"en":"tropic","zh":"n.回归线，热带"},{"en":"tropical","zh":"adj.热带的"},{"en":"trot","zh":"v.小跑，快步走"},{"en":"trouble","zh":"v.麻烦"},{"en":"troublesome","zh":"adj.讨厌的，麻烦的"},{"en":"trousers","zh":"n.裤子"},{"en":"truck","zh":"n.卡车，载重汽车"},{"en":"true","zh":"adj.真实的，真正的"},{"en":"truly","zh":"adv.真正地，确实"},{"en":"trumpet","zh":"n.喇叭"},{"en":"trunk","zh":"n.树干，躯干，皮箱"},{"en":"trust","zh":"n.v.委托，信任，信托"},{"en":"truth","zh":"n.真相，真理"},{"en":"truthful","zh":"adj.诚实的，真正的"},{"en":"try","zh":"v.尝试，审讯  n.尝试"},{"en":"tub","zh":"n.浴    缸，木盆"},{"en":"tube","zh":"n.管子，试管"},{"en":"tuberculosis","zh":"n.结核，肺结核"},{"en":"tuck","zh":"v.卷起，塞进"},{"en":"tuesday","zh":"]n.星期二"},{"en":"tug","zh":"v.用力拖，拖船"},{"en":"tuition","zh":"n.学费"},{"en":"tulip","zh":"n.郁金香"},{"en":"tumble","zh":"v.跌倒，摔跤，打滚"},{"en":"tumult","zh":"n.骚动，暴动，吵闹"},{"en":"tuna","zh":"n.金枪鱼"},{"en":"tune","zh":"n.调子  v.调谐"},{"en":"tunnel","zh":"n.隧道，地道，坑道"},{"en":"turbine","zh":"n.汽轮机，涡轮机"},{"en":"turbulent","zh":"adj.骚动的"},{"en":"turk","zh":"]n.土耳其人"},{"en":"turkey","zh":"n.火鸡adj.土耳其"},{"en":"turn","zh":"v.转向，旋转  n.轮流"},{"en":"turning","zh":"n.拐角  adj.旋转的"},{"en":"turnip","zh":"n.萝卜"},{"en":"turnover","zh":"n.周转，营业额"},{"en":"turtle","zh":"n.海龟"},{"en":"tutor","zh":"n.辅导教师"},{"en":"twelfth","zh":"num.第十二"},{"en":"twelve","zh":"num.十二"},{"en":"twentieth","zh":"num.第二十"},{"en":"twenty","zh":"num.二十"},{"en":"twice","zh":"adv.两次，两倍"},{"en":"twig","zh":"n.细枝"},{"en":"twilight","zh":"n.黎明，黄昏，微亮"},{"en":"twin","zh":"adj.孪生(的)"},{"en":"twinkle","zh":"v.闪烁，眨眼"},{"en":"twist","zh":"v.拧，扭，搓，歪曲"},{"en":"two","zh":"num.二"},{"en":"type","zh":"n.类型，典型  v.打字"},{"en":"typewriter","zh":"n.打字机"},{"en":"typhoon","zh":"n.台风"},{"en":"typical","zh":"adj.典型的"},{"en":"typist","zh":"n.打字员"},{"en":"tyranny","zh":"n.暴政，暴行"},{"en":"tyrant","zh":"n.暴君，专制"},{"en":"tyre","zh":"n.轮胎"},{"en":"ugly","zh":"adj.丑恶的，丑陋的"},{"en":"ulcer","zh":"n.溃疡"},{"en":"ultimate","zh":"adj.最终的，极限的"},{"en":"ultimately","zh":"adv.最后，终究"},{"en":"ultimo","zh":"adj.上月的"},{"en":"ultrasonic","zh":"adj.超声速的"},{"en":"ultraviolet","zh":"adj.紫外的"},{"en":"umbrella","zh":"n.伞，保护伞"},{"en":"unable","zh":"adj.不能的，不会的"},{"en":"unacceptable","zh":"adj.不能接受的"},{"en":"unaccommodating","zh":"adj.不青通融的"},{"en":"unaffordable","zh":"adj.买不起的"},{"en":"unanimous","zh":"adj.一致的"},{"en":"unavoidable","zh":"adj.不可避免的"},{"en":"unbearable","zh":"adj.不可忍受的"},{"en":"uncertain","zh":"adj.不确定的，易变的"},{"en":"uncertainty","zh":"n.不定，易变"},{"en":"uncle","zh":"n.伯、叔、舅、姑父"},{"en":"uncomfortable","zh":"adj.不舒服的"},{"en":"uncommon","zh":"adj.罕见的，不常见的"},{"en":"unconditionally","zh":"adv.无条件地"},{"en":"unconscious","zh":"adj.无知觉的"},{"en":"uncover","zh":"v.揭开"},{"en":"under","zh":"prep.在...下面"},{"en":"underestimate","zh":"v.低估"},{"en":"undergo","zh":"v.经受，经历"},{"en":"undergraduate","zh":"n.本科生"},{"en":"underground","zh":"adj.地下的，秘密的"},{"en":"underline","zh":"v.在...下划线，强调"},{"en":"underlying","zh":"adj.根本的，在下面的"},{"en":"undermentioned","zh":"adj.下述的"},{"en":"undermine","zh":"v.破坏"},{"en":"underneath","zh":"padv.在...下面"},{"en":"undersigned","zh":"adj.在...下面签名的"},{"en":"understand","zh":"n.了解，懂，熟悉"},{"en":"understanding","zh":"n.理解，谅解"},{"en":"undertake","zh":"v.从事，承担"},{"en":"undertaking","zh":"n.事业，许诺"},{"en":"underwear","zh":"n.内衣"},{"en":"underwriter","zh":"n.保险商，承购人"},{"en":"undo","zh":"v.解开，取消"},{"en":"undoubtedly","zh":"adv.无容置疑地"},{"en":"undue","zh":"adj.过分的，不适当的"},{"en":"unduly","zh":"adv.过分地，不适当地"},{"en":"uneasy","zh":"adj.不自在的，担心的"},{"en":"unemloyment","zh":"n.失业"},{"en":"unexpected","zh":"adj.意外的，未料到的"},{"en":"unfair","zh":"adj.不公平的"},{"en":"unfit","zh":"adj.不合适的"},{"en":"unfold","zh":"v.展示，摊开"},{"en":"unfortunate","zh":"adj.不幸的，遗憾的"},{"en":"unfortunately","zh":"adv.不幸地，不凑巧"},{"en":"unhappy","zh":"adj.不幸福的"},{"en":"uniform","zh":"adj.均匀的，统一的"},{"en":"uniformly","zh":"adv.单调地，一样地"},{"en":"uninterested","zh":"adj.不感兴趣的"},{"en":"union","zh":"n.联合，联盟，联合会"},{"en":"unique","zh":"adj.唯一的"},{"en":"unit","zh":"n.单位，个体"},{"en":"unite","zh":"v.统一，联合，团结"},{"en":"united","zh":"adj.联合的"},{"en":"united","zh":"kingdomn.英国，联合王国"},{"en":"united","zh":"nationsn.联合国"},{"en":"united","zh":"statesn.美国，合众国"},{"en":"unity","zh":"n.统一，团结"},{"en":"universal","zh":"adj.宇宙的，普遍的"},{"en":"universally","zh":"adv.普遍地"},{"en":"universe","zh":"n.宇宙"},{"en":"university","zh":"n.大学"},{"en":"unjust","zh":"adj.不公正的"},{"en":"unkind","zh":"adj.不仁慈的，冷酷的"},{"en":"unknown","zh":"adj.未知的  n.未知物"},{"en":"unlawful","zh":"adj.不合法的，违法的"},{"en":"unless","zh":"prep.除非"},{"en":"unlike","zh":"adj.不同的"},{"en":"unlikely","zh":"adj.未必的，不象的"},{"en":"unlimited","zh":"adj.无限的"},{"en":"unload","zh":"v.卸货，卸除"},{"en":"unlock","zh":"v.开启，揭开"},{"en":"unlucky","zh":"adj.不幸的，倒霉的"},{"en":"unmerchantable","zh":"adj.无销路的"},{"en":"unnecessary","zh":"adj.不必要的"},{"en":"unobtainable","zh":"adj.无法得到的"},{"en":"unpaid","zh":"adj.未付的"},{"en":"unpleasant","zh":"adj.令人不愉快的"},{"en":"unprecedented","zh":"adj.前所未有的"},{"en":"unprecedentedly","zh":"adv.空前地"},{"en":"unreasonable","zh":"adj.不合理的，贵的"},{"en":"unsalable","zh":"adj.不好销售的"},{"en":"unsatisfactory","zh":"adj.不令人满意的"},{"en":"unstable","zh":"adj.不稳定"},{"en":"unsuitable","zh":"adj.不适宜的"},{"en":"untie","zh":"v.解开"},{"en":"until","zh":"prep.conj.到...为止"},{"en":"unusable","zh":"adj.无法使用的"},{"en":"unusual","zh":"adj.不寻常的"},{"en":"unwarranted","zh":"adj.无根据的"},{"en":"unwelcome","zh":"adj.不受欢迎的"},{"en":"unwilling","zh":"adj.不愿意的"},{"en":"unworkable","zh":"adj.行不通的"},{"en":"up","zh":"adv.向上，起床"},{"en":"upcreep","zh":"n.(价格)上涨"},{"en":"uphold","zh":"v.支持，维持"},{"en":"upon","zh":"prep.在...之上"},{"en":"upper","zh":"adj.上部的，较高的"},{"en":"upright","zh":"adj.直立的，正直的"},{"en":"uproar","zh":"n.喧闹，轰鸣"},{"en":"upset","zh":"v.倾覆，打乱，使心烦"},{"en":"upside","zh":"n.上面，上部"},{"en":"upside-down,","zh":"adj."},{"en":"upstairs","zh":"adv.在楼上，往楼上"},{"en":"up-to-","zh":"date  j.时新的，最近的"},{"en":"upward","zh":"adadj.向上(的)"},{"en":"uranium","zh":"n.铀"},{"en":"urban","zh":"adj.都市的，城市的"},{"en":"urge","zh":"v.敦促，推动  n.冲动"},{"en":"urgent","zh":"adj.紧迫的，紧急的"},{"en":"urgently","zh":"adv.紧急地"},{"en":"us","zh":"pron.我们(宾格)"},{"en":"usage","zh":"n.使用，惯用法"},{"en":"use","zh":"v.使用  n.用途，利用"},{"en":"useful","zh":"adj.有用的，有益的"},{"en":"usefulness","zh":"n.用处，有效性"},{"en":"useless","zh":"adj.无用的"},{"en":"user","zh":"n.使用者，用户"},{"en":"usual","zh":"adj.通常的，习惯性的"},{"en":"usually","zh":"adv.通常，平常"},{"en":"utensil","zh":"n.用具，器皿"},{"en":"utility","zh":"n.效用，公用事业"},{"en":"utilization","zh":"n.利用"},{"en":"utilize","zh":"v.利用"},{"en":"utmost","zh":"adj.最大的，最高的"},{"en":"utter","zh":"v.说 发声  adj.完全的"},{"en":"vacacy","zh":"n.空缺，"},{"en":"vacant","zh":"adj.空的，闲"},{"en":"vaccinate","zh":"v.接种"},{"en":"vague","zh":"adj.含糊的，不清"},{"en":"vain","zh":"adj.徒然的，自"},{"en":"vainly","zh":"adv.徒"},{"en":"valid","zh":"adj.正当的，有"},{"en":"validity","zh":"n.有效，"},{"en":"valuable","zh":"adj.宝贵的，有价"},{"en":"value","zh":"n.价值  v.评价，"},{"en":"valued","zh":"adj.宝"},{"en":"van","zh":"n.小货车，面"},{"en":"vanish","zh":"v.消失，"},{"en":"vanity","zh":"n.虚荣心，"},{"en":"vapor","zh":"n.水汽，"},{"en":"variable","zh":"adj.可变的  "},{"en":"n.variance","zh":"n.分歧，不"},{"en":"variant","zh":"adj.不同的，不一"},{"en":"variation","zh":"n.变化，"},{"en":"varied","zh":"adj.不"},{"en":"variety","zh":"n.多样(性)，"},{"en":"various","zh":"adj.各种各"},{"en":"vary","zh":"v.变化，使多"},{"en":"vast","zh":"adj.巨大的，宏"},{"en":"vegetable","zh":"n.蔬菜，"},{"en":"vehicle","zh":"n.运载"},{"en":"veil","zh":"n.面纱，账，"},{"en":"vein","zh":"n.静脉，矿脉"},{"en":"velocity","zh":"n.速度，"},{"en":"velvet","zh":"n.丝绒  adj.柔"},{"en":"vengeance","zh":"n.报复，"},{"en":"ventilate","zh":"v.换气，自由"},{"en":"wade","zh":"v.消，跋涉"},{"en":"wag","zh":"v.摇，摆"},{"en":"wage","zh":"n.工资  v.进行"},{"en":"wagon","zh":"n.货车"},{"en":"waist","zh":"n.腰(部)"},{"en":"wait","zh":"v.等候，伺候"},{"en":"waiter","zh":"n.服务员，侍者"},{"en":"waitress","zh":"n.女服务员"},{"en":"waive","zh":"v.放弃(要求、权利)"},{"en":"wake","zh":"v.醒来"},{"en":"waken","zh":"v.唤醒，使觉醒"},{"en":"walk","zh":"v.步行，走  n.散步"},{"en":"walker","zh":"n.步行者，散步者"},{"en":"wall","zh":"n.墙壁"},{"en":"wallet","zh":"n.钱夹"},{"en":"walnut","zh":"n.核桃"},{"en":"wander","zh":"v.徘徊，离题，迷失"},{"en":"want","zh":"v.想要，通辑  n.缺乏"},{"en":"war","zh":"n.战争，斗争"},{"en":"ward","zh":"n.病房，牢房"},{"en":"wardrobe","zh":"n.衣柜"},{"en":"ware","zh":"n.货物"},{"en":"warehouse","zh":"n.仓库，货栈"},{"en":"warehousing","zh":"n.仓储"},{"en":"warfare","zh":"n.战争(状态)"},{"en":"warm","zh":"adj.温暖的，热情的"},{"en":"warmly","zh":"adv.热烈地，热情地"},{"en":"warmth","zh":"n.温暖，暖和，热烈"},{"en":"warn","zh":"v.警告，预先通知"},{"en":"warning","zh":"n.警告"},{"en":"warrant","zh":"n.许可证，正当理由"},{"en":"warranted","zh":"adj.担保的"},{"en":"warranty","zh":"n.担保，保证"},{"en":"warrior","zh":"n.勇士，战士"},{"en":"warship","zh":"n.军舰"},{"en":"wash","zh":"v.洗，冲走"},{"en":"wasp","zh":"n.黄蜂，马蜂"},{"en":"waste","zh":"v.浪费  n.垃圾，废料"},{"en":"wasteful","zh":"adj.浪费的，挥霍的"},{"en":"watch","zh":"v.观看，看过  n.手表"},{"en":"watchful","zh":"adj.注意的，警惕的"},{"en":"water","zh":"n.水  v.浇水，垂涎"},{"en":"waterfall","zh":"n.瀑布"},{"en":"waterfront","zh":"n.水边，滩"},{"en":"waterproof","zh":"adj.防水的"},{"en":"watertight","zh":"adj.不透水的"},{"en":"watery","zh":"adj.水汪汪的，淡的"},{"en":"watt","zh":"n.瓦特"},{"en":"wave","zh":"n.波浪，波  v.挥手"},{"en":"wavelength","zh":"n.波长"},{"en":"waver","zh":"n.晃动，动摇"},{"en":"waving","zh":"adj.波浪状的"},{"en":"wax","zh":"n.蜡  v.打蜡"},{"en":"way","zh":"n.方法，路，方向"},{"en":"we","zh":"pron.我们"},{"en":"weak","zh":"adj.弱的，差的"},{"en":"weakness","zh":"n.弱点，软弱"},{"en":"wealth","zh":"n.财富，丰富"},{"en":"wealthy","zh":"adj.富裕的，富庶的"},{"en":"weapon","zh":"n.武器"},{"en":"wear","zh":"v.穿，戴，磨损，耐久"},{"en":"weary","zh":"adj.疲倦的"},{"en":"weather","zh":"n.天气  v.经受住"},{"en":"weave","zh":"v.编织"},{"en":"weaver","zh":"n.织布工，编织者"},{"en":"web","zh":"n.网，蛛网，圈套"},{"en":"wedding","zh":"n.婚礼"},{"en":"wedge","zh":"n.楔子，起因  v.楔住"},{"en":"wednesday","zh":"n.星期三"},{"en":"weed","zh":"n.杂草  v.除草，清除"},{"en":"week","zh":"n.星期，周，工作周"},{"en":"weekday","zh":"n.工作日"},{"en":"weekend","zh":"n.周末"},{"en":"weekly","zh":"adj.每周的  n.周刊"},{"en":"weep","zh":"v.哭泣，哀悼"},{"en":"weigh","zh":"v.重...，称，权衡"},{"en":"weight","zh":"n.重量，重担，重物"},{"en":"welcome","zh":"adj.受欢迎的  v.欢迎"},{"en":"weld","zh":"v.焊接"},{"en":"welfare","zh":"n.福利"},{"en":"well","zh":"n.井  adv.好，充分"},{"en":"well-known,","zh":"adj."},{"en":"west","zh":"n.西方  adj.向西的"},{"en":"western","zh":"adj.西的，西方的"},{"en":"westerner","zh":"n.西方人，欧美人"},{"en":"westward","zh":"adv.向西(的)"},{"en":"wet","zh":"adj.湿的，多雨的"},{"en":"whale","zh":"n.鲸"},{"en":"whaling","zh":"n.捕鲸(业)"},{"en":"wharf","zh":"n.码头，停泊处"},{"en":"what","zh":"pron.什么  adj.什么的"},{"en":"whatever","zh":"pron.无论什么"},{"en":"wheat","zh":"n.小麦"},{"en":"wheel","zh":"n.轮，车轮"},{"en":"when","zh":"adv.何时"},{"en":"whenever","zh":"conj.无论何时"},{"en":"where","zh":"adv.哪里"},{"en":"whereabouts","zh":"n.下落"},{"en":"whereas","zh":"conj.而，却"},{"en":"whereby","zh":"adv.借此"},{"en":"wherein","zh":"adv.在何处"},{"en":"wherever","zh":"adv.无论哪里"},{"en":"whether","zh":"conj.是否，还是..."},{"en":"which","zh":"proadj.哪个，那个"},{"en":"whichever","zh":"pron.无论哪个"},{"en":"while","zh":"n.一会儿  conj.当..时"},{"en":"whilst","zh":"conj.当...时，尽管"},{"en":"whip","zh":"v.抽打，搅  n.鞭子"},{"en":"whirl","zh":"v.旋转，飞转"},{"en":"whisker","zh":"n.络腮胡子"},{"en":"whisky","zh":"n.威士忌洒"},{"en":"whisper","zh":"v.耳语，发飒飒声"},{"en":"whistle","zh":"v.吹哨，鸣笛，啸叫"},{"en":"white","zh":"adj.白的  n.白色 蛋清"},{"en":"whitewash","zh":"v.粉刷，掩饰"},{"en":"who","zh":"pron.谁"},{"en":"whoever","zh":"pron.无论谁"},{"en":"whole","zh":"adj.全部的  n.全部"},{"en":"wholesale","zh":"v.批发"},{"en":"wholesaler","zh":"n.批发商"},{"en":"wholesaling","zh":"n.批发"},{"en":"wholesome","zh":"adj.卫生的"},{"en":"wholly","zh":"adv.完全，一概"},{"en":"whom","zh":"pron.谁(宾格)"},{"en":"whose","zh":"pron.谁的"},{"en":"why","zh":"adv.为什么"},{"en":"wicked","zh":"adj.坏的，不道德的"},{"en":"wide","zh":"adj.宽的，广阔的"},{"en":"widely","zh":"adv.广泛地，非常"},{"en":"widen","zh":"v.加宽，扩大"},{"en":"widespread","zh":"adj.流传广泛的"},{"en":"widow","zh":"n.寡妇"},{"en":"widower","zh":"n.鳏夫"},{"en":"width","zh":"n.宽度"},{"en":"wield","zh":"v.挥动，行使"},{"en":"wife","zh":"n.妻子，夫人"},{"en":"wild","zh":"adj.野生的，狂暴的"},{"en":"wilderness","zh":"n.荒原"},{"en":"will","zh":"v.aux.将，愿  n.意志"},{"en":"willing","zh":"adj.乐意的，自愿的"},{"en":"willingly","zh":"adv.乐意地，自愿地"},{"en":"willingness","zh":"n.乐意，自愿"},{"en":"willow","zh":"n.柳树"},{"en":"win","zh":"v.赢得，成功"},{"en":"wind","zh":"n.风，风声  v.绕"},{"en":"winding","zh":"adj.弯曲的，蜿蜒的"},{"en":"windmill","zh":"n.风车"},{"en":"window","zh":"n.窗户"},{"en":"windowsill","zh":"n.窗台"},{"en":"windy","zh":"adj.刮风的"},{"en":"wine","zh":"n.酒，葡萄酒"},{"en":"winery","zh":"n.酿酒厂"},{"en":"wing","zh":"n.翅膀，翼，派别"},{"en":"wink","zh":"v.眨眼，使眼色"},{"en":"winner","zh":"n.得胜者，获奖者"},{"en":"winter","zh":"n.冬季"},{"en":"wipe","zh":"v.擦，抹掉"},{"en":"wire","zh":"n.金属线，电线"},{"en":"wireless","zh":"adj.无线电"},{"en":"wisdom","zh":"n.智慧，明智"},{"en":"wise","zh":"adj.智慧的，博学的"},{"en":"wish","zh":"v.希望，祝愿，想要"},{"en":"wit","zh":"n.机智，才智"},{"en":"with","zh":"prep.同...一起，用"},{"en":"withdraw","zh":"v.撤消，退出，提款"},{"en":"withdrawal","zh":"n.撤退，取款"},{"en":"wither","zh":"v.枯萎，凋谢，衰弱"},{"en":"withhold","zh":"v.坚持"},{"en":"within","zh":"padv.在...内"},{"en":"without","zh":"prep.没有，在...外部"},{"en":"withstand","zh":"v.抵挡，顶住"},{"en":"witness","zh":"n.目击者 证人  v.目睹"},{"en":"witty","zh":"adj.机智的，风趣的"},{"en":"woe","zh":"n.悲痛，苦恼"},{"en":"wolf","zh":"n.狼"},{"en":"woman","zh":"n.妇女，女人"},{"en":"wonder","zh":"v.想知道 诧异  n.奇迹"},{"en":"wonderful","zh":"adj.奇妙的，精彩的"},{"en":"wood","zh":"n.木，木材"},{"en":"wooden","zh":"adj.木制的"},{"en":"woodpecker","zh":"n.啄木鸟"},{"en":"woods","zh":"n.树林"},{"en":"wool","zh":"n.羊毛，毛线"},{"en":"woollen","zh":"adj.羊毛的，毛织的"},{"en":"word","zh":"n.字，词，诺言，音讯"},{"en":"wording","zh":"n.措辞"},{"en":"wordy","zh":"adj.冗长的，罗嗦的"},{"en":"work","zh":"n.劳动，工作，作品"},{"en":"workable","zh":"adj.可行的，起作用的"},{"en":"worker","zh":"n.工人"},{"en":"workman","zh":"n.工作者"},{"en":"workmanship","zh":"n.工艺，手艺"},{"en":"works","zh":"n.工厂"},{"en":"workshop","zh":"n.车间，工场，学习班"},{"en":"world","zh":"n.世界，...界，世间"},{"en":"worldwide","zh":"adv.全世界的"},{"en":"worm","zh":"n.蠕虫，幼虫"},{"en":"worry","zh":"v.烦恼，担心"},{"en":"worse","zh":"adj.更坏的，更差的"},{"en":"worship","zh":"v.崇拜，礼拜"},{"en":"worst","zh":"adj.最坏的，最差的"},{"en":"worth","zh":"n.价值  adj.值...的"},{"en":"worthless","zh":"adj.不值钱的"},{"en":"worthwhile","zh":"adj.值得做的"},{"en":"worthy","zh":"adj.值得的，配...的"},{"en":"wound","zh":"v.受伤  n.伤口，创伤"},{"en":"wounded","zh":"adj.受伤的  n.伤员"},{"en":"wrap","zh":"v.包，裹"},{"en":"wrapper","zh":"n.(饺子)皮，包装用品"},{"en":"wrath","zh":"n.暴怒"},{"en":"wreath","zh":"n.花圈，花环"},{"en":"wreck","zh":"v.毁坏  n.失事"},{"en":"wrench","zh":"v.拧，扭伤  n.扳手"},{"en":"wrestle","zh":"v.摔交，搏斗"},{"en":"wretched","zh":"adj.可怜的，可耻的"},{"en":"wring","zh":"v.拧，扭"},{"en":"wrinkle","zh":"n.皱纹  v.折皱"},{"en":"wrist","zh":"n.腕"},{"en":"write","zh":"v.写，写信，写作"},{"en":"writer","zh":"n.作者，作家"},{"en":"writing","zh":"n.写作"},{"en":"written","zh":"adj.写作的，书面的"},{"en":"wrong","zh":"adj.错误的，有毛病的"},{"en":"wrongly","zh":"adv.错误地，不正当地"},{"en":"xerox","zh":"v.复印"},{"en":"x-ray,","zh":"v.X光检查"},{"en":"yacht","zh":"n.游船，快艇"},{"en":"yard","zh":"n.码，庭院，场"},{"en":"yawn","zh":"v.打呵欠"},{"en":"year","zh":"n.年，年度"},{"en":"yearly","zh":"adv.每年的"},{"en":"yearn","zh":"v.向往"},{"en":"yeast","zh":"n.酵母"},{"en":"yell","zh":"v.叫嚷"},{"en":"yellow","zh":"adj.黄色(的)"},{"en":"yes","zh":"adv.是，好"},{"en":"yesterday","zh":"n.昨天  adv.在昨天"},{"en":"yet","zh":"adv.仍然，还，尚"},{"en":"yield","zh":"v.生产，屈服  n.产量"},{"en":"yoke","zh":"n.轭"},{"en":"yolk","zh":"n.蛋黄"},{"en":"you","zh":"pron.你，你们"},{"en":"young","zh":"adj.年轻的  n.青年人"},{"en":"youngster","zh":"n.少年"},{"en":"your","zh":"pron.你的，你们的"},{"en":"yourself","zh":"pron.你(们)自己"},{"en":"youth","zh":"n.青春，青年"},{"en":"youthful","zh":"adj.年轻的"},{"en":"zeal","zh":"n.热情，热忱"},{"en":"zealous","zh":"adj.热情的，热心的"},{"en":"zebra","zh":"n.斑马"},{"en":"zero","zh":"n.零，零度"},{"en":"zinc","zh":"n.锌"},{"en":"zip","zh":"n.活动，尖啸声"},{"en":"zipcode","zh":"n.邮政编码"},{"en":"zipper","zh":"n.拉链"},{"en":"zone","zh":"n.地带，区域，区"},{"en":"zoo","zh":"n.动物园"},{"en":"zoology","zh":"n.动物学"}]

/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exposeLoader$Jquery = __webpack_require__(0);

var _exposeLoader$Jquery2 = _interopRequireDefault(_exposeLoader$Jquery);

var _words = __webpack_require__(5);

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by faiyer on 2017/9/22.
 */
//这个文件里可以完全操纵当前的网页内容
//import jquery as $ in local area
function sendHtmlText() {
	//get entire show content on webpage
	var htmlText = document.getElementsByTagName("html")[0].innerText;
	//将内容在后台格式化处理后放入localstorage中，再返回前台展示
	//处理内容包括：
	//1. 过滤掉认识的单词
	//2. 给不认识的单词在出现频率上增加
	//3. 借助第三方工具，对陌生单词进行翻译
	//做一些统计相关的工作
	sendMessage({
		type: 'parseHtml',
		data: {
			message: htmlText,
			domain: window.location.host
		}
	}, updatePopUp);
}
// import template1 from 'html-loader?attrs=img:src img:data-src!../template/file.html'
// import template from "ejs-loader!./../template/card/card.ejs"


function checkNetAdded() {
	sendMessage({
		type: 'isAddedToList',
		data: window.location.host
	}, function (response) {
		if (response) {
			sendHtmlText();
		}
	});
}

// isAddedToList
function sendMessage() {
	var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var callback = arguments[1];

	chrome.runtime.sendMessage(message, function (response) {
		if (callback) {
			callback(response);
		}
	});
}

// showWordCard()

//应该有多种展现方式，以接口的形式呈现
//将元素的拖动效果，写成组件
function updatePopUp(ret) {
	var _loop = function _loop(word) {
		if (!word.known) {
			var obj = document.createElement("div");
			var r = ret[word].count;
			obj.classList.add('circle');
			obj.innerText = word;
			obj.style.color = '#000';
			// obj.style.backgroundColor = '#123456';
			obj.style.zIndex = 1 / r * 1000;
			obj.style.top = Math.random() * document.body.offsetHeight + "px";
			obj.style.left = Math.random() * document.body.offsetWidth + "px";
			// obj.style.width = obj.style.height = obj.style.lineHeight = 10  + 'px';
			obj.style.fontSize = r + 12 + 'px';
			obj.style.borderRadius = 0.5;
			obj.style.opacity = 1;
			// obj.onclick = function(e) {
			// 	this.style.display = "None";
			// }
			obj.onmouseover = function (e) {};

			obj.onmousedown = function (ev) {
				var ev = ev || event;
				obj.oDivX = ev.clientX - obj.offsetLeft; //
				obj.oDivY = ev.clientY - obj.offsetTop;
				obj.style.left = ev.pageX - obj.offsetWidth / 2 + 'px';
				obj.style.top = ev.pageY - obj.offsetHeight / 2 + 'px';

				obj.parentElement.onmousemove = function (ev) {
					//注意这里是document
					var ev = ev || event;
					var L = ev.clientX - obj.oDivX;
					var T = ev.clientY - obj.oDivY;
					obj.style.backgroundColor = "black";
					if (L < 10) {
						L = 0;
						word.known = true; //回调函数
						obj.parentElement.onmousemove = obj.parentElement.onmouseup = null;
						obj.style.opacity = 1;
						// obj.style.width = 20 + 'px';
						// obj.style.height = 20 + 'px';
						obj.style.fontSize = 12 + 'px';
						// obj.style.paddingLeft = "25px";
						obj.style.backgroundColor = "#fff";
					}
					obj.style.left = L + 'px';
					obj.style.top = T + 'px';
				};

				obj.parentElement.onmouseup = function (ev) {
					//加入兼容问题
					if (obj.releaseCapture) {
						obj.releaseCapture();
					}
					// obj.style.left = ev.pageX - 200 + 'px';
					// obj.style.top = ev.pageY - 200 + 'px';
					obj.style.backgroundColor = "red";
					obj.parentElement.onmousemove = obj.parentElement.onmouseup = null;
				};
			};
			document.body.appendChild(obj);
		}
	};

	for (var word in ret) {
		_loop(word);
	}
}

var hash = function hash(str) {
	var sum = 0;
	[].forEach.call(str, function (item, index) {
		sum += item.charCodeAt();
	});
	return sum % 70 * 100;
};

var hideList = [];

var removeElem = function removeElem(id) {
	var el = document.getElementById(id);
	return el && document.body.removeChild(el);
};

var Offset = -1;
var initDom = function initDom(offset, length) {
	Offset = +offset;
	removeElem('word-slide-wrap');
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _exposeLoader$Jquery2.default)(_words2.default.renderResult(Offset, length))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var el = _step.value;

			document.body.appendChild(el);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	localStorage.setItem('offset-tom-word', Offset);
	_exposeLoader$Jquery2.default.fn.fullpage.destroy && _exposeLoader$Jquery2.default.fn.fullpage.destroy(true);
	(0, _exposeLoader$Jquery2.default)('#word-slide').fullpage({
		autoScrolling: true,
		verticalCentered: true,
		fitToSection: false,
		controlArrows: false,
		easing: 'easeInOutBounce',
		afterRender: doSlide,
		afterSlideLoad: function afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {
			localStorage.setItem('wordIndex', slideIndex + 1);
			(0, _exposeLoader$Jquery2.default)('html, body').css({
				'overflow': 'visible',
				'height': '100%'
			});
		}
	});
	_exposeLoader$Jquery2.default.fn.fullpage.setAutoScrolling(false);

	// hideList = JSON.parse(localStorage.getItem('knownWords')) || [];
	document.getElementById("word-slide").addEventListener("click", function (e) {
		(0, _exposeLoader$Jquery2.default)(e.target)[0].className === 'fp-tableCell' && (0, _exposeLoader$Jquery2.default)((0, _exposeLoader$Jquery2.default)(e.target).parent()).remove();
		// hideList.push(+$($(e.target)[0].parentNode)[0].dataset.index)
		// localStorage.setItem('knownWords', JSON.stringify(hideList))
	}, true);
};
var doSlide = function doSlide() {
	_exposeLoader$Jquery2.default.fn.fullpage.moveTo(1, +(localStorage.getItem('wordIndex') || 0));
	var rules = [1, 2, 5, 10, 15, 30, 50];
	var ruleIndex = 0;
	var index = +(localStorage.getItem('wordIndex') || 1);
	setInterval(function () {
		var elength = (0, _exposeLoader$Jquery2.default)('#word-slide-wrap .slide').length;
		// do {
		if (elength === 0) {
			initDom(+Offset + 10, 10);
		}
		index += rules[ruleIndex];
		if (index > elength - 1) {
			if (rules[ruleIndex] > elength) {
				ruleIndex = 0;
			}

			index = 0;
			if (Math.random() < 0.3) {
				ruleIndex = (ruleIndex + 1) % rules.length;
			}
		}
		_exposeLoader$Jquery2.default.fn.fullpage.moveTo(1, index);
		// } while (hideList.indexOf(index) != -1);
	}, 5000);
};

(0, _exposeLoader$Jquery2.default)(document).ready(function ($) {
	// checkNetAdded()
	__webpack_require__(18);
	__webpack_require__(20);
	__webpack_require__(22);

	$(function () {
		Offset = localStorage.getItem('offset-tom-word') || hash(document.domain);
		var defaultLength = 10;
		initDom(Offset, defaultLength);

		hideList = JSON.parse(localStorage.getItem('knownWords')) || [];
		document.getElementById("word-slide").addEventListener("click", function (e) {
			$(e.target)[0].className === 'fp-tableCell' && $($(e.target).parent()).remove();
			hideList.push(+$($(e.target)[0].parentNode)[0].dataset.index);
			localStorage.setItem('knownWords', JSON.stringify(hideList));
		}, true);
	});
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./words.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./words.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "#word-slide-wrap {\n  position: fixed !important;\n  height: auto !important;\n  bottom: 0px;\n  right: 0;\n  width: 100%;\n  z-index: 999999;\n}\n#word-slide-wrap .section {\n  text-align: center;\n  cursor: pointer;\n}\n#word-slide-wrap .section .slide {\n  background-color: transparent;\n  color: black;\n  font-size: 20px;\n}\n#word-slide-wrap .section .slide label {\n  transform: rotateZ(0deg);\n}\n#word-slide-wrap .section .slide .num {\n  color: #0aff14;\n  font-family: monospace;\n  display: block;\n}\n#word-slide-wrap .section .known {\n  background-color: #0aff14;\n}\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./jquery.fullpage.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./jquery.fullpage.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 2.9.5\r\n * https://github.com/alvarotrigo/fullPage.js\r\n * MIT licensed\r\n *\r\n * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{overflow:hidden;position:relative}.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;margin-top:-32px;top:50%;opacity:1;-webkit-transform:translate3d(0,0,0)}#fp-nav.right{right:17px}#fp-nav.left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.bottom{bottom:17px}.fp-slidesNav.top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li a.active span,#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav ul li:hover .fp-tooltip,#fp-nav.fp-show-active a.active+.fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.right{right:20px}#fp-nav ul li .fp-tooltip.left{left:20px}.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-auto-height.fp-section{height:auto!important}.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section{height:auto!important}\r\n", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 2.9.5
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(global, factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function($) {
          return factory($, global, global.document, global.Math);
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.fp-auto-height';
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var $window = $(window);
    var $document = $(document);

    $.fn.fullpage = function(options) {
        //only once my friend!
        if($('html').hasClass(ENABLED)){ displayWarnings(); return; }

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var FP = $.fn.fullpage;

        // Creating some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: $.fn.fp_scrolloverflow ? $.fn.fp_scrolloverflow.iscrollHandler : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = $(this);
        var windowsHeight = $window.height();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var startingSection;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = $.extend(true,{}, isScrollAllowed.m);
        var MSPointer = getMSPointer();
        var events = {
            touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer.move,
            touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer.down
        };
        var scrollBarHandler;

        //timeouts
        var resizeId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var originals = $.extend(true, {}, options); //deep copy

        displayWarnings();

        //easeInOutCubic animation included in the plugin
        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type){
            //removing the transformation
            if(!value){
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL);

            if(options.autoScrolling && !options.scrollBar){
                $htmlBody.css({
                    'overflow' : 'hidden',
                    'height' : '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element.length){
                    //moving the container up
                    silentScroll(element.position().top);
                }

            }else{
                $htmlBody.css({
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                //scrolling the page to the section with no animation
                if (element.length) {
                    $htmlBody.scrollTop(element.position().top);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type){
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type){
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type){
            setVariableState('fitToSection', value, type);
        }

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value){
            options.lockAnchors = value;
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value){
            if(value){
                addMouseWheelHandler();
                addMiddleWheelHandler();
            }else{
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else{
                setIsScrollAllowed(value, 'all', 'm');

                if(value){
                    setMouseWheelScrolling(true);
                    addTouchHandler();
                }else{
                    setMouseWheelScrolling(false);
                    removeTouchHandler();
                }
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                setIsScrollAllowed(value, 'all', 'k');
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp(){
            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(SECTION_SEL).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown(){
            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next.length &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL).first();
            }

            if(next.length){
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor){
            setScrollingSpeed (0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed (originals.scrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny.length > 0){
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section){
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section){
            moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing){
            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            windowsHeight = $window.height();  //updating global var

            $(SECTION_SEL).each(function(){
                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
                var slides = $(this).find(SLIDE_SEL);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
                }
            });

            if(options.scrollOverflow){
                scrollBarHandler.createScrollBarForAll();
            }

            var activeSection = $(SECTION_ACTIVE_SEL);
            var sectionIndex = activeSection.index(SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active){
            var isResponsive = $body.hasClass(RESPONSIVE);

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    $(SECTION_NAV_SEL).hide();
                    $body.addClass(RESPONSIVE);
                    $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                $(SECTION_NAV_SEL).show();
                $body.removeClass(RESPONSIVE);
                $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
            }
        }

        if($(this).length){
            //public functions
            FP.version = '2.9.5';
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.fitToSection = fitToSection;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.destroy = destroy;

            //functions we want to share across files but which are not
            //mean to be used on their own by developers
            FP.shared ={
                afterRenderActions: afterRenderActions
            };

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();
            prepareDom();
            setAllowScrolling(true);
            setAutoScrolling(options.autoScrolling, 'internal');
            responsive();

            //setting the class for the body element
            setBodyClass();

            if(document.readyState === 'complete'){
                scrollToAnchor();
            }
            $window.on('load', scrollToAnchor);
        }

        function bindEvents(){
            $window
                //when scrolling...
                .on('scroll', scrollHandler)

                //detecting any change on the URL to scroll to the given anchor link
                //(a way to detect back history button as we play with the hashes on the URL)
                .on('hashchange', hashChangeHandler)

                //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
                .blur(blurHandler)

                //when resizing the site, we adjust the heights of the sections, slimScroll...
                .resize(resizeHandler);

            $document
                //Sliding with arrow keys, both, vertical and horizontal
                .keydown(keydownHandler)

                //to prevent scrolling while zooming
                .keyup(keyUpHandler)

                //Scrolls to the section when clicking the navigation bullet
                .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

                //Scrolls the slider to the given slide destination for the given section
                .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler)

                .on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

            //Scrolling horizontally when clicking on the slider controls.
            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                $document.on('mouseenter touchstart', options.normalScrollElements, function () {
                    setAllowScrolling(false);
                });

                $document.on('mouseleave touchend', options.normalScrollElements, function(){
                    setAllowScrolling(true);
                });
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){
            var sections = container.find(options.sectionSelector);

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                options.anchors = sections.filter('[data-anchor]').map(function(){
                    return $(this).data('anchor').toString();
                }).get();
            }

            //no tooltips option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                options.navigationTooltips = sections.filter('[data-tooltip]').map(function(){
                    return $(this).data('tooltip').toString();
                }).get();
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom(){
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(WRAPPER);
            $('html').addClass(ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = $window.height();

            container.removeClass(DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

             //styling the sections / slides / menu
            $(SECTION_SEL).each(function(index){
                var section = $(this);
                var slides = section.find(SLIDE_SEL);
                var numSlides = slides.length;

                styleSection(section, index);
                styleMenu(section, index);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                }else{
                    if(options.verticalCentered){
                        addTableClass(section);
                    }
                }
            });

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).appendTo($body);
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if(options.scrollOverflow){
                scrollBarHandler = options.scrollOverflowHandler.init(options);
            }else{
                afterRenderActions();
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.each(function(index) {
                $(this).css('width', slideWidth + '%');

                if(options.verticalCentered){
                    addTableClass($(this));
                }
            });

            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0))){
                silentLandscapeScroll(startingSlide, 'internal');
            }else{
                slides.eq(0).addClass(ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
                section.addClass(ACTIVE);
            }
            startingSection = $(SECTION_ACTIVE_SEL);

            section.css('height', windowsHeight + 'px');

            if(options.paddingTop){
                section.css('padding-top', options.paddingTop);
            }

            if(options.paddingBottom){
                section.css('padding-bottom', options.paddingBottom);
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                section.css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.attr('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index){
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if(section.hasClass(ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length){
                $(options.menu).appendTo($body);
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            container.find(options.sectionSelector).addClass(SECTION);
            container.find(options.slideSelector).addClass(SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

            if(options.controlArrowColor!='#fff'){
                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
            }

            if(!options.loopHorizontal){
                section.find(SLIDES_ARROW_PREV_SEL).hide();
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            var nav = $(SECTION_NAV_SEL);

            nav.addClass(function() {
                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
            });

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                var li = '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';

                nav.find('ul').append(li);
            }

            //centering it vertically
            $(SECTION_NAV_SEL).css('margin-top', '-' + ($(SECTION_NAV_SEL).height()/2) + 'px');

            //activating the current active section
            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI(){
            container.find('iframe[src*="youtube.com/embed/"]').each(function(){
                addURLParam($(this), 'enablejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam){
            var originalSrc = element.attr('src');
            element.attr('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url){
            return ( !/\?/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL);

            section.addClass(COMPLETELY);

            lazyLoad(section);
            playMedia(section);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(isDestinyTheStartingSection()){
                $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
            }

            $.isFunction( options.afterRender ) && options.afterRender.call(container);
        }

        /**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */
        function isDestinyTheStartingSection(){
            var destinationSection = getSectionByAnchor(getAnchorsURL().section);

            return !destinationSection.length || destinationSection.length && destinationSection.index() === startingSection.index();
        }


        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = $window.scrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + ($window.height() / 2.0);
                var isAtBottom = $body.height() - $window.height() === currentScroll;
                var sections =  document.querySelectorAll(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if(!currentScroll){
                    visibleSectionIndex = 0;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)){
                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!currentSection.hasClass(ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL);
                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.data('anchor');
                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);
                    var slideIndex;
                    var slideAnchorLink;

                    if(activeSlide.length){
                        slideAnchorLink = activeSlide.data('anchor');
                        slideIndex = activeSlide.index();
                    }

                    if(canScroll){
                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);
                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        //checking it again in case it changed during the delay
                        if(options.fitToSection &&

                            //is the destination element bigger than the viewport?
                            $(SECTION_ACTIVE_SEL).outerHeight() <= windowsHeight
                        ){
                            fitToSection();
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Fits the site to the nearest active section
        */
        function fitToSection(){
            //checking fitToSection again in case it was set to false before the timeout delay
            if(canScroll){
                //allows to scroll to an active section and
                //if the section is already active, we prevent firing callbacks
                isResizing = true;

                scrollPage($(SECTION_ACTIVE_SEL));
                isResizing = false;
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement){
            var top = $(SECTION_ACTIVE_SEL).position().top;
            var bottom = top + $window.height();

            if(movement == 'up'){
                return bottom >= ($window.scrollTop() + $window.height());
            }
            return top <= $window.scrollTop();
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll){
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type){
            if (!isScrollAllowed.m[type]){
                return;
            }

            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

            if(options.scrollOverflow){
                var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL));
                var check = (type === 'down') ? 'bottom' : 'top';

                if(scrollable.length > 0 ){
                    //is the scrollbar at the start/end of the scroll?
                    if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                        scrollSection();
                    }else{
                        return true;
                    }
                }else{
                    // moved up/down
                    scrollSection();
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(event){
            var e = event.originalEvent;
            if(options.autoScrolling && isReallyTouch(e)){
                //preventing the easing on iOS devices
                event.preventDefault();
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;
            var activeSection = $(e.target).closest(SECTION_SEL);

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > ($window.outerWidth() / 100 * options.touchSensitivity)) {
                        if (touchStartX > touchEndX) {
                            if(isScrollAllowed.m.right){
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if(isScrollAllowed.m.left){
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if(options.autoScrolling && canScroll){

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
                        if (touchStartY > touchEndY) {
                            scrolling('down');
                        } else if (touchEndY > touchStartY) {
                            scrolling('up');
                        }
                    }
                }
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(event){
            var e = event.originalEvent;

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                $htmlBody.stop();
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed && !isNormalScroll){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down');

                        //scrolling up?
                        }else {
                            scrolling('up');
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                $htmlBody.stop();
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
            var numSlides = slides.find(SLIDE_SEL).length;

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving || numSlides < 2) {
                return;
            }

            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
            var destiny = null;

            if(direction === 'left'){
                destiny = currentSlide.prev(SLIDE_SEL);
            }else{
                destiny = currentSlide.next(SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(!destiny.length){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if(direction === 'left'){
                    destiny = currentSlide.siblings(':last');
                }else{
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            $(SLIDE_ACTIVE_SEL).each(function(){
                silentLandscapeScroll($(this), 'internal');
            });
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elemPosition = element.position();

            //top of the desination will be at the top of the viewport
            var position = elemPosition.top;
            var isScrollingDown =  elemPosition.top > previousDestTop;
            var sectionBottom = position - windowsHeight + element.outerHeight();
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if(element.outerHeight() > windowsHeight){
                //scrolling up?
                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if(isScrollingDown || (isResizing && element.is(':last-child')) ){
                //The bottom of the destination will be at the bottom of the viewport
                position = sectionBottom;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(typeof element === 'undefined'){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index(SECTION_SEL),
                activeSlide: element.find(SLIDE_ACTIVE_SEL),
                activeSection: $(SECTION_ACTIVE_SEL),
                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT) )){ return; }

            if(v.activeSlide.length){
                slideAnchorLink = v.activeSlide.data('anchor');
                slideIndex = v.activeSlide.index();
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if($.isFunction(options.onLeave) && !v.localIsResizing){
                if(options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement) === false){
                    return;
                }
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
            if(!v.localIsResizing){
                stopMedia(v.activeSection);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.beforeLeave();
            }

            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            lazyLoad(element);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.onLeave();
            }

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                }else{
                    afterSectionLoads(v);
                }
            }

            // using jQuery animate
            else{
                var scrollSettings = getScrollSettings(v);

                $(scrollSettings.element).animate(
                    scrollSettings.options,
                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
                    if(options.scrollBar){

                        /* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */
                        setTimeout(function(){
                            afterSectionLoads(v);
                        },30);
                    }else{
                        afterSectionLoads(v);
                    }
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(v){
            var scroll = {};

            if(options.autoScrolling && !options.scrollBar){
                scroll.options = { 'top': -v.dtop};
                scroll.element = WRAPPER_SEL;
            }else{
                scroll.options = { 'scrollTop': v.dtop};
                scroll.element = 'html, body';
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.position().top;
            v.yMovement = getYmovement(v.element);

            //sections will temporally have another position in the DOM
            //updating this values in case we need them
            v.leavingSection = v.activeSection.index(SECTION_SEL) + 1;
            v.sectionIndex = v.element.index(SECTION_SEL);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
                return;
            }

            if (v.isMovementUp) {
                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
            }
            else {
                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }


        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(!v.localIsResizing){
                playMedia(v.element);
            }

            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);

            canScroll = true;

            $.isFunction(v.callback) && v.callback.call(this);
        }

        /**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */
        function setSrc(element, attribute){
            element
                .attr(attribute, element.data(attribute))
                .removeAttr('data-' + attribute);
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            if (!options.lazyLoading){
                return;
            }

            var panel = getSlideOrSection(destiny);
            var element;

            panel.find('img[data-src], img[data-srcset], source[data-src], video[data-src], audio[data-src], iframe[data-src]').each(function(){
                element = $(this);

                $.each(['src', 'srcset'], function(index, type){
                    var attribute = element.attr('data-' + type);
                    if(typeof attribute !== 'undefined' && attribute){
                        setSrc(element, type);
                    }
                });

                if(element.is('source')){
                    var typeToPlay = element.closest('video').length ? 'video' : 'audio';
                    element.closest(typeToPlay).get(0).load();
                }
            });
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
            panel.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
                    element.play();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if ( element.hasAttribute('data-autoplay') ){
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function() {
                    if ( element.hasAttribute('data-autoplay') ){
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element){
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            panel.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if( /youtube\.com\/embed\//.test($(this).attr('src')) && !element.hasAttribute('data-keepplaying')){
                    $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny){
            var slide = destiny.find(SLIDE_ACTIVE_SEL);
            if( slide.length ) {
                destiny = $(slide);
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            var anchors =  getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide;

            if(sectionAnchor){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                }else{
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var anchors = getAnchorsURL();
                var sectionAnchor = anchors.section;
                var slideAnchor = anchors.slide;

                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving);

                if(sectionAnchor.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slideAnchor ))  {
                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //gets the URL anchors (section and slide)
        function getAnchorsURL(){
            //getting the anchor link in the URL and deleting the `#`
            var hash = window.location.hash;
            var anchorsParts =  hash.replace('#', '').split('/');

            //using / for visual reasons and not as a section/slide separator #2803
            var isFunkyAnchor = hash.indexOf('#/') > -1;

            return {
                section: isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]),
                slide: isFunkyAnchor ? decodeURIComponent(anchorsParts[2]) : decodeURIComponent(anchorsParts[1])
            }
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {

            clearTimeout(keydownId);

            var activeElement = $(':focus');

            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
                activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' &&
                options.keyboardScrolling && options.autoScrolling){
                var keyCode = e.which;

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if($.inArray(keyCode, keyControls) > -1){
                    e.preventDefault();
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function tooltipTextHandler(){
            $(this).prev().trigger('click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e){
            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.on('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e){
            //middle button
            if (e.which == 2){
                container.off('mousemove');
            }
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            var section = $(this).closest(SECTION_SEL);

            if ($(this).hasClass(SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        function blurHandler(){
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e){
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($(SECTION_SEL).eq(index));
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e){
            e.preventDefault();
            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if(!canScroll && [37,39].indexOf(e.which) < 0){
                return;
            }

            switch (e.which) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed && isScrollAllowed.k.up){
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        moveSectionDown();
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction){
            var section = slides.closest(SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: destiny.position(),
                slideIndex: destiny.index(),
                section: section,
                sectionIndex: section.index(SECTION_SEL),
                anchorLink: section.data('anchor'),
                slidesNav: section.find(SLIDES_NAV_SEL),
                slideAnchor:  getAnchor(destiny),
                prevSlide: section.find(SLIDE_ACTIVE_SEL),
                prevSlideIndex: section.find(SLIDE_ACTIVE_SEL).index(),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);

            //important!! Only do it when not resizing
            if(!v.localIsResizing){
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if(options.onSlideLeave){

                //if the site is not just resizing and readjusting the slides
                if(!v.localIsResizing && v.xMovement!=='none'){
                    if($.isFunction( options.onSlideLeave )){
                        if(options.onSlideLeave.call( v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.direction, v.slideIndex ) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);

            if(!v.localIsResizing){
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                section.find(SLIDES_ARROW_PREV_SEL).toggle(v.slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(section.hasClass(ACTIVE) && !v.localIsResizing){
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }


        function afterSlideLoads(v){
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex);

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback){
            var destinyPos = v.destinyPos;

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                addAnimation(slides.find(SLIDES_CONTAINER_SEL)).css(getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function(){
                    fireCallback && afterSlideLoads(v);
                }, options.scrollingSpeed, options.easing);
            }else{
                slides.animate({
                    scrollLeft : Math.round(destinyPos.left)
                }, options.scrollingSpeed, options.easing, function() {

                    fireCallback && afterSlideLoads(v);
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex){
            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
        }

        var previousHeight = windowsHeight;

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        function resizeHandler(){
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $window.height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }else{
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function(){
                    reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            element.removeClass(NO_TRANSITION);
            return element.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return element.addClass(NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex){
            if(options.navigation){
                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
                if(name){
                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
                }else{
                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name){
            if(options.menu){
                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass(ACTIVE);
            }
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
            var toIndex = destiny.index(SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }

        function addTableClass(element){
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if(!element.hasClass(TABLE)){
                element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
            }
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!section.hasClass(SECTION)){
                    section = element.closest(SECTION_SEL);
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            container.css(getTransforms(translate3d));

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                container.removeClass(NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            if(!sectionAnchor) return [];

            var section = container.find(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
            if(!section.length){
                section = $(SECTION_SEL).eq( sectionAnchor -1);
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slides = section.find(SLIDES_WRAPPER_SEL);
            var slide =  slides.find(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]');

            if(!slide.length){
                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(destiny, slide){
            var section = getSectionByAnchor(destiny);

            //do nothing if there's no section with the given anchor name
            if(!section.length) return;

            //default slide
            if (typeof slide === 'undefined') {
                slide = 0;
            }

            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(section, slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(section, slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(section, slideAnchor){
            if(typeof slideAnchor !== 'undefined'){
                var slides = section.find(SLIDES_WRAPPER_SEL);
                var destiny =  getSlideByAnchor(slideAnchor, section);

                if(destiny.length){
                    landscapeScroll(slides, destiny);
                }
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
            var nav = section.find(SLIDES_NAV_SEL);

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + (nav.width()/2) + 'px');

            nav.find('li').first().find('a').addClass(ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length && !options.lockAnchors){

                //isn't it the first slide?
                if(slideIndex){
                    if(typeof anchorLink !== 'undefined'){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(typeof slideAnchor === 'undefined'){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(typeof slideIndex !== 'undefined'){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element){
            var anchor = element.data('anchor');
            var index = element.index();

            //Slide without anchor link? We take the index instead.
            if(typeof anchor === 'undefined'){
                anchor = index;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL);
            var slide = section.find(SLIDE_ACTIVE_SEL);

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide.length){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body[0].className = $body[0].className.replace(classRe, '');

            //adding the current anchor
            $body.addClass(VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

             // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, false);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container
                .on('mousedown', mouseDownHandler)
                .on('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler(){
            container
                .off('mousedown', mouseDownHandler)
                .off('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.off(events.touchmove).on(events.touchmove, preventBouncing);
                }

                $(WRAPPER_SEL)
                    .off(events.touchstart).on(events.touchstart, touchStartHandler)
                    .off(events.touchmove).on(events.touchmove, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.off(events.touchmove);
                }

                $(WRAPPER_SEL)
                    .off(events.touchstart)
                    .off(events.touchmove);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e) && options.scrollBar){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            setScrollingSpeed (0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar){
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else if(options.autoScrolling && !options.scrollBar){
                container.css('top', -roundedTop);
            }
            else{
                $htmlBody.scrollTop(roundedTop);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            //up, down, left, right
            if(direction !== 'all'){
                isScrollAllowed[type][direction] = value;
            }

            //all directions?
            else{
                $.each(Object.keys(isScrollAllowed[type]), function(index, key){
                    isScrollAllowed[type][key] = value;
                });
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all){
            setAutoScrolling(false, 'internal');
            setAllowScrolling(false);
            setKeyboardScrolling(false);
            container.addClass(DESTROYED);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);
            clearTimeout(resizeId);
            clearTimeout(scrollId);
            clearTimeout(scrollId2);

            $window
                .off('scroll', scrollHandler)
                .off('hashchange', hashChangeHandler)
                .off('resize', resizeHandler);

            $document
                .off('click touchstart', SECTION_NAV_SEL + ' a')
                .off('mouseenter', SECTION_NAV_SEL + ' li')
                .off('mouseleave', SECTION_NAV_SEL + ' li')
                .off('click touchstart', SLIDES_NAV_LINK_SEL)
                .off('mouseover', options.normalScrollElements)
                .off('mouseout', options.normalScrollElements);

            $(SECTION_SEL)
                .off('click touchstart', SLIDES_ARROW_SEL);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            container.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                setSrc($(this), 'src');
            });

            container.find('img[data-srcset]').each(function(){
                setSrc($(this), 'srcset');
            });

            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();

            //removing inline styles
            $(SECTION_SEL).css( {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            $(SLIDE_SEL).css( {
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            $htmlBody.css({
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            $('html').removeClass(ENABLED);

            // remove .fp-responsive class
            $body.removeClass(RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $.each($body.get(0).className.split(/\s+/), function (index, className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    $body.removeClass(className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function(){
                if(options.scrollOverflowHandler){
                    options.scrollOverflowHandler.remove($(this));
                }
                $(this).removeClass(TABLE + ' ' + ACTIVE);
            });

            removeAnimation(container);

            //Unwrapping content
            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function(){
                //unwrap not being use in case there's no child element inside and its just text
                $(this).replaceWith(this.childNodes);
            });

            //removing the applied transition from the fullpage wrapper
            container.css({
                '-webkit-transition': 'none',
                'transition': 'none'
            });

            //scrolling the page to the top with no animation
            $htmlBody.scrollTop(0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            $.each(usedSelectors, function(index, value){
                $('.' + value).removeClass(value);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            var extensions = ['fadingEffect', 'continuousHorizontal', 'scrollHorizontally', 'interlockedSlides', 'resetSliders', 'responsiveSlides', 'offsetSections', 'dragAndMove', 'scrollOverflowReset', 'parallax'];
            if($('html').hasClass(ENABLED)){
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollBar && options.scrollOverflow){
                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
            }

            if(options.continuousVertical && (options.scrollBar || !options.autoScrolling)){
                options.continuousVertical = false;
                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollOverflow && !options.scrollOverflowHandler){
                options.scrollOverflow = false;
                showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
            }

            //using extensions? Wrong file!
            $.each(extensions, function(index, extension){
                //is the option set to true?
                if(options[extension]){
                    showError('warn', 'fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: '+ extension);
                }
            });

            //anchors can not have the same value as any element ID or NAME
            $.each(options.anchors, function(index, name){

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = $document.find('[name]').filter(function() {
                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = $document.find('[id]').filter(function() {
                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
                });

                if(idAttr.length || nameAttr.length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
                }
            });
        }

        /**
        * Shows a message in the console of the given type.
        */
        function showError(type, text){
            console && console[type] && console[type]('fullPage: ' + text);
        }

    }; //end of $.fn.fullpage
});


/***/ })
/******/ ]);