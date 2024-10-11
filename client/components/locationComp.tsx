

import React, {useState} from "react"


const Location = (params: any) => {
    
    return (
        <div key={params.id}>
            <img src={params.link} alt={params.name} />
            <h3>{params.name}</h3>
            <h3>{params.type}</h3>
            <h3>{params.leader}</h3>
            <h3>{params.badgeNum}</h3>

        </div>
    )
}

export default Location