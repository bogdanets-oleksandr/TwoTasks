ctx.prototype.__applyStyleState = function (styleState) {
//   var keys = Object.keys(styleState),
//     i,
//     key;
//   for (i = 0; i < keys.length; i++) {
//     key = keys[i];
//     this[key] = styleState[key];
//   }

    styling(styleState, this, styleState);
};
ctx.prototype.__setDefaultStyles = function () {
//   var keys = Object.keys(STYLES),
//     i,
//     key;
//   for (i = 0; i < keys.length; i++) {
//     key = keys[i];
//     this[key] = STYLES[key].canvas;
//   }

    styling(STYLES, this, STYLES);
};
ctx.prototype.__getStyleState = function () {
//   var i,
//     styleState = {},
//     keys = Object.keys(STYLES),
//     key;
//   for (i = 0; i < keys.length; i++) {
//     key = keys[i];
//     styleState[key] = this[key];
//   }
//   return styleState;

    return styling(STYLES, {}, this);
};

function styling(stylesObject, objectToSet, objectSetting) {
    var i, 
    key,
    keys = Object.keys(stylesObject);
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        objectToSet[key] = objectSetting[key];
    }
    return objectToSet;
};

const multiply = (a,b,c) => a*b*c; 
const add = (a,b,c,d,e) => a+b+c+d+e;

const curry = (f) => { 
    /* write your solution here */ 
    return function curried(...args) {
        if (args.length >= f.length) {
            return f.apply(this, args);
        } else {
            return (...args2) => curried.apply(this, args.concat(args2));
        }
    };
}

curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5) // should be true 
curry(multiply)(1)(2)(3) == multiply(1,2,3) // should be true