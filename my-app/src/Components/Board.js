import React,{useState} from 'react'
import Square from './Square'
import '../App.css';
function Board() {
    // we take an array uhose length is 9 means 9 index are presen in it and i wanted to fill all the indexes with null so i use the fill function of array
    const [state,setState]=useState(Array(9).fill(null)); 
    const [turnx, setturnx] = useState(true)
    const handleClick = (i)=>{
        // here i copy my exsisting state by using spread operator ...
       const copyState=[...state];
    //    copy state and those index in which user click if it is turn x thebn shiw x other wise in zero turn show zero
        copyState[i]=turnx?'x':'o';
        setState(copyState);//as new state
        //now i set the turn x to not x mean if it is i click true orther click is false then shows 0
        setturnx(!turnx)
    }
    //check winner
    //now we want to make a logic if all the index is same simble then we got winner
    const checkWinner = () =>{
     const winnerLogic = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
     ];
     for(let logic of winnerLogic){
        const[a,b,c] = logic;
        if(state[a] !== null && state[a]===state[b] && state[b]===state[c] ){
             return state[a];
        }
    }
             return false;
    }
    const isWinner = checkWinner();
    //if the logic of winner logic in which logic is equal to a b c
   
  return (
    <>
    <div className='board-container'>
        {
            isWinner?(<h1 style={{color:'white', fontSize:'80px', textAlign:'center'}}>{isWinner} won the game</h1>):(
            <>
            <div className='board-row'>
                <Square  onclick={()=>{handleClick(0)}} value={state[0]}/>
                <Square  onclick={()=>{handleClick(1)}} value={state[1]}/> 
                <Square  onclick={()=>{handleClick(2)}}  value={state[2]}/> 
              </div>
              <div className='board-row'>
                <Square  onclick={()=>{handleClick(3)}}  value={state[3]}/>
                <Square  onclick={()=>{handleClick(4)}} value={state[4]}/> 
                <Square  onclick={()=>{handleClick(5)}} value={state[5]}/> 
              </div>
              <div className='board-row'>
                <Square  onclick={()=>{handleClick(6)}} value={state[6]}/>
                <Square  onclick={()=>{handleClick(7)}} value={state[7]}/> 
                <Square  onclick={()=>{handleClick(8)}} value={state[8]}/> 
              </div>
              </>
              )
        }
    </div>
    </>
  )
}

//firsly we rander a square and in each square we track the handle click of event listner so that we track that in which index user click and then i make the copy of using state if user click it then i am setting ternary operator either it  making it x or either it making it 0 depending upone the state value

export default Board
