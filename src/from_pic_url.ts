import Gender from '@enum-all/gender'
import * as request from 'request-promise'

export default async function (pic_url: string) {
    const options = {
        url: pic_url,
        encoding: 'base64',
    }
    const img_base64 = await request(options)
}
