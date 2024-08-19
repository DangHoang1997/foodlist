
import {getDataForm} from "../v1/controller-v1.js"

import { renderFoodlist,onSusscess } from "./controller-v2.js"
import { deleFoodService, getlistfood,createdAPIService } from "./services.js";






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
        onSusscess();
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
    
    console.log(`them thanh cong`)
    onSusscess();
    fethFoodList();
    
    
  }).catch(() => {
    console.log(`theem khong thanh cong`)
    
  });
  
}







