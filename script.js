var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
   autoplay: {
        delay: 3000, 
      },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let cart = []; 
let AllData = [];


async function getdata(){
    document.querySelector(".loader").style.display = "flex"
    const api = await fetch("./pg.json")
    const res = await api.json();
    console.log(res);
    AllData = res.products;
    displaydata(res.products)
    document.querySelector(".loader").style.display = "none"
}
function displaydata(data){
    const carts = document.querySelector(".cartlar")
    carts.innerHTML = "";
    data.forEach((item) => {
        const cart = document.createElement("div")
        cart.setAttribute("class", "cart-1")
        cart.innerHTML = `
        <div class="img-cart">
        <div class="iconcalar">
                            <div class="shops">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path
                                        d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
                                </svg>
                            </div>
                            <div class="searchs">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path
                                        d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 176C258.7 176 248 186.7 248 200L248 248L200 248C186.7 248 176 258.7 176 272C176 285.3 186.7 296 200 296L248 296L248 344C248 357.3 258.7 368 272 368C285.3 368 296 357.3 296 344L296 296L344 296C357.3 296 368 285.3 368 272C368 258.7 357.3 248 344 248L296 248L296 200C296 186.7 285.3 176 272 176z" />
                                </svg>
                            </div>
                            <div class="harts">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640">
                                    <path
                                        d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" />
                                </svg>
                            </div>
                        </div>
                        <img src=${item.images} alt="">
                    </div>
                    <h2>${item.title}</h2>
                    <div class="rang">
                        <div class="yellow"></div>
                        <div class="pink"></div>
                        <div class="darkblue"></div>
                    </div>
                    <p class="yoq">$${item.price}</p>
                    <span class="uchir">
                        <p>$${item.stars}</p>
                        <del>$${item.price}</del>
                    </span>
        `
        let boss = document.querySelector(".boos-cart")
        let swipcarts = document.querySelector(".pages")
        cart.addEventListener("click", ()=>{
            boss.style.display = "flex"
            swipcarts.style.display = "none"
            let promt = document.querySelector(".promo-btn")
            boss.innerHTML = ""
            let creat = document.createElement("div")
            creat.setAttribute("class", "creat")
            creat.innerHTML = `
            <div class="detals">
                    <div class="boss container">
                        <h1>Product Details</h1>
                        <span>
                            <p>Home . Pages</p>
                            <p>. Shop Grid Default</p>
                        </span>
                    </div>
                </div>
                <div class="malu">
                    <div class="malumot container">
                        <div class="hottel">
                            <div class="img3">
                                <img class="imgs11" src=${item.images} alt="">
                                <img class="imgs22" src=${item.images} alt="">
                                <img class="imgs33" src=${item.images} alt="">
                            </div>
                            <div class="sumka">
                                <img src=${item.images} alt="">
                            </div>
                            <div>
                                <h1>${item.title}</h1>
                                 <p class="add cost">${item.price}</p>
                                <span class="uch">
                                    <p>${item.stars}</p>
                                    <del>${item.price}</del>
                                </span>
                                <p>Color</p>
                                <button class="promo-btn">Add To Cart</button>
                                <h4 class="desc">Description : ${item.description}</h4>
                                <h4>Share</h4>
                                <div class="flex">
                                    <div class="face">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path
                                                d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
                                        </svg>
                                    </div>
                                    <div class="inis">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path
                                                d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                                        </svg>
                                    </div>
                                    <div class="telegram">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path
                                                d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            boss.append(creat)
                       let ads = document.querySelector(".promo-btn")
             ads.addEventListener("click", ()=> {
                addtocart(item) 
            })
        })
        carts.append(cart)
    });
}
getdata();

let aldata = {};
async function newgetdata(){
    const apis = await fetch("./cart.json")
    const req = await apis.json();
    aldata = req
    console.log(req);
    displaydatas(req.carts)
}

const carts = document.querySelector(".carts")
function displaydatas(dates){
    carts.innerHTML = ""
    dates.forEach((items)=>{
        const cartbox = document.createElement("div")
        cartbox.setAttribute("class", "cart-box")
        cartbox.innerHTML = `
                    <div class="img-box">
                        <div class="killer">
                            <div class="mon">
                                <div class="veb">
                                    <div class="sale">
                                        <p>Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div class="svg-icon">
                                <div class="none">
                                    <div class="shopping">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path
                                                d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="none">
                                    <div class="shopping">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path
                                                d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="none">
                                    <div class="shopping">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path
                                                d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 176C258.7 176 248 186.7 248 200L248 248L200 248C186.7 248 176 258.7 176 272C176 285.3 186.7 296 200 296L248 296L248 344C248 357.3 258.7 368 272 368C285.3 368 296 357.3 296 344L296 296L344 296C357.3 296 368 285.3 368 272C368 258.7 357.3 248 344 248L296 248L296 200C296 186.7 285.3 176 272 176z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img src=${items.images} alt="">
                        </div>
                    </div>
                    <div class="p-text">
                        <p>${items.title}</p>
                        <p class="add">${items.delprice}</p>
                        <span class="uch">
                            <p>${items.price}</p>
                            <del>${items.delprice}</del>
                        </span>
                    </div>
        `
        let boss = document.querySelector(".boos-cart")
        let swipcarts = document.querySelector(".click")
        let pag = document.querySelector(".pag") 
        cartbox.addEventListener("click", ()=>{
            boss.style.display = "flex"
            swipcarts.style.display = "none"
            if(pag) pag.style.display = "none"
            boss.innerHTML = ""
            let creat = document.createElement("div")
            creat.setAttribute("class", "creat")
            creat.innerHTML = `
            <div class="detals">
                    <div class="boss container">
                        <h1>Product Details</h1>
                        <span>
                            <p>Home . Pages</p>
                            <p>. Shop Grid Default</p>
                        </span>
                    </div>
                </div>
                <div class="malu">
                    <div class="malumot container">
                        <div class="hottel">
                            <div class="img3">
                                <img class="imgs1" src=${items.images} alt="">
                                <img class="imgs2" src=${items.images} alt="">
                                <img class="imgs3" src=${items.images} alt="">
                            </div>
                            <div class="sumka">
                                <img class="img-katta" src=${items.images} alt="">
                            </div>
                            <div>
                                <h1>${items.title}</h1>
                                <p class="add cost">${items.delprice}</p>
                                <span class="uch">
                                    <p>${items.price}</p>
                                    <del>${items.delprice}</del>
                                </span>
                                <p>Color</p>
                                <button class="cart-adds">Add To Cart</button>
                                <h4 class="desc">Description : ${items.description}</h4>
                                <h4>Share</h4>
                                <div class="flex">
                                    <div class="face">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path
                                                d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
                                        </svg>
                                    </div>
                                    <div class="inis">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path
                                                d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                                        </svg>
                                    </div>
                                    <div class="telegram">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path
                                                d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            boss.append(creat)
            
            let img1 = creat.querySelector(".imgs1")
            let img2 = creat.querySelector(".imgs2") 
            let img3 = creat.querySelector(".imgs3")
            let img4 = creat.querySelector(".img-katta")
            
            img1.addEventListener("click", ()=>{
                img4.src = img1.src
            })
            
            img2.addEventListener("click", ()=>{
                img4.src = img2.src  
            })
            
            img3.addEventListener("click", ()=>{
                img4.src = img3.src
            })
            
            let ads = creat.querySelector(".cart-adds")
            ads.addEventListener("click", ()=> {
                addtocart(items)
            })
        })
        
        carts.append(cartbox)
    })
}

