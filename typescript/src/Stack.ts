export class Stack {
    private _size: number = 0
    private element: any
    private elements: any[] = []

    isEmpty (): boolean {
        return !this._size
    }

    size (): number {
        return this._size
    }

    push (element: any) {
        this._size++
        this.element = element
        this.elements.push(element)
    }

    peek (): any {
        return this.element
    }

    pop (): any {
        this._size--
        return this.elements.pop()
    }
}
