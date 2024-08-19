
import {getDataForm} from "../v1/controller-v1.js"

import { renderFoodlist,onSusscess,showDataFood } from "./controller-v2.js"
import { deleFoodService, getlistfood,createdAPIService,getDetailServices,updateFood } from "./services.js";






// let feetData = async () => {
//     try {
//         let res = await axios({
//             url : apiURl,
//             methor : "GET"
//         })
        
//         console.log('res.data :', res.data);
//         return res.data
        
//     } catch (error) {
//     console.log('error :', error);
        
        
//     }
// }
// let respon =await feetData();
// console.log(respon)

// let feetDataList = () => {
//     axios.get(apiURl).then((res) => {
//         console.log(res.data)
//         renderFoodlist(res.data)
        
//     }).catch((err) => {
//         console.log(err)
//     });
    
// }




let fethFoodList =async () => {
    let listFood = await getlistfood();
    renderFoodlist(listFood)
}
fethFoodList();


window.deleteFood = (id) => {
    deleFoodService(id)
    .then((res) => {
        console.log(`xoa thanh cong`)
        onSusscess("xóa món ăn thành công");
        fethFoodList()
    }).catch((arr) => {
        console.log(`xoa that bai`)
    });
  
}
// window.CreatedFood = () => {
//   let data  = getDataForm();
// //   console.log(data)
//   createdAPIService(data)
// //   console.log(createdAPIService(data))
//   .then((res) => {
//     modal.hide();
//     console.log(`them thanh cong`)
//     fethFoodList();
    
//   }).catch(() => {
//     console.log(`theem khong thanh cong`)
    
//   });
  
// }

window.CreatedFood= () => {
  let data  = getDataForm();
  createdAPIService(data)
  console.log('data :', data)
  
  .then((res) => {
    onSusscess();
    fethFoodList();

    
    
  }).catch(() => {
    console.log(`theem khong thanh cong`)
    
  });
  
}


window.editFoodList = (id) => {
  getDetailServices(id)
  .then((resul) => {
    console.log("detail",resul)
    $("#exampleModal").modal("show");
    showDataFood(resul.data)
  }).catch(() => {
    console.log(`that bai`)
  });

}
window.updateFood = (food,id) => {
  
  updateFood(food,id)
  .then((res) => {
    console.log(`cap nhat thanh cong`)
    onSusscess();
    fethFoodList();
  }).catch(() => {
    console.log(`cap nhat that bai`)
  });
  
}

window.updateFood = () => {
  let data  = getDataForm();
  let id = document.getElementById('btnThem').innerText;
  updateFood(data,id).then((res) => {
    onSusscess();
    $("#exampleModal").modal("hide");
    fethFoodList();
  }).catch((err) => {
  console.log('err :', err);
  
    
  });
  
}






