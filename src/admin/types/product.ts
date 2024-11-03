 export type ImageType = {
    secure_url: string;
     public_id: string
}

 export interface CreateProduct {
    name: string;
    description: string;
    price: string;
    category: string;
    image: ImageType | null;
    subImage: ImageType[];
}
