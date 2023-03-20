export class Stack {
    private _empty: boolean = true
    private _size: number = 0
    private element: any

    isEmpty (): boolean {
        return this._empty
    }

    size (): number {
        return this._size
    }

    push (element: any) {
        this._empty = false
        this._size++
        this.element = element
    }

    peek (): any {
        return this.element
    }

    pop (): any {
        this._size--
        return this.peek()
    }
}
