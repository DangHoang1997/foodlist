let apiURl = "https://66a7890a53c13f22a3d01a4e.mockapi.io/foodList"



export let getlistfood = async() => {
    let res = await axios({
        url : apiURl,
        method : "GET"
    })
    return res.data
}

export let deleFoodService =  (id) => {
    return axios.delete(`${apiURl}/${id}`)
    
  
}
export let editFoodList = () => {
    return axios.put(`${apiURl}/${id}`)
}

export let createdAPIService = (food) => {
    
  return axios ({
    url : apiURl,
    method : "POST",
    data : food,
  })
}

