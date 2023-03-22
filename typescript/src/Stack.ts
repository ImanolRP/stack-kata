export class Stack {
    private elements: any[] = []

    constructor (
        private maxSize: number = Infinity
    ){}

    isEmpty (): boolean {
        return !this.elements.length
    }

    size (): number {
        return this.elements.length
    }

    push (element: any) {
        if(this.size() >= this.maxSize) {
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
