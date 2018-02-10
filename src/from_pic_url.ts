import Gender from '@enum-all/gender'
import { Option } from 'funfix-core'
import * as request from 'request-promise'

import { gender_string_enum__map } from './string_enum__map'
import { gender_lang_to_gender_enum } from './utility'

export default async function (pic_url: string): Promise<Option<Gender>> {
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

    if (result.result_num > 0) return Option.of(result.result[0].gender).chain(gender_lang_to_gender_enum)
    else return Option.none()
}
