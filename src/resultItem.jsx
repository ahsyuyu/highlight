var React=require("react");
var highlight=require("./highlight.js");

var ResultItem = React.createClass({
  getInitialState:function() {
    return {};
  },
  renderText: function(item){
    if(!item) return <div className="inline"></div>
    return (
      <div className="inline">
        <span className={"hl"+item[0]}>{item[1]}</span>
      </div>
    )
  },
  render: function() {
    var hlTextArr=highlight(this.props.text,this.props.realHits);
    if(hlTextArr) var hlText=hlTextArr.map(this.renderText);
    return <div>
      {this.props.segname}
      {hlText}
    </div>;
  }
});
module.exports=ResultItem;