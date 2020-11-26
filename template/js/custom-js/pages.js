// Add your custom JavaScript for storefront pages here.
 window.storefront.on('widget:@ecomplus/widget-minicart', function () {
  setTimeout(function () {
    $ecomConfig.set('default_img_size', 'zoom')
  }, 800)
 })

