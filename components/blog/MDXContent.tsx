import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

export default function MDXContent({ content }: { content: string }) {
  return (
    <div className="prose-creality">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {content.replace(/\\n/g, '\n')}
      </ReactMarkdown>
    </div>
  )
}
