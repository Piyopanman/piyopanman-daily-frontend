const toJson = async (res) => {
    const json = await res.json();
    if(res.ok){
        return json;
    }else{
        throw new Error(json.message);
    }
}

export const getDaily = async () =>{
    const res = await fetch('http://127.0.0.1:8000/daily/', {
        method: 'GET',
        credentials: 'same-origin',
    })
    return await toJson(res);
}

export const getDailyDetail = async (id) => {
    const res = await fetch(`http://localhost:8000/daily/post/${id}`, {
        method : 'GET',
        credentials: 'same-origin',
    })
    return await toJson(res);
}

export const getCategory = async (cat) => {
    const res = await fetch(`http://localhost:8000/daily/post/${cat}`, {
        method: 'GET',
        credentials: 'same-origin',
    })
    return await toJson(res)
}


// export const getDaily = async () =>{
//     const res = await fetch('https://piyopanman.pythonanywhere.com/daily/', {
//         method: 'GET',
//     })
//     //console.log(res)
//     return await toJson(res);
// }

// export const getDailyDetail = async (id) => {
//     const res = await fetch(`https://piyopanman.pythonanywhere.com/daily/post/${id}`, {
//         method : 'GET',
//     })
//     return await toJson(res);
// }

// export const getCategory = async (cat) => {
//     const res = await fetch(`https://piyopanman.pythonanywhere.com/daily/post/${cat}`, {
//         method: 'GET',
//     })
//     //console.log(res)
//     return await toJson(res)
// }
