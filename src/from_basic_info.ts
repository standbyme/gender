import Gender from '@enum-all/gender'
import { Option } from 'funfix-core'

import { gender_string_enum__map } from './string_enum__map'
import { gender_lang_to_gender_enum, safe_get_from_map } from './utility'

export default function (basic_info: Map<string, string>): Option<Gender> {
    const gender_lang__opt = safe_get_from_map(basic_info, '性别')
    const gender_enum__opt = gender_lang__opt.chain(gender_lang_to_gender_enum)
    return gender_enum__opt
}
