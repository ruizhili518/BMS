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
        icon:'ShopOutlined',
        url:'/item/item'
    },
    {
        path:'/user',
        name:'user',
        label:'User',
        icon:'UserOutlined',
        url:'/user/user'
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