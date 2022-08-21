import React,{useState} from 'react'
import BaiTapChonXe from './BaiTapChonXe';

export default function UseStateDemo() {
  //usestate là hàm của react cung cấp
  //lưu ý: không gọi hàm này trong if else hay sưitch...
  //[giátrịthaydoi, hamsetLaiGiaTriMoi] = useState ( giá trị mặc định ban đầu);
  // this.state = {
  //   like: 1
  // }

  const [like,setLike] = useState(1);

  return (
    <div className='container'>
      <div className='card w-25'>
        <img src="https://picsum.photos/200/200" alt="..." />
        <div className='card-body'>
          <h3>Họ têm: vũ thành đạt</h3>
          <p>buoi 1</p>
          <p>like: {like}</p>
          <button className='btn btn-success' onClick={() => {
            setLike(like+1)
          }}>like</button>
        </div>
      </div>
      <hr />
      <BaiTapChonXe />
    </div>
  )
}
