const fs = require('fs');
const path = require('path');

var dirpath = "./docs"


module.exports = {
    title: 'Documentation du SNDS',
    description: 'test de Netlify + VuePress',
    themeConfig: {
        docsDir: 'docs',
        repo: 'pajachiet/netlify-cms-vuepress',
        sidebar: {
            '/produits/DCIRS/': [
                ['', 'Le produit DCIRS'],
                ['NS_BIO_F', 'NS_BIO_F'],
                'NS_PRS_F'
            ],
            '/produits/DCIR_DCIRS/': [
                ['DA_PRA_R', 'DA_PRA_R'],
                'IR_IMB_R'
            ],
            '/': [
                '',
                'production',
                '/produits/'
            ],
        },
        sidebarDepth: 0,
        lastUpdated: 'Last Updated'
    }
}