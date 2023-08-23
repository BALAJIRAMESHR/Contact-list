import React from "react";
import Contactcard from "./Contactcard.js";

const ContectList = (props) => {
    console.log(props);

    const deleteContacthandler = (id) => {
        props.getContactId(id);
    }

    const renderContectList = props.contact.map((contact) => {
        return  (
           <Contactcard contact={contact} clickhandler={deleteContacthandler} key={contact.id}></Contactcard>
       );
    });
    return (
        <div className="ui celled list">
            {renderContectList}
       </div> 
    );
}
export default ContectList;
