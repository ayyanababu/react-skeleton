var React = require('react');
var listitem = require('./ListItem.jsx'); //non npm modules we have to give path

var ingredients = [{"id":1, "text":"ham"},{"id":2, "text":"cheese"},{"id":3, "text":"potatoes"}];
var List = React.createClass({
    render: function(){
      var listItems = ingredients.map(function(item){
        return <listitem key={item.id} ingredient={item.text} />;
      });

      return(<ul>{listItems}</ul>);
    }
});

module.exports = List;
