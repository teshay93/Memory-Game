import React from 'react';
import './HeaderStyle.css';
import { Container } from 'react-bootstrap';
import { FaRedo } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <h1>Memory Game!</h1>
            <Container>
            <div className="sub-header">
                <div className="moves">
                    <span className="bold">Moves:</span>
                </div>
                <div className="shuffle">
                    <button>
                        <FaRedo />
                    </button>
                </div>
                <div className="high-score">
                    <span>High Score</span>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Header;
