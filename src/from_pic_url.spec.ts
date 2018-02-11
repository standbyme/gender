import Gender from '@enum-all/gender'
import * as assert from 'assert'

import from_pic_url from './from_pic_url'

describe('From Pic URL', function () {
    it('should return None if gender can not be inferred', async function () {
        const result = await from_pic_url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3360344751,109993736&fm=27&gp=0.jpg')
        assert(result.isEmpty())
    })

    it('should return Some if gender can be inferred', async function () {
        const result__opt = await from_pic_url('https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=342d1b5192eef01f4d141fc3d8c5fe18/1e30e924b899a901ccaaf9031b950a7b0208f56c.jpg')
        assert(result__opt.nonEmpty())
        const result = result__opt.get()
        assert.equal(result, Gender.female)
    })
})
