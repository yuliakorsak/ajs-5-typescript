import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    total(): number {
        return this.items.reduce((sum, currentItem) => sum + currentItem.price, 0);
    }

    totalDiscounted(discountPercent: number): number {
        const total = this.total();
        return total - total * discountPercent * 0.01;
    }

    remove(id: number): void {
        const index = this.items.findIndex(item => item.id === id);
        this._items.splice(index, 1);
    }
}