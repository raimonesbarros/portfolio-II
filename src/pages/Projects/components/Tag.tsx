import { TagContent } from './Tag.styles'

interface TagProps {
  content: string
}

export function Tag({ content }: TagProps) {
  return <TagContent variant={content}>{content}</TagContent>
}
