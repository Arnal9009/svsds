class Header {

  

  handleShoppingOpenPage () {
    shoppingPage.render()
  }

  render (counter) {
    const html = `
      <div class="header__container">
        <nav class="nav">
        <a href="http://127.0.0.1:5500/index.html"><h3>Shot<span>Shop</span></h3></a>
          <form class="header__inp">
            <input class="place_for_search"><img src="/Catalog/images/icons/search.svg"></input>
          </form>
          <div class="dropdown">
              <img src="./Catalog/images/icons/burger.svg" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <ul class="dropdown-menu menu_menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item menu_li" href="http://127.0.0.1:5500/index.html">Main</a></li>
                <li><a class="dropdown-item menu_li" href="http://127.0.0.1:5500/catalog.html">All skins</a></li>
                <li><a class="dropdown-item menu_li" href="#">Basket</a></li>
              </ul>
          </div>
          <div class="nav__basket" onclick="headerPage.handleShoppingOpenPage()">
            <div class="nav__burger">
              <img src="/Catalog/images/icons/basket.svg">
            </div>
            <div class="basket-radius">
              <span>${counter}</span>
            </div>
          </div>
        </nav>
      </div>
    `
    ROOT_HEADER.innerHTML = html
  }
}

const headerPage = new Header()

const productsStore = localStorageUtil.getProducts()
headerPage.render(productsStore.length)

const input = document.querySelector("header__inp input")
