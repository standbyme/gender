import Gender from '@enum-all/gender'
import { Option } from 'funfix-core'

import from_abstract from './from_abstract'
import from_basic_info from './from_basic_info'
import from_pic_url from './from_pic_url'

export interface SourceInterface {
    basic_info__opt: Option<Map<string, string>>,
    abstract__opt: Option<string>,
    pic_url__opt: Option<string>
}

export async function get_gender(source: SourceInterface): Promise<Option<Gender>> {
    const { basic_info__opt, abstract__opt, pic_url__opt } = source

    const from_basic_info_result = basic_info__opt.chain(from_basic_info)
    if (from_basic_info_result.nonEmpty()) return from_basic_info_result

    const from_abstract_result = abstract__opt.chain(from_abstract)
    if (from_abstract_result.nonEmpty()) return from_abstract_result

    if (pic_url__opt.nonEmpty()) {
        const pic_url = pic_url__opt.get()
        const from_pic_url_result = await from_pic_url(pic_url)
        if (from_pic_url_result.nonEmpty()) return from_pic_url_result
    }

    return Option.none()
}
