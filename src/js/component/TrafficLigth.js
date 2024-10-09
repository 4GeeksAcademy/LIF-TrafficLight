import React, {useState} from 'react'

export const TrafficLigth = () => {
    const[activeLight, setActiveLight]= useState(null);

    const handleClick =(color,message)=> {
        setActiveLight(color);
        alert(message);
    }

    return (
        
            <div className="bg-dark d-flex flex-column justify-content-around align-items-center"

            style={{ 
                width:"100px", 
                height:"300px",
                borderRadius:"20px",
                padding:"10px",
                               }}>

                <button type="button" className="btn" 
                onClick={()=> handleClick ("red", "¡Deténgase!")}

                style={{
                    borderRadius:"50%",
                    height:"70px",
                    width:"70px",
                    backgroundColor: activeLight === "red"? "red": "#7e0000",
                    }}>R
                    </button>
                <button type="button" className="btn" 
                 onClick={()=> handleClick ("yellow","¡Disminuya la velocidad, por favor!")}
              
                style={{
                    borderRadius:"50%",
                    height:"70px",
                    width:"70px",
                    backgroundColor: activeLight === "yellow"? "yellow": "#7e7e00",
                    }}>Y</button>
                <button type="button" className="btn"
                onClick={()=> handleClick ("green","¡Continúe, pero despacito!")}

                style={{
                    borderRadius:"50%",
                    height:"70px",
                    width:"70px",
                    backgroundColor: activeLight === "green"? "green": "#004d00",

                    }}>G</button>

           </div>
           
           

    )
}
