import React from 'react';
import cardsArray from './data';

//FISHER-YATES MODERN SHUFFLE ALGORITHM
//function looping back and forth through array
//loop will decrease by one as it generates a random number
//j is going to be the random number we generate
//i is going to be the array.length
function swap(array, i, j) {
    //const is holding temporary value 
    const temp = array[i];
    //array i is going to swap array j
    array[i] = array[j];
    //array j holds temp value
    array[j] = temp;
}

function shuffleCards(array){
    const length = array.length;
    //everytime random number is generated, array decreases by 1
    for(let i = length; i>0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i-1;
        swap(array, currentIndex, randomIndex)
    }
    return array;
}

const App = () => {
    const [carsd, setCards] = useState(() => 
    shuffleCards(cardsArray.concat(cardsArray))
    );
    return (
        <div>
          <Header />
          <Container>
              <Row>
                  {cards.map((card, index)=>{
                      
                  })}
              </Row>
          </Container>  
        </div>
    )
}

export default App
