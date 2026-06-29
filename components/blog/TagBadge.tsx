export default function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ background: 'rgba(69,132,171,0.15)', color: '#4584ab', border: '1px solid rgba(69,132,171,0.25)' }}>
      {tag}
    </span>
  )
}
