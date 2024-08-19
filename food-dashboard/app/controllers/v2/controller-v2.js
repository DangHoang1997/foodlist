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
        <button onclick = "updateFood(${id})" class = "btn btn-blue">Sửa </button>
        </td>
        </tr>
        `

        contentHTML += trstring
    })



    document.getElementById("tbodyFood").innerHTML = contentHTML;
  }



  export let  onSusscess = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

 