
import { renderFoodlist } from "./controller-v2.js"
let apiURl = "https://66a7890a53c13f22a3d01a4e.mockapi.io/foodList"




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

let feetDataList = () => {
    axios.get(apiURl).then((res) => {
        console.log(res.data)
        renderFoodlist(res.data)
        
    }).catch((err) => {
        console.log(err)
    });
    
}
feetDataList();



