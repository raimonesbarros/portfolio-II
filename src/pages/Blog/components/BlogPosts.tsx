/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactMarkdown from 'react-markdown'
import { IssueType } from '..'
import { BlogPostsContainer } from './BlogPosts.styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface BlogPostProps extends IssueType {
  id: number | undefined
  onPostViewer: (postNumber: number | undefined) => void
  createdAt?: string
}

export function BlogPosts({
  id,
  title,
  createdAt,
  body,
  onPostViewer,
}: BlogPostProps) {
  return (
    <BlogPostsContainer onClick={() => onPostViewer(id)}>
      <div>
        <h1>{title}</h1>
        <span>
          {formatDistanceToNow(new Date(createdAt!), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <span>
        <ReactMarkdown>{body}</ReactMarkdown>
      </span>
    </BlogPostsContainer>
  )
}
