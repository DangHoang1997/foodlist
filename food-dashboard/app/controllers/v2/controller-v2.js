   export let renderFoodlist = (foodArr) => {
    let contentHTML = "";
    foodArr.forEach(({id,name,type,price,discount,status}) => {
        let trstring  = 
        `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${type? "chay":"man"}</td>
        <td>${price}</td>
        <td>${discount}</td>
        <td>0</td>
        <td>${status? "con mon ":"het mon"}</td>
        <td>
        <button onclick = "deleteFood(${id})" class = "btn btn-success">xóa </button>
        <button onclick = "editFoodList(${id})" class = "btn btn-blue">Sửa </button>
        </td>
        </tr>
        `

        contentHTML += trstring
    })



    document.getElementById("tbodyFood").innerHTML = contentHTML;
  }



  export let  onSusscess = (message = "thành công ") => {
    Swal.fire({
      title: message,
      text: "You clicked the button!",
      icon: "success"
    });
  }


  export let  showDataFood = (food) => {
      document.getElementById('foodID').value = food.id
      document.getElementById('tenMon').value = food.name
      document.getElementById('loai').value = food.type
      document.getElementById('giaMon').value = food.price
      document.getElementById('khuyenMai').value = food.discount
      document.getElementById('tinhTrang').value = food.status
      document.getElementById('hinhMon').value = food.image
      document.getElementById('moTa').value = food.desc
      // hiển id lên text.index

      document.getElementById('btnThem').innerText = food.id


  }
  
 

 