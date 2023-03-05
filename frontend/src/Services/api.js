import axios from 'axios'
const URL = `http://localhost:8000`

export const registerUser = async(data,config)=>{
    try{
        return await axios.post(`${URL}/register`, data,config)
        // const res = await axios.post(`/register`, data,config)
        // console.log(res.data.userdata);
    }
    catch(error){
        console.log(`Something Went Wrong ${error}`);
    }
}


export const getdata = async()=>{
    try{
        return await axios.get(`${URL}/alldata`)
        // return await axios.get(`/alldata`)
    }
    catch(error){
        console.log(`Something Went Wrong ${error}`);
    }
}

export const deletedatas = async(id)=>{
    try{
        return await axios.delete(`/${id}`)
    }
    catch(error){
        console.log(`Something Went Wrong ${error}`);
    }

}