var React=require("react");
var kse=require("ksana-search");
var ResultItem=require("./resultItem.jsx");

var resultList = React.createClass({
  getInitialState:function() {
    return {};
  },
  renderResItem: function(item){
    return <div>
      <ResultItem text={item.text} realHits={item.realHits} segname={item.segname}/>
      <br></br>
    </div>
  },
  render: function() {
    var items=this.props.excerpt.map(this.renderResItem);

    return <div>{items}
    </div>;
  }
});
module.exports=resultList;