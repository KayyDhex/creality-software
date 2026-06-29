import { supabase } from '@/lib/supabase'

export type Post = {
  id: string
  slug: string
  title: string
  excerpt: string | null
  content?: string | null
  cover_image: string | null
  author: string
  tags: string[]
  reading_time: number | null
  published_at: string | null
  created_at?: string
}

export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('id, slug, title, excerpt, cover_image, author, tags, reading_time, published_at, created_at')
    .eq('published', true)
    .order('published_at', { ascending: false })
  if (error) return []
  return data ?? []
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()
  if (error) return null
  return data
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('id, slug, title, excerpt, cover_image, author, tags, reading_time, published_at')
    .eq('published', true)
    .contains('tags', [tag])
    .order('published_at', { ascending: false })
  if (error) return []
  return data ?? []
}
