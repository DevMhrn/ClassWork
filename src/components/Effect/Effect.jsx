import { useState } from "react";
function Effect(){
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);



    return (
        <div >
            <button onClick={()=> {setCount(count+1)}}>Count</button>
            <p>{count}</p>
            <button>Count1</button>
            <p>{count1}</p>
        </div>
    )
}
export default Effect;