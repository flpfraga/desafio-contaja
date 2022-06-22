import axios from "axios";

export const publicKey = "59b5e158d136fd42a87db833e0f4a5c6"
const privateKey = "e19a813661f3a49a53d67b4f45c45cfcc66190c7"
export const ts = 1
export const hash = "451118ad8022f31e5b42c0b59f6becf3"

const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/',

})

export async function get() {

    try{
        const comics = await api.get('comics', {
            params: {
                ts: 1,
                apikey: publicKey,
                hash: hash,
                limit: 60,
                orderBy: '-modified',
                
            }
        })
        return comics
    }
    catch(error){
        return false
    }


}
export async function getId(id) {

    try{
        const comics = await api.get('comics/'+id, {
            params: {
                ts: 1,
                apikey: publicKey,
                hash: hash,
            }
        })
        return comics.data.data.results[0]
    }
    catch(error){
        return false
    }


}
export async function getSearch(search) {


    const comics = await api.get('comics', {
        params: {
            ts: 1,
            apikey: publicKey,
            hash: hash,
            limit: 60,
            orderBy: '-modified',
            titleStartsWith: search,
        }
    })
    return comics
}

export default api;