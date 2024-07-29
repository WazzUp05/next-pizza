import { Categories, Container, Filters, SortPopup, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Главная" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductCard
                                id={0}
                                name="Чизбургер-пицца"
                                price={550}
                                imageUrl="https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
