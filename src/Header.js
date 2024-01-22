import React, { useEffect, useState } from 'react';

const Header = () => {

    const API = "https://hub.dummyapis.com/employee?";

    
    const [value, setValue] = useState([]);

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json(url);
            setValue(data);
            console.log(data);
        }

        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(API);
    }, []);

    return (
    <div>
        <div className="text-sm font-medium text-blue-900">This is Header </div>
        {value.map((item) => {
            return <div className="grid gap-4 grid-cols-3 grid-rows-3 bg-orange-300">{item.firstName}</div>
        })}
    </div>
    )
}

export default Header;