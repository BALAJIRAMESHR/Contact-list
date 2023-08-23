import React from "react";
import user from "./user.jpeg";

const Contactcard = (props) => {
    const { id, name, email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="contect">
                <div className="header">{name}</div>
                <div>{email}</div>
                    

            </div>
            <i className="trash alternate outline icon"
            style={{color:"red", marginTop:"8px"}} onClick={()=>props.clickhandler(id)}></i>

        </div>
         
    );
    
};
export default Contactcard;