import React from "react";
import { useParams } from "react-router-dom";

function User (){
    const {userId} = useParams();
    return (
        <>
            <div className="bg-blue-900 text-white p-5 text-center text-3xl">
                User : {userId}
            </div>
        </>
    )
}

export default User;