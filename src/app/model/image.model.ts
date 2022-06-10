export class Image {
    constructor(
        public id: number,
        public createAt: string,
        public description: string,
        public totalLikes: number,
        public url: string,
        public userName: string,
        public totalDownloads: number,
        public tags: string[]
    ){}
}