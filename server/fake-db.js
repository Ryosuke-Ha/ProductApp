const Product = require('./model/product')

class FakeDb {

    constructor(){
        this.products = [
            {
                coverImage: './assets/img/original.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト',
                headingtext2: 'サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章 ',
                headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            },
            {
                coverImage: './assets/img/original.jpg',
                name: 'Phone mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト',
                headingtext2: 'サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章 ',
                headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            },
            {
                coverImage: './assets/img/original.jpg',
                name: 'Phone standard',
                price: 299,
                description: 'A wonderful phone with one of the most popular',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト',
                headingtext2: 'サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章 ',
                headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            },
            {
                coverImage: './assets/img/original.jpg',
                name: 'Phone special',
                price: 999,
                description: 'A gorgeous phone with one of the most expensive',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト、サンプルテキスト サンプルテキスト、サンプルテキスト、サンプルテキスト',
                headingtext2: 'サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章、サンプル文章 サンプル文章、サンプル文章、サンプル文章、サンプル文章 ',
                headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            }
        ]
    }

    async initDb(){
        await this.clearDb()
        this.pushProductsToDb()
    }

    async clearDb(){
        await Product.deleteMany({})
    }


    pushProductsToDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            })
    }
}

module.exports = FakeDb