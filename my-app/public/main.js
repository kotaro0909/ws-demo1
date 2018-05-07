var MyComponent = React.createClass({
    displayName: 'my component',
    sel1Value: 'Windows',
    sel2Value: [],

    getInitialState: function() {
        return { msg: '' };
    },

    handleOnChangeSel1: function (event) {
        this.sel1Value = event.target.value;
    },

    handleOnChangeSel2: function (event) {
        var options = event.target.options;
        var values = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }
        this.sel2Value = values;
    },

    handleOnClick: function (event) {
      this.setState({
          msg: '状態：' + this.sel1Value + ' [' + this.sel2Value + ']'
      });
    },

    render: function() {
        return (
            <div>
                <p>{this.state.msg}</p>
                <div><select onChange={this.handleOnChangeSel1}>
                    <option>windows</option>
                    <option>macOs</option>
                    <option>linux</option>
                </select>
                </div>
                <div><select multiple size="3" onChange={this.handleOnChangeSel2}>
                    <option>android</option>
                    <option>ios</option>
                    <option>windowsPhone</option>
                </select>
                </div>
                <div>
                    <input type="button" value="click" onClick={this.handleOnClick}/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('msg')
);