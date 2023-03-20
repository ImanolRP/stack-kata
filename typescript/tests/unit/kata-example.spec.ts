import {Stack} from '../../src/Stack'

describe('Stack', () => {
    let stack: Stack

    beforeEach(() => {
        stack = new Stack()
    })

    describe('isEmpty', () => {
        it('should return true when initialized', () => {
            expect(stack.isEmpty()).toBe(true)
        })
    
        it('should return false when pushed one time', () => {
            stack.push('foo')
            expect(stack.isEmpty()).toBe(false)
        })

        it('should return true when poped all pushed elements', () => {
            stack.push('foo')
            stack.pop()
            expect(stack.isEmpty()).toBe(true)
        })

        it('should return false when pushed more times than poped', () => {
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

        it('should return two when pushed three times and poped one', () => {
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
    })

    describe('pop', () => {
        it('should return foo after it has been pushed', () => {
            stack.push('foo')
            expect(stack.pop()).toBe('foo')
        })
    })
})
