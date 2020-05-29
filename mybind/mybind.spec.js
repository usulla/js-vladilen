const bind = require('./mybind')

describe('bind function', () => {
    let person1
    let person2
    let fn
    beforeEach(() => {
        person1 = { name: 'Maria', job: 'Frontend' }
        person2 = { name: 'Mila', job: 'Massage' }
        fn = jest.fn(function (phone='8999') {
            return `Person: ${this.name}, ${this.job}, ${phone}`
        })
        bind(person1, fn)('79261170001')

    })

    test('should call callback', () => {
        bind(person1, fn)('79261170000')
        expect(fn).toBeCalled();
    })

    test('should fn work', () => {
        fn.mockReturnValue('Person: Maria, Frontend');
        expect(fn()).toBe('Person: Maria, Frontend')
    })

    test('should pow 2 each element', () => {
        expect(fn.mock.results[0].value).toBe('Person: Maria, Frontend, 79261170001')
        bind(person2, fn)()
        expect(fn.mock.results[1].value).toBe('Person: Mila, Massage, 8999')
    })
})