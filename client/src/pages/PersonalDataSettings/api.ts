export const imageFetch = async (obj:any) =>{
const respons = await fetch('/image', {
    method: 'POST',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    body: obj
})
}