import {Stack} from '../../src/Stack'

describe('Stack', () => {
    let stack: Stack

    beforeEach(() => {
        stack = new Stack()
    })

    describe('new/constructor', () => {
        it('should throw an invalid capacity error on negative capacity of -1 given', () => {
            expect(() => new Stack(-1)).toThrowError('Invalid Capacity')
        })

        it('should throw an invalid capacity error on negative capacity of -2 given', () => {
            expect(() => new Stack(-2)).toThrowError('Invalid Capacity')
        })
    })

    describe('isEmpty', () => {
        it('should return true when initialized', () => {
            expect(stack.isEmpty()).toBe(true)
        })
    
        it('should return false when pushed one time', () => {
            stack.push('foo')
            expect(stack.isEmpty()).toBe(false)
        })

        it('should return true when popped all pushed elements', () => {
            stack.push('foo')
            stack.pop()
            expect(stack.isEmpty()).toBe(true)
        })

        it('should return false when pushed more times than popped', () => {
            stack.push('foo')
            stack.push('faa')
            stack.pop()
            expect(stack.isEmpty()).toBe(false)
        })
    })

    describe('size', () => {
        it('should return zero when initialized', () => {
            expect(stack.size()).toBe(0)
        })
    
        it('should return one when pushed one time', () => {
            stack.push('foo')
            expect(stack.size()).toBe(1)
        })
    
        it('should return three when pushed three times', () => {
            stack.push('foo')
            stack.push('faa')
            stack.push('fuu')
            expect(stack.size()).toBe(3)
        })

        it('should return two when pushed three times and popped one', () => {
            stack.push('foo')
            stack.push('faa')
            stack.push('fuu')
            stack.pop()
            expect(stack.size()).toBe(2)
        })
    })

    describe('peek', () => {
        it('should return foo after it has been pushed', () => {
            stack.push('foo')
            expect(stack.peek()).toBe('foo')
        })

        it('should return first pushed element if pop is called one less time than push', () => {
            stack.push('foo')
            stack.push('faa')
            stack.pop()
            expect(stack.peek()).toBe('foo')
        })

        it('should throw an underflow error while is empty', () => {
            expect(() => stack.peek()).toThrowError('Stack Underflow')
        })
    })

    describe('pop', () => {
        it('should return foo after it has been pushed', () => {
            stack.push('foo')
            expect(stack.pop()).toBe('foo')
        })

        it('should return first pushed element last time it is called if it is called same many times as push', () => {
            stack.push('foo')
            stack.push('faa')
            stack.pop()
            expect(stack.pop()).toBe('foo')
        })

        it('should throw an underflow error while is empty', () => {
            expect(() => stack.pop()).toThrowError('Stack Underflow')
        })
    })

    describe('push', () => {
        it('should throw an overflow error if max size of 0 is reached', () => {
            const limitedStack = new Stack(0)
            expect(() => limitedStack.push('foo')).toThrowError('Stack Overflow')
        })

        it('should throw an overflow error if max size of 1 is reached', () => {
            const limitedStack = new Stack(1)
            limitedStack.push('foo')
            expect(() => limitedStack.push('faa')).toThrowError('Stack Overflow')
        })

        it('should throw an overflow error if max size of 2 is reached', () => {
            const limitedStack = new Stack(2)
            limitedStack.push('foo')
            limitedStack.push('faa')
            expect(() => limitedStack.push('fuu')).toThrowError('Stack Overflow')
        })
    })
})
