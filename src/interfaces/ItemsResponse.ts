interface SimpleImage {
    url: string;
    width: number;
    height: number;
}
interface ImageContent {
    "Poster Art": SimpleImage;
}

export interface SimpleItem {
    title: string;
    description: string;
    programType: string;
    releaseYear: number;
    images: ImageContent;
}

export interface ItemsResponse {
    total: number;
    entries: SimpleItem[];
}