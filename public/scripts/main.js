import './bootstrap-custom';
/**
 * NOTE: We require the main sass stylesheet here so that extract-text-webpack-plugin can
 * then take this module and create a separate stylesheet for it. If we remove that plugin
 * then webpack will automatically inject the styles at the top of the page. With this we
 * have control of the link tag's placement in `_layout.html`.
 */
import '../styles/main.scss';

console.log('yo');
