import Gender from '@enum-all/gender'
import * as assert from 'assert'

import from_abstract from './from_abstract'

describe('From Abstract', function () {
    it('should return None if fails', async function () {
        const text = '王毅，北京人，汉族'
        assert(from_abstract(text).isEmpty())
    })
    it('should return Some if succeeds', async function () {
        const text = '王毅，男，北京人，汉族'
        const result__opt = from_abstract(text)
        assert(result__opt.nonEmpty())
        const result = result__opt.get()
        assert.equal(result, Gender.male)
    })

    it('should return Some if succeeds', async function () {
        const text = '男，王毅，北京人，汉族'
        const result__opt = from_abstract(text)
        assert(result__opt.nonEmpty())
        const result = result__opt.get()
        assert.equal(result, Gender.male)
    })
})
