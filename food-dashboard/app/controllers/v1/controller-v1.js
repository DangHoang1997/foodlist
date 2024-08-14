export let getDataForm = () => {
    let id = document.getElementById('foodID').value;
    let name = document.getElementById('tenMon').value;
    let type = document.getElementById('loai').value;
    let price = document.getElementById('giaMon').value;
    let discount = document.getElementById('khuyenMai').value;
    let status = document.getElementById('tinhTrang').value;
    let image = document.getElementById('hinhMon').value;
    let desc = document.getElementById('moTa').value;

 let food =  {
    id,
    name,
    type,
    price,
    discount,
    status,
    image,
    desc,
}
return food;
}
export let showDataForm = (dataFood) => {
    // hàm này sẽ nhận một dataFood và sẽ hiển thị
    let {name,id,image,type,price,status,desc } = dataFood 
    document.getElementById('spTenMon').innerText = name
    
    document.getElementById('spMa').innerText = id
    
    document.getElementById('spLoaiMon').innerText =  type
    document.getElementById('imgMonAn').src = image

  
}
