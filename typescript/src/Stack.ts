export class Stack {
    private elements: any[] = []
    private capacity: number

    constructor (
        capacity: number = Infinity
    ) {
        this.validateCapacity(capacity)

        this.capacity = capacity
    }

    private validateCapacity(capacity: number) {
        if(capacity == -1) {
            throw Error('Invalid Capacity')
        }
    }

    isEmpty (): boolean {
        return !this.elements.length
    }

    size (): number {
        return this.elements.length
    }

    push (element: any) {
        if(this.size() >= this.capacity) {
            throw Error('Stack Overflow')
        }

        this.elements.push(element)
    }

    peek (): any {
        if(this.isEmpty()) {
            throw Error('Stack Underflow')
        }

        return this.elements[this.elements.length-1]
    }

    pop (): any {
        if(this.isEmpty()) {
            throw Error('Stack Underflow')
        }

        return this.elements.pop()
    }
}
