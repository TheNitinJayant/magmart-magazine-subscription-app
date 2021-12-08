const CartData = {
    _cartLocation: "magmart-cart",

    hasCart: function () {
        if (localStorage.hasOwnProperty(this._cartLocation)) {
            return true;
        }
        return false;
    },

    getCart: function () {
        var cartSet = null;

        if (this.hasCart()) {
            let cartString = localStorage.getItem(this._cartLocation);
            let cartArray = cartString.split(",");

            let numberedCartArray = cartArray.map((id) => {
                let number = parseInt(id);
                return number;
            });

            cartSet = new Set(numberedCartArray);
        } else {
            cartSet = new Set();
        }

        return cartSet;
    },

    setCart: function (cartSet) {
        let cartArray = new Array(...cartSet);
        let cartString = cartArray.toString();

        localStorage.setItem(this._cartLocation, cartString);
    },

    clearCart: function () {
        localStorage.removeItem(this._cartLocation);
    },
};

export default CartData;
