export class Stack {
    private elements: any[] = []

    isEmpty (): boolean {
        return !this.elements.length
    }

    size (): number {
        return this.elements.length
    }

    push (element: any) {
        this.elements.push(element)
    }

    peek (): any {
        return this.elements[this.elements.length-1]
    }

    pop (): any {
        return this.elements.pop()
    }
}
