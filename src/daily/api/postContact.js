// export const postContact = async(body) => {
//     await fetch('http://localhost:8000/daily/contact/',{
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: "same-origin",
//         body: JSON.stringify(body),  
//     })
//     return
// }

export const postContact = async(body) => {
    await fetch('https://piyopanman.pythonanywhere.com/daily/contact/',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify(body),  
    })
    return
}
