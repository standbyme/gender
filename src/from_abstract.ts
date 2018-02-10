import Gender from '@enum-all/gender'
import { Option } from 'funfix-core'
import * as _ from 'lodash'

import { gender_string_enum__map } from './string_enum__map'
import { gender_lang_to_gender_enum } from './utility'

const gender = [/，(男|女)，/, /^(男|女)，/, /：(男|女)，/]

function reg_match(reg: RegExp, str: string): Option<RegExpExecArray> {
    return Option.of(reg.exec(str))
}

export default function (abstract: string): Option<Gender> {
    const gender__list = gender.map(reg => reg_match(reg, abstract)).filter(v => v.nonEmpty()).map(v => v.get())
    return Option.of(_.head(gender__list)).map(reev => reev[1]).chain(gender_lang_to_gender_enum)
}
