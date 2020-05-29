const EventEmmiter = require('events')

// const emitter = new EventEmmiter()
// emitter.on('anything', data => {
//     console.log('ON: anything', data)
// })

// emitter.emit('anything', { a: 1 })
// emitter.emit('anything', { b: 2 })

// setTimeout(() => {
//     emitter.emit('anything', { c: 3 })
// }, 1500)

class Dispatcher extends EventEmmiter {
    subscribe(eventName, cb) {
        console.log('subscribe')
        this.on(eventName, cb)
    }
    dispatch(eventName, data) {
        console.log('Dispatching')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()
dis.subscribe('aa', data => {
    console.log('ON:aa', data)
})
dis.dispatch('aa', { aa: 22 })

