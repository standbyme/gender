import Gender from '@enum-all/gender'
import * as assert from 'assert'

import from_pic_url from './from_pic_url'

describe('From Pic URL', function () {
    it('should return None if gender can not be inferred', async function () {
        const result = await from_pic_url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3360344751,109993736&fm=27&gp=0.jpg')
        assert(result.isEmpty())
    })

    it('should return Some if gender can be inferred', async function () {
        const result__opt = await from_pic_url('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2512929955,2641147446&fm=58&bpow=653&bpoh=900')
        assert(result__opt.nonEmpty())
        const result = result__opt.get()
        assert.equal(result, Gender.male)
    })
})
