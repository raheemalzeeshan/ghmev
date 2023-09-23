function formatMoney(cents, format){ 
        if (typeof cents == 'string') { cents = cents.replace('.',''); }
        var value = '';
        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
        var formatString = (format || this.money_format);
      
        function defaultOption(opt, def) {
           return (typeof opt == 'undefined' ? def : opt);
        }
      
        function formatWithDelimiters(number, precision, thousands, decimal) {
          precision = defaultOption(precision, 2);
          thousands = defaultOption(thousands, ',');
          decimal   = defaultOption(decimal, '.');
      
          if (isNaN(number) || number == null) { return 0; }
      
          number = (number/100.0).toFixed(precision);
      
          var parts   = number.split('.'),
              dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
              cents   = parts[1] ? (decimal + parts[1]) : '';
      
          return dollars + cents;
        }
      
        switch(formatString.match(placeholderRegex)[1]) {
          case 'amount':
            value = formatWithDelimiters(cents, 2);
            break;
          case 'amount_no_decimals':
            value = formatWithDelimiters(cents, 0);
            break;
          case 'amount_with_comma_separator':
            value = formatWithDelimiters(cents, 2, '.', ',');
            break;
          case 'amount_no_decimals_with_comma_separator':
            value = formatWithDelimiters(cents, 0, '.', ',');
            break;
        }
      
        return formatString.replace(placeholderRegex, value);
      };


document.querySelectorAll(".cart-product-quantity-container button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        let checkClass = btn.classList.contains("cart-plus");
        let get_inputQty = btn.parentElement.querySelector("input");
        let input_qtyValue = Number(get_inputQty.value);
        let getDataId_key = btn.closest(".cart-product-card").getAttribute("data-key");
        
        let getQty_spanValue = btn.closest(".cart-product-card").querySelector(".cart-product-card-content-items .cart_product_qtyValue span");
        
        if (checkClass) {
            let qty_valueIncr = get_inputQty.value = input_qtyValue + 1;
            getQty_spanValue.innerHTML = qty_valueIncr;
            onChange(getDataId_key, qty_valueIncr)
        } else if (input_qtyValue > 1) {
            let qty_valueDecr =  get_inputQty.value = input_qtyValue - 1;
            getQty_spanValue.innerHTML = qty_valueDecr;
            onChange(getDataId_key, qty_valueDecr)
        }

    })
});

function onChange(key, quantity) {
    axios.post('/cart/change.js', {
        id: key,
        quantity,
    }).then((res) => {
        let format = document.querySelector("[data-money-format").getAttribute("data-money-format");

        // Summary Items
        let summaryItem_count = res.data.item_count;
        document.querySelector(".cart-product-summary-option-itemCount").innerText = summaryItem_count;

        // Summary Sub total price
        let summarySubTotalPrice = res.data.items_subtotal_price;
        document.querySelector(".cart-product-summary-option-subtotal-price").innerText = formatMoney(summarySubTotalPrice, format);

        // Discount
        let summaryTotal_discount = res.data.total_discount;
        document.querySelector(".cart-product-summary-option-total-discount").innerText = summaryTotal_discount;

        //Total Price
        let summaryTotal_price = res.data.total_price;
        document.querySelector(".cart-product-summary-option-total_price").innerText = formatMoney(summaryTotal_price,format);
    })
}



document.querySelectorAll(".cart-product-qty-remove").forEach( (rmv)=>{
  rmv.addEventListener("click",(r)=>{
    r.preventDefault();
    let productCardClosest_toRemove= rmv.closest(".cart-product-card");
    let dataKey_toRemove= productCardClosest_toRemove.getAttribute("data-key");
    
    axios.post('/cart/change.js',{
      id: dataKey_toRemove,
      quantity: 0
    }).then((rm)=>{
      console.log(rm)
      if(rm.data.item_count == 0){
        location.reload();

      } else {
        productCardClosest_toRemove.remove()
      }
    })
  })
})
