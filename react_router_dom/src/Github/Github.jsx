import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData();
    return (
        <>
            <div className="p-5 text-3xl text-white">
                Github Following: {data.following}
                <img src={data.avatar_url} alt="" srcset="" />
            </div>
        </>
    )
}

export default Github;

export const getGithubInfo = async () =>{
    const res = await fetch("https://api.github.com/users/Antimonybullets");
    return res.json();
}