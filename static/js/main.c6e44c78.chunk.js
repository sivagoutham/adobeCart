(this.webpackJsonpadobecart=this.webpackJsonpadobecart||[]).push([[0],{31:function(e){e.exports=JSON.parse('{"items":[{"name":"Samsung Series 4","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":13999,"display":22500},"discount":37},{"name":"Samsung Super 6","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":35999,"display":66900},"discount":46},{"name":"Samsung The Frame","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":84999,"display":133900},"discount":36},{"name":"Thomson B9 Pro","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":9999,"display":16999},"discount":41},{"name":"LG Ultra HD","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":39990,"display":79990},"discount":50},{"name":"Vu Ready LED TV","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":7999,"display":17000},"discount":52},{"name":"Koryo Android TV","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":55999,"display":199990},"discount":71},{"name":"Micromax LED Smart","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":9999,"display":27990},"discount":64}]}')},34:function(e,t,a){e.exports=a(53)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(17),r=a.n(c),l=(a(39),a(40),a(33)),s=(a(41),a(11)),o=a(10);var m=Object(o.b)((function(e){return{items:e.addedItems,total:e.total}}),(function(e){return{searchitem:function(t){e({type:"SEARCH_ITEM",name:t})}}}))((function(e){var t=Object(s.f)(),a=i.a.useState(!1),n=Object(l.a)(a,2),c=n[0],r=n[1];return i.a.createElement("div",{className:"header"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-star starIcon",onClick:function(){return t.push("/adobeCart")}})),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-search searchIcon",onClick:function(){return r(!0)}}),c?i.a.createElement("div",{className:"togglesearch"},i.a.createElement("input",{className:"InputSearch",type:"text",placeholder:"Search",onChange:function(t){return a=t.target.value,void e.searchitem(a);var a}})):null),i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-shopping-cart cartIcon",onClick:function(){return t.push("/Cart")}}),e.items.length>0?i.a.createElement("div",{className:"count"},e.items.length):null))})),u=a(5),d=a(6),p=a(14),h=a(8),f=a(7),E=(a(47),a(48),a(21)),v=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.props.addToCart(e)},n.state={List:[]},n.sortData=n.sortData.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"sortData",value:function(){var e,t=this;return"high"===this.props.sort?e=E.orderBy(this.props.items,(function(e){return e.price.actual}),"desc"):"low"===this.props.sort?e=E.orderBy(this.props.items,(function(e){return e.price.actual}),"asc"):"discount"===this.props.sort&&(e=E.orderBy(this.props.items,(function(e){return e.discount}),"asc")),e.map((function(e,a){return i.a.createElement("div",{className:"column",key:a},i.a.createElement("img",{className:"imgSection",src:e.image,alt:e.name}),i.a.createElement("div",null,e.name),i.a.createElement("div",{className:"priceList"},i.a.createElement("div",{className:"price"},i.a.createElement("span",null,"\u20b9"),e.price.actual),i.a.createElement("div",{className:"price priceDisplay"},i.a.createElement("del",null,e.price.display)),i.a.createElement("div",{className:"price priceDiscount"},e.discount,"% off")),i.a.createElement("button",{className:"button btnCart",onClick:function(){return t.handleClick(e.name)}},"Add to Cart"))}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"row"},this.sortData())}}]),a}(n.Component),g=Object(o.b)((function(e){return e.searchItems.items?{items:e.searchItems.items}:{items:e.initialData.items}}),(function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",name:e}}(t))}}}))(v),b=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={clickValue:"high"},n.price=n.price.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"price",value:function(e){this.setState({clickValue:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"sortData"},i.a.createElement("div",{className:"fragment"},i.a.createElement("span",{className:"sortName"},"Sort By"),i.a.createElement("div",{className:"high"===this.state.clickValue?"highlightColor":"normalDisplay",onClick:function(){return e.price("high")}},"Price -- High Low"),i.a.createElement("div",{className:"low"===this.state.clickValue?"highlightColor":"normalDisplay",onClick:function(){return e.price("low")}},"Price -- Low High"),i.a.createElement("div",{className:"discount"===this.state.clickValue?"highlightColor":"normalDisplay",onClick:function(){return e.price("discount")}},"Discount")),i.a.createElement(g,{sort:this.state.clickValue}))}}]),a}(n.Component),y=(a(50),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"filterContainer"},i.a.createElement("h3",{style:{margin:"10px"}},"Filters"),i.a.createElement("input",{type:"hidden",id:"hidden_minimum_price",value:"100"}),i.a.createElement("input",{type:"hidden",id:"hidden_maximum_price",value:"10000"}),i.a.createElement("div",{className:"values"},i.a.createElement("div",null,i.a.createElement("span",null,"\u20b9"),"100"),i.a.createElement("div",null,i.a.createElement("span",null,"\u20b9"),"10000")),i.a.createElement("div",null,i.a.createElement("div",{className:"slider"},i.a.createElement("div",{className:"leftDot",style:{transform:"translateX(0px)"}},i.a.createElement("div",{className:"leftDotInner"})),i.a.createElement("div",{className:"rightDot",style:{transform:"translateX(-1.19px)"}},i.a.createElement("div",{className:"rightDotInner"})),i.a.createElement("div",{className:"sliderBar"}),i.a.createElement("div",{className:"sliderBarVariation",style:{transform:"translate(0px) scaleX(0.995)"}})),i.a.createElement("div",{className:"priceName"},"Price")),i.a.createElement("button",{className:"button"},"Apply"))}}]),a}(n.Component)),N=(a(51),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},"@copyright")}}]),a}(n.Component)),k=(a(52),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).handleRemove=function(t){e.props.removeItem(t)},e.handleAddQuantity=function(t){e.props.addQuantity(t)},e.handleSubtractQuantity=function(t){e.props.subtractQuantity(t)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.length?this.props.items.map((function(t,a){return i.a.createElement("div",{className:"column1",key:a},i.a.createElement("img",{className:"imgSection",src:t.image,alt:t.name}),i.a.createElement("div",{style:{paddingLeft:"10px"}},i.a.createElement("div",null,t.name),i.a.createElement("div",{className:"priceList"},i.a.createElement("div",{className:"price"},i.a.createElement("span",null,"\u20b9"),t.price.actual),i.a.createElement("div",{className:"price priceDisplay"},i.a.createElement("del",null,t.price.display)),i.a.createElement("div",{className:"price priceDiscount"},t.discount,"% off"))),i.a.createElement("div",{className:"IncrementContainer"},i.a.createElement("div",{className:"flexContainer"},i.a.createElement("button",{className:"btnMinus",onClick:function(){e.handleSubtractQuantity(t.name)}},"-"),i.a.createElement("div",{className:"inputBox"},i.a.createElement("input",{type:"text",value:t.quantity,className:"inputText"})),i.a.createElement("button",{className:"btnPlus",onClick:function(){e.handleAddQuantity(t.name)}},"+"))),i.a.createElement("div",{className:"removeBtn",onClick:function(){e.handleRemove(t.name)}},"Remove"))})):null;return i.a.createElement("div",{className:"cartContainer"},i.a.createElement("div",{className:"cartItemsContainer"},i.a.createElement("div",{className:"row"},t)),this.props.items.length?i.a.createElement("div",{className:"totalContainer"},i.a.createElement("span",{className:"priceDetails"}," PRICE DETAILS "),i.a.createElement("div",{className:"details"},i.a.createElement("div",{className:"price"},i.a.createElement("div",{className:"priceHeader"},"Price (",this.props.items.length," items)"),i.a.createElement("span",null," :"),i.a.createElement("span",null," \u20b9",this.props.total)),i.a.createElement("div",{className:"price"},i.a.createElement("div",{className:"priceHeader"},"Discount"),i.a.createElement("span",null," :"),i.a.createElement("span",null," \u20b9",this.props.discount))),i.a.createElement("div",{className:"total"},i.a.createElement("div",{className:"price"},i.a.createElement("div",{className:"priceHeader"},"Total Payable"),i.a.createElement("span",null," \u20b9",this.props.finalBill)))):null)}}]),a}(n.Component)),j=Object(o.b)((function(e){return{items:e.addedItems,total:e.total,discount:e.discount,finalBill:e.finalBill}}),(function(e){return{removeItem:function(t){e(function(e){return{type:"REMOVE_ITEM",name:e}}(t))},subtractQuantity:function(t){e(function(e){return{type:"SUBTRACT_QUANTITY",name:e}}(t))},addQuantity:function(t){e(function(e){return{type:"ADD_QUANTITY",name:e}}(t))}}}))(k),C=a(24);var O=function(){return i.a.createElement(C.a,null,i.a.createElement(m,null),i.a.createElement(s.c,null,i.a.createElement("div",{className:"container"},i.a.createElement(s.a,{path:"/adobeCart",exact:!0}," ",i.a.createElement(y,null),i.a.createElement(b,null)," "),i.a.createElement(s.a,{path:"/Cart"},i.a.createElement(j,null)))),i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(32),I=a(12),T=a(31),z={initialData:Object.assign(T),addedItems:[],total:0,discount:0,finalBill:0,searchItems:[]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_CART"===t.type){var a=e.initialData.items.find((function(e){return e.name===t.name})),n=e.addedItems.find((function(e){return t.name===e.name}));if(n)return a.quantity+=1,Object(I.a)({},e,{total:e.total+a.price.actual,discount:e.discount+a.discount,finalBill:e.total-e.discount});a.quantity=1;var i=e.total+a.price.actual,c=e.discount+a.discount,r=i-c;return Object(I.a)({},e,{addedItems:[].concat(Object(D.a)(e.addedItems),[a]),total:i,discount:c,finalBill:r})}if("REMOVE_ITEM"===t.type){var l=e.initialData.items.find((function(e){return e.name===t.name})),s=e.addedItems.filter((function(e){return e.name!==t.name})),o=e.total-l.price.actual*l.quantity,m=e.discount-l.discount,u=o-m;return Object(I.a)({},e,{addedItems:s,total:o,discount:m,finalBill:u})}if("ADD_QUANTITY"===t.type){var d=e.initialData.items.find((function(e){return e.name===t.name}));d.quantity+=1;var p=e.total+d.price.actual,h=e.discount+d.discount,f=p-h;return Object(I.a)({},e,{total:p,discount:h,finalBill:f})}if("SUBTRACT_QUANTITY"===t.type){var E=e.initialData.items.find((function(e){return e.name===t.name}));if(1===E.quantity){var v=e.addedItems.filter((function(e){return e.name!==t.name})),g=e.total-E.price.actual,b=e.discount-E.discount,y=g-b;return Object(I.a)({},e,{addedItems:v,total:g,discount:b,finalBill:y})}E.quantity-=1;var N=e.total-E.price.actual,k=e.discount-E.discount,j=N-k;return Object(I.a)({},e,{total:N,discount:k,finalBill:j})}if("SEARCH_ITEM"===t.type){var C=e.initialData.items.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));return Object(I.a)({},e,{searchItems:{items:C}})}return e},x=a(20),B=Object(x.b)(q);r.a.render(i.a.createElement(o.a,{store:B},i.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.c6e44c78.chunk.js.map