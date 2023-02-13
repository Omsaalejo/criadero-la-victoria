// source --> https://criaderolusitania.com/wp-content/plugins/woocommerce-lottery-pick-number/public/js/wc-lottery-pn-public.js 
jQuery(document).ready(function($){

	$('#wc-lottery-pn').on('click','ul:not(.working) li.tn:not(.taken, .in_cart)',function(e){

		var max_qty = $('input[name=max_quantity]').val();
		var current_number = $( this );
		
		if( max_qty <= 0 && ! current_number.hasClass('selected')){
			$.alertable.alert(wc_lottery_pn.maximum_text);
			return;
		}
		if($('#wc-lottery-pn').hasClass('guest')){
			$.alertable.alert(wc_lottery_pn.logintext, { 'html' : true } );
			return;
		}
		
		$( this ).addClass('working');
		$( '.tickets_numbers_tab' ).addClass('working');

		var numbers = $( 'ul.tickets_numbers');
		var lottery_id = numbers.data( 'product-id' );
		var selected_number = $( this ).data( 'ticket-number' );

		$('html, body').css("cursor", "wait");
		numbers.addClass('working');

		jQuery.ajax({
			type : "get",
			url : woocommerce_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'wc_lottery_get_taken_numbers' ),
			data : { 'selected_number' : selected_number, 'lottery_id' : lottery_id, 'reserve_ticket' : wc_lottery_pn.reserve_ticket },
			success: function(response) {

				$( 'ul.tickets_numbers').children('li.tn').each(function(index, el) {
					if( jQuery.inArray( $( this ).data( 'ticket-number' ).toString(), response.taken ) !== -1){
						$( this ).addClass('taken');
					}
					if( jQuery.inArray( $( this ).data( 'ticket-number' ).toString(), response.in_cart ) !== -1){
						$( this ).addClass('in_cart');
					}
					if( jQuery.inArray( $( this ).data( 'ticket-number' ).toString(), response.reserved ) !== -1){
						$( this ).addClass('in_cart');
					}
				});
				if( jQuery.inArray( selected_number.toString(), response.taken ) > 0) {
					$.alertable.alert(wc_lottery_pn.sold_text);
					numbers.removeClass('working');
					$( '.tickets_numbers_tab' ).addClass('working');
					current_number.removeClass('working');
					return;
				}
				
				if( jQuery.inArray( selected_number.toString(), response.in_cart ) > 0) {
					$.alertable.alert(wc_lottery_pn.in_cart_text);
					numbers.removeClass('working');
					$( '.tickets_numbers_tab' ).addClass('working');
					current_number.removeClass('working');
					return;
				}

				if( jQuery.inArray( selected_number.toString(), response.taken ) === -1) {
					current_number.toggleClass('selected');
				}
				var lottery_tickets_numbers = $('input[name=lottery_tickets_number]').val();
				var lottery_tickets_numbers_array = [];
				if( lottery_tickets_numbers ) {
					lottery_tickets_numbers_array = lottery_tickets_numbers.split(',');	
				}
				if (current_number.hasClass('selected') && (jQuery.inArray(selected_number , lottery_tickets_numbers_array ) === -1)) {
					lottery_tickets_numbers_array.push( parseInt(selected_number) );
					$('input[name=lottery_tickets_number]').val( lottery_tickets_numbers_array.join(',') );
					$('input[name=max_quantity]').val( parseInt(max_qty) - 1);
				} else {
					lottery_tickets_numbers_array.splice( $.inArray(selected_number,lottery_tickets_numbers_array) ,1 );
					$('input[name=lottery_tickets_number]').val( lottery_tickets_numbers_array.join(',') );
					$('input[name=max_quantity]').val( parseInt(max_qty) + 1);
				}

				$('input[name=quantity]:not(#qty_dip)').val( parseInt(lottery_tickets_numbers_array.length) ).trigger('change');
				jQuery( document.body ).trigger('sa-wachlist-action',[response.taken,lottery_id, selected_number] );
				$('html, body').css("cursor", "auto");
				numbers.removeClass('working');
				$( '.tickets_numbers_tab' ).addClass('working');
				current_number.removeClass('working');

				if ( $('input[name=quantity]:not(#qty_dip)').val() > 0) { 
					$(':input[name=add-to-cart]').removeClass('lottery-must-pick');
				} else { 
					$(':input[name=add-to-cart]').addClass('lottery-must-pick');
				}
			},
			error: function() {
				numbers.removeClass('working');
				$( '.tickets_numbers_tab' ).addClass('working');
				current_number.removeClass('working');

			}
		});
		
		
	});


	$('.lottery-pn-answers').on('click','li',function(e){
		var answer_id = $(this).data('answer-id');
		if($(this).hasClass('selected')){
			answer_id = -1;
		}
		$('input[name=lottery_answer]').val( parseInt(answer_id) );
		$(this).siblings("li.selected").removeClass("selected").removeClass("false");
		$(this).toggleClass("selected");
		if ( $('input[name=lottery_true_answers]').val() ) {
			lottery_true_answers = $('input[name=lottery_true_answers]').val().split(',');
			
			if( jQuery.inArray( answer_id.toString(), lottery_true_answers ) === -1) {
				$(this).toggleClass('false');
				$(':input[name=add-to-cart]').addClass('lottery-must-answer-true');
			} else{
				$(':input[name=add-to-cart]').removeClass('lottery-must-answer-true');
			}
		}
		if ( $('input[name=lottery_answer]').val() > 0) {
			$(':input[name=add-to-cart]').removeClass('lottery-must-answer'); 
			$('#lucky-dip').prop('disabled', false).prop('title', '').attr('alt', '');

		} else { 
			$(':input[name=add-to-cart]').addClass('lottery-must-answer');
			$('#lucky-dip').prop('disabled', true).prop('title', wc_lottery_pn.please_answer).attr('alt', wc_lottery_pn.please_answer);
		}
	});

	$('.cart.pick-number').on('submit',function(e){
		var message = '';
		var pass = true;
		if ( $(':input[name=add-to-cart]').hasClass('lottery-must-pick') ){
			message = message + wc_lottery_pn.please_pick;
			pass = false;
		}
		if ( $(':input[name=add-to-cart]').hasClass('lottery-must-answer') ){
			message = message + wc_lottery_pn.please_answer;
			pass = false;
		}
		if ( $(':input[name=add-to-cart]').hasClass('lottery-must-answer-true') ){
			message = message + wc_lottery_pn.please_true_answer;
			pass = false;
		}
		if ( pass == false ){
			$.alertable.alert(message);
			e.preventDefault();
		}

	});
	$('.lucky-dip-button').on('click',function(e){
		e.preventDefault();
		var lottery_answer = false;
		var numbers = $( 'ul.tickets_numbers');
		var lottery_id = numbers.data( 'product-id' );
		var qty = $('#qty_dip').closest('#qty_dip').val();
		var max_qty = $('input[name=max_quantity]').val();
		if( max_qty <= 0 ){
			$.alertable.alert(wc_lottery_pn.maximum_text);
			return;
		}
		if ( $('input[name=lottery_answer]').val() > 0) {
			lottery_answer = $('input[name=lottery_answer]').val();
		}
		jQuery.ajax({
			type : "get",
			url : woocommerce_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'wc_lottery_lucky_dip' ),
			data : { 'lottery_id' : lottery_id, 'lottery_answer' : lottery_answer,'qty' : qty},
			success: function(response) {
				$.alertable.alert( response.message, { html : true } );
				jQuery.each(response.ticket_numbers, function(index, value){
					$( 'li.tn[data-ticket-number=' + value + ' ]' ).addClass('in_cart');
				});
				jQuery(document.body).trigger('added_to_cart');
				jQuery( document.body).trigger('lottery_lucky_dip_finished',[response,lottery_id] );
				$('input[name=max_quantity]').val( parseInt(max_qty) - 1);
			},
			error: function() {

			}
		});
		$(document.body).trigger('wc_fragment_refresh');
		$(document.body).trigger('added_to_cart');
		e.preventDefault();
	});
});
// source --> https://criaderolusitania.com/wp-content/plugins/woocommerce-lottery-pick-number/public/js/jquery.alertable.min.js 
//
// jquery.alertable.js - Minimal alert, confirmation, and prompt alternatives.
//
// Developed by Cory LaViska for A Beautiful Site, LLC
//
// Licensed under the MIT license: http://opensource.org/licenses/MIT
//
jQuery&&function(e){"use strict";function t(t,u,s){var d=e.Deferred();return i=document.activeElement,i.blur(),e(l).add(r).remove(),s=e.extend({},e.alertable.defaults,s),l=e(s.modal).hide(),r=e(s.overlay).hide(),n=e(s.okButton),o=e(s.cancelButton),s.html?l.find(".alertable-message").html(u):l.find(".alertable-message").text(u),"prompt"===t?l.find(".alertable-prompt").html(s.prompt):l.find(".alertable-prompt").remove(),e(l).find(".alertable-buttons").append("alert"===t?"":o).append(n),e(s.container).append(r).append(l),s.show.call({modal:l,overlay:r}),"prompt"===t?e(l).find(".alertable-prompt :input:first").focus():e(l).find(':input[type="submit"]').focus(),e(l).on("submit.alertable",function(r){var n,o,i=[];if(r.preventDefault(),"prompt"===t)for(o=e(l).serializeArray(),n=0;n<o.length;n++)i[o[n].name]=o[n].value;else i=null;a(s),d.resolve(i)}),o.on("click.alertable",function(){a(s),d.reject()}),e(document).on("keydown.alertable",function(e){27===e.keyCode&&(e.preventDefault(),a(s),d.reject())}),e(document).on("focus.alertable","*",function(t){e(t.target).parents().is(".alertable")||(t.stopPropagation(),t.target.blur(),e(l).find(":input:first").focus())}),d.promise()}function a(t){t.hide.call({modal:l,overlay:r}),e(document).off(".alertable"),l.off(".alertable"),o.off(".alertable"),i.focus()}var l,r,n,o,i;e.alertable={alert:function(e,a){return t("alert",e,a)},confirm:function(e,a){return t("confirm",e,a)},prompt:function(e,a){return t("prompt",e,a)},defaults:{container:"body",html:!1,cancelButton:'<button class="alertable-cancel" type="button">Cancel</button>',okButton:'<button class="alertable-ok" type="submit">OK</button>',overlay:'<div class="alertable-overlay"></div>',prompt:'<input class="alertable-input" type="text" name="value">',modal:'<form class="alertable"><div class="alertable-message"></div><div class="alertable-prompt"></div><div class="alertable-buttons"></div></form>',hide:function(){e(this.modal).add(this.overlay).fadeOut(100)},show:function(){e(this.modal).add(this.overlay).fadeIn(100)}}}}(jQuery);