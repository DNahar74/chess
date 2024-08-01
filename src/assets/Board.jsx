import './Board.css'
import {getCharacter} from "./Helper.js";
import Files from "./bits/files.jsx";
import Ranks from "./bits/ranks.jsx";

const Board = ()=>{

    const ranks=new Array(8).fill().map((x,i)=>8-i);
    const files=new Array(8).fill().map((x,i)=>getCharacter(i))
    return (
        <div className='board'>
            <Ranks ranks={ranks}/>
            <div className="tiles">
                {ranks.map((rank,i)=>
                    files.map((file,j)=>
                        <div className={(i+j)%2==0?'tile light-tile':'tile dark-tile'} key={file+'-'+rank}></div>
                    )
                )}
            </div>
            <Files files={files}/>
        </div>
    )
}

export default Board