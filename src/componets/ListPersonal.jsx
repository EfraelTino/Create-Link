import React from "react";


function ListPersonal({ product }) {
    console.log("Im Here in ListPersonal: ", product)

    const styleImage = {
        width: "120px"
    }
    return (
        <div >
            <div key={product.id} style={{width: "40%"}}>
                <img src={product.images} alt={product.name} style={styleImage} />
            </div>
            <p>
                {product.price}
            </p>
            <h6>
                {product.title}
            </h6>
            <button>
                Add To Cart
            </button>
        </div>
    );
}
export default ListPersonal;