var pageComponent=webpackJsonppageComponent([32],{272:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),u=l(n),s=o(2),p=l(s);o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13),o(14),o(15);var c=o(273),f=l(c),d=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);p.default.register(d,f.default),t.default=d},273:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.QXGXz=void 0;var n,u=o(1),s=l(u),p=o(2),c=l(p);goog.loadModule(function(e){function t(e,t,l){var n=function(){a("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),r("h6"),a("article",null,null,"id","2"),a("h2"),i("Using the Liferay UI TAGLIB"),r("h2"),a("p"),i("You can create a lot of components using the <liferay:ui>\\ taglibs. Liferay Portal’s taglibs provide the following benefits to your markup:"),r("p"),a("ul"),a("li"),i("Consistent"),r("li"),a("li"),i("Responsive"),r("li"),a("li"),i("Accessible across your portlets"),r("li"),r("ul"),a("p"),i("The full markup generated by the tags can be found in the JSPs of the tag’s folder in the "),a("a",null,null,"href","https://github.com/liferay/liferay-portal/tree/master/portal-web/docroot/html/taglib/ui"),i("Liferay Github Repo"),r("a"),i("."),r("p"),r("article"),a("article",null,null,"id","3"),a("h2"),i("Using Liferay UI TAGLIB"),r("h2"),a("p"),i("A list of the available <liferay-ui>\\ taglibs can be found "),a("a",null,null,"href","https://docs.liferay.com/ce/portal/7.0-latest/taglibs/util-taglib/"),i("here"),r("a"),i(". To use the Liferay-UI taglib library you must add the following declaration to your JSP:"),r("p"),u({code:'<%@ taglib prefix="liferay-ui" uri="http://liferay.com/tld/ui" %>',mode:"xml"},null,l),a("p"),i("Each taglib has a list of attributes that can be passed to the tag. Some of these are required and some are optional. See the "),a("a",null,null,"href","https://docs.liferay.com/portal/7.0-latest/taglibs/util-taglib/liferay-ui/tld-summary.html"),i("taglib docs"),r("a"),i(" to view the requirements for each tag."),r("p"),a("p"),i("The example below uses the <liferay-ui:alert>\\ taglib to create a success alert that the user can close:"),r("p"),u({code:'<liferay-ui:alert\n        closable="true"\n        icon="exclamation-full"\n        message="Here is our awesome alert example"\n        type="success"\n/>',mode:"xml"},null,l),a("p"),i("Here is an example implementation of a <liferay-ui:user-display>\\ taglib:"),r("p"),u({code:'<liferay-ui:user-display\n        markupView="lexicon"\n        showUserDetails="true"\n        showUserName="true"\n        userId="<%= themeDisplay.getRealUserId() %>"\n        userName="<%= themeDisplay.getRealUser().getFullName() %>"\n/>',mode:"xml"},null,l),r("article"),a("article",null,null,"id","4"),a("h2"),i("Using Liferay UTIL TAGLIB"),r("h2"),a("p"),i("The <liferay-util>\\ taglib is used to pull in other resources into a portlet or theme, it can be used to dictate which resources need to be inserted at the bottom or top of the HTML source. A list of the available <liferay-util>\\ tags can be found "),a("a",null,null,"href","https://docs.liferay.com/ce/portal/7.0-latest/taglibs/util-taglib/"),i("here"),r("a"),i(". To use the Liferay-Util taglib library you must add the following declaration to your JSP:"),r("p"),u({code:'<%@ taglib prefix="liferay-util" uri="http://liferay.com/tld/util" %>',mode:"xml"},null,l),a("p"),i("Each taglib has a list of attributes that can be passed to the tag. Some of these are required and some are optional. See the "),a("a",null,null,"href","https://docs.liferay.com/portal/7.0-latest/taglibs/util-taglib/liferay-util/tld-summary.html"),i("taglib docs"),r("a"),i(" to view the requirements for each tag."),r("p"),a("p"),i("The example below uses the <liferay-util:body-bottom>\\ taglib. This tag makes the content placed between the opening and closing of this tag is moved to the bottom of the body tag. When something is passed using this taglib, the body_bottom.jsp is passed markup and outputs in this JSP. The attribute "),a("strong"),i("outputKey"),r("strong"),i(" is the reference key for this content."),r("p"),u({code:'<%@ taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %>\n<%@ taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %>\n<%@ taglib uri="http://liferay.com/tld/util" prefix="liferay-util" %>\n\n<%@ page import="com.liferay.portal.kernel.util.PortalUtil" %>\n<%@ page import="com.liferay.product.navigation.product.menu.web.constants.ProductNavigationProductMenuPortletKeys" %>\n\n<liferay-theme:defineObjects />\n\n<%\nString portletNamespace = PortalUtil.getPortletNamespace(ProductNavigationProductMenuPortletKeys.PRODUCT_NAVIGATION_PRODUCT_MENU);\n%>\n\n<liferay-util:body-bottom outputKey="productMenu">\n        <div class="lfr-product-menu-panel sidenav-fixed sidenav-menu-slider" \n        id="<%= portletNamespace %>sidenavSliderId">\n                <div class="product-menu sidebar sidenav-menu">\n                        <liferay-portlet:runtime portletName="<%= ProductNavigationProductMenuPortletKeys.PRODUCT_NAVIGATION_PRODUCT_MENU %>" />\n                </div>\n        </div>\n</liferay-util:body-bottom>',mode:"xml"},null,l),a("p"),i("More details, access "),a("a",null,null,"href","https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/front-end-taglibs"),i("dev.liferay"),r("a"),i("."),r("p"),r("article"),a("input",null,null,"type","hidden","value",e.page.title),r("input"),a("input",null,null,"type","hidden","value",e.site.title),r("input")};s(o.$$assignDefaults({content:n},e),null,l)}goog.module("QXGXz.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var l=goog.require("incrementaldom"),a=l.elementOpen,r=l.elementClose,i=(l.elementVoid,l.elementOpenStart,l.elementOpenEnd,l.text),u=(l.attr,c.default.getTemplate("ElectricCode.incrementaldom","render")),s=c.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="QXGXz.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=n=e,e});var f=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);c.default.register(f,n),t.QXGXz=f,t.templates=n,t.default=n}},[272]);