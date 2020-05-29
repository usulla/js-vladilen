function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

module.exports = bind

