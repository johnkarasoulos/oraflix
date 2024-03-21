define([
    'ojs/ojoffcanvas',
    'ojs/ojresponsiveknockoututils',
    'ojs/ojresponsiveutils',
    'css!./resources/css/shell.css'],
  function(
    OffCanvasUtils,
    ResponsiveKnockoutUtils,
    ResponsiveUtils
) {
  'use strict';

  var PageModule = function PageModule() {};

  var drawerParams = {
    displayMode: 'push',
    selector: '#navDrawer',
    content: '#pageContent'
  };

  PageModule.prototype.toggleDrawer = function() {
    return OffCanvasUtils.toggle(drawerParams);
  };

  // If the drawer is open and the page gets resized close it on medium and larger screens
  var mdQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
  var mdScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
  mdScreen.subscribe(function() {
    OffCanvasUtils.close(drawerParams);
  });

  return PageModule;
});
