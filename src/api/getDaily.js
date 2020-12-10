const toJson = async (res) => {
    const json = await res.json();
    if(res.ok){
        return json;
    }else{
        throw new Error(json.message);
    }
}

export const getDaily = async () =>{
    const res = await fetch('http://127.0.0.1:8000/api/', {
        method: 'GET',
        credentials: 'same-origin',
    })
    //console.log(res)
    return await toJson(res);
}

export const getDailyDetail = async (id) => {
    const res = await fetch(`http://localhost:8000/api/${id}`, {
        method : 'GET',
        credentials: 'same-origin',
    })
    return await toJson(res);
}

export const getCategory = async (cat) => {
    const res = await fetch(`http://localhost:8000/api/${cat}`, {
        method: 'GET',
        credentials: 'same-origin',
    })
    console.log(res)
    return await toJson(res)
}
