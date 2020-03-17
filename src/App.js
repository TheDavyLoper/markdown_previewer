import React, { Component } from "react";
import "./App.css";
let marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  const placeholder = `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React](https://goo.gl/Umyytc)

  `;
    this.setState({
      text: placeholder
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="container App">
        <h3 className="text-center">MARKDOWN PREVIEWER</h3>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <h3 className="text-center">Markdown</h3>
            <textarea
              id="editor"
              value={this.state.text}
              onChange={this.handleChange}
              className="mt-2 p-5"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <h3 className="text-center">Previewer</h3>
            <div
              className="preview mt-3 p-5"
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