newgetdata()

function addtocart(item){
    cart.push(item)
    console.log("Cart items:", cart);
    requad()
}
let notes = document.querySelector(".no-cart")
let eus = document.querySelector(".eus")
function requad(){
    let toza = document.querySelector(".toza")
    toza.addEventListener("click", ()=>{
        eus.style.display = "none"
        notes.style.display = "block"
    })
    if(cart.length > 0){
        notes.style.display = "none"
    }
    eus.innerHTML = "";
    cart.forEach((item, index) => {
        const shopcart = document.createElement("div")
        shopcart.innerHTML = `
            <div class="ad-to-cart">
                <div class="euro">
                    <div class="flex-no">
                        <img src="${item.images}" alt="${item.title}">
                        <div class="svg-none" data-index="${index}">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                    d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h4>${item.title}</h4>
                        <p>Color: Brown</p>
                        <p>Size: XL</p>
                    </div>
                </div>
                <h3>${item.price}</h3>
                <div class="kupay">
                    <div class="minus" data-index="${index}">
                        -
                    </div>
                    <span class="quantity">1</span>
                    <div class="plus" data-index="${index}">
                        +
                    </div>
                </div>
                <h3 class="total-price">${item.price}</h3>
            </div>
            <hr>
        `
        const removeBtn = shopcart.querySelector(".svg-none")
        removeBtn.addEventListener("click", function() {
            const itemIndex = parseInt(this.getAttribute("data-index"))
            cart.splice(itemIndex, 1)
            requad()
        })
        if(cart.length === 5){
            eus.classList.toggle("activ")
        }
        let sum = document.querySelector(".sum");

        const minusBtn = shopcart.querySelector(".minus")
        const plusBtn = shopcart.querySelector(".plus")
        const quantitySpan = shopcart.querySelector(".quantity")
        const totalPrice = shopcart.querySelector(".total-price")
        
        minusBtn.addEventListener("click", function() {
            const itemIndex = parseInt(this.getAttribute("data-index"))
            let quantity = parseInt(quantitySpan.textContent)
            if(quantity > 1) {
                quantity--
                quantitySpan.textContent = quantity
                totalPrice.textContent = `$${(parseFloat(item.price.replace('$', '')) * quantity).toFixed(2)}`
            }
        })
        
        plusBtn.addEventListener("click", function() {
            const itemIndex = parseInt(this.getAttribute("data-index"))
            let quantity = parseInt(quantitySpan.textContent)
            quantity++
            quantitySpan.textContent = quantity
            totalPrice.textContent = `$${(parseFloat(item.price.replace('$', '')) * quantity).toFixed(2)}`
        })
        
        eus.append(shopcart)
    })
}








