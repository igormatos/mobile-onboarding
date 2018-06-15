var pageComponent=webpackJsonppageComponent([28],{278:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),l=a(s),u=n(2),d=a(u);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var p=n(279),c=a(p),f=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(l.default);d.default.register(f,c.default),t.default=f},279:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.DMvkQ=void 0;var s,l=n(1),u=a(l),d=n(2),p=a(d);goog.loadModule(function(e){function t(e,t,a){var s=function(){o("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),r("h6"),o("article",null,null,"id","1"),o("h2"),i("Modularity and OSGI"),r("h2"),o("p"),i("Modularity refers to a software/Web application that may be divided into smaller modules. Software modularity indicates that the number of application modules are capable of serving a specified business domain. Some of the modularity benefits for the software are: distinct functionality, dependencies, encapsulation and reusability."),r("p"),o("p"),i("Liferay Portal is modular too. It comprises code modules created and tested independently and in parallel. It’s a platform on which modules and modular applications are installed, started, used, stopped, and uninstalled. Liferay Portal’s components use the OSGi modularity standard."),r("p"),o("p"),i("Modules are the basic unit of modularity for applications. They act as containers for the application’s features and functionality. These self-contained units are deployed within Liferay’s OSGI Container. In order to deploy a module, it must be packaged in a bundle."),r("p"),o("p"),o("img",null,null,"src","/images/osgi-apps.png"),r("img"),r("p"),o("p"),i("An OSGI bundle is nothing but a JAR file with extra meta data. A bundle contains java classes, a manifest file and other resources (JSPs, properties files, text data). So we can say that every OSGI bundle is JAR file, but reverse is not true. That means that if you want to convert a JAR file into bundle it's necessary to add extra metadata into the MANIFEST.MF file. These extra meta data are known as OSGI Headers, key elements which turns a normal JAR file into a Bundle."),r("p"),o("p"),o("img",null,null,"src","/images/osgi-module.png"),r("img"),r("p"),o("p"),i("OSGI Bundle Life Cycle:"),r("p"),o("p"),o("strong"),i("INSTALLED:"),r("strong"),i(" The bundle has been installed into the OSGi container, but some required bundle dependencies are missing. A bundle in this state can’t be started."),r("p"),o("p"),o("strong"),i("RESOLVED:"),r("strong"),i(" All Java classes that the bundle needs are available. This state indicates that the bundle is either ready to be started or has stopped."),r("p"),o("p"),o("strong"),i("STARTING:"),r("strong"),i(" The bundle is being started, the "),o("code"),i("BundleActivator.start"),r("code"),i(" method has been called but the start method has not yet returned. When the bundle has an activation policy, the bundle will remain in the STARTING state until the bundle is activated according to its activation policy."),r("p"),o("p"),o("strong"),i("ACTIVE:"),r("strong"),i(" The bundle has been successfully activated and is running. Its Bundle Activator start method has been called and returned."),r("p"),o("p"),o("strong"),i("STOPPING:"),r("strong"),i(" The bundle is being stopped. The "),o("code"),i("BundleActivator.stop"),r("code"),i(" method has been called but the stop method has not yet returned."),r("p"),o("p"),o("strong"),i("UNINSTALLED:"),r("strong"),i(" The bundle has been uninstalled. It cannot move into another state."),r("p"),o("p"),o("img",null,null,"src","/images/osgi.png"),r("img"),r("p"),o("p"),i("More details, access "),o("a",null,null,"href","https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/modularity-and-osgi"),i("dev.liferay"),r("a"),i("."),r("p"),r("article"),o("input",null,null,"type","hidden","value",e.page.title),r("input"),o("input",null,null,"type","hidden","value",e.site.title),r("input")};l(n.$$assignDefaults({content:s},e),null,a)}goog.module("DMvkQ.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var a=goog.require("incrementaldom"),o=a.elementOpen,r=a.elementClose,i=(a.elementVoid,a.elementOpenStart,a.elementOpenEnd,a.text),l=(a.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="DMvkQ.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var c=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);p.default.register(c,s),t.DMvkQ=c,t.templates=s,t.default=s}},[278]);