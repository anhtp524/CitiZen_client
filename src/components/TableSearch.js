import React from 'react'
import MaterialTable from 'material-table'


function TableSearch() {
    const data = [
        {id:"01",name:'Nguyễn Văn A',sex:'Male',homeTown:'Hà Nội',address:'abc',study:'Cao đẳng',job:'Giáo viên'},
        {id:"02",name:'Nguyễn Văn b',sex:'Female',homeTown:'Hà Nội',address:'abc',study:'Cấp 2',job:'Giáo viên'},
        {id:"03",name:'Nguyễn Văn c',sex:'Male',homeTown:'Hà Nội',address:'abc',study:'Tốt nghiệp',job:'Giáo viên'},
        {id:"04",name:'Nguyễn Văn d',sex:'Female',homeTown:'Hà Nội',address:'abc',study:'Đại học',job:'Giáo viên'},
        {id:"05",name:'Nguyễn Văn e',sex:'Female',homeTown:'Hà Nội',address:'abc',study:'Tốt nghiệp',job:'Giáo viên'},
        {id:"06",name:'Nguyễn Văn f',sex:'Male',homeTown:'Hà Nội',address:'abc',study:'Tốt nghiệp',job:'Giáo viên'},
        {id:"07",name:'Nguyễn Văn g',sex:'Female',homeTown:'Hà Nội',address:'abc',study:'Tốt nghiệp',job:'Giáo viên'},
        {id:"08",name:'Nguyễn Văn h',sex:'Male',homeTown:'Hà Nội',address:'abc',study:'Tốt nghiệp',job:'Giáo viên'},
        {id:"09",name:'Nguyễn Văn i',sex:'Male',homeTown:'Hà Nội',address:'abc',study:'Tốt nghiệp',job:'Giáo viên'},
    ]
    const columns =[
        {title:'CMND', field:'id'},
        {title:'Họ và tên', field:'name'},
        {title:'Giới tính', field:'sex'},
        {title:'Quê quán', field:'homeTown'},
        {title:'Địa chỉ thường trú', field:'address'},
        {title:'Trình độ học vấn',field:'study'},
        {title:'Nghề nghiệp', field:'job'},
    ];
    return (
        <div>
            <h1></h1>
            < MaterialTable
                title={"Bảng dân số"}
                columns={columns}
                data={data}
                options={{
                    actionsColumnIndex: -1,
                    filtering: true,
                    
                    headerStyle:{background:'rgb(121, 128, 128)',color:'#fff'}
                }}
            />
        </div>
    )
}

export default TableSearch