const main = document.querySelector("main")
main.style.display = "block"
let shop = document.querySelector(".shop")
let rect =  document.querySelector(".rec")
let click = document.querySelector(".click")
let pag = document.querySelector(".pages")
let bosscart = document.querySelector(".boos-cart")
let academy = document.querySelector(".academy")
shop.addEventListener("click", ()=>{
    bosscart.style.display = "none"
    rect.style.display = "block"
    click.style.display = "none"
    pag.style.display = "none"
})
academy.addEventListener("click", ()=>{
    rect.style.display = "none"
    click.style.display = "none"
    bosscart.style.display = "none"
    pag.style.display = "block"
})
let homes = document.querySelector(".home")
homes.addEventListener("click", ()=>{
    rect.style.display = "none"
    click.style.display = "block"
    console.log(click);
    bosscart.style.display = "none"
    pag.style.display = "none"
})
function handleSelect(event){
    let tanlangan = event.target.value;
    if (tanlangan === "all") {
        displaydata(AllData);
    } else if (tanlangan === "Shkaf"){
        let natija = AllData.filter((item) => item.category === "Shkaf");
        displaydata(natija);
    } else if (tanlangan === "Telefon"){
        let natija = AllData.filter((item) => item.category === "Telefon");
        displaydata(natija);
    } else if(tanlangan === "Sumka"){
        let natija = AllData.filter((item) => item.category === "Sumka");
        displaydata(natija);
    }
}
const search = document.getElementById("search-data")
search.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        let res = AllData.filter((item) => 
            item.price.toString().toLowerCase().includes(e.target.value.toLowerCase())
        )
        console.log(res);
        if (res.length < 1) {
            carts.innerHTML = ""
            const notFound = document.createElement("h5")
            notFound.setAttribute("class", "qidirno")
            notFound.textContent = "Siz qidirgan product bizda mavjud emas"
            carts.append(notFound)
        } else {
            displaydata(res)
        }
    }
    if (e.target.value == "") {
        displaydata(AllData)
    }
})
const searchDat = document.getElementById("inp-search")
searchDat.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        let res = AllData.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(res);
        
        if (res.length < 1) {
            carts.innerHTML = ""
            const notFound = document.createElement("h5")
            notFound.setAttribute("class", "qidirno")
            notFound.textContent = "Siz qidirgan product bizda mavjud emas"
            carts.append(notFound)
        } else {
            displaydata(res)
        }
    }
    if (e.target.value == "") {
        displaydata(AllData)
    }
})

