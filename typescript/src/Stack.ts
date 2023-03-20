export class Stack {
    private element: any
    private elements: any[] = []

    isEmpty (): boolean {
        return !this.elements.length
    }

    size (): number {
        return this.elements.length
    }

    push (element: any) {
        this.element = element
        this.elements.push(element)
    }

    peek (): any {
        return this.element
    }

    pop (): any {
        return this.elements.pop()
    }
}
