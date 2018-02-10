import Gender from '@enum-all/gender'
import * as assert from 'assert'
import { Option } from 'funfix-core'

import { get_gender } from './index'

describe('Mix', function () {
    it('should return None if gender can not be inferred', async function () {
        const source = {
            basic_info__opt: Option.none(),
            abstract__opt: Option.none(),
            pic_url__opt: Option.none()
        }
        const result = await get_gender(source)
        assert(result.isEmpty())
    })

    it('should return Some if gender can be inferred', async function () {
        const source = {
            basic_info__opt: Option.none(),
            abstract__opt: Option.none(),
            pic_url__opt: Option.of('https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1518275419&di=72b252fc1a982bc502eda29d0e0b76a1&src=http://pic.yesky.com/uploadImages/2015/016/40/MD36ZX49QZEI.jpg')
        }
        const result = await get_gender(source)
        assert(result.nonEmpty())
        assert.equal(result.get(), Gender.male)
    })
})
