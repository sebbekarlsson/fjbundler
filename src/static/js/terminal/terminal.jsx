import style from './style.css';


export function TerminalBase (state) {
  return <div style={style}>
    $ { state.text } 
  </div>;
};

export function Terminal () {
  let texts = ["fjb index.js", "fjb index.jsx", "fjb index.ts", "fjb index.tsx"]
  let terminalState = {
    texts: texts,
    text: texts[0],
    index: 0
  };
  setInterval(function(){
    terminalState.index = terminalState.index >= texts.length-1 ? 0 : terminalState.index + 1;
    terminalState.text = terminalState.texts[terminalState.index];
    this.ref.innerHTML = '$ ' + terminalState.text;
  }, 500);
  return <TerminalBase state={terminalState} />
}
