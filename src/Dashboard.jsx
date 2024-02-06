

import React, { useEffect, useState } from "react";
import ListPersonal from "./componets/ListPersonal";
function DashBoard() {

    const [lista, setLista] = useState([]);
    const [errors, setErrors] = useState(null);


    const url = "https://api.escuelajs.co/api/v1/products/"

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setLista(data);
                console.log("the data is: ", data)
            } catch (error) {
                console.error("Error in the fetch", error)
                setErrors("Above an error, please try again.");
            }

        }
        getData();
    }, [])
    console.log("The error is: ",errors)
    const styleGrid = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
    }
    return (
        <div style={styleGrid}>
            {errors ? (
                <p>{errors}</p>
            ) : lista.length === 0 ? (
                <p>Load...</p>
            ) : (
                lista.map((product, i) => (
                    <ListPersonal product={product} />

                ))
            )}

        </div>



    );
}
export default DashBoard;
