export class GoldManager {
    private _gold: number = 0

    set gold(val: number) {
        if (val < 0) {
            val = 0
        }
        this._gold = val
    }

    get gold(): number {
        return this._gold
    }
}