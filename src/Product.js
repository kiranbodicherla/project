import React, { useState, useEffect } from 'react'
const Product = () => {
    const [dataof, setDataof] = useState([]);
    const [added, setadded] = useState([]);



    useEffect(() => {

        const data = async () => {
            const url = 'https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json'
            const response = await fetch(url);
            const res = await response.json();
            setDataof(res);

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

                {dataof.map((brands,ind) => {
                    return (<li key={ind}>{brands.brand}</li>)

                }
                )}
            </ul>
        </div>

        <div className="cards">
       
            {dataof.map((a, id) => {


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
        <div className="details">
            <h6>Total No. of Items: {added.length}</h6>
            <h6>Grand Total  {added.map((ab)=>{
                let aa=0;
                aa+=ab.price;
                return aa;
            })}</h6>
            <button>Checkout </button>
            <input type="text" placeholder="Enter Your Name"/>
            <input type="email" placeholder="Enter Your Email"/>
            <input type="number" placeholder="Enter Your Phone"/>
        </div>
    </div>
    )
}
export default Product;