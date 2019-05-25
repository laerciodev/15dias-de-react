import React from 'react';
import Board from './components/Board';
import Square from './components/Square';

// Componente Stateless

const App = () => {
    return (
        <Board>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </Board>
    )
}

export default App;
