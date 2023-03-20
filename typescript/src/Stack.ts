export class Stack {
    private _size : number = 0
    private element : any;

    isEmpty (): boolean {
        return !this._size
    }

    size (): number{
        return this._size
    }

    push (element: any) {
        this._size++
        this.element = element
    }

    peek(){
        return this.element
    }
}
