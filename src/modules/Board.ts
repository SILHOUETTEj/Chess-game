import { Colors } from './Colors';
import { Cell } from './Cell';
export class Board {
    cells: Cell[][] = []


    public iniCells() {
        for(let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for ( let j = 0; j < 8; j++) {
                if((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK,null )) // black
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) //white
                }
            } 
              this.cells.push(row)
        }
    }
}