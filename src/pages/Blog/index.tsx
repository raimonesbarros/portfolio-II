import { useEffect, useState } from 'react'
import { BlogPosts } from './components/BlogPosts'
import { BlogContainer, BlogInfo, FormContainer, PostContainer } from './styles'
import { api } from '../../fetch/axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { EmptyBlog } from './components/EmptyBlog'

export interface UserType {
  name: string
  avatar_url: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

export interface IssueType {
  number?: number
  title: string
  created_at?: string
  body: string
}

interface IssueInfoType {
  total_count: number
  items: IssueType[]
}

export function Blog() {
  const [issues, setIssues] = useState<IssueInfoType>(Object)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm()

  async function fetchIssues(query = '') {
    const response = await api.get(`/search/issues`, {
      params: {
        q: `repo:raimonesbarros/github-blog ${query}`,
        _sort: 'created_at',
        _order: 'desc',
      },
    })

    setIssues(response.data)
  }

  function handleNewSearch(data: { search?: string }) {
    fetchIssues(data.search)
    reset()
  }

  function handlePostVostViewer(postNumber: number | undefined) {
    navigate(`/blog/post/${postNumber}`)
  }

  useEffect(() => {
    fetchIssues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BlogContainer>
      <BlogInfo>
        <p>Publicações</p>
        <span>
          {issues.total_count &&
            (issues.total_count <= 1
              ? issues.total_count
              : issues.total_count)}{' '}
          publicações
        </span>
      </BlogInfo>
      <FormContainer onSubmit={handleSubmit(handleNewSearch)}>
        <input
          type="text"
          id="search"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />
        <button type="submit" disabled={isSubmitting}></button>
      </FormContainer>
      <PostContainer>
        {issues.items && issues.items.length > 0 ? (
          issues.items.map((issue) => (
            <BlogPosts
              key={issue.number}
              id={issue.number}
              title={issue.title}
              createdAt={issue.created_at}
              body={issue.body}
              onPostViewer={handlePostVostViewer}
            />
          ))
        ) : (
          <EmptyBlog />
        )}
      </PostContainer>
    </BlogContainer>
  )
}
