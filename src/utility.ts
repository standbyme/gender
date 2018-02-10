import Gender from '@enum-all/gender'
import { Option } from 'funfix-core'

import { gender_string_enum__map } from './string_enum__map'

export function safe_get_from_map<A>(map: Map<string, A>, key: string): Option<A> {
    return Option.of(map.get(key))
}

export function gender_lang_to_gender_enum(gender_lang: string): Option<Gender> {
    return safe_get_from_map(gender_string_enum__map, gender_lang)
}
