import Gender from '@enum-all/gender'
import * as request from 'request-promise'

export default async function (pic_url: string) {
    const options = {
        url: pic_url,
        encoding: 'base64',
    }
    const img_base64 = await request(options)

    // tslint:disable-next-line:variable-name
    const AipFaceClient = require('baidu-aip-sdk').face

    const APP_ID = '10818581'
    const API_KEY = 'V9n4YrySvBpdiWZOzNt5FGe9'
    const SECRET_KEY = 'gTfso0G0yzKcZA01WhbH6KQzeLguI9o9'

    const client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY)

    const result = await client.detect(img_base64, { face_fields: 'gender' })
    console.log(result)
}
