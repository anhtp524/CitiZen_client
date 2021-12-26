import React from 'react'
import './userinfor.css'

function UserInfor() {
    return (
        <div>
            <h1>Tài khoản loại A2 - Tỉnh/Thành phố Hà Nội</h1>
            <div className='form'>
                <input type={'password'} placeholder='Mật khẩu hiện tại'></input>
                <br />
                <input type={'password'} placeholder='Mật khẩu mới'></input>
                <br />
                <input type={'password'} placeholder='Xác nhận mật khẩu'></input>
                <br />
                <button>Đổi mật khẩu</button>
            </div>
        </div>
    )
}

export default UserInfor
