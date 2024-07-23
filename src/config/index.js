export default [
    {
        path:'/home',
        name:'home',
        label:'Home',
        icon:'HomeOutlined',
        url:'/home/home'
    },
    {
        path:'/item',
        name:'item',
        label:'Item',
        icon:'AppleOutlined',
        url:'/item/item'
    },
    {
        path:'/store',
        name:'store',
        label:'Store',
        icon:'ShopOutlined',
        url:'/store/store'
    },
    {
        path:'/other',
        label:'Other',
        icon:'SettingOutlined',
        children: [
            {
                path:'/other/PageOne',
                name:'page1',
                label:'Page 1',
                icon:'SettingOutlined',
            },
            {
                path:'/other/PageTwo',
                name:'page2',
                label:'Page 2',
                icon:'SettingOutlined',
            }
        ]
    }
]