const fs = require('fs');
const path = require('path');

var dirpath = "./docs"


module.exports = {
    title: 'Documentation du SNDS',
    description: 'test de Netlify + VuePress',
    themeConfig: {
        docsDir: 'docs',
        repo: 'pajachiet/netlify-cms-vuepress',
        sidebar: [
            {
                title: 'DCIRS',   // required
                path: '/DCIRS/',      // optional, which should be a absolute path.
                children: [
                    '/',
                    '/NS_BIO_F',
                    '/NS_PRS_F'
                ]
            },
            {
                title: 'DCIR_DCIRS',
                children: [
                    '/',
                    'DA_PRA_R',
                    'IR_IMB_R'
                ]

            }
        ],
        lastUpdated: 'Last Updated'
    }
}