const searchData = document.getElementById("inp-search")
let my = document.querySelector(".cart")
searchData.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        let res = aldata.carts.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        my.style.display = "none"
        if (res.length < 1) {
            carts.innerHTML = ""
            const notFound = document.createElement("h5")
            notFound.textContent = "Siz qidirgan product bizda mavjud emas"
            carts.append(notFound)
        } else {
            displaydatas(res)
        }
    }
    if (e.target.value == "") {
        my.style.display = "block"
        displaydatas(aldata.carts)
    }
})
const date = new Date();
let endhour = new Date(date.getTime() + 1 * 1 * 10 * 1000);
const hoursLast = document.querySelector(".hours");
const minutesLast = document.querySelector(".minutes");
const secondsLast = document.querySelector(".seconds");
let box = document.querySelector(".box")
function format(num) {
    return String(num).padStart(2, "0");
}
let timeInterval = setInterval(() => {
    let now = new Date();
    let timer = endhour - now;
    let hour = Math.floor(timer / (1000 * 60 * 60));
    let minut = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((timer % (1000 * 60)) / 1000);
    hoursLast.textContent = format(hour);
    minutesLast.textContent = format(minut);
    secondsLast.textContent = format(second)
    if(hour < 0 || minut < 0 || second < 0){
        let add = document.querySelectorAll(".add")
    let uch = document.querySelectorAll(".uch")
    add.forEach((item)=>{
        item.style.display = "flex"
    })
    uch.forEach((item)=>{
        item.style.display = "none"
    })
        hoursLast.textContent = 0
        minutesLast.textContent = 0
        secondsLast.textContent = 0
        box.style.display = "none"
    }
}, 1000);
const hoursLasts = document.querySelector(".hour");
const minutesLasts = document.querySelector(".minute");
const secondsLasts = document.querySelector(".second");
let boxs = document.querySelector(".boxs")
function format(num) {
    return String(num).padStart(2, "0");
}
let timeIntervals = setInterval(() => {
    let now = new Date();
    let timer = endhour - now;
    let hour = Math.floor(timer / (1000 * 60 * 60));
    let minut = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((timer % (1000 * 60)) / 1000);
    hoursLasts.textContent = format(hour);
    minutesLasts.textContent = format(minut);
    secondsLasts.textContent = format(second);
    if(hour < 0 || minut < 0 || second < 0){
        hoursLasts.textContent = 0
        minutesLasts.textContent = 0
        secondsLasts.textContent = 0
        boxs.style.display = "none"
             let add = document.querySelectorAll(".yoq")
    let uch = document.querySelectorAll(".uchir")
    add.forEach((item)=>{
        item.style.display = "flex"
    })
    uch.forEach((item)=>{
        item.style.display = "none"
    })
    }
}, 1000);