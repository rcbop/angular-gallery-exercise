export interface Image {
    id: number,
    created_at: string,
    description: string,
    alt_description: string,
    total_likes: number,
    urls: URLS,
    user: User,
    totalDownloads: number,
    tags: string[]
}

export interface URLS {
    raw: string,
}

export interface User {
    name: string,
}