'use client'
import React, { useEffect, useState } from 'react'
import Button from './button';
function listdata() {
    interface PokemonData {
        count : number;
        next : string | null;
        previous : string | null;
        results : {
            name : string;
            url : string
        }[];
    }

    const [data, setData] = useState<PokemonData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data_url = 'https://pokeapi.co/api/v2/pokemon';
            const response = await fetch(data_url);
            const jsondata = await response.json();
                setData(jsondata);
        }

        fetchData();
    }, []);
    return (
    <>
        {data && (
        <>
            {data.results.map((item, index) => (
                <div key={index}>
                    {item.name}
                    < br />
                    <Button id={item.name}/>
                    </div>
            ))}
            </>
    )}
    </>
    )
}
export default listdata
