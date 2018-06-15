var pageComponent=webpackJsonppageComponent([3],{316:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),s=o(a),c=n(2),u=o(c);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var p=n(317),f=o(p),d=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(s.default);u.default.register(d,f.default),t.default=d},317:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.KxTSj=void 0;var a,s=n(1),c=o(s),u=n(2),p=o(u);goog.loadModule(function(e){function t(e,t,o){var a=function(){r("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&l(t),i("h6"),r("article",null,null,"id","1"),r("h2"),l("Eclipse crashing?"),i("h2"),r("ol"),r("li"),l("Access ' Eclipse -> Content -> Eclipse -> eclipse.ini '."),i("li"),r("li"),l("Edit the file on the line that contains 'Xms' and ' Xmx' with the amount of space."),r("ul"),r("li"),r("strong"),l("E.g.:"),i("strong"),l(" Xms4G."),i("li"),i("ul"),i("li"),i("ol"),i("article"),r("article",null,null,"id","2"),r("h2"),l("Problems getting access to debug mode in eclipse?"),i("h2"),r("ol"),r("li"),l("Check your "),r("strong"),l("setenv.sh"),i("strong"),l(" file located in the bin folder of the tomcat."),i("li"),r("li"),l("Make sure the contents of the file match the text below:"),i("li"),i("ol"),s({code:'CATALINA_OPTS="$CATALINA_OPTS -Dfile.encoding=UTF8 -Djava.net.preferIPv4Stack=true  -Dorg.apache.catalina.loader.WebappClassLoader.ENABLE_CLEAR_REFERENCES=false -Duser.timezone=GMT -Xdebug -Xrunjdwp:transport=dt_socket,address=8000,server=y,suspend=n"\nJMX_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.port=8099 -Dcom.sun.management.jmxremote.ssl=false"\n\nCATALINA_OPTS="${CATALINA_OPTS} ${JMX_OPTS}"\n\nif [ "$1" = "jacoco" ]\nthen\n    JACOCO_OPTS="-javaagent:/YOUR_PATH/bundles/liferay-portal/tomcat-8.0.32/bin/jacocoagent.jar=destfile=/YOUR_PATH/liferay-portal/jacoco/liferay-jacoco.exec,excludes=,includes=*,output=file,append=true"\n    CATALINA_OPTS="${CATALINA_OPTS} ${JACOCO_OPTS}"\n    shift\nfi\n\nCATALINA_OPTS="${CATALINA_OPTS} -javaagent:/YOUR_PATH/liferay-portal/lib/portal/aspectj-weaver.jar -Dorg.aspectj.weaver.loadtime.configuration=com/liferay/aspectj/aop.xml"\n\nJPDA_ADDRESS="8000"',mode:"text"},null,o),i("article"),r("article",null,null,"id","3"),r("h2"),l("Indentation Help ?"),i("h2"),r("ol"),r("li"),l("Download plugin "),r("strong"),l("Arbitrary Lines"),i("strong"),l(" ."),i("li"),r("li"),l("Help -> Eclipse Marketplace"),i("li"),r("li"),l("Access the advanced settings."),r("ul"),r("li"),l("Eclipse -> Preferences -> General -> Editors -> Text Editors -> Arbitrary Lines -> Show Advanced Configuration"),i("li"),i("ul"),i("li"),r("li"),l("Enable checkbox 'character size override' ."),i("li"),r("li"),l("Edit 'Override character width' field for 6.65."),i("li"),i("ol"),i("article"),r("input",null,null,"type","hidden","value",e.page.title),i("input"),r("input",null,null,"type","hidden","value",e.site.title),i("input")};c(n.$$assignDefaults({content:a},e),null,o)}goog.module("KxTSj.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,i=o.elementClose,l=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),s=(o.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),c=p.default.getTemplate("tips.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="KxTSj.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=a=e,e});var f=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(c.default);p.default.register(f,a),t.KxTSj=f,t.templates=a,t.default=a}},[316]);