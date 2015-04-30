var React=require("react");
var ResultList=require("./resultList.jsx");
var kde=require("ksana-database");
var kse=require("ksana-search");
var maincomponent = React.createClass({
  getInitialState:function() {
    return {excerpt:[],db:null};//realhits:[[1,1,0],[2,1,1],[6,1,2]],text:"abcdef"
  },
  componentWillMount: function(){
    kde.open("jiangkangyur",function(err,db){
      this.setState({db:db});
    },this);
  },
  dosearch: function(){
    if(this.state.db){
      var that=this;
      kse.search(this.state.db,"འཛེག བར དང",{realPos:true, nohighlight: true, phrase_sep:"།",
        range:{start:0,maxfile:5,maxhit:10}},function(err,data){//kde
          this.setState({excerpt:data.excerpt});
          console.log(data.excerpt);
      });      
      // var out=[{text:"abcdef",realHits:[[1,1,0],[2,1,1],[6,1,2]]},
      //          {text:"abcdef",realHits:[[2,1,0],[3,1,1],[6,1,2]]},
      //          {text:"abcdef",realHits:[[2,1,0],[3,1,2]]}];
      // this.setState({excerpt:out});

    }
  },
  render: function() {
    return <div>
      <button onClick={this.dosearch}>Search</button>
      <ResultList excerpt={this.state.excerpt} />

    </div>;
  }
});
module.exports=maincomponent;