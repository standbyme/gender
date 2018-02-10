import Gender from '@enum-all/gender'
import * as assert from 'assert'

import from_basic_info from './from_basic_info'

describe('From Basic Info', function () {
    it('should return None if gender can not be inferred', function () {
        const basic_info = new Map([['国籍', '中国'], ['毕业院校', '复旦大学']])
        const result = from_basic_info(basic_info)
        assert(result.isEmpty())
    })

    it('should return None if gender can not be inferred', function () {
        const basic_info = new Map([['国籍', '中国'], ['毕业院校', '复旦大学'], ['性别', '不明']])
        const result = from_basic_info(basic_info)
        assert(result.isEmpty())
    })

    it('should return Some if gender can be inferred', function () {
        const basic_info = new Map([['国籍', '中国'], ['毕业院校', '复旦大学'], ['性别', '男']])
        const result__opt = from_basic_info(basic_info)
        assert(result__opt.nonEmpty())
        const result = result__opt.get()
        assert.equal(result, Gender.male)
    })
})
