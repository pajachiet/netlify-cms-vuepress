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
                title: 'DCIRS',
                children: [
                    ['/DCIRS/', 'DCIR+S'],
                    '/DCIRS/NS_BIO_F',
                    '/DCIRS/NS_PRS_F'
                ]
            },
            {
                title: 'Commun DCIR et DCIRS',
                children: [
                    '/DCIR_DCIRS/DA_PRA_R',
                    '/DCIR_DCIRS/IR_IMB_R'
                ]

            }
        ],
        sidebarDepth: 0,
        lastUpdated: 'Last Updated'
    }
}