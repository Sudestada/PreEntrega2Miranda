
const products = [{
    id: '1',
    brand: 'Leonard',
    price: 185000,
    category: 'guitar',
    img: 'https://http2.mlstatic.com/D_NQ_NP_799560-MLA46350548581_062021-W.webp',
    stock: 5,
    description: 'Leonard LE362 stratocaster',

},
    {
        id: '2',
        brand: 'Cort',
        price: 135000,
        category: 'guitar',
        img: 'https://http2.mlstatic.com/D_NQ_NP_898081-MLA51375602262_092022-W.webp',
        stock: 5,
        description: 'Cort X Series X100 de meranti black cherry',

    },
    {
        id: '3',
        brand: 'Cort',
        price: 153000,
        category: 'guitar',
        img: 'https://http2.mlstatic.com/D_NQ_NP_625922-MLA48678794814_122021-W.webp',
        stock: 5,
        description: 'Cort X Series X100 de meranti black cherry',

    },
    {
        id: '4',
        brand: 'SX',
        price: 185000,
        category: 'guitar',
        img: 'https://http2.mlstatic.com/D_NQ_NP_688121-MLA48132853068_112021-W.webp',
        stock: 5,
        description: 'SX EE Series EE3 les paul de aliso 2000 black',
    
    },
        {
            id: '5',
            brand: 'Epiphone',
            price: 170000,
            category: 'guitar',
            img: 'https://http2.mlstatic.com/D_NQ_NP_989564-MLA46352962015_062021-W.webp',
            stock: 5,
            description: 'Epiphone Les Paul SL ',
    
        },
        {
            id: '6',
            brand: 'Parquer',
            price: 193000,
            category: 'guitar',
            img: 'https://http2.mlstatic.com/D_NQ_NP_947031-MLA48754422941_012022-W.webp',
            stock: 5,
            description: 'Parquer Custom SG',
    
        },
        {
            id: '7',
            brand: 'Cort',
            price: 200000,
            category: 'bass',
            img: 'https://http2.mlstatic.com/D_NQ_NP_746959-MLA46102607329_052021-W.webp',
            stock: 5,
            description: 'Cort Action bass VPlus',
        
        },
            {
                id: '8',
                brand: 'Parquer',
                price: 135000,
                category: 'bass',
                img: 'https://http2.mlstatic.com/D_NQ_NP_924794-MLA31913037176_082019-W.webp',
                stock: 5,
                description: 'Parquer Jazz bass',
        
            },
            {
                id: '9',
                brand: 'Yamaha',
                price: 183000,
                category: 'bass',
                img: 'https://http2.mlstatic.com/D_NQ_NP_701835-MLA50739289875_072022-W.webp',
                stock: 5,
                description: 'Yamaha 4 cuerdas TRBX',
        
            },
            
                {
                    id: '11',
                    brand: 'Parquer',
                    price: 170000,
                    category: 'bass',
                    img: 'https://http2.mlstatic.com/D_NQ_NP_782206-MLA31912048770_082019-W.webp',
                    stock: 5,
                    description: 'Parquer Jazz bass Natural ',
            
                },
                
                {
                    id: '13',
                    brand: 'Pearl',
                    price: 195000,
                    category: 'batery',
                    img: 'https://http2.mlstatic.com/D_NQ_NP_948482-MLA52470247683_112022-V.webp',
                    stock: 5,
                    description: 'Pearl Decade Maple Bombo 22 Satin Brown Burst',
                
                },
                    {
                        id: '14',
                        brand: 'Natal',
                        price: 165000,
                        category: 'batery',
                        img: 'https://http2.mlstatic.com/D_NQ_NP_650645-MLA50436035504_062022-V.webp',
                        stock: 5,
                        description: 'Natal 5 cuerpos',
                
                    },
                    {
                        id: '15',
                        brand: 'Mapex',
                        price: 333000,
                        category: 'batery',
                        img: 'https://http2.mlstatic.com/D_NQ_NP_846432-MLA53044092812_122022-V.webp',
                        stock: 5,
                        description: 'Mapex banqueta y platos completa',
                
                    },
                    {
                        id: '16',
                        brand: 'Taurus',
                        price: 185000,
                        category: 'batery',
                        img: 'https://http2.mlstatic.com/D_NQ_NP_626884-MLA31608023368_072019-V.webp',
                        stock: 5,
                        description: 'Taurus MFP 410',
                    
                    },
                        {
                            id: '17',
                            brand: 'Mapex',
                            price: 376000,
                            category: 'batery',
                            img: 'https://http2.mlstatic.com/D_NQ_NP_811572-MLA32934726239_112019-V.webp',
                            stock: 5,
                            description: 'Mapex horizont 5 cuerpos',
                    
                        },
                        {
                            id: '18',
                            brand: 'Solidrum',
                            price: 203000,
                            category: 'batery',
                            img: 'https://http2.mlstatic.com/D_NQ_NP_790917-MLA31061867211_062019-V.webp',
                            stock: 5,
                            description: 'Solidrum Nativa 5 cuerpos',
                    
                        },
    
]

export const getProducts = () => {
   return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 1000)
   })
}

/* La funcion getProducts emula un pedido a una API, en este caso products es un Arrays de objetos locales (mock)
luego se mostrara los productos en itemListContainer */