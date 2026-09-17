import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";


export default function Home() {
    const products = getProducts();
    return (
        <div className="page">Home Page
            <div className="home-h">
                <h1 className="home-title">Welcome to Cartify</h1>
                <p className="home-subtitle">Discover products at great prices</p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>

        </div>
    )
}