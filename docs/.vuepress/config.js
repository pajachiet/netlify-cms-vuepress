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
                    '/DCIRS/',
                    '/DCIRS/NS_BIO_F.md',
                    '/DCIRS/NS_PRS_F.md'
                ]
            },
            {
                title: 'DCIR_DCIRS',
                children: [
                    '/DCIR_DCIRS/',
                    '/DCIR_DCIRS/DA_PRA_R.md',
                    '/DCIR_DCIRS/IR_IMB_R.md'
                ]

            }
        ],
        lastUpdated: 'Last Updated'
    }
}