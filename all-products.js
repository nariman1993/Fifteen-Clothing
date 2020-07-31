const products = [

    {
        id: 1,
        img_url: 'https://images.timberland.com/is/image/timberland/A2B2Q050-HERO?$PDP-FULL-IMAGE$',
        title: 'LA Shoes',
        price: 25.75,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 5,
        reviews: 24
    },
    {
        id: 2,
        img_url: 'https://www.ckf.hu/6309-thickbox_default/zara-black-baseball-cap.jpg',
        title: 'New York Cap',
        price: 5.99,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 4,
        reviews: 13
    },
    {
        id: 3,
        img_url: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/e/Men-s-Striped-Longsleeve-Shirt---Blue-8007569.jpg',
        title: 'A&N Shirt',
        price: 19.99,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 2,
        reviews: 8
    },
    {
        id: 4,
        img_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1039025-in-xl-1526909075.jpg',
        title: 'London T-Shirt',
        price: 15.99,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 3,
        reviews: 11
    },
    {
        id: 5,
        img_url: 'https://ae01.alicdn.com/kf/HTB1Vot5mNrI8KJjy0Fpq6z5hVXau.jpg_q50.jpg',
        title: 'Woman Summer',
        price: 13.99,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 4,
        reviews: 18
    },
    {
        id: 6,
        img_url: 'https://images.neimanmarcus.com/ca/23/product_assets/N/5/D/D/C/NMN5DDC_mz.jpg',
        title: '2020 Trend',
        price: 99.99,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 5,
        reviews: 43
    },
    {
        id: 7,
        img_url: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ee/P00273362.jpg',
        title: 'TOP Belt',
        price: 210.50,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 5,
        reviews: 102
    },
    {
        id: 8,
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-QhkTi3-_fp1SD3gZxJSHY--wVdhgMR1kcg&usqp=CAU',
        title: 'Ni4e-Se Shoes',
        price: 599.99,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 5,
        reviews: 439
    },
    {
        id: 9,
        img_url: 'https://fimgs.net/mdimg/perfume/375x500.28859.jpg',
        title: 'Woman TOP Parfume',
        price: 2100.99,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 5,
        reviews: 988
    },
    {
        id: 10,
        img_url: 'https://www.designerchildrenswear.com/images/gucci-jeans-blue-denim-p80551-159818_image.jpg',
        title: 'Jeans',
        price: 50.99,
        text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        rating: 5,
        reviews: 8
    }
]


/* -------------------------- Display Total amount of Products -------------------------- */
document.getElementById('total__products').innerHTML = `
    <span>${products.length}</span>
`

/* -------------------------- DISPLAY ALL PRODUCTS -------------------------- */
function displayAllProducts(item){
    console.log(item)
    return `
            <div class = "product">
                <img src = ${item.img_url}></img>
                
                <div class = product-top>
                    <h4>${item.title}</h4>
                    <h6>$${item.price}</h6>
                </div>

                <p>${item.text}</p>

                <div class = product-bottom>
                    <h6>Rating: ${item.rating} out of 5</h6>
                    <a href = "#"><span>Reviews (${item.reviews})</span></a>
                </div>
                <a href = "#" class = "btn-buy">Buy</a>
            </div>
            
            `
}
document.getElementById('all-products').innerHTML = `
    ${products.map(displayAllProducts).join('')}
`
/* -------------------------- END -------------------------- */