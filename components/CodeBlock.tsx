import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Components from '@/constants/Components';

const CodeBlock = () => {
    const { code } = Components[0];
  return (
    <div className='w-full text-[13px]'>
    <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{padding: "25px", textIndent: "0"}} wrapLongLines={true} showInlineLineNumbers={true} wrapLines={true}>
      {code}
    </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock;