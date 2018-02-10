import Gender from '@enum-all/gender'
import { Option } from 'funfix-core'

function safe_get_from_map<A>(map: Map<string, A>, key: string): Option<A> {
    return Option.of(map.get(key))
}

const gender_enum__map = new Map(
    [
        ['男', Gender.male],
        ['女', Gender.female]
    ]
)

export default function (basic_info: Map<string, string>): Option<Gender> {
    const gender_lang__opt = safe_get_from_map(basic_info, '性别')
    const gender_enum__opt = gender_lang__opt.chain(gender_lang => safe_get_from_map(gender_enum__map, gender_lang))
    return gender_enum__opt
}
