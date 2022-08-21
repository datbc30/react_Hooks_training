import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

let timeout = {};

export default function useEffectDemo(props) {

    const [arrProduct,setArrProduct] = useState ([
        {id:1, name:'product 1',price:1000,image:'https://picsum.photos/200/200'}
    ])
    const [count,setCount] = useState(60)

    const renderProduct = () => {
        return arrProduct.map((prod,index) => {
            return <div className='col-4' key={index}>
                <div className='card'>
                    <img src={prod.image} alt="..." />
                    <div className='card-body'>
                        <h3>{prod.name}</h3>
                        <p>{prod.price}</p>
                        <button className='btn btn-danger'>add to card</button>
                    </div>
                </div>
            </div>
        })
    }

    const getApi = async () => {
        try {
            const result = await axios ({
                url:'https://shop.cyberlearn.vn/api/Product',
                method:'GET'
            });
            console.log(result.data.content);
            setArrProduct(result.data.content)
        } catch(err) {
            console.log({err});
        }
    }

    useEffect(() => {
        //dependency ( tham số thứ 2 là mảng rỗng thì hàm này chạy duy nhất sau khi giao diên render lần đầu tiên)
        //tương đương componentDidMount
        getApi();
        //cài đặt hàm tự chạy ngầm 1s setCount 1 lần
        // timeout = setInterval(() => {
        //     setCount((count) => {
        //         return count -1
        //     });
        //     console.log(123);
        // },1000);

        // return () => {
        //     //những lệnh cài đặt sẽ cạhy khi coponent mất khri giao diện ( tương đương componentWillUnmount)
        //     clearInterval(timeout);
        // }
    },[]);

    // setInterval(() => {
    //     setCount(count -1);
    // },1000)

  return (
    <div className='container'>
            <h3>Count: {count}</h3>
        <hr />
        <h3>show app</h3>
        <div className='row'>
            {renderProduct()}
        </div>
    </div>
  )
}
