/**
 * @file
 * Copy auth link from message to clipboard using js.
 */

(function ($, Drupal) {
    Drupal.behaviors.copy_to_clipboard = {
        attach: function (context) {

            function showCopyBanner() {
                let banner = document.getElementById('copy-banner');
                if (!banner) {
                    banner = document.createElement('div');
                    banner.id = 'copy-banner';
                    banner.style.position = 'fixed';
                    banner.style.top = '30%';
                    banner.style.left = '50%';
                    banner.style.transform = 'translateX(-50%)';
                    banner.style.backgroundColor = '#4caf50';
                    banner.style.color = 'white';
                    banner.style.padding = '10px 20px';
                    banner.style.borderRadius = '0 0 5px 5px';
                    banner.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                    banner.style.zIndex = '9999';
                    banner.style.fontFamily = 'sans-serif';
                    banner.style.display = 'none';
                    document.body.appendChild(banner);
                }
                
                banner.textContent = 'Anchor copied to clipboard!';
                banner.style.display = 'block';
                
                setTimeout(() => {
                    banner.style.display = 'none';
                }, 2000);
            }
            
            $('a.lpb-copy-anchor').on('click', function(event) {
                event.preventDefault();
                const paragraphId = $(this).data('paragraph-id');
                navigator.clipboard.writeText(`#content-paragraph-${paragraphId}`).catch(err => {
                    console.error('Failed to copy code:', err);
                }).then(() => showCopyBanner());
            });
        }
    }
})(jQuery, Drupal);