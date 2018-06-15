var pageComponent=webpackJsonppageComponent([25],{282:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),l=r(s),c=i(2),d=r(c);i(4),i(5),i(6),i(7),i(8),i(9),i(10),i(11),i(12),i(13),i(14),i(15);var u=i(283),p=r(u),f=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(l.default);d.default.register(f,p.default),t.default=f},283:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.qtGfa=void 0;var s,l=i(1),c=r(l),d=i(2),u=r(d);goog.loadModule(function(e){function t(e,t,r){var s=function(){n("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&o(t),a("h6"),n("article",null,null,"id","2"),n("h2"),o("What is Service Builder?"),a("h2"),n("p"),o("Liferay Service Builder is a tool which is generally used to generate code to interact with database. Liferay Service Builder auto generate service layer code to interact with underlying database. The service builder tool takes xml file (its called service.xml) as an input and generate code based on the input provided in service.xml. This section explains the basics of liferay service builder. Service Builder is a model-driven code generation tool built by Liferay that allows developers to define custom object models called entities. Service Builder generates a service layer through object-relational mapping (ORM) technology that provides a clean separation between your object model and code for the underlying database."),a("p"),n("p"),o("Besides that, Service Builder takes an XML file as input and generates the necessary model, persistence and service layers for your application. These layers provide a clean separation of concerns. Service Builder generates most of the common operations on the database, such as: create, read, update, find."),a("p"),n("p"),o("Some of the main benefits of using Service Builder are:"),a("p"),n("ul"),n("li"),o("Integration with Liferay"),a("li"),n("li"),o("Automatically generated model, persistence, and service layers"),a("li"),n("li"),o("Automatically generated local and remote services"),a("li"),n("li"),o("Automatically generated Hibernate and Spring configurations"),a("li"),n("li"),o("Support for generating finder methods for entities and finder methods that account for permissions"),a("li"),n("li"),o("Built-in entity caching support"),a("li"),n("li"),o("Support for custom SQL queries and dynamic queries"),a("li"),n("li"),o("Saved development time"),a("li"),a("ul"),n("p"),o("Liferay uses Service Builder to generate all of its internal database persistence code. In fact, all of Liferay’s services, both local and remote, are generated by Service Builder. Additionally, the service "),n("a",null,null,"href","https://github.com/liferay/liferay-portal/tree/7.0.x/modules"),o("modules"),a("a"),o(" in Liferay are generated by Service Builder. Service Builder’s use in Liferay Portal demonstrates it to be a robust and reliable tool."),a("p"),n("p"),o("One of the main ways Service Builder saves development time is by completely eliminating the need to write and maintain database access code. To generate a basic service layer, you only need to create a "),n("strong"),o("service.xml"),a("strong"),o(" file and run Service Builder. This generates a new service "),n("strong"),o(".jar"),a("strong"),o(" file for your project."),a("p"),n("p"),o("The generated service .jar file includes a model layer, a persistence layer, a service layer and related infrastructure. These distinct layers represent a healthy separation of concerns:"),a("p"),n("ul"),n("li"),n("strong"),o("Model Layer:"),a("strong"),o(" define objects to represent the project’s entities."),a("li"),n("li"),n("strong"),o("Persistence Layer:"),a("strong"),o(" save and retrieve entities from the database."),a("li"),n("li"),n("strong"),o("Service Layer:"),a("strong"),o(" expose CRUD and related methods for the entities as an API."),a("li"),a("ul"),n("p"),o("Each entity generated by Service Builder contains a model implementation class. Each entity also contains a local service implementation class, a remote service implementation class, or both, depending on how you configure Service Builder in your "),n("strong"),o("service.xml"),a("strong"),o(" file. Customizations and business logic can be implemented in these three classes; in fact, these are the only classes generated by Service Builder that are intended to be customized."),a("p"),n("p"),o("Ensuring that all customizations take place in only a few classes makes Service Builder projects easy to maintain. The local service implementation class is responsible for calling the persistence layer to retrieve and store data entities. Local services contain the business logic and access the persistence layer. They can be invoked by client code running in the same Java Virtual Machine. Remote services usually have additional code for permission checking and are meant to be accessible from anywhere over the Internet or your local network. Service Builder automatically generates the code necessary to allow access to the remote services. The remote services generated by Service Builder include SOAP utilities and can be accessed via SOAP or JSON."),a("p"),n("p"),o("Another way Service Builder saves development time is by providing Spring and Hibernate configurations for the project. Service Builder uses Spring dependency injection for making service implementation classes available at runtime and uses Spring AOP for database transaction management. Service Builder also uses the Hibernate persistence framework for object-relational mapping. As a convenience to developers, Service Builder hides the complexities of using these technologies. Developers can take advantage of Dependency Injection (DI), Aspect Oriented Programming (AOP), and Object-Relational Mapping (ORM) in their projects without having to manually set up a Spring or Hibernate environment or make any configurations."),a("p"),n("p"),o("Another benefit of using Service Builder is that it provides support for generating finder methods. Finder methods retrieve entity objects from the database based on specified parameters. It is only necessary to specify the kinds of finder methods to be generated in the "),n("strong"),o("service.xml"),a("strong"),o(" configuration file and Service Builder does the rest."),a("p"),n("p"),o("Beyond that, Service Builder also provides built-in caching support. Liferay caches objects at three levels: "),n("em"),o("entity"),a("em"),o(", "),n("em"),o("finder"),a("em"),o(", and "),n("em"),o("Hibernate"),a("em"),o(". By default, Liferay uses Ehcache as an underlying cache provider for each of these cache levels. However, this is configurable via portal properties."),a("p"),n("p"),o("Service Builder is a flexible tool. It automates many of the common tasks associated with creating database persistence code but it doesn’t prevent you from creating custom SQL queries or custom finder methods. Service Builder allows developers to define custom SQL queries in an XML file and to implement custom finder methods to run the queries. This could be useful, for example, for retrieving specific pieces of information from multiple tables via an SQL join. Service Builder also supports retrieving database information via dynamic query. Liferay’s dynamic query API leverages Hibernate’s criteria API."),a("p"),n("p"),o("In summary, Service Builder generates distinct model, persistence and service layers, local and remote services, Spring and Hibernate configurations, and related infrastructure without requiring any manual intervention by developers. It also allows basic SQL queries and finder methods to be generated and ones that filter results, taking Liferay’s permissions into account. Service Builder also provides support for entity and query caching. Finally, Service Builder is not a restrictive tool: it allows custom SQL queries and finder methods to be added and it also supports dynamic query."),a("p"),n("p"),o("More details, access "),n("a",null,null,"href","https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/service-builder"),o("dev.liferay"),a("a"),o("."),a("p"),a("article"),n("input",null,null,"type","hidden","value",e.page.title),a("input"),n("input",null,null,"type","hidden","value",e.site.title),a("input")};l(i.$$assignDefaults({content:s},e),null,r)}goog.module("qtGfa.incrementaldom");var i=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var r=goog.require("incrementaldom"),n=r.elementOpen,a=r.elementClose,o=(r.elementVoid,r.elementOpenStart,r.elementOpenEnd,r.text),l=(r.attr,u.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="qtGfa.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var p=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(c.default);u.default.register(p,s),t.qtGfa=p,t.templates=s,t.default=s}},[282]);