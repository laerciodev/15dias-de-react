import React from 'react';
import Square from '../Square';
import "./styles.css";

// Componente do Board (stateless)
const Board = () => {
    return (
        <div className="board">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    )
}

export default Board;

