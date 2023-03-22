export class Stack <E = any> {
    private elements: E[] = []
    private capacity: number

    constructor (
        capacity: number = Infinity
    ) {
        this.validateCapacity(capacity)

        this.capacity = capacity
    }

    private validateCapacity(capacity: number) {
        if(capacity < 0) {
            throw Error('Invalid Capacity')
        }
    }

    isEmpty (): boolean {
        return !this.elements.length
    }

    size (): number {
        return this.elements.length
    }

    push (element: E) {
        if(this.size() >= this.capacity) {
            throw Error('Stack Overflow')
        }

        this.elements.push(element)
    }

    peek (): E {
        if(this.isEmpty()) {
            throw Error('Stack Underflow')
        }

        return this.elements[this.elements.length-1]
    }

    pop (): E {
        const element = this.elements.pop()

        if(element === undefined) {
            throw Error('Stack Underflow')
        }

        return element
    }
}
