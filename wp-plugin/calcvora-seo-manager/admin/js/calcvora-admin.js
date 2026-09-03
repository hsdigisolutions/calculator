/* Calcvora SEO Manager — admin JS */
( function ( $ ) {
	'use strict';

	// FAQ repeater on the edit screen.
	$( document ).on( 'click', '#calcvora-add-faq', function ( e ) {
		e.preventDefault();
		var tpl = $( '#calcvora-faq-template' ).html();
		$( '#calcvora-faqs' ).append( tpl );
	} );

	$( document ).on( 'click', '.calcvora-remove-faq', function ( e ) {
		e.preventDefault();
		var rows = $( '#calcvora-faqs .calcvora-faq-row' );
		if ( rows.length > 1 ) {
			$( this ).closest( '.calcvora-faq-row' ).remove();
		} else {
			$( this ).closest( '.calcvora-faq-row' ).find( 'input,textarea' ).val( '' );
		}
	} );

	// Toggle index — row action link + column icon.
	function toggle( id, $icon ) {
		$.post(
			CalcvoraAdmin.ajaxUrl,
			{ action: 'calcvora_toggle_index', id: id, nonce: CalcvoraAdmin.toggleNonce },
			function ( res ) {
				if ( res && res.success && $icon ) {
					$icon.text( res.data.indexed ? '✅' : '❌' );
				} else {
					window.location.reload();
				}
			}
		);
	}

	$( document ).on( 'click', '.calcvora-toggle-link', function ( e ) {
		e.preventDefault();
		var id = $( this ).data( 'id' );
		toggle( id, $( '.calcvora-index[data-id="' + id + '"]' ) );
	} );

	$( document ).on( 'click', '.calcvora-index', function () {
		toggle( $( this ).data( 'id' ), $( this ) );
	} );

	// Sync / Repair on the settings page.
	$( document ).on( 'click', '#calcvora-sync', function ( e ) {
		e.preventDefault();
		var $status = $( '#calcvora-sync-status' ).text( 'Working…' );
		$.post(
			CalcvoraAdmin.ajaxUrl,
			{ action: 'calcvora_run_batch', nonce: CalcvoraAdmin.batchNonce },
			function ( res ) {
				if ( res && res.success ) {
					$status.text( 'Done ' + res.data.done + '/' + res.data.total + '. Background will continue any remaining.' );
				} else {
					$status.text( 'Error — check permissions.' );
				}
			}
		);
	} );
} )( jQuery );
