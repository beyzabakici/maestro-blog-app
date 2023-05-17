export interface MainResponseType {
  totalCount: number
  result: BlogResponseType[]
  message: any
  success: boolean
  exception: any
}

export interface BlogResponseType {
  postId: number
  userId: number
  totalReadingTime: number
  postType: number
  banner: string
  image: string
  imageAlt?: string
  order: number
  title: string
  summary: string
  content: string
  tag: number
  lang: number
  url: string
  metaTitle: string
  metaKeywords: string
  metaDescription: string
  isFirstPost: boolean
  createdAt: string
  modifiedAt: string
  createdBy: number
  modifiedBy: number
  isRemoved: boolean
  author: any
  users: UserType
}

export interface UserType {
  userId: number
  email: string
  name: string
  surname: string
  password: any
  roleId: number
  avatar: string
  isRemoved: boolean
  createdAt: string
  createdBy: number
  modifiedAt: any
  modifiedBy: any
  role: any
}
