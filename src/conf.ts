
/**
 * 作者: VcrTing
 */

export const VERSION = '1.32'

export const TEST = false

export const COMPANY = {
    
    // 没什么用
    name: '886HK',

    // 对接 strapi 的后台 LINK
    // 具体 配置 请看 conf/net/net-conf.ts
    strapi: 'https://strapi11.svr.up5d.com',
        // TEST ? 'https://strapi11.svr.up5d.com' : 'http://127.0.0.1:1337',

    // 登录页面
    auth: {
        // 登录页面的 标题文字
        tit_1: '探索泰迪熊世界',
        tit_2: '發現無限樂趣',
        sub_1: 'Copyright ©Glorious Teddy Limited.',

        // 登录页面 背景图片
        background: 'https://gloriousteddy.com/wp-content/uploads/Slider-New-4b.jpg'
        // 'https://gloriousteddy.com/wp-content/uploads/slider-new-1b.jpg'
        // 'https://img0.baidu.com/it/u=1957377521,3121456175&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800'
        // 爱草莓
        // 'https://img2.baidu.com/it/u=2050706012,2955986534&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        // 草原熊
        // 'https://img2.baidu.com/it/u=3080100003,711696575&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
    }
}

export const SUPERMAN_ACCOUNT = <ONE>{ name: 'support@manfulls.com', pass: '' }