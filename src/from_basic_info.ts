import Gender from '@enum-all/gender'
import { Option } from 'funfix-core'

import { gender_string_enum__map } from './string_enum__map'
import { safe_get_from_map } from './utility'

export default function (basic_info: Map<string, string>): Option<Gender> {
    const gender_lang__opt = safe_get_from_map(basic_info, '性别')
    const gender_enum__opt = gender_lang__opt.chain(gender_lang => safe_get_from_map(gender_string_enum__map, gender_lang))
    return gender_enum__opt
}
