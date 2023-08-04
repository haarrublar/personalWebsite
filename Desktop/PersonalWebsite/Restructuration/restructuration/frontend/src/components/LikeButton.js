'use strict';
 
 const e = React.createElement;
 
 class LikeButton extends React.Component {
   constructor(props) {
     super(props);
     this.state = { liked: false };
   }
 
   render() {
     if (this.state.liked) {
       return 'You liked this.';
     }
 
     return (
       <button onClick={() => this.setState({ liked: true })}>
         Like
       </button>
     );
   }
 }
 
 const domContainer = document.querySelector('#like_button_container');
 ReactDOM.render(<LikeButton />, domContainer);



// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import RemarkMathPlugin from 'remark-math';
// import { InlineMath, BlockMath } from 'react-katex';

// const _mapProps = (props) => ({
//   ...props,
//   escapeHtml: false,
//   plugins: [RemarkMathPlugin],
//   renderers: {
//     ...props.renderers,
//     math: ({ value }) => <BlockMath>{value}</BlockMath>,
//     inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
//   }
// });

// const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;

// const MarkdownComponent = ({ containerId }) => {
//   const markdownContent = `
//   # This is a Markdown Heading

//   You can include inline math using $$...$$ like this: $$E=mc^2$$.

//   Or display math using $$$...$$$ like this:

//   $$$
//   \\int_0^1 x^2 dx
//   $$$
//   `;

//   const container = document.getElementById(containerId);
//   if (container) {
//     ReactDOM.render(<Markdown source={markdownContent} />, container);
//   }

//   return null;
// };

// export default MarkdownComponent;
