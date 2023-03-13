
import { HttpRequest } from "controllers";
import { useEffect, useState } from "react";

interface jsonData {
    my_name_is: string;
}

export default function useMyName() {
    const [ myName, setMyname ] = useState('');

    useEffect(() => {
        const request = new HttpRequest<jsonData>('/assets/myname.json');
        const fetchData = async (): Promise<jsonData> => {
            const json = await request.getJson();
            return json;
        }
        fetchData()
            .then((data: jsonData) => {
                const my_name_is = data.my_name_is || '';
                setMyname(my_name_is);
            });

        return function cleanUp() {
            request.abort();
        }
    })

    return myName;
}