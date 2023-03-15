// Object
const obj: {name: string, age?: number, hometown: string} = {
    name: "Bình",
    age: 20,
    hometown: "Hà Nội"
}

// Interface
interface Book {
    authors: {id: number, name: string, slug:string}[],
    book_cover: string,
    categories: {id: number, name: string, is_leaf: boolean},
    current_seller: Seller[],
    description: string,
    image : Image[],
    list_price: number,
    name: string,
    original_price: number,
    quantity_sold: Sold[],
    rating_average: number,
    short_description: string,
    specifications: Spec[],
    id: number
}


interface Spec {
    name:string,
    attributes: Atri[]
}

type Atri = {
    code:string,
    name:string,
    value:string
}

type Sold = {
    text: string,
    value: number
}

interface Image {
    base_url: string,
    is_gallery: boolean,
    label: null,
    large_url: string,
    medium_url: string,
    position: null,
    small_url: string,
    thumbnail_ur: string
}

interface Seller {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
    product_id: string,
    store_id: number,
    is_best_store: boolean,
    is_offline_installment_supported?: string
}

let book: Book;

console.log(book);


let book2: Book;

let seller: Seller;

let image : Image;

let spec : Spec;