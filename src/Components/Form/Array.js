import React from 'react';

function Array(){

    const newArr = ['name1','name2','name3','name4'];

    return(
        <>
            <h1>Array Method With Map</h1>

            {
                newArr.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                })
            }
        </>
    )
}
export default Array;