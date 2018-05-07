var MyComponent = React.createClass({
    getInitialState: function() {
        return { data: ['first item'] };
    },

    handleOnChange: function(event) {
      this.inputValue = event.target.value;
    },

    handleAddItem: function() {
      var arr = this.state.data.concat(this.inputValue);
      this.setState({data: arr});
    },

    render: function() {
        var items = this.state.data.map(function(item, i) {
            return (
                <option key={'key_' + i}>{i + ':' + item}</option>
            );
        }.bind(this));

        return (
          <div>
              <select size="5">{items}</select>
              <div>
                  <input type="text" onChange={this.handleOnChange}/>
                  <input type="button" value="click" onClick={this.handleAddItem}></input>
              </div>
          </div>
        );
    }
});

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('msg')
);