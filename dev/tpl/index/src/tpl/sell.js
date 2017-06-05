this["templates"] = this["templates"] || {};
this["templates"]["sell"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li href=\""
    + alias4(((helper = (helper = helpers.itemLink || (depth0 != null ? depth0.itemLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemLink","hash":{},"data":data}) : helper)))
    + "\" class=\"flag\">\r\n        <a class=\"figure flag-item\" href=\""
    + alias4(((helper = (helper = helpers.itemLink || (depth0 != null ? depth0.itemLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemLink","hash":{},"data":data}) : helper)))
    + "\"> <img src=\""
    + alias4(((helper = (helper = helpers.imgSrc || (depth0 != null ? depth0.imgSrc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgSrc","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"> </a>\r\n        <div class=\"figcaption flag-item\">\r\n            <div class=\"flag-title\">\r\n                <a href=\""
    + alias4(((helper = (helper = helpers.itemLink || (depth0 != null ? depth0.itemLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemLink","hash":{},"data":data}) : helper)))
    + "\" title=\"\">"
    + alias4(((helper = (helper = helpers.poductName || (depth0 != null ? depth0.poductName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"poductName","hash":{},"data":data}) : helper)))
    + "</a>\r\n            </div>\r\n            <div class=\"flag-price\">\r\n                <span>双22价</span>\r\n                <strong>¥"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</strong>\r\n                <small>("
    + alias4(((helper = (helper = helpers.preferential || (depth0 != null ? depth0.preferential : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preferential","hash":{},"data":data}) : helper)))
    + ")</small>\r\n            </div>\r\n            <div class=\"flag-type\">\r\n                "
    + alias4(((helper = (helper = helpers.activityType || (depth0 != null ? depth0.activityType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"activityType","hash":{},"data":data}) : helper)))
    + "\r\n            </div>\r\n            <a class=\"flag-btn\" href=\""
    + alias4(((helper = (helper = helpers.shopLink || (depth0 != null ? depth0.shopLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shopLink","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.activeName || (depth0 != null ? depth0.activeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"activeName","hash":{},"data":data}) : helper)))
    + "</a>\r\n        </div>\r\n    </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});