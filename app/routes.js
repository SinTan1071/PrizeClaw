/**
 * Define application page routes.
 */


module.exports = [
    {
        name: 'home',
        path: '/home',
        component: resolve => require.ensure(['./pages/home.vue'], require => require(['./pages/home.vue'], resolve), 'pages/home')
    },
    {
        name: 'invite-friend',
        path: '/invite-friend',
        component: resolve => require.ensure(['./pages/invite-friend.vue'], require => require(['./pages/invite-friend.vue'], resolve), 'pages/invite-friend')
    },
    {
        name: 'invite-list',
        path: '/invite-list',
        component: resolve => require.ensure(['./pages/invite-list.vue'], require => require(['./pages/invite-list.vue'], resolve), 'pages/invite-list')
    },
    {
        name: 'has-invite',
        path: '/has-invite',
        component: resolve => require.ensure(['./pages/has-invite.vue'], require => require(['./pages/has-invite.vue'], resolve), 'pages/has-invite')
},
    {
        name: 'user-information',
        path: '/user-information',
        component: resolve => require.ensure(['./pages/user-information.vue'], require => require(['./pages/user-information.vue'], resolve), 'pages/user-information')
    },
    {
        name: 'user-account',
        path: '/user-account',
        component: resolve => require.ensure(['./pages/user-account.vue'], require => require(['./pages/user-account.vue'], resolve), 'pages/user-account')
    },
    {
        name: 'my-wallet',
        path: '/my-wallet',
        component: resolve => require.ensure(['./pages/my-wallet.vue'], require => require(['./pages/my-wallet.vue'], resolve), 'pages/my-wallet')
    },
    {
        name: 'recharge',
        path: '/recharge',
        component: resolve => require.ensure(['./pages/recharge.vue'], require => require(['./pages/recharge.vue'], resolve), 'pages/recharge')
    },
    {
        name: 'recharge-success',
        path: '/recharge-success',
        component: resolve => require.ensure(['./pages/recharge-success.vue'], require => require(['./pages/recharge-success.vue'], resolve), 'pages/recharge-success')
    },
    {
        name: 'remark-success',
        path: '/remark-success',
        component: resolve => require.ensure(['./pages/remark-success.vue'], require => require(['./pages/remark-success.vue'], resolve), 'pages/remark-success')
    },
    {
        name: 'recharge-fail',
        path: '/recharge-fail',
        component: resolve => require.ensure(['./pages/recharge-fail.vue'], require => require(['./pages/recharge-fail.vue'], resolve), 'pages/recharge-fail')
    },
    {
        name: 'my-prize',
        path: '/my-prize',
        component: resolve => require.ensure(['./pages/my-prize.vue'], require => require(['./pages/my-prize.vue'], resolve), 'pages/my-prize')
    },
    {
        name: 'get-prize',
        path: '/get-prize',
        component: resolve => require.ensure(['./pages/get-prize.vue'], require => require(['./pages/get-prize.vue'], resolve), 'pages/get-prize')
    },
    {
        name: 'add-address',
        path: '/add-address',
        component: resolve => require.ensure(['./pages/add-address.vue'], require => require(['./pages/add-address.vue'], resolve), 'pages/add-address')
    },
    {
        name: 'address-list',
        path: '/address-list',
        component: resolve => require.ensure(['./pages/address-list.vue'], require => require(['./pages/address-list.vue'], resolve), 'pages/address-list')
    },
    {
        name: 'submit-order',
        path: '/submit-order',
        component: resolve => require.ensure(['./pages/submit-order.vue'], require => require(['./pages/submit-order.vue'], resolve), 'pages/submit-order')
    },
    {
        name: 'problem',
        path: '/problem',
        component: resolve => require.ensure(['./pages/problem.vue'], require => require(['./pages/problem.vue'], resolve), 'pages/problem')
    },
    {
        name: 'problem-check',
        path: '/problem-check',
        component: resolve => require.ensure(['./pages/problem-check.vue'], require => require(['./pages/problem-check.vue'], resolve), 'pages/problem-check')
    },
    {
        name: 'sub-problem',
        path: '/sub-problem',
        component: resolve => require.ensure(['./pages/sub-problem.vue'], require => require(['./pages/sub-problem.vue'], resolve), 'pages/sub-problem')
    },
    {
        name: 'detail',
        path: '/detail',
        component: resolve => require.ensure(['./pages/detail.vue'], require => require(['./pages/detail.vue'], resolve), 'pages/detail')
    },
    {
        name: 'remark',
        path: '/remark',
        component: resolve => require.ensure(['./pages/remark.vue'], require => require(['./pages/remark.vue'], resolve), 'pages/remark')
    },
    {
        name: 'get-con',
        path: '/get-con',
        component: resolve => require.ensure(['./pages/get-con.vue'], require => require(['./pages/get-con.vue'], resolve), 'pages/get-con')
    },
    {
        name: 'animation',
        path: '/animation',
        component: resolve => require.ensure(['./pages/animation.vue'], require => require(['./pages/animation.vue'], resolve), 'pages/animation')
    },
    {
        name: 'animation2',
        path: '/animation2',
        component: resolve => require.ensure(['./pages/animation2.vue'], require => require(['./pages/animation2.vue'], resolve), 'pages/animation2')
    },
];