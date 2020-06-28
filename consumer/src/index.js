// This is an example of a JavaScript application
// that uses our built library. Since it doesn't import
// `funcB`, the build of _this application_ must have
// the module `b.js` tree shaken (removed).
import { funcA } from '../..'

funcA()
