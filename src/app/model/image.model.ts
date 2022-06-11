export interface Image {
    id: string,
    created_at: string,
    description: string,
    alt_description: string,
    likes: number,
    urls: URLS,
    user: User,
    downloads: number,
    tags: Tag[]
}

export interface URLS {
    raw: string,
    regular: string,
}

export interface User {
    name: string,
}

export interface Tag {
    title: string,
}