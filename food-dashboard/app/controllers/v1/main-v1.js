import { getDataForm, showDataForm } from "./controller-v1.js"
let addFood = ( window.addFood=() => {
// lấy giá trị từ form 
let data = getDataForm();
console.log('data :', data);
showDataForm(data);
console.log('showDataForm :', showDataForm);


})
    
 