import React from 'react'


const Grid = (props) => {

    const cellSize = 30
    const totalCols = 20
    const totalRows = 20
    const gridCellStyle = {
        height: cellSize,
        width: cellSize
    }
    let cells = cells || []


    // loop through each cell of the grid
    for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalCols; col++) {

            if (row == props.foodPosition[0] && col == props.foodPosition[1]) {
                cells.push(<span className='grid food' id={`${row}-${col}`} key={`${row}-${col}`} style={gridCellStyle}></span>)
            }
            // } else if (row == this.state.snakeHeadPosition[0] && col == this.state.snakeHeadPosition[1]) {
            //     cells.push(<span className='grid snake' id={`${row}-${col}`} key={`${row}-${col}`} style={gridCellStyle}></span>)
            else {
                cells.push(<span className='grid cell' id={`${row}-${col}`} key={`${row}-${col}`} style={gridCellStyle}></span>)
            }

        }
    }


    return (
        <div
            id='grid'
            style={{
                height: cellSize * totalCols,
                width: cellSize * totalRows
            }}
        >
            {cells}
        </div>
    )

}


export default Grid
