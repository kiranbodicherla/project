import React, { useState, useEffect } from 'react'
const Product = () => {
    const [adata, setAdata] = useState([]);
    const [added, setadded] = useState([]);



    useEffect(() => {

        const data = async () => {
            const url = 'https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json'
            const response = await fetch(url);
            const res = await response.json();
            setAdata(res);

            console.log(res);

        }
        data();

    }, [])


    const addtocart = (pro) => {
        console.log(pro);
        setadded([...added, pro]);
     
    }
  
    const remaining =(data1)=>{
        setadded(
            added.filter((dataa)=> dataa !==data1)
        )
    }
    
    return (
    <div className="main">
        <div>
            <h3>brands</h3>
            <ul>

                {adata.map((brands,ind) => {
                    return (<li key={ind}>{brands.brand}</li>)

                }
                )}
            </ul>
        </div>

        <div className="cards">
       
            {adata.map((a, id) => {


                return (

                    <div key={id}>
                        <div className="card">

                            <img src={a.icon} />
                            <p>{a.name}</p>
                            <h6>Price:₹{a.price}</h6>
                            <h6>Weigth{a.weight}</h6>
                            <h4>{a.brand}</h4>
                            <button onClick={() => addtocart(a)}>Add to cart</button>
                        </div>
                    </div>


                )
            })}


        </div>
        <div>
        <ul>
            cart Items:{added.length}
            {
                added.map((carti,indx) => {
                    return (
                        <div key={indx}>
                        <img src={carti.icon} />
                            <p>{carti.name}</p>
                            <h6>Price:₹{carti.price}</h6>
                            <h6>Weigth{carti.weight}</h6>
                            <h4>{carti.brand}</h4>
                           <button onClick={()=>remaining(carti)}>remove</button>
                            </div>
                    )
                })
            }
        </ul>
        </div>
    </div>
    )
}
export default Product;