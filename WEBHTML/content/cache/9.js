// source --> https://criaderolusitania.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js 
jQuery(function(d){if("undefined"==typeof wc_add_to_cart_params)return!1;var t=function(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),d(document.body).on("click",".add_to_cart_button",{addToCartHandler:this},this.onAddToCart).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("ajax_request_not_sent.adding_to_cart",this.updateButton).on("added_to_cart removed_from_cart",{addToCartHandler:this},this.updateFragments)};t.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},t.prototype.run=function(){var t=this,a=t.requests[0].complete;t.requests[0].complete=function(){"function"==typeof a&&a(),t.requests.shift(),0<t.requests.length&&t.run()},d.ajax(this.requests[0])},t.prototype.onAddToCart=function(t){var a=d(this);if(a.is(".ajax_add_to_cart")){if(!a.attr("data-product_id"))return!0;if(t.preventDefault(),a.removeClass("added"),a.addClass("loading"),!1===d(document.body).triggerHandler("should_send_ajax_request.adding_to_cart",[a]))return d(document.body).trigger("ajax_request_not_sent.adding_to_cart",[!1,!1,a]),!0;var e={};d.each(a.data(),function(t,a){e[t]=a}),d.each(a[0].dataset,function(t,a){e[t]=a}),d(document.body).trigger("adding_to_cart",[a,e]),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:e,success:function(t){t&&(t.error&&t.product_url?window.location=t.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?d(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a]):window.location=wc_add_to_cart_params.cart_url)},dataType:"json"})}},t.prototype.onRemoveFromCart=function(t){var a=d(this),e=a.closest(".woocommerce-mini-cart-item");t.preventDefault(),e.block({message:null,overlayCSS:{opacity:.6}}),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:a.data("cart_item_key")},success:function(t){t&&t.fragments?d(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash,a]):window.location=a.attr("href")},error:function(){window.location=a.attr("href")},dataType:"json"})},t.prototype.updateButton=function(t,a,e,r){(r=void 0!==r&&r)&&(r.removeClass("loading"),a&&r.addClass("added"),a&&!wc_add_to_cart_params.is_cart&&0===r.parent().find(".added_to_cart").length&&r.after('<a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),d(document.body).trigger("wc_cart_button_updated",[r]))},t.prototype.updateFragments=function(t,a){a&&(d.each(a,function(t){d(t).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),d.each(a,function(t,a){d(t).replaceWith(a),d(t).stop(!0).css("opacity","1").unblock()}),d(document.body).trigger("wc_fragments_loaded"))},new t});
// source --> https://criaderolusitania.com/wp-content/plugins/js_composer/assets/js/vendors/woocommerce-add-to-cart.js 
(function ( $ ) {
	'use strict';

	$( document ).ready( function () {
		$( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
			if ( $button && $button.hasClass( 'vc_gitem-link' ) ) {
				$button
					.addClass( 'vc-gitem-add-to-cart-loading-btn' )
					.parents( '.vc_grid-item-mini' )
					.addClass( 'vc-woocommerce-add-to-cart-loading' )
					.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
			}
		} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
			if ( 'undefined' === typeof ($button) ) {
				$button = $( '.vc-gitem-add-to-cart-loading-btn' );
			}
			if ( $button && $button.hasClass( 'vc_gitem-link' ) ) {
				$button
					.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
					.parents( '.vc_grid-item-mini' )
					.removeClass( 'vc-woocommerce-add-to-cart-loading' )
					.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
			}
		} );
	} );
})( window.jQuery );
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/bootstrap.min.js 
﻿/*
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if(typeof jQuery==="undefined"){throw new Error("Bootstrap's JavaScript requires jQuery")}+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if((b[0]<2&&b[1]<9)||(b[0]==1&&b[1]==9&&b[2]<1)){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}}(jQuery);+function(a){function b(){var c=document.createElement("bootstrap");var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var d in e){if(c.style[d]!==undefined){return{end:e[d]}}}return false}a.fn.emulateTransitionEnd=function(f){var e=false;var c=this;a(this).one("bsTransitionEnd",function(){e=true});var d=function(){if(!e){a(c).trigger(a.support.transition.end)}};setTimeout(d,f);return this};a(function(){a.support.transition=b();if(!a.support.transition){return}a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(c){if(a(c.target).is(this)){return c.handleObj.handler.apply(this,arguments)}}}})}(jQuery);+function(a){var c='[data-dismiss="alert"]';var b=function(f){a(f).on("click",c,this.close)};b.VERSION="3.3.4";b.TRANSITION_DURATION=150;b.prototype.close=function(h){var g=a(this);var j=g.attr("data-target");if(!j){j=g.attr("href");j=j&&j.replace(/.*(?=#[^\s]*$)/,"")}var f=a(j);if(h){h.preventDefault()}if(!f.length){f=g.closest(".alert")}f.trigger(h=a.Event("close.bs.alert"));if(h.isDefaultPrevented()){return}f.removeClass("in");function i(){f.detach().trigger("closed.bs.alert").remove()}a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",i).emulateTransitionEnd(b.TRANSITION_DURATION):i()};function e(f){return this.each(function(){var g=a(this);var h=g.data("bs.alert");if(!h){g.data("bs.alert",(h=new b(this)))}if(typeof f=="string"){h[f].call(g)}})}var d=a.fn.alert;a.fn.alert=e;a.fn.alert.Constructor=b;a.fn.alert.noConflict=function(){a.fn.alert=d;return this};a(document).on("click.bs.alert.data-api",c,b.prototype.close)}(jQuery);+function(a){var b=function(e,f){this.$element=a(e);this.options=a.extend({},b.DEFAULTS,f);this.isLoading=false};b.VERSION="3.3.4";b.DEFAULTS={loadingText:"loading..."};b.prototype.setState=function(h){var f="disabled";var e=this.$element;var i=e.is("input")?"val":"html";var g=e.data();h=h+"Text";if(g.resetText==null){e.data("resetText",e[i]())}setTimeout(a.proxy(function(){e[i](g[h]==null?this.options[h]:g[h]);if(h=="loadingText"){this.isLoading=true;e.addClass(f).attr(f,f)}else{if(this.isLoading){this.isLoading=false;e.removeClass(f).removeAttr(f)}}},this),0)};b.prototype.toggle=function(){var g=true;var f=this.$element.closest('[data-toggle="buttons"]');if(f.length){var e=this.$element.find("input");if(e.prop("type")=="radio"){if(e.prop("checked")&&this.$element.hasClass("active")){g=false}else{f.find(".active").removeClass("active")}}if(g){e.prop("checked",!this.$element.hasClass("active")).trigger("change")}}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))}if(g){this.$element.toggleClass("active")}};function d(e){return this.each(function(){var f=a(this);var g=f.data("bs.button");var h=typeof e=="object"&&e;if(!g){f.data("bs.button",(g=new b(this,h)))}if(e=="toggle"){g.toggle()}else{if(e){g.setState(e)}}})}var c=a.fn.button;a.fn.button=d;a.fn.button.Constructor=b;a.fn.button.noConflict=function(){a.fn.button=c;return this};a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(g){var f=a(g.target);if(!f.hasClass("btn")){f=f.closest(".btn")}d.call(f,"toggle");g.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(f){a(f.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(f.type))})}(jQuery);+function(a){var b=function(f,g){this.$element=a(f);this.$indicators=this.$element.find(".carousel-indicators");this.options=g;this.paused=null;this.sliding=null;this.interval=null;this.$active=null;this.$items=null;this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this));this.options.pause=="hover"&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};b.VERSION="3.3.4";b.TRANSITION_DURATION=600;b.DEFAULTS={interval:5000,pause:"hover",wrap:true,keyboard:true};b.prototype.keydown=function(f){if(/input|textarea/i.test(f.target.tagName)){return}switch(f.which){case 37:this.prev();break;case 39:this.next();break;default:return}f.preventDefault()};b.prototype.cycle=function(f){f||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval));return this};b.prototype.getItemIndex=function(f){this.$items=f.parent().children(".item");return this.$items.index(f||this.$active)};b.prototype.getItemForDirection=function(i,f){var g=this.getItemIndex(f);var k=(i=="prev"&&g===0)||(i=="next"&&g==(this.$items.length-1));if(k&&!this.options.wrap){return f}var h=i=="prev"?-1:1;var j=(g+h)%this.$items.length;return this.$items.eq(j)};b.prototype.to=function(g){var h=this;var f=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(g>(this.$items.length-1)||g<0){return}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){h.to(g)})}if(f==g){return this.pause().cycle()}return this.slide(g>f?"next":"prev",this.$items.eq(g))};b.prototype.pause=function(f){f||(this.paused=true);if(this.$element.find(".next, .prev").length&&a.support.transition){this.$element.trigger(a.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};b.prototype.next=function(){if(this.sliding){return}return this.slide("next")};b.prototype.prev=function(){if(this.sliding){return}return this.slide("prev")};b.prototype.slide=function(p,k){var f=this.$element.find(".item.active");var g=k||this.getItemForDirection(p,f);var j=this.interval;var i=p=="next"?"left":"right";var o=this;if(g.hasClass("active")){return(this.sliding=false)}var l=g[0];var m=a.Event("slide.bs.carousel",{relatedTarget:l,direction:i});this.$element.trigger(m);if(m.isDefaultPrevented()){return}this.sliding=true;j&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=a(this.$indicators.children()[this.getItemIndex(g)]);h&&h.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:l,direction:i});if(a.support.transition&&this.$element.hasClass("slide")){g.addClass(p);g[0].offsetWidth;f.addClass(i);g.addClass(i);f.one("bsTransitionEnd",function(){g.removeClass([p,i].join(" ")).addClass("active");f.removeClass(["active",i].join(" "));o.sliding=false;setTimeout(function(){o.$element.trigger(n)},0)}).emulateTransitionEnd(b.TRANSITION_DURATION)}else{f.removeClass("active");g.addClass("active");this.sliding=false;this.$element.trigger(n)}j&&this.cycle();return this};function e(f){return this.each(function(){var g=a(this);var i=g.data("bs.carousel");var j=a.extend({},b.DEFAULTS,g.data(),typeof f=="object"&&f);var h=typeof f=="string"?f:j.slide;if(!i){g.data("bs.carousel",(i=new b(this,j)))}if(typeof f=="number"){i.to(f)}else{if(h){i[h]()}else{if(j.interval){i.pause().cycle()}}}})}var d=a.fn.carousel;a.fn.carousel=e;a.fn.carousel.Constructor=b;a.fn.carousel.noConflict=function(){a.fn.carousel=d;return this};var c=function(h){var i;var g=a(this);var f=a(g.attr("data-target")||(i=g.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(!f.hasClass("carousel")){return}var j=a.extend({},f.data(),g.data());var k=g.attr("data-slide-to");if(k){j.interval=false}e.call(f,j);if(k){f.data("bs.carousel").to(k)}h.preventDefault()};a(document).on("click.bs.carousel.data-api","[data-slide]",c).on("click.bs.carousel.data-api","[data-slide-to]",c);a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var f=a(this);e.call(f,f.data())})})}(jQuery);+function(a){var b=function(f,g){this.$element=a(f);this.options=a.extend({},b.DEFAULTS,g);this.$trigger=a('[data-toggle="collapse"][href="#'+f.id+'"],[data-toggle="collapse"][data-target="#'+f.id+'"]');this.transitioning=null;if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}if(this.options.toggle){this.toggle()}};b.VERSION="3.3.4";b.TRANSITION_DURATION=350;b.DEFAULTS={toggle:true};b.prototype.dimension=function(){var f=this.$element.hasClass("width");return f?"width":"height"};b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return}var g;var f=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(f&&f.length){g=f.data("bs.collapse");if(g&&g.transitioning){return}}var k=a.Event("show.bs.collapse");this.$element.trigger(k);if(k.isDefaultPrevented()){return}if(f&&f.length){e.call(f,"hide");g||f.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded",true);this.$trigger.removeClass("collapsed").attr("aria-expanded",true);this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i]("");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!a.support.transition){return h.call(this)}var j=a.camelCase(["scroll",i].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(b.TRANSITION_DURATION)[i](this.$element[0][j])};b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return}var h=a.Event("hide.bs.collapse");this.$element.trigger(h);if(h.isDefaultPrevented()){return}var g=this.dimension();this.$element[g](this.$element[g]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);this.$trigger.addClass("collapsed").attr("aria-expanded",false);this.transitioning=1;var f=function(){this.transitioning=0;this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition){return f.call(this)}this.$element[g](0).one("bsTransitionEnd",a.proxy(f,this)).emulateTransitionEnd(b.TRANSITION_DURATION)};b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};b.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(h,g){var f=a(g);this.addAriaAndCollapsedClass(c(f),f)},this)).end()};b.prototype.addAriaAndCollapsedClass=function(f,g){var h=f.hasClass("in");f.attr("aria-expanded",h);g.toggleClass("collapsed",!h).attr("aria-expanded",h)};function c(f){var g;var h=f.attr("data-target")||(g=f.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");return a(h)}function e(f){return this.each(function(){var g=a(this);var h=g.data("bs.collapse");var i=a.extend({},b.DEFAULTS,g.data(),typeof f=="object"&&f);if(!h&&i.toggle&&/show|hide/.test(f)){i.toggle=false}if(!h){g.data("bs.collapse",(h=new b(this,i)))}if(typeof f=="string"){h[f]()}})}var d=a.fn.collapse;a.fn.collapse=e;a.fn.collapse.Constructor=b;a.fn.collapse.noConflict=function(){a.fn.collapse=d;return this};a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var g=a(this);if(!g.attr("data-target")){i.preventDefault()}var f=c(g);var h=f.data("bs.collapse");var j=h?"toggle":g.data();e.call(f,j)})}(jQuery);+function(a){var b=".dropdown-backdrop";var h='[data-toggle="dropdown"]';var d=function(i){a(i).on("click.bs.dropdown",this.toggle)};d.VERSION="3.3.4";d.prototype.toggle=function(k){var j=a(this);if(j.is(".disabled, :disabled")){return}var i=e(j);var l=i.hasClass("open");c();if(!l){if("ontouchstart" in document.documentElement&&!i.closest(".navbar-nav").length){a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",c)}var m={relatedTarget:this};i.trigger(k=a.Event("show.bs.dropdown",m));if(k.isDefaultPrevented()){return}j.trigger("focus").attr("aria-expanded","true");i.toggleClass("open").trigger("shown.bs.dropdown",m)}return false};d.prototype.keydown=function(m){if(!/(38|40|27|32)/.test(m.which)||/input|textarea/i.test(m.target.tagName)){return}var k=a(this);m.preventDefault();m.stopPropagation();if(k.is(".disabled, :disabled")){return}var j=e(k);var o=j.hasClass("open");if((!o&&m.which!=27)||(o&&m.which==27)){if(m.which==27){j.find(h).trigger("focus")}return k.trigger("click")}var l=" li:not(.disabled):visible a";var i=j.find('[role="menu"]'+l+', [role="listbox"]'+l);if(!i.length){return}var n=i.index(m.target);if(m.which==38&&n>0){n--}if(m.which==40&&n<i.length-1){n++}if(!~n){n=0}i.eq(n).trigger("focus")};function c(i){if(i&&i.which===3){return}a(b).remove();a(h).each(function(){var k=a(this);var j=e(k);var l={relatedTarget:this};if(!j.hasClass("open")){return}j.trigger(i=a.Event("hide.bs.dropdown",l));if(i.isDefaultPrevented()){return}k.attr("aria-expanded","false");j.removeClass("open").trigger("hidden.bs.dropdown",l)})}function e(j){var k=j.attr("data-target");if(!k){k=j.attr("href");k=k&&/#[A-Za-z]/.test(k)&&k.replace(/.*(?=#[^\s]*$)/,"")}var i=k&&a(k);return i&&i.length?i:j.parent()}function g(i){return this.each(function(){var j=a(this);var k=j.data("bs.dropdown");if(!k){j.data("bs.dropdown",(k=new d(this)))}if(typeof i=="string"){k[i].call(j)}})}var f=a.fn.dropdown;a.fn.dropdown=g;a.fn.dropdown.Constructor=d;a.fn.dropdown.noConflict=function(){a.fn.dropdown=f;return this};a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(i){i.stopPropagation()}).on("click.bs.dropdown.data-api",h,d.prototype.toggle).on("keydown.bs.dropdown.data-api",h,d.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',d.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',d.prototype.keydown)}(jQuery);+function(a){var b=function(e,f){this.options=f;this.$body=a(document.body);this.$element=a(e);this.$dialog=this.$element.find(".modal-dialog");this.$backdrop=null;this.isShown=null;this.originalBodyPad=null;this.scrollbarWidth=0;this.ignoreBackdropClick=false;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};b.VERSION="3.3.4";b.TRANSITION_DURATION=300;b.BACKDROP_TRANSITION_DURATION=150;b.DEFAULTS={backdrop:true,keyboard:true,show:true};b.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)};b.prototype.show=function(f){var h=this;var g=a.Event("show.bs.modal",{relatedTarget:f});this.$element.trigger(g);if(this.isShown||g.isDefaultPrevented()){return}this.isShown=true;this.checkScrollbar();this.setScrollbar();this.$body.addClass("modal-open");this.escape();this.resize();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this));this.$dialog.on("mousedown.dismiss.bs.modal",function(){h.$element.one("mouseup.dismiss.bs.modal",function(i){if(a(i.target).is(h.$element)){h.ignoreBackdropClick=true}})});this.backdrop(function(){var j=a.support.transition&&h.$element.hasClass("fade");if(!h.$element.parent().length){h.$element.appendTo(h.$body)}h.$element.show().scrollTop(0);h.adjustDialog();if(j){h.$element[0].offsetWidth}h.$element.addClass("in").attr("aria-hidden",false);h.enforceFocus();var i=a.Event("shown.bs.modal",{relatedTarget:f});j?h.$dialog.one("bsTransitionEnd",function(){h.$element.trigger("focus").trigger(i)}).emulateTransitionEnd(b.TRANSITION_DURATION):h.$element.trigger("focus").trigger(i)})};b.prototype.hide=function(f){if(f){f.preventDefault()}f=a.Event("hide.bs.modal");this.$element.trigger(f);if(!this.isShown||f.isDefaultPrevented()){return}this.isShown=false;this.escape();this.resize();a(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");this.$dialog.off("mousedown.dismiss.bs.modal");a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(b.TRANSITION_DURATION):this.hideModal()};b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(f){if(this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")}},this))};b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(f){f.which==27&&this.hide()},this))}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")}}};b.prototype.resize=function(){if(this.isShown){a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this))}else{a(window).off("resize.bs.modal")}};b.prototype.hideModal=function(){var e=this;this.$element.hide();this.backdrop(function(){e.$body.removeClass("modal-open");e.resetAdjustments();e.resetScrollbar();e.$element.trigger("hidden.bs.modal")})};b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};b.prototype.backdrop=function(f){var i=this;var e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var h=a.support.transition&&e;this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body);this.$element.on("click.dismiss.bs.modal",a.proxy(function(j){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;return}if(j.target!==j.currentTarget){return}this.options.backdrop=="static"?this.$element[0].focus():this.hide()},this));if(h){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!f){return}h?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):f()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){i.removeBackdrop();f&&f()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):g()}else{if(f){f()}}}};b.prototype.handleUpdate=function(){this.adjustDialog()};b.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})};b.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})};b.prototype.checkScrollbar=function(){var f=window.innerWidth;if(!f){var e=document.documentElement.getBoundingClientRect();f=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<f;this.scrollbarWidth=this.measureScrollbar()};b.prototype.setScrollbar=function(){var e=parseInt((this.$body.css("padding-right")||0),10);this.originalBodyPad=document.body.style.paddingRight||"";if(this.bodyIsOverflowing){this.$body.css("padding-right",e+this.scrollbarWidth)}};b.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)};b.prototype.measureScrollbar=function(){var f=document.createElement("div");f.className="modal-scrollbar-measure";this.$body.append(f);var e=f.offsetWidth-f.clientWidth;this.$body[0].removeChild(f);return e};function d(f,e){return this.each(function(){var g=a(this);var h=g.data("bs.modal");var i=a.extend({},b.DEFAULTS,g.data(),typeof f=="object"&&f);if(!h){g.data("bs.modal",(h=new b(this,i)))}if(typeof f=="string"){h[f](e)}else{if(i.show){h.show(e)}}})}var c=a.fn.modal;a.fn.modal=d;a.fn.modal.Constructor=b;a.fn.modal.noConflict=function(){a.fn.modal=c;return this};a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(h){var g=a(this);var i=g.attr("href");var f=a(g.attr("data-target")||(i&&i.replace(/.*(?=#[^\s]+$)/,"")));var j=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},f.data(),g.data());if(g.is("a")){h.preventDefault()}f.one("show.bs.modal",function(e){if(e.isDefaultPrevented()){return}f.one("hidden.bs.modal",function(){g.is(":visible")&&g.trigger("focus")})});d.call(f,j,this)})}(jQuery);+function(a){var d=function(e,f){this.type=null;this.options=null;this.enabled=null;this.timeout=null;this.hoverState=null;this.$element=null;this.init("tooltip",e,f)};d.VERSION="3.3.4";d.TRANSITION_DURATION=150;d.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};d.prototype.init=function(m,e,j){this.enabled=true;this.type=m;this.$element=a(e);this.options=this.getOptions(j);this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);if(this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")}var l=this.options.trigger.split(" ");for(var h=l.length;h--;){var k=l[h];if(k=="click"){this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this))}else{if(k!="manual"){var f=k=="hover"?"mouseenter":"focusin";var g=k=="hover"?"mouseleave":"focusout";this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.enter,this));this.$element.on(g+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}}this.options.selector?(this._options=a.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()};d.prototype.getDefaults=function(){return d.DEFAULTS};d.prototype.getOptions=function(e){e=a.extend({},this.getDefaults(),this.$element.data(),e);if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}}return e};d.prototype.getDelegateOptions=function(){var f={};var e=this.getDefaults();this._options&&a.each(this._options,function(g,h){if(e[g]!=h){f[g]=h}});return f};d.prototype.enter=function(e){var f=e instanceof this.constructor?e:a(e.currentTarget).data("bs."+this.type);if(f&&f.$tip&&f.$tip.is(":visible")){f.hoverState="in";return}if(!f){f=new this.constructor(e.currentTarget,this.getDelegateOptions());a(e.currentTarget).data("bs."+this.type,f)}clearTimeout(f.timeout);f.hoverState="in";if(!f.options.delay||!f.options.delay.show){return f.show()}f.timeout=setTimeout(function(){if(f.hoverState=="in"){f.show()}},f.options.delay.show)};d.prototype.leave=function(e){var f=e instanceof this.constructor?e:a(e.currentTarget).data("bs."+this.type);if(!f){f=new this.constructor(e.currentTarget,this.getDelegateOptions());a(e.currentTarget).data("bs."+this.type,f)}clearTimeout(f.timeout);f.hoverState="out";if(!f.options.delay||!f.options.delay.hide){return f.hide()}f.timeout=setTimeout(function(){if(f.hoverState=="out"){f.hide()}},f.options.delay.hide)};d.prototype.show=function(){var o=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(o);var p=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(o.isDefaultPrevented()||!p){return}var t=this;var g=this.tip();var u=this.getUID(this.type);this.setContent();g.attr("id",u);this.$element.attr("aria-describedby",u);if(this.options.animation){g.addClass("fade")}var r=typeof this.options.placement=="function"?this.options.placement.call(this,g[0],this.$element[0]):this.options.placement;var k=/\s?auto?\s?/i;var j=k.test(r);if(j){r=r.replace(k,"")||"top"}g.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this);this.options.container?g.appendTo(this.options.container):g.insertAfter(this.$element);var s=this.getPosition();var i=g[0].offsetWidth;var h=g[0].offsetHeight;if(j){var q=r;var f=this.options.container?a(this.options.container):this.$element.parent();var n=this.getPosition(f);r=r=="bottom"&&s.bottom+h>n.bottom?"top":r=="top"&&s.top-h<n.top?"bottom":r=="right"&&s.right+i>n.width?"left":r=="left"&&s.left-i<n.left?"right":r;g.removeClass(q).addClass(r)}var l=this.getCalculatedOffset(r,s,i,h);this.applyPlacement(l,r);var m=function(){var e=t.hoverState;t.$element.trigger("shown.bs."+t.type);t.hoverState=null;if(e=="out"){t.leave(t)}};a.support.transition&&this.$tip.hasClass("fade")?g.one("bsTransitionEnd",m).emulateTransitionEnd(d.TRANSITION_DURATION):m()}};d.prototype.applyPlacement=function(o,p){var e=this.tip();var q=e[0].offsetWidth;var k=e[0].offsetHeight;var n=parseInt(e.css("margin-top"),10);var m=parseInt(e.css("margin-left"),10);if(isNaN(n)){n=0}if(isNaN(m)){m=0}o.top=o.top+n;o.left=o.left+m;a.offset.setOffset(e[0],a.extend({using:function(r){e.css({top:Math.round(r.top),left:Math.round(r.left)})}},o),0);e.addClass("in");var g=e[0].offsetWidth;var f=e[0].offsetHeight;if(p=="top"&&f!=k){o.top=o.top+k-f}var j=this.getViewportAdjustedDelta(p,o,g,f);if(j.left){o.left+=j.left}else{o.top+=j.top}var l=/top|bottom/.test(p);var h=l?j.left*2-q+g:j.top*2-k+f;var i=l?"offsetWidth":"offsetHeight";e.offset(o);this.replaceArrow(h,e[0][i],l)};d.prototype.replaceArrow=function(e,f,g){this.arrow().css(g?"left":"top",50*(1-e/f)+"%").css(g?"top":"left","")};d.prototype.setContent=function(){var e=this.tip();var f=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](f);e.removeClass("fade in top bottom left right")};d.prototype.hide=function(g){var j=this;var f=a(this.$tip);var i=a.Event("hide.bs."+this.type);function h(){if(j.hoverState!="in"){f.detach()}j.$element.removeAttr("aria-describedby").trigger("hidden.bs."+j.type);g&&g()}this.$element.trigger(i);if(i.isDefaultPrevented()){return}f.removeClass("in");a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",h).emulateTransitionEnd(d.TRANSITION_DURATION):h();this.hoverState=null;return this};d.prototype.fixTitle=function(){var e=this.$element;if(e.attr("title")||typeof(e.attr("data-original-title"))!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")}};d.prototype.hasContent=function(){return this.getTitle()};d.prototype.getPosition=function(e){e=e||this.$element;var f=e[0];var i=f.tagName=="BODY";var h=f.getBoundingClientRect();if(h.width==null){h=a.extend({},h,{width:h.right-h.left,height:h.bottom-h.top})}var g=i?{top:0,left:0}:e.offset();var k={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()};var j=i?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},h,k,j,g)};d.prototype.getCalculatedOffset=function(g,h,f,e){return g=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-f/2}:g=="top"?{top:h.top-e,left:h.left+h.width/2-f/2}:g=="left"?{top:h.top+h.height/2-e/2,left:h.left-f}:{top:h.top+h.height/2-e/2,left:h.left+h.width}};d.prototype.getViewportAdjustedDelta=function(j,k,f,e){var h={top:0,left:0};if(!this.$viewport){return h}var o=this.options.viewport&&this.options.viewport.padding||0;var n=this.getPosition(this.$viewport);if(/right|left/.test(j)){var m=k.top-o-n.scroll;var g=k.top+o-n.scroll+e;if(m<n.top){h.top=n.top-m}else{if(g>n.top+n.height){h.top=n.top+n.height-g}}}else{var i=k.left-o;var l=k.left+o+f;if(i<n.left){h.left=n.left-i}else{if(l>n.width){h.left=n.left+n.width-l}}}return h};d.prototype.getTitle=function(){var g;var e=this.$element;var f=this.options;g=e.attr("data-original-title")||(typeof f.title=="function"?f.title.call(e[0]):f.title);return g};d.prototype.getUID=function(e){do{e+=~~(Math.random()*1000000)}while(document.getElementById(e));return e};d.prototype.tip=function(){return(this.$tip=this.$tip||a(this.options.template))};d.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow"))};d.prototype.enable=function(){this.enabled=true};d.prototype.disable=function(){this.enabled=false};d.prototype.toggleEnabled=function(){this.enabled=!this.enabled};d.prototype.toggle=function(f){var g=this;if(f){g=a(f.currentTarget).data("bs."+this.type);if(!g){g=new this.constructor(f.currentTarget,this.getDelegateOptions());a(f.currentTarget).data("bs."+this.type,g)}}g.tip().hasClass("in")?g.leave(g):g.enter(g)};d.prototype.destroy=function(){var e=this;clearTimeout(this.timeout);this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type)})};function c(e){return this.each(function(){var f=a(this);var g=f.data("bs.tooltip");var h=typeof e=="object"&&e;if(!g&&/destroy|hide/.test(e)){return}if(!g){f.data("bs.tooltip",(g=new d(this,h)))}if(typeof e=="string"){g[e]()}})}var b=a.fn.tooltip;a.fn.tooltip=c;a.fn.tooltip.Constructor=d;a.fn.tooltip.noConflict=function(){a.fn.tooltip=b;return this}}(jQuery);+function(a){var d=function(e,f){this.init("popover",e,f)};if(!a.fn.tooltip){throw new Error("Popover requires tooltip.js")}d.VERSION="3.3.4";d.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});d.prototype=a.extend({},a.fn.tooltip.Constructor.prototype);d.prototype.constructor=d;d.prototype.getDefaults=function(){return d.DEFAULTS};d.prototype.setContent=function(){var e=this.tip();var g=this.getTitle();var f=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](g);e.find(".popover-content").children().detach().end()[this.options.html?(typeof f=="string"?"html":"append"):"text"](f);e.removeClass("fade top bottom left right in");if(!e.find(".popover-title").html()){e.find(".popover-title").hide()}};d.prototype.hasContent=function(){return this.getTitle()||this.getContent()};d.prototype.getContent=function(){var e=this.$element;var f=this.options;return e.attr("data-content")||(typeof f.content=="function"?f.content.call(e[0]):f.content)};d.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".arrow"))};function c(e){return this.each(function(){var f=a(this);var g=f.data("bs.popover");var h=typeof e=="object"&&e;if(!g&&/destroy|hide/.test(e)){return}if(!g){f.data("bs.popover",(g=new d(this,h)))}if(typeof e=="string"){g[e]()}})}var b=a.fn.popover;a.fn.popover=c;a.fn.popover.Constructor=d;a.fn.popover.noConflict=function(){a.fn.popover=b;return this}}(jQuery);+function(a){function d(e,f){this.$body=a(document.body);this.$scrollElement=a(e).is(document.body)?a(window):a(e);this.options=a.extend({},d.DEFAULTS,f);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this));this.refresh();this.process()}d.VERSION="3.3.4";d.DEFAULTS={offset:10};d.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};d.prototype.refresh=function(){var g=this;var f="offset";var e=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();if(!a.isWindow(this.$scrollElement[0])){f="position";e=this.$scrollElement.scrollTop()}this.$body.find(this.selector).map(function(){var h=a(this);var j=h.data("target")||h.attr("href");var i=/^#./.test(j)&&a(j);return(i&&i.length&&i.is(":visible")&&[[i[f]().top+e,j]])||null}).sort(function(h,i){return h[0]-i[0]}).each(function(){g.offsets.push(this[0]);g.targets.push(this[1])})};d.prototype.process=function(){var k=this.$scrollElement.scrollTop()+this.options.offset;var j=this.getScrollHeight();var g=this.options.offset+j-this.$scrollElement.height();var h=this.offsets;var l=this.targets;var e=this.activeTarget;var f;if(this.scrollHeight!=j){this.refresh()}if(k>=g){return e!=(f=l[l.length-1])&&this.activate(f)}if(e&&k<h[0]){this.activeTarget=null;return this.clear()}for(f=h.length;f--;){e!=l[f]&&k>=h[f]&&(h[f+1]===undefined||k<h[f+1])&&this.activate(l[f])}};d.prototype.activate=function(g){this.activeTarget=g;this.clear();var f=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]';var e=a(f).parents("li").addClass("active");if(e.parent(".dropdown-menu").length){e=e.closest("li.dropdown").addClass("active")}e.trigger("activate.bs.scrollspy")};d.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function c(e){return this.each(function(){var f=a(this);var g=f.data("bs.scrollspy");var h=typeof e=="object"&&e;if(!g){f.data("bs.scrollspy",(g=new d(this,h)))}if(typeof e=="string"){g[e]()}})}var b=a.fn.scrollspy;a.fn.scrollspy=c;a.fn.scrollspy.Constructor=d;a.fn.scrollspy.noConflict=function(){a.fn.scrollspy=b;return this};a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var e=a(this);c.call(e,e.data())})})}(jQuery);+function(a){var e=function(f){this.element=a(f)};e.VERSION="3.3.4";e.TRANSITION_DURATION=150;e.prototype.show=function(){var h=this.element;var i=h.closest("ul:not(.dropdown-menu)");var k=h.data("target");if(!k){k=h.attr("href");k=k&&k.replace(/.*(?=#[^\s]*$)/,"")}if(h.parent("li").hasClass("active")){return}var f=i.find(".active:last a");var j=a.Event("hide.bs.tab",{relatedTarget:h[0]});var l=a.Event("show.bs.tab",{relatedTarget:f[0]});f.trigger(j);h.trigger(l);if(l.isDefaultPrevented()||j.isDefaultPrevented()){return}var g=a(k);this.activate(h.closest("li"),i);this.activate(g,g.parent(),function(){f.trigger({type:"hidden.bs.tab",relatedTarget:h[0]});h.trigger({type:"shown.bs.tab",relatedTarget:f[0]})})};e.prototype.activate=function(i,h,g){var f=h.find("> .active");var k=g&&a.support.transition&&((f.length&&f.hasClass("fade"))||!!h.find("> .fade").length);function j(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);if(k){i[0].offsetWidth;i.addClass("in")}else{i.removeClass("fade")}if(i.parent(".dropdown-menu").length){i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)}g&&g()}f.length&&k?f.one("bsTransitionEnd",j).emulateTransitionEnd(e.TRANSITION_DURATION):j();f.removeClass("in")};function d(f){return this.each(function(){var g=a(this);var h=g.data("bs.tab");if(!h){g.data("bs.tab",(h=new e(this)))}if(typeof f=="string"){h[f]()}})}var c=a.fn.tab;a.fn.tab=d;a.fn.tab.Constructor=e;a.fn.tab.noConflict=function(){a.fn.tab=c;return this};var b=function(f){f.preventDefault();d.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',b).on("click.bs.tab.data-api",'[data-toggle="pill"]',b)}(jQuery);+function(a){var b=function(e,f){this.options=a.extend({},b.DEFAULTS,f);this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this));this.$element=a(e);this.affixed=null;this.unpin=null;this.pinnedOffset=null;this.checkPosition()};b.VERSION="3.3.4";b.RESET="affix affix-top affix-bottom";b.DEFAULTS={offset:0,target:window};b.prototype.getState=function(l,g,j,i){var m=this.$target.scrollTop();var k=this.$element.offset();var n=this.$target.height();if(j!=null&&this.affixed=="top"){return m<j?"top":false}if(this.affixed=="bottom"){if(j!=null){return(m+this.unpin<=k.top)?false:"bottom"}return(m+n<=l-i)?false:"bottom"}var h=this.affixed==null;var f=h?m:k.top;var e=h?n:g;if(j!=null&&m<=j){return"top"}if(i!=null&&(f+e>=l-i)){return"bottom"}return false};b.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset}this.$element.removeClass(b.RESET).addClass("affix");var f=this.$target.scrollTop();var e=this.$element.offset();return(this.pinnedOffset=e.top-f)};b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)};b.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return}var i=this.$element.height();var j=this.options.offset;var l=j.top;var k=j.bottom;var m=a(document.body).height();if(typeof j!="object"){k=l=j}if(typeof l=="function"){l=j.top(this.$element)}if(typeof k=="function"){k=j.bottom(this.$element)}var f=this.getState(m,i,l,k);if(this.affixed!=f){if(this.unpin!=null){this.$element.css("top","")}var g="affix"+(f?"-"+f:"");var h=a.Event(g+".bs.affix");this.$element.trigger(h);if(h.isDefaultPrevented()){return}this.affixed=f;this.unpin=f=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(b.RESET).addClass(g).trigger(g.replace("affix","affixed")+".bs.affix")}if(f=="bottom"){this.$element.offset({top:m-i-k})}};function d(e){return this.each(function(){var f=a(this);var g=f.data("bs.affix");var h=typeof e=="object"&&e;if(!g){f.data("bs.affix",(g=new b(this,h)))}if(typeof e=="string"){g[e]()}})}var c=a.fn.affix;a.fn.affix=d;a.fn.affix.Constructor=b;a.fn.affix.noConflict=function(){a.fn.affix=c;return this};a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var e=a(this);var f=e.data();f.offset=f.offset||{};if(f.offsetBottom!=null){f.offset.bottom=f.offsetBottom}if(f.offsetTop!=null){f.offset.top=f.offsetTop}d.call(e,f)})})}(jQuery);
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/owl.carousel.min.js 
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
    a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/jquery.magnific-popup.min.js 
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/jquery.scrollbar.min.js 
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.10
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
!function(l,e){"function"==typeof define&&define.amd?define(["jquery"],e):e(l.jQuery)}(this,function(l){"use strict";function e(e){if(t.webkit&&!e)return{height:0,width:0};if(!t.data.outer){var o={border:"none","box-sizing":"content-box",height:"200px",margin:"0",padding:"0",width:"200px"};t.data.inner=l("<div>").css(l.extend({},o)),t.data.outer=l("<div>").css(l.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},o)).append(t.data.inner).appendTo("body")}return t.data.outer.scrollLeft(1e3).scrollTop(1e3),{height:Math.ceil(t.data.outer.offset().top-t.data.inner.offset().top||0),width:Math.ceil(t.data.outer.offset().left-t.data.inner.offset().left||0)}}function o(){var l=e(!0);return!(l.height||l.width)}function s(l){var e=l.originalEvent;return e.axis&&e.axis===e.HORIZONTAL_AXIS?!1:e.wheelDeltaX?!1:!0}var r=!1,t={data:{index:0,name:"scrollbar"},macosx:/mac/i.test(navigator.platform),mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),overlay:null,scroll:null,scrolls:[],webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)};t.scrolls.add=function(l){this.remove(l).push(l)},t.scrolls.remove=function(e){for(;l.inArray(e,this)>=0;)this.splice(l.inArray(e,this),1);return this};var i={autoScrollSize:!0,autoUpdate:!0,debug:!1,disableBodyScroll:!1,duration:200,ignoreMobile:!1,ignoreOverlay:!1,scrollStep:30,showArrows:!1,stepScrolling:!0,scrollx:null,scrolly:null,onDestroy:null,onInit:null,onScroll:null,onUpdate:null},n=function(s){t.scroll||(t.overlay=o(),t.scroll=e(),a(),l(window).resize(function(){var l=!1;if(t.scroll&&(t.scroll.height||t.scroll.width)){var o=e();(o.height!==t.scroll.height||o.width!==t.scroll.width)&&(t.scroll=o,l=!0)}a(l)})),this.container=s,this.namespace=".scrollbar_"+t.data.index++,this.options=l.extend({},i,window.jQueryScrollbarOptions||{}),this.scrollTo=null,this.scrollx={},this.scrolly={},s.data(t.data.name,this),t.scrolls.add(this)};n.prototype={destroy:function(){if(this.wrapper){this.container.removeData(t.data.name),t.scrolls.remove(this);var e=this.container.scrollLeft(),o=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:"","max-height":""}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(o),this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),this.wrapper.remove(),l(document).add("body").off(this.namespace),l.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container])}},init:function(e){var o=this,r=this.container,i=this.containerWrapper||r,n=this.namespace,c=l.extend(this.options,e||{}),a={x:this.scrollx,y:this.scrolly},d=this.wrapper,h={scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop()};if(t.mobile&&c.ignoreMobile||t.overlay&&c.ignoreOverlay||t.macosx&&!t.webkit)return!1;if(d)i.css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""});else{if(this.wrapper=d=l("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position","absolute"==r.css("position")?"absolute":"relative").insertBefore(r).append(r),r.is("textarea")&&(this.containerWrapper=i=l("<div>").insertBefore(r).append(r),d.addClass("scroll-textarea")),i.addClass("scroll-content").css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""}),r.on("scroll"+n,function(e){l.isFunction(c.onScroll)&&c.onScroll.call(o,{maxScroll:a.y.maxScrollOffset,scroll:r.scrollTop(),size:a.y.size,visible:a.y.visible},{maxScroll:a.x.maxScrollOffset,scroll:r.scrollLeft(),size:a.x.size,visible:a.x.visible}),a.x.isVisible&&a.x.scroll.bar.css("left",r.scrollLeft()*a.x.kx+"px"),a.y.isVisible&&a.y.scroll.bar.css("top",r.scrollTop()*a.y.kx+"px")}),d.on("scroll"+n,function(){d.scrollTop(0).scrollLeft(0)}),c.disableBodyScroll){var p=function(l){s(l)?a.y.isVisible&&a.y.mousewheel(l):a.x.isVisible&&a.x.mousewheel(l)};d.on("MozMousePixelScroll"+n,p),d.on("mousewheel"+n,p),t.mobile&&d.on("touchstart"+n,function(e){var o=e.originalEvent.touches&&e.originalEvent.touches[0]||e,s={pageX:o.pageX,pageY:o.pageY},t={left:r.scrollLeft(),top:r.scrollTop()};l(document).on("touchmove"+n,function(l){var e=l.originalEvent.targetTouches&&l.originalEvent.targetTouches[0]||l;r.scrollLeft(t.left+s.pageX-e.pageX),r.scrollTop(t.top+s.pageY-e.pageY),l.preventDefault()}),l(document).on("touchend"+n,function(){l(document).off(n)})})}l.isFunction(c.onInit)&&c.onInit.apply(this,[r])}l.each(a,function(e,t){var i=null,d=1,h="x"===e?"scrollLeft":"scrollTop",p=c.scrollStep,u=function(){var l=r[h]();r[h](l+p),1==d&&l+p>=f&&(l=r[h]()),-1==d&&f>=l+p&&(l=r[h]()),r[h]()==l&&i&&i()},f=0;t.scroll||(t.scroll=o._getScroll(c["scroll"+e]).addClass("scroll-"+e),c.showArrows&&t.scroll.addClass("scroll-element_arrows_visible"),t.mousewheel=function(l){if(!t.isVisible||"x"===e&&s(l))return!0;if("y"===e&&!s(l))return a.x.mousewheel(l),!0;var i=-1*l.originalEvent.wheelDelta||l.originalEvent.detail,n=t.size-t.visible-t.offset;return(i>0&&n>f||0>i&&f>0)&&(f+=i,0>f&&(f=0),f>n&&(f=n),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=f,setTimeout(function(){o.scrollTo&&(r.stop().animate(o.scrollTo,240,"linear",function(){f=r[h]()}),o.scrollTo=null)},1)),l.preventDefault(),!1},t.scroll.on("MozMousePixelScroll"+n,t.mousewheel).on("mousewheel"+n,t.mousewheel).on("mouseenter"+n,function(){f=r[h]()}),t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+n,function(s){if(1!=s.which)return!0;d=1;var n={eventOffset:s["x"===e?"pageX":"pageY"],maxScrollValue:t.size-t.visible-t.offset,scrollbarOffset:t.scroll.bar.offset()["x"===e?"left":"top"],scrollbarSize:t.scroll.bar["x"===e?"outerWidth":"outerHeight"]()},a=0,v=0;return l(this).hasClass("scroll-arrow")?(d=l(this).hasClass("scroll-arrow_more")?1:-1,p=c.scrollStep*d,f=d>0?n.maxScrollValue:0):(d=n.eventOffset>n.scrollbarOffset+n.scrollbarSize?1:n.eventOffset<n.scrollbarOffset?-1:0,p=Math.round(.75*t.visible)*d,f=n.eventOffset-n.scrollbarOffset-(c.stepScrolling?1==d?n.scrollbarSize:0:Math.round(n.scrollbarSize/2)),f=r[h]()+f/t.kx),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=c.stepScrolling?r[h]()+p:f,c.stepScrolling&&(i=function(){f=r[h](),clearInterval(v),clearTimeout(a),a=0,v=0},a=setTimeout(function(){v=setInterval(u,40)},c.duration+100)),setTimeout(function(){o.scrollTo&&(r.animate(o.scrollTo,c.duration),o.scrollTo=null)},1),o._handleMouseDown(i,s)}),t.scroll.bar.on("mousedown"+n,function(s){if(1!=s.which)return!0;var i=s["x"===e?"pageX":"pageY"],c=r[h]();return t.scroll.addClass("scroll-draggable"),l(document).on("mousemove"+n,function(l){var o=parseInt((l["x"===e?"pageX":"pageY"]-i)/t.kx,10);r[h](c+o)}),o._handleMouseDown(function(){t.scroll.removeClass("scroll-draggable"),f=r[h]()},s)}))}),l.each(a,function(l,e){var o="scroll-scroll"+l+"_visible",s="x"==l?a.y:a.x;e.scroll.removeClass(o),s.scroll.removeClass(o),i.removeClass(o)}),l.each(a,function(e,o){l.extend(o,"x"==e?{offset:parseInt(r.css("left"),10)||0,size:r.prop("scrollWidth"),visible:d.width()}:{offset:parseInt(r.css("top"),10)||0,size:r.prop("scrollHeight"),visible:d.height()})}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),l.isFunction(c.onUpdate)&&c.onUpdate.apply(this,[r]),l.each(a,function(l,e){var o="x"===l?"left":"top",s="x"===l?"outerWidth":"outerHeight",t="x"===l?"width":"height",i=parseInt(r.css(o),10)||0,n=e.size,a=e.visible+i,d=e.scroll.size[s]()+(parseInt(e.scroll.size.css(o),10)||0);c.autoScrollSize&&(e.scrollbarSize=parseInt(d*a/n,10),e.scroll.bar.css(t,e.scrollbarSize+"px")),e.scrollbarSize=e.scroll.bar[s](),e.kx=(d-e.scrollbarSize)/(n-a)||1,e.maxScrollOffset=n-a}),r.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll")},_getScroll:function(e){var o={advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")};return o[e]&&(e=o[e]),e||(e=o.simple),e="string"==typeof e?l(e).appendTo(this.wrapper):l(e),l.extend(e,{bar:e.find(".scroll-bar"),size:e.find(".scroll-element_size"),track:e.find(".scroll-element_track")}),e},_handleMouseDown:function(e,o){var s=this.namespace;return l(document).on("blur"+s,function(){l(document).add("body").off(s),e&&e()}),l(document).on("dragstart"+s,function(l){return l.preventDefault(),!1}),l(document).on("mouseup"+s,function(){l(document).add("body").off(s),e&&e()}),l("body").on("selectstart"+s,function(l){return l.preventDefault(),!1}),o&&o.preventDefault(),!1},_updateScroll:function(e,o){var s=this.container,r=this.containerWrapper||s,i="scroll-scroll"+e+"_visible",n="x"===e?this.scrolly:this.scrollx,c=parseInt(this.container.css("x"===e?"left":"top"),10)||0,a=this.wrapper,d=o.size,h=o.visible+c;o.isVisible=d-h>1,o.isVisible?(o.scroll.addClass(i),n.scroll.addClass(i),r.addClass(i)):(o.scroll.removeClass(i),n.scroll.removeClass(i),r.removeClass(i)),"y"===e&&(s.is("textarea")||h>d?r.css({height:h+t.scroll.height+"px","max-height":"none"}):r.css({"max-height":h+t.scroll.height+"px"})),(o.size!=s.prop("scrollWidth")||n.size!=s.prop("scrollHeight")||o.visible!=a.width()||n.visible!=a.height()||o.offset!=(parseInt(s.css("left"),10)||0)||n.offset!=(parseInt(s.css("top"),10)||0))&&(l.extend(this.scrollx,{offset:parseInt(s.css("left"),10)||0,size:s.prop("scrollWidth"),visible:a.width()}),l.extend(this.scrolly,{offset:parseInt(s.css("top"),10)||0,size:this.container.prop("scrollHeight"),visible:a.height()}),this._updateScroll("x"===e?"y":"x",n))}};var c=n;l.fn.scrollbar=function(e,o){return"string"!=typeof e&&(o=e,e="init"),"undefined"==typeof o&&(o=[]),l.isArray(o)||(o=[o]),this.not("body, .scroll-wrapper").each(function(){var s=l(this),r=s.data(t.data.name);(r||"init"===e)&&(r||(r=new c(s)),r[e]&&r[e].apply(r,o))}),this},l.fn.scrollbar.options=i;var a=function(){var l=0,e=0;return function(o){var s,i,n,c,d,h,p;for(s=0;s<t.scrolls.length;s++)c=t.scrolls[s],i=c.container,n=c.options,d=c.wrapper,h=c.scrollx,p=c.scrolly,(o||n.autoUpdate&&d&&d.is(":visible")&&(i.prop("scrollWidth")!=h.size||i.prop("scrollHeight")!=p.size||d.width()!=h.visible||d.height()!=p.visible))&&(c.init(),n.debug&&(window.console&&console.log({scrollHeight:i.prop("scrollHeight")+":"+c.scrolly.size,scrollWidth:i.prop("scrollWidth")+":"+c.scrollx.size,visibleHeight:d.height()+":"+c.scrolly.visible,visibleWidth:d.width()+":"+c.scrollx.visible},!0),e++));r&&e>10?(window.console&&console.log("Scroll updates exceed 10"),a=function(){}):(clearTimeout(l),l=setTimeout(a,300))}}();window.angular&&!function(l){l.module("jQueryScrollbar",[]).provider("jQueryScrollbar",function(){var e=i;return{setOptions:function(o){l.extend(e,o)},$get:function(){return{options:l.copy(e)}}}}).directive("jqueryScrollbar",["jQueryScrollbar","$parse",function(l,e){return{restrict:"AC",link:function(o,s,r){var t=e(r.jqueryScrollbar),i=t(o);s.scrollbar(i||l.options).on("$destroy",function(){s.scrollbar("destroy")})}}}])}(window.angular)});
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/jquery.sticky.js 
// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'inherit'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                padding =  s.stickyElement.innerWidth() - s.stickyElement.width();
                newWidth = $(s.getWidthFrom).width() - padding || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/jquery.countdown.js 
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else {
        factory(jQuery);
    }
})(function($) {
    "use strict";
    var instances = [], matchers = [], defaultOptions = {
        precision: 100,
        elapse: false,
        defer: false
    };
    matchers.push(/^[0-9]*$/.source);
    matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    matchers = new RegExp(matchers.join("|"));
    function parseDateString(dateString) {
        if (dateString instanceof Date) {
            return dateString;
        }
        if (String(dateString).match(matchers)) {
            if (String(dateString).match(/^[0-9]*$/)) {
                dateString = Number(dateString);
            }
            if (String(dateString).match(/\-/)) {
                dateString = String(dateString).replace(/\-/g, "/");
            }
            return new Date(dateString);
        } else {
            throw new Error("Couldn't cast `" + dateString + "` to a date object.");
        }
    }
    var DIRECTIVE_KEY_MAP = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
    };
    function escapedRegExp(str) {
        var sanitize = str.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(sanitize);
    }
    function strftime(offsetObject) {
        return function(format) {
            var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (directives) {
                for (var i = 0, len = directives.length; i < len; ++i) {
                    var directive = directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), regexp = escapedRegExp(directive[0]), modifier = directive[1] || "", plural = directive[3] || "", value = null;
                    directive = directive[2];
                    if (DIRECTIVE_KEY_MAP.hasOwnProperty(directive)) {
                        value = DIRECTIVE_KEY_MAP[directive];
                        value = Number(offsetObject[value]);
                    }
                    if (value !== null) {
                        if (modifier === "!") {
                            value = pluralize(plural, value);
                        }
                        if (modifier === "") {
                            if (value < 10) {
                                value = "0" + value.toString();
                            }
                        }
                        format = format.replace(regexp, value.toString());
                    }
                }
            }
            format = format.replace(/%%/, "%");
            return format;
        };
    }
    function pluralize(format, count) {
        var plural = "s", singular = "";
        if (format) {
            format = format.replace(/(:|;|\s)/gi, "").split(/\,/);
            if (format.length === 1) {
                plural = format[0];
            } else {
                singular = format[0];
                plural = format[1];
            }
        }
        if (Math.abs(count) > 1) {
            return plural;
        } else {
            return singular;
        }
    }
    var Countdown = function(el, finalDate, options) {
        this.el = el;
        this.$el = $(el);
        this.interval = null;
        this.offset = {};
        this.options = $.extend({}, defaultOptions);
        this.instanceNumber = instances.length;
        instances.push(this);
        this.$el.data("countdown-instance", this.instanceNumber);
        if (options) {
            if (typeof options === "function") {
                this.$el.on("update.countdown", options);
                this.$el.on("stoped.countdown", options);
                this.$el.on("finish.countdown", options);
            } else {
                this.options = $.extend({}, defaultOptions, options);
            }
        }
        this.setFinalDate(finalDate);
        if (this.options.defer === false) {
            this.start();
        }
    };
    $.extend(Countdown.prototype, {
        start: function() {
            if (this.interval !== null) {
                clearInterval(this.interval);
            }
            var self = this;
            this.update();
            this.interval = setInterval(function() {
                self.update.call(self);
            }, this.options.precision);
        },
        stop: function() {
            clearInterval(this.interval);
            this.interval = null;
            this.dispatchEvent("stoped");
        },
        toggle: function() {
            if (this.interval) {
                this.stop();
            } else {
                this.start();
            }
        },
        pause: function() {
            this.stop();
        },
        resume: function() {
            this.start();
        },
        remove: function() {
            this.stop.call(this);
            instances[this.instanceNumber] = null;
            delete this.$el.data().countdownInstance;
        },
        setFinalDate: function(value) {
            this.finalDate = parseDateString(value);
        },
        update: function() {
            if (this.$el.closest("html").length === 0) {
                this.remove();
                return;
            }
            var hasEventsAttached = $._data(this.el, "events") !== undefined, now = new Date(), newTotalSecsLeft;
            newTotalSecsLeft = this.finalDate.getTime() - now.getTime();
            newTotalSecsLeft = Math.ceil(newTotalSecsLeft / 1e3);
            newTotalSecsLeft = !this.options.elapse && newTotalSecsLeft < 0 ? 0 : Math.abs(newTotalSecsLeft);
            if (this.totalSecsLeft === newTotalSecsLeft || !hasEventsAttached) {
                return;
            } else {
                this.totalSecsLeft = newTotalSecsLeft;
            }
            this.elapsed = now >= this.finalDate;
            this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - now.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            };
            if (!this.options.elapse && this.totalSecsLeft === 0) {
                this.stop();
                this.dispatchEvent("finish");
            } else {
                this.dispatchEvent("update");
            }
        },
        dispatchEvent: function(eventName) {
            var event = $.Event(eventName + ".countdown");
            event.finalDate = this.finalDate;
            event.elapsed = this.elapsed;
            event.offset = $.extend({}, this.offset);
            event.strftime = strftime(this.offset);
            this.$el.trigger(event);
        }
    });
    $.fn.countdown = function() {
        var argumentsArray = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var instanceNumber = $(this).data("countdown-instance");
            if (instanceNumber !== undefined) {
                var instance = instances[instanceNumber], method = argumentsArray[0];
                if (Countdown.prototype.hasOwnProperty(method)) {
                    instance[method].apply(instance, argumentsArray.slice(1));
                } else if (String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i) === null) {
                    instance.setFinalDate.call(instance, method);
                    instance.start();
                } else {
                    $.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, method));
                }
            } else {
                new Countdown(this, argumentsArray[0], argumentsArray[1]);
            }
        });
    };
});
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/theia-sticky-sidebar.min.js 
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){var a=o(t,e);a||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)),i(window).on("resize."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)))}function o(t,e){return t.initialized===!0||!(i("body").width()<t.minWidth)&&(a(t,e),!0)}function a(t,e){t.initialized=!0;var o=i("#theia-sticky-sidebar-stylesheet-"+t.namespace);0===o.length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),e.each(function(){function e(){a.fixedScrollTop=0,a.sidebar.css({"min-height":"1px"}),a.stickySidebar.css({position:"static",width:"",transform:"none"})}function o(t){var e=t.height();return t.children().each(function(){e=Math.max(e,i(this).height())}),e}var a={};if(a.sidebar=i(this),a.options=t||{},a.container=i(a.options.containerSelector),0==a.container.length&&(a.container=a.sidebar.parent()),a.sidebar.parents().css("-webkit-transform","none"),a.sidebar.css({position:a.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.stickySidebar=a.sidebar.find(".theiaStickySidebar"),0==a.stickySidebar.length){var s=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;a.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(s)}).remove(),a.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()),a.sidebar.append(a.stickySidebar)}a.marginBottom=parseInt(a.sidebar.css("margin-bottom")),a.paddingTop=parseInt(a.sidebar.css("padding-top")),a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var r=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1),a.stickySidebar.css("padding-bottom",1),r-=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight()-d-r,0==r?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1,0==d?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1,a.previousScrollTop=null,a.fixedScrollTop=0,e(),a.onScroll=function(a){if(a.stickySidebar.is(":visible")){if(i("body").width()<a.options.minWidth)return void e();if(a.options.disableOnResponsiveLayouts){var s=a.sidebar.outerWidth("none"==a.sidebar.css("float"));if(s+50>a.container.width())return void e()}var r=i(document).scrollTop(),d="static";if(r>=a.sidebar.offset().top+(a.paddingTop-a.options.additionalMarginTop)){var c,p=a.paddingTop+t.additionalMarginTop,b=a.paddingBottom+a.marginBottom+t.additionalMarginBottom,l=a.sidebar.offset().top,f=a.sidebar.offset().top+o(a.container),h=0+t.additionalMarginTop,g=a.stickySidebar.outerHeight()+p+b<i(window).height();c=g?h+a.stickySidebar.outerHeight():i(window).height()-a.marginBottom-a.paddingBottom-t.additionalMarginBottom;var u=l-r+a.paddingTop,S=f-r-a.paddingBottom-a.marginBottom,y=a.stickySidebar.offset().top-r,m=a.previousScrollTop-r;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(y+=m),"stick-to-top"==a.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==a.options.sidebarBehavior&&(y=c-a.stickySidebar.outerHeight()),y=m>0?Math.min(y,h):Math.max(y,c-a.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,S-a.stickySidebar.outerHeight());var k=a.container.height()==a.stickySidebar.outerHeight();d=(k||y!=h)&&(k||y!=c-a.stickySidebar.outerHeight())?r+y-a.sidebar.offset().top-a.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==d){var v=i(document).scrollLeft();a.stickySidebar.css({position:"fixed",width:n(a.stickySidebar)+"px",transform:"translateY("+y+"px)",left:a.sidebar.offset().left+parseInt(a.sidebar.css("padding-left"))-v+"px",top:"0px"})}else if("absolute"==d){var x={};"absolute"!=a.stickySidebar.css("position")&&(x.position="absolute",x.transform="translateY("+(r+y-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom)+"px)",x.top="0px"),x.width=n(a.stickySidebar)+"px",x.left="",a.stickySidebar.css(x)}else"static"==d&&e();"static"!=d&&1==a.options.updateSidebarHeight&&a.sidebar.css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=r}},a.onScroll(a),i(document).on("scroll."+a.options.namespace,function(i){return function(){i.onScroll(i)}}(a)),i(window).on("resize."+a.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(a)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(a.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(a))})}function n(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return"undefined"==typeof t&&(t=i.width()),t}var s={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"};return t=i.extend(s,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,e(t,this),this}}(jQuery);
//# sourceMappingURL=maps/theia-sticky-sidebar.min.js.map;
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/threesixty.min.js 
/*! threesixty-slider 2015-05-28 verison 2.0.5 */
/* http://github.com/vml-webdev/threesixty-slider.git */
!function(a){"use strict";a.ThreeSixty=function(b,c){var d,e=this,f=[];e.$el=a(b),e.el=b,e.$el.data("ThreeSixty",e),e.init=function(){d=a.extend({},a.ThreeSixty.defaultOptions,c),d.disableSpin&&(d.currentFrame=1,d.endFrame=1),e.initProgress(),e.loadImages()},e.resize=function(){},e.initProgress=function(){e.$el.css({width:d.width+"px",height:d.height+"px","background-image":"none !important"}),d.styles&&e.$el.css(d.styles),e.responsive(),e.$el.find(d.progress).css({marginTop:d.height/2-15+"px"}),e.$el.find(d.progress).fadeIn("slow"),e.$el.find(d.imgList).hide()},e.loadImages=function(){var b,c,g,h;b=document.createElement("li"),h=d.zeroBased?0:1,c=d.imgArray?d.imgArray[d.loadedImages]:d.domain+d.imagePath+d.filePrefix+e.zeroPad(d.loadedImages+h)+d.ext+(e.browser.isIE()?"?"+(new Date).getTime():""),g=a("<img>").attr("src",c).addClass("previous-image").appendTo(b),f.push(g),e.$el.find(d.imgList).append(b),a(g).load(function(){e.imageLoaded()})},e.imageLoaded=function(){d.loadedImages+=1,a(d.progress+" span").text(Math.floor(d.loadedImages/d.totalFrames*100)+"%"),d.loadedImages>=d.totalFrames?(d.disableSpin&&f[0].removeClass("previous-image").addClass("current-image"),a(d.progress).fadeOut("slow",function(){a(this).hide(),e.showImages(),e.showNavigation()})):e.loadImages()},e.showImages=function(){e.$el.find(".txtC").fadeIn(),e.$el.find(d.imgList).fadeIn(),e.ready=!0,d.ready=!0,d.drag&&e.initEvents(),e.refresh(),e.initPlugins(),d.onReady(),setTimeout(function(){e.responsive()},50)},e.initPlugins=function(){a.each(d.plugins,function(b,c){if("function"!=typeof a[c])throw new Error(c+" not available.");a[c].call(e,e.$el,d)})},e.showNavigation=function(){if(d.navigation&&!d.navigation_init){var b,c,f,g;b=a("<div/>").attr("class","nav_bar"),c=a("<a/>").attr({href:"#","class":"nav_bar_next"}).html("next"),f=a("<a/>").attr({href:"#","class":"nav_bar_previous"}).html("previous"),g=a("<a/>").attr({href:"#","class":"nav_bar_play"}).html("play"),b.append(f),b.append(g),b.append(c),e.$el.prepend(b),c.bind("mousedown touchstart",e.next),f.bind("mousedown touchstart",e.previous),g.bind("mousedown touchstart",e.play_stop),d.navigation_init=!0}},e.play_stop=function(b){b.preventDefault(),d.autoplay?(d.autoplay=!1,a(b.currentTarget).removeClass("nav_bar_stop").addClass("nav_bar_play"),clearInterval(d.play),d.play=null):(d.autoplay=!0,d.play=setInterval(e.moveToNextFrame,d.playSpeed),a(b.currentTarget).removeClass("nav_bar_play").addClass("nav_bar_stop"))},e.next=function(a){a&&a.preventDefault(),d.endFrame-=5,e.refresh()},e.previous=function(a){a&&a.preventDefault(),d.endFrame+=5,e.refresh()},e.play=function(a,b){var c=a||d.playSpeed,f=b||d.autoplayDirection;d.autoplayDirection=f,d.autoplay||(d.autoplay=!0,d.play=setInterval(e.moveToNextFrame,c))},e.stop=function(){d.autoplay&&(d.autoplay=!1,clearInterval(d.play),d.play=null)},e.moveToNextFrame=function(){1===d.autoplayDirection?d.endFrame-=1:d.endFrame+=1,e.refresh()},e.gotoAndPlay=function(a){if(d.disableWrap)d.endFrame=a,e.refresh();else{var b=Math.ceil(d.endFrame/d.totalFrames);0===b&&(b=1);var c=b>1?d.endFrame-(b-1)*d.totalFrames:d.endFrame,f=d.totalFrames-c,g=0;g=a-c>0?a-c<c+(d.totalFrames-a)?d.endFrame+(a-c):d.endFrame-(c+(d.totalFrames-a)):f+a>c-a?d.endFrame-(c-a):d.endFrame+(f+a),c!==a&&(d.endFrame=g,e.refresh())}},e.initEvents=function(){e.$el.bind("mousedown touchstart touchmove touchend mousemove click",function(a){a.preventDefault(),"mousedown"===a.type&&1===a.which||"touchstart"===a.type?(d.pointerStartPosX=e.getPointerEvent(a).pageX,d.dragging=!0,d.onDragStart(d.currentFrame)):"touchmove"===a.type?e.trackPointer(a):"touchend"===a.type&&(d.dragging=!1,d.onDragStop(d.endFrame))}),a(document).bind("mouseup",function(b){d.dragging=!1,d.onDragStop(d.endFrame),a(this).css("cursor","none")}),a(window).bind("resize",function(a){e.responsive()}),a(document).bind("mousemove",function(a){d.dragging?(a.preventDefault(),!e.browser.isIE&&d.showCursor&&e.$el.css("cursor","url(assets/images/hand_closed.png), auto")):!e.browser.isIE&&d.showCursor&&e.$el.css("cursor","url(assets/images/hand_open.png), auto"),e.trackPointer(a)}),a(window).resize(function(){e.resize()})},e.getPointerEvent=function(a){return a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:a},e.trackPointer=function(a){d.ready&&d.dragging&&(d.pointerEndPosX=e.getPointerEvent(a).pageX,d.monitorStartTime<(new Date).getTime()-d.monitorInt&&(d.pointerDistance=d.pointerEndPosX-d.pointerStartPosX,d.pointerDistance>0?d.endFrame=d.currentFrame+Math.ceil((d.totalFrames-1)*d.speedMultiplier*(d.pointerDistance/e.$el.width())):d.endFrame=d.currentFrame+Math.floor((d.totalFrames-1)*d.speedMultiplier*(d.pointerDistance/e.$el.width())),d.disableWrap&&(d.endFrame=Math.min(d.totalFrames-(d.zeroBased?1:0),d.endFrame),d.endFrame=Math.max(d.zeroBased?0:1,d.endFrame)),e.refresh(),d.monitorStartTime=(new Date).getTime(),d.pointerStartPosX=e.getPointerEvent(a).pageX))},e.refresh=function(){0===d.ticker&&(d.ticker=setInterval(e.render,Math.round(1e3/d.framerate)))},e.render=function(){var a;d.currentFrame!==d.endFrame?(a=d.endFrame<d.currentFrame?Math.floor(.1*(d.endFrame-d.currentFrame)):Math.ceil(.1*(d.endFrame-d.currentFrame)),e.hidePreviousFrame(),d.currentFrame+=a,e.showCurrentFrame(),e.$el.trigger("frameIndexChanged",[e.getNormalizedCurrentFrame(),d.totalFrames])):(window.clearInterval(d.ticker),d.ticker=0)},e.hidePreviousFrame=function(){f[e.getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image")},e.showCurrentFrame=function(){f[e.getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image")},e.getNormalizedCurrentFrame=function(){var a,b;return d.disableWrap?(a=Math.min(d.currentFrame,d.totalFrames-(d.zeroBased?1:0)),b=Math.min(d.endFrame,d.totalFrames-(d.zeroBased?1:0)),a=Math.max(a,d.zeroBased?0:1),b=Math.max(b,d.zeroBased?0:1),d.currentFrame=a,d.endFrame=b):(a=Math.ceil(d.currentFrame%d.totalFrames),0>a&&(a+=d.totalFrames-(d.zeroBased?1:0))),a},e.getCurrentFrame=function(){return d.currentFrame},e.responsive=function(){d.responsive&&e.$el.css({height:e.$el.find(".current-image").first().css("height"),width:"100%"})},e.zeroPad=function(a){function b(a,b){var c=a.toString();if(d.zeroPadding)for(;c.length<b;)c="0"+c;return c}var c=Math.log(d.totalFrames)/Math.LN10,e=1e3,f=Math.round(c*e)/e,g=Math.floor(f)+1;return b(a,g)},e.browser={},e.browser.isIE=function(){var a=-1;if("Microsoft Internet Explorer"===navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");null!==c.exec(b)&&(a=parseFloat(RegExp.$1))}return-1!==a},e.getConfig=function(){return d},a.ThreeSixty.defaultOptions={dragging:!1,ready:!1,pointerStartPosX:0,pointerEndPosX:0,pointerDistance:0,monitorStartTime:0,monitorInt:10,ticker:0,speedMultiplier:7,totalFrames:180,currentFrame:0,endFrame:0,loadedImages:0,framerate:60,domains:null,domain:"",parallel:!1,queueAmount:8,idle:0,filePrefix:"",ext:"png",height:300,width:300,styles:{},navigation:!1,autoplay:!1,autoplayDirection:1,disableSpin:!1,disableWrap:!1,responsive:!1,zeroPadding:!1,zeroBased:!1,plugins:[],showCursor:!1,drag:!0,onReady:function(){},onDragStart:function(){},onDragStop:function(){},imgList:".threesixty_images",imgArray:null,playSpeed:100},e.init()},a.fn.ThreeSixty=function(b){return Object.create(new a.ThreeSixty(this,b))}}(jQuery),"function"!=typeof Object.create&&(Object.create=function(a){"use strict";function b(){}return b.prototype=a,new b});
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/slick.js 
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
// source --> https://criaderolusitania.com/wp-content/themes/lebe/assets/js/SmoothScroll.min.js 
!function(){function e(){z.keyboardSupport&&m("keydown",a)}function t(){if(!Y&&document.body){Y=!0;var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(A=document.compatMode.indexOf("CSS")>=0?o:t,D=t,e(),top!=self)O=!0;else if(te&&r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+A.scrollHeight+"px",document.body.appendChild(a);var i;T=function(){i||(i=setTimeout(function(){L||(a.style.height="0",a.style.height=A.scrollHeight+"px",i=null)},500))},setTimeout(T,10),m("resize",T);var l={attributes:!0,childList:!0,characterData:!1};if(M=new W(T),M.observe(t,l),A.offsetHeight<=n){var c=document.createElement("div");c.style.clear="both",t.appendChild(c)}}z.fixedBackground||L||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(){M&&M.disconnect(),w(I,r),w("mousedown",i),w("keydown",a),w("resize",T),w("load",t)}function n(e,t,o){if(p(t,o),1!=z.accelerationMax){var n=Date.now(),r=n-q;if(r<z.accelerationDelta){var a=(1+50/r)/2;a>1&&(a=Math.min(a,z.accelerationMax),t*=a,o*=a)}q=Date.now()}if(R.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!j){var i=e===document.body,l=function(n){for(var r=Date.now(),a=0,c=0,u=0;u<R.length;u++){var d=R[u],s=r-d.start,f=s>=z.animationTime,m=f?1:s/z.animationTime;z.pulseAlgorithm&&(m=x(m));var w=d.x*m-d.lastX>>0,h=d.y*m-d.lastY>>0;a+=w,c+=h,d.lastX+=w,d.lastY+=h,f&&(R.splice(u,1),u--)}i?window.scrollBy(a,c):(a&&(e.scrollLeft+=a),c&&(e.scrollTop+=c)),t||o||(R=[]),R.length?_(l,e,1e3/z.frameRate+1):j=!1};_(l,e,0),j=!0}}function r(e){Y||t();var o=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(h(D,"embed")||h(o,"embed")&&/\.pdf/i.test(o.src)||h(D,"object")||o.shadowRoot)return!0;var r=-e.wheelDeltaX||e.deltaX||0,a=-e.wheelDeltaY||e.deltaY||0;N&&(e.wheelDeltaX&&y(e.wheelDeltaX,120)&&(r=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&y(e.wheelDeltaY,120)&&(a=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),r||a||(a=-e.wheelDelta||0),1===e.deltaMode&&(r*=40,a*=40);var i=u(o);return i?!!v(a)||(Math.abs(r)>1.2&&(r*=z.stepSize/120),Math.abs(a)>1.2&&(a*=z.stepSize/120),n(i,r,a),e.preventDefault(),void l()):!O||!J||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function a(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==K.spacebar;document.body.contains(D)||(D=document.activeElement);var r=/^(textarea|select|embed|object)$/i,a=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||r.test(t.nodeName)||h(t,"input")&&!a.test(t.type)||h(D,"video")||g(e)||t.isContentEditable||o)return!0;if((h(t,"button")||h(t,"input")&&a.test(t.type))&&e.keyCode===K.spacebar)return!0;if(h(t,"input")&&"radio"==t.type&&P[e.keyCode])return!0;var i,c=0,d=0,s=u(D);if(!s)return!O||!J||parent.keydown(e);var f=s.clientHeight;switch(s==document.body&&(f=window.innerHeight),e.keyCode){case K.up:d=-z.arrowScroll;break;case K.down:d=z.arrowScroll;break;case K.spacebar:i=e.shiftKey?1:-1,d=-i*f*.9;break;case K.pageup:d=.9*-f;break;case K.pagedown:d=.9*f;break;case K.home:d=-s.scrollTop;break;case K.end:var m=s.scrollHeight-s.scrollTop,w=m-f;d=w>0?w+10:0;break;case K.left:c=-z.arrowScroll;break;case K.right:c=z.arrowScroll;break;default:return!0}n(s,c,d),e.preventDefault(),l()}function i(e){D=e.target}function l(){clearTimeout(E),E=setInterval(function(){F={}},1e3)}function c(e,t){for(var o=e.length;o--;)F[V(e[o])]=t;return t}function u(e){var t=[],o=document.body,n=A.scrollHeight;do{var r=F[V(e)];if(r)return c(t,r);if(t.push(e),n===e.scrollHeight){var a=s(A)&&s(o),i=a||f(A);if(O&&d(A)||!O&&i)return c(t,$())}else if(d(e)&&f(e))return c(t,e)}while(e=e.parentElement)}function d(e){return e.clientHeight+10<e.scrollHeight}function s(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"hidden"!==t}function f(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function m(e,t){window.addEventListener(e,t,!1)}function w(e,t){window.removeEventListener(e,t,!1)}function h(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function p(e,t){e=e>0?1:-1,t=t>0?1:-1,X.x===e&&X.y===t||(X.x=e,X.y=t,R=[],q=0)}function v(e){if(e)return B.length||(B=[e,e,e]),e=Math.abs(e),B.push(e),B.shift(),clearTimeout(C),C=setTimeout(function(){try{localStorage.SS_deltaBuffer=B.join(",")}catch(e){}},1e3),!b(120)&&!b(100)}function y(e,t){return Math.floor(e/t)==e/t}function b(e){return y(B[0],e)&&y(B[1],e)&&y(B[2],e)}function g(e){var t=e.target,o=!1;if(document.URL.indexOf("www.youtube.com/watch")!=-1)do if(o=t.classList&&t.classList.contains("html5-video-controls"))break;while(t=t.parentNode);return o}function S(e){var t,o,n;return e*=z.pulseScale,e<1?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*z.pulseNormalize}function x(e){return e>=1?1:e<=0?0:(1==z.pulseNormalize&&(z.pulseNormalize/=S(1)),S(e))}function k(e){for(var t in e)H.hasOwnProperty(t)&&(z[t]=e[t])}var D,M,T,E,C,H={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},z=H,L=!1,O=!1,X={x:0,y:0},Y=!1,A=document.documentElement,B=[],N=/^Mac/.test(navigator.platform),K={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},P={37:1,38:1,39:1,40:1},R=[],j=!1,q=Date.now(),V=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),F={};if(window.localStorage&&localStorage.SS_deltaBuffer)try{B=localStorage.SS_deltaBuffer.split(",")}catch(e){}var I,_=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),W=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,$=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var o=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,3),e=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return e}}(),U=window.navigator.userAgent,G=/Edge/.test(U),J=/chrome/i.test(U)&&!G,Q=/safari/i.test(U)&&!G,Z=/mobile/i.test(U),ee=/Windows NT 6.1/i.test(U)&&/rv:11/i.test(U),te=Q&&(/Version\/8/i.test(U)||/Version\/9/i.test(U)),oe=(J||Q||ee)&&!Z;"onwheel"in document.createElement("div")?I="wheel":"onmousewheel"in document.createElement("div")&&(I="mousewheel"),I&&oe&&(m(I,r),m("mousedown",i),m("load",t)),k.destroy=o,window.SmoothScrollOptions&&k(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return k}):"object"==typeof exports?module.exports=k:window.SmoothScroll=k}();
//# sourceMappingURL=SmoothScroll.min.js.map;
// source --> https://criaderolusitania.com/wp-content/plugins/woocommerce-lottery/public/js/jquery.plugin.min.js 
﻿/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (http://keith-wood.name/licence.html) license. */
(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);
// source --> https://criaderolusitania.com/wp-content/plugins/woocommerce-lottery/public/js/jquery.countdown.min.js 
/*! http://keith-wood.name/countdown.html
	Countdown for jQuery v2.1.0.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) January 2008.
	Available under the MIT (http://keith-wood.name/licence.html) license. 
	Please attribute the author if you use it. */
!function(a){"use strict";var b="wc_lotery_countdown",c=0,d=1,e=2,f=3,g=4,h=5,i=6;a.JQPlugin.createPlugin({name:b,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,padZeroes:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{"":{labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1}},_rtlClass:b+"-rtl",_sectionClass:b+"-section",_amountClass:b+"-amount",_periodClass:b+"-period",_rowClass:b+"-row",_holdingClass:b+"-holding",_showClass:b+"-show",_descrClass:b+"-descr",_timerElems:[],_init:function(){function b(a){var h=a<1e12?e?window.performance.now()+window.performance.timing.navigationStart:d():a||d();h-g>=1e3&&(c._updateElems(),g=h),f(b)}var c=this;this._super(),this._serverSyncs=[];var d="function"==typeof Date.now?Date.now:function(){return(new Date).getTime()},e=window.performance&&"function"==typeof window.performance.now,f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,g=0;!f||a.noRequestAnimationFrame?(a.noRequestAnimationFrame=null,a.wc_lotery_countdown._timer=setInterval(function(){c._updateElems()},1e3)):(g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d(),f(b))},UTCDate:function(a,b,c,d,e,f,g,h){"object"==typeof b&&b instanceof Date&&(h=b.getMilliseconds(),g=b.getSeconds(),f=b.getMinutes(),e=b.getHours(),d=b.getDate(),c=b.getMonth(),b=b.getFullYear());var i=new Date;return i.setUTCFullYear(b),i.setUTCDate(1),i.setUTCMonth(c||0),i.setUTCDate(d||1),i.setUTCHours(e||0),i.setUTCMinutes((f||0)-(Math.abs(a)<30?60*a:a)),i.setUTCSeconds(g||0),i.setUTCMilliseconds(h||0),i},periodsToSeconds:function(a){return 31557600*a[0]+2629800*a[1]+604800*a[2]+86400*a[3]+3600*a[4]+60*a[5]+a[6]},resync:function(){var b=this;a("."+this._getMarker()).each(function(){var c=a.data(this,b.name);if(c.options.serverSync){for(var d=null,e=0;e<b._serverSyncs.length;e++)if(b._serverSyncs[e][0]===c.options.serverSync){d=b._serverSyncs[e];break}if(b._eqNull(d[2])){var f=a.isFunction(c.options.serverSync)?c.options.serverSync.apply(this,[]):null;d[2]=(f?(new Date).getTime()-f.getTime():0)-d[1]}c._since&&c._since.setMilliseconds(c._since.getMilliseconds()+d[2]),c._until.setMilliseconds(c._until.getMilliseconds()+d[2])}});for(var c=0;c<b._serverSyncs.length;c++)b._eqNull(b._serverSyncs[c][2])||(b._serverSyncs[c][1]+=b._serverSyncs[c][2],delete b._serverSyncs[c][2])},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){this._hasElem(a)||this._timerElems.push(a)},_hasElem:function(b){return a.inArray(b,this._timerElems)>-1},_removeElem:function(b){this._timerElems=a.map(this._timerElems,function(a){return a===b?null:a})},_updateElems:function(){for(var a=this._timerElems.length-1;a>=0;a--)this._updateCountdown(this._timerElems[a])},_optionsChanged:function(b,c,d){d.layout&&(d.layout=d.layout.replace(/&lt;/g,"<").replace(/&gt;/g,">")),this._resetExtraLabels(c.options,d);var e=c.options.timezone!==d.timezone;a.extend(c.options,d),this._adjustSettings(b,c,!this._eqNull(d.until)||!this._eqNull(d.since)||e);var f=new Date;(c._since&&c._since<f||c._until&&c._until>f)&&this._addElem(b[0]),this._updateCountdown(b,c)},_updateCountdown:function(b,c){if(b=b.jquery?b:a(b),c=c||this._getInst(b)){if(b.html(this._generateHTML(c)).toggleClass(this._rtlClass,c.options.isRTL),"pause"!==c._hold&&a.isFunction(c.options.onTick)){var d="lap"!==c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date);1!==c.options.tickInterval&&this.periodsToSeconds(d)%c.options.tickInterval!==0||c.options.onTick.apply(b[0],[d])}var e="pause"!==c._hold&&(c._since?c._now.getTime()<c._since.getTime():c._now.getTime()>=c._until.getTime());if(e&&!c._expiring){if(c._expiring=!0,this._hasElem(b[0])||c.options.alwaysExpire){if(this._removeElem(b[0]),a.isFunction(c.options.onExpiry)&&c.options.onExpiry.apply(b[0],[]),c.options.expiryText){var f=c.options.layout;c.options.layout=c.options.expiryText,this._updateCountdown(b[0],c),c.options.layout=f}c.options.expiryUrl&&(window.location=c.options.expiryUrl)}c._expiring=!1}else"pause"===c._hold&&this._removeElem(b[0])}},_resetExtraLabels:function(a,b){var c=null;for(c in b)c.match(/[Ll]abels[02-9]|compactLabels1/)&&(a[c]=b[c]);for(c in a)c.match(/[Ll]abels[02-9]|compactLabels1/)&&"undefined"==typeof b[c]&&(a[c]=null)},_eqNull:function(a){return"undefined"==typeof a||null===a},_adjustSettings:function(b,c,d){for(var e=null,f=0;f<this._serverSyncs.length;f++)if(this._serverSyncs[f][0]===c.options.serverSync){e=this._serverSyncs[f][1];break}var g=null,h=null;if(this._eqNull(e)){var i=a.isFunction(c.options.serverSync)?c.options.serverSync.apply(b[0],[]):null;g=new Date,h=i?g.getTime()-i.getTime():0,this._serverSyncs.push([c.options.serverSync,h])}else g=new Date,h=c.options.serverSync?e:0;var j=c.options.timezone;j=this._eqNull(j)?-g.getTimezoneOffset():j,(d||!d&&this._eqNull(c._until)&&this._eqNull(c._since))&&(c._since=c.options.since,this._eqNull(c._since)||(c._since=this.UTCDate(j,this._determineTime(c._since,null)),c._since&&h&&c._since.setMilliseconds(c._since.getMilliseconds()+h)),c._until=this.UTCDate(j,this._determineTime(c.options.until,g)),h&&c._until.setMilliseconds(c._until.getMilliseconds()+h)),c._show=this._determineShow(c)},_preDestroy:function(a,b){this._removeElem(a[0]),a.empty()},pause:function(a){this._hold(a,"pause")},lap:function(a){this._hold(a,"lap")},resume:function(a){this._hold(a,null)},toggle:function(b){var c=a.data(b,this.name)||{};this[c._hold?"resume":"pause"](b)},toggleLap:function(b){var c=a.data(b,this.name)||{};this[c._hold?"resume":"lap"](b)},_hold:function(b,c){var d=a.data(b,this.name);if(d){if("pause"===d._hold&&!c){d._periods=d._savePeriods;var e=d._since?"-":"+";d[d._since?"_since":"_until"]=this._determineTime(e+d._periods[0]+"y"+e+d._periods[1]+"o"+e+d._periods[2]+"w"+e+d._periods[3]+"d"+e+d._periods[4]+"h"+e+d._periods[5]+"m"+e+d._periods[6]+"s"),this._addElem(b)}d._hold=c,d._savePeriods="pause"===c?d._periods:null,a.data(b,this.name,d),this._updateCountdown(b,d)}},getTimes:function(b){var c=a.data(b,this.name);return c?"pause"===c._hold?c._savePeriods:c._hold?this._calculatePeriods(c,c._show,c.options.significant,new Date):c._periods:null},_determineTime:function(a,b){var c=this,d=function(a){var b=new Date;return b.setTime(b.getTime()+1e3*a),b},e=function(a){a=a.toLowerCase();for(var b=new Date,d=b.getFullYear(),e=b.getMonth(),f=b.getDate(),g=b.getHours(),h=b.getMinutes(),i=b.getSeconds(),j=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,k=j.exec(a);k;){switch(k[2]||"s"){case"s":i+=parseInt(k[1],10);break;case"m":h+=parseInt(k[1],10);break;case"h":g+=parseInt(k[1],10);break;case"d":f+=parseInt(k[1],10);break;case"w":f+=7*parseInt(k[1],10);break;case"o":e+=parseInt(k[1],10),f=Math.min(f,c._getDaysInMonth(d,e));break;case"y":d+=parseInt(k[1],10),f=Math.min(f,c._getDaysInMonth(d,e))}k=j.exec(a)}return new Date(d,e,f,g,h,i,0)},f=this._eqNull(a)?b:"string"==typeof a?e(a):"number"==typeof a?d(a):a;return f&&f.setMilliseconds(0),f},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(b){var j=this;b._periods=b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date);var k=!1,l=0,m=b.options.significant,n=a.extend({},b._show),o=null;for(o=c;o<=i;o++)k=k||"?"===b._show[o]&&b._periods[o]>0,n[o]="?"!==b._show[o]||k?b._show[o]:null,l+=n[o]?1:0,m-=b._periods[o]>0?1:0;var p=[!1,!1,!1,!1,!1,!1,!1];for(o=i;o>=c;o--)b._show[o]&&(b._periods[o]?p[o]=!0:(p[o]=m>0,m--));var q=b.options.compact?b.options.compactLabels:b.options.labels,r=b.options.whichLabels||this._normalLabels,s=function(a){var c=b.options["compactLabels"+r(b._periods[a])];return n[a]?j._translateDigits(b,b._periods[a])+(c?c[a]:q[a])+" ":""},t=b.options.padZeroes?2:1,u=function(a){var c=b.options["labels"+r(b._periods[a])];return!b.options.significant&&n[a]||b.options.significant&&p[a]?'<span class="'+j._sectionClass+'"><span class="'+j._amountClass+'">'+j._minDigits(b,b._periods[a],t)+'</span><span class="'+j._periodClass+'">'+(c?c[a]:q[a])+"</span></span>":""};return b.options.layout?this._buildLayout(b,n,b.options.layout,b.options.compact,b.options.significant,p):(b.options.compact?'<span class="'+this._rowClass+" "+this._amountClass+(b._hold?" "+this._holdingClass:"")+'">'+s(c)+s(d)+s(e)+s(f)+(n[g]?this._minDigits(b,b._periods[g],2):"")+(n[h]?(n[g]?b.options.timeSeparator:"")+this._minDigits(b,b._periods[h],2):"")+(n[i]?(n[g]||n[h]?b.options.timeSeparator:"")+this._minDigits(b,b._periods[i],2):""):'<span class="'+this._rowClass+" "+this._showClass+(b.options.significant||l)+(b._hold?" "+this._holdingClass:"")+'">'+u(c)+u(d)+u(e)+u(f)+u(g)+u(h)+u(i))+"</span>"+(b.options.description?'<span class="'+this._rowClass+" "+this._descrClass+'">'+b.options.description+"</span>":"")},_buildLayout:function(b,j,k,l,m,n){for(var o=b.options[l?"compactLabels":"labels"],p=b.options.whichLabels||this._normalLabels,q=function(a){return(b.options[(l?"compactLabels":"labels")+p(b._periods[a])]||o)[a]},r=function(a,c){return b.options.digits[Math.floor(a/c)%10]},s={desc:b.options.description,sep:b.options.timeSeparator,yl:q(c),yn:this._minDigits(b,b._periods[c],1),ynn:this._minDigits(b,b._periods[c],2),ynnn:this._minDigits(b,b._periods[c],3),y1:r(b._periods[c],1),y10:r(b._periods[c],10),y100:r(b._periods[c],100),y1000:r(b._periods[c],1e3),ol:q(d),on:this._minDigits(b,b._periods[d],1),onn:this._minDigits(b,b._periods[d],2),onnn:this._minDigits(b,b._periods[d],3),o1:r(b._periods[d],1),o10:r(b._periods[d],10),o100:r(b._periods[d],100),o1000:r(b._periods[d],1e3),wl:q(e),wn:this._minDigits(b,b._periods[e],1),wnn:this._minDigits(b,b._periods[e],2),wnnn:this._minDigits(b,b._periods[e],3),w1:r(b._periods[e],1),w10:r(b._periods[e],10),w100:r(b._periods[e],100),w1000:r(b._periods[e],1e3),dl:q(f),dn:this._minDigits(b,b._periods[f],1),dnn:this._minDigits(b,b._periods[f],2),dnnn:this._minDigits(b,b._periods[f],3),d1:r(b._periods[f],1),d10:r(b._periods[f],10),d100:r(b._periods[f],100),d1000:r(b._periods[f],1e3),hl:q(g),hn:this._minDigits(b,b._periods[g],1),hnn:this._minDigits(b,b._periods[g],2),hnnn:this._minDigits(b,b._periods[g],3),h1:r(b._periods[g],1),h10:r(b._periods[g],10),h100:r(b._periods[g],100),h1000:r(b._periods[g],1e3),ml:q(h),mn:this._minDigits(b,b._periods[h],1),mnn:this._minDigits(b,b._periods[h],2),mnnn:this._minDigits(b,b._periods[h],3),m1:r(b._periods[h],1),m10:r(b._periods[h],10),m100:r(b._periods[h],100),m1000:r(b._periods[h],1e3),sl:q(i),sn:this._minDigits(b,b._periods[i],1),snn:this._minDigits(b,b._periods[i],2),snnn:this._minDigits(b,b._periods[i],3),s1:r(b._periods[i],1),s10:r(b._periods[i],10),s100:r(b._periods[i],100),s1000:r(b._periods[i],1e3)},t=k,u=c;u<=i;u++){var v="yowdhms".charAt(u),w=new RegExp("\\{"+v+"<\\}([\\s\\S]*)\\{"+v+">\\}","g");t=t.replace(w,!m&&j[u]||m&&n[u]?"$1":"")}return a.each(s,function(a,b){var c=new RegExp("\\{"+a+"\\}","g");t=t.replace(c,b)}),t},_minDigits:function(a,b,c){return b=""+b,b.length>=c?this._translateDigits(a,b):(b="0000000000"+b,this._translateDigits(a,b.substr(b.length-c)))},_translateDigits:function(a,b){return(""+b).replace(/[0-9]/g,function(b){return a.options.digits[b]})},_determineShow:function(a){var b=a.options.format,j=[];return j[c]=b.match("y")?"?":b.match("Y")?"!":null,j[d]=b.match("o")?"?":b.match("O")?"!":null,j[e]=b.match("w")?"?":b.match("W")?"!":null,j[f]=b.match("d")?"?":b.match("D")?"!":null,j[g]=b.match("h")?"?":b.match("H")?"!":null,j[h]=b.match("m")?"?":b.match("M")?"!":null,j[i]=b.match("s")?"?":b.match("S")?"!":null,j},_calculatePeriods:function(a,b,j,k){a._now=k,a._now.setMilliseconds(0);var l=new Date(a._now.getTime());a._since?k.getTime()<a._since.getTime()?a._now=k=l:k=a._since:(l.setTime(a._until.getTime()),k.getTime()>a._until.getTime()&&(a._now=k=l));var m=[0,0,0,0,0,0,0];if(b[c]||b[d]){var n=this._getDaysInMonth(k.getFullYear(),k.getMonth()),o=this._getDaysInMonth(l.getFullYear(),l.getMonth()),p=l.getDate()===k.getDate()||l.getDate()>=Math.min(n,o)&&k.getDate()>=Math.min(n,o),q=function(a){return 60*(60*a.getHours()+a.getMinutes())+a.getSeconds()},r=Math.max(0,12*(l.getFullYear()-k.getFullYear())+l.getMonth()-k.getMonth()+(l.getDate()<k.getDate()&&!p||p&&q(l)<q(k)?-1:0));m[c]=b[c]?Math.floor(r/12):0,m[d]=b[d]?r-12*m[c]:0,k=new Date(k.getTime());var s=k.getDate()===n,t=this._getDaysInMonth(k.getFullYear()+m[c],k.getMonth()+m[d]);k.getDate()>t&&k.setDate(t),k.setFullYear(k.getFullYear()+m[c]),k.setMonth(k.getMonth()+m[d]),s&&k.setDate(t)}var u=Math.floor((l.getTime()-k.getTime())/1e3),v=null,w=function(a,c){m[a]=b[a]?Math.floor(u/c):0,u-=m[a]*c};if(w(e,604800),w(f,86400),w(g,3600),w(h,60),w(i,1),u>0&&!a._since){var x=[1,12,4.3482,7,24,60,60],y=i,z=1;for(v=i;v>=c;v--)b[v]&&(m[y]>=z&&(m[y]=0,u=1),u>0&&(m[v]++,u=0,y=v,z=1)),z*=x[v]}if(j)for(v=c;v<=i;v++)j&&m[v]?j--:j||(m[v]=0);return m}})}(jQuery);
//# sourceMappingURL=jquery.wc_lotery_countdown.min.map;