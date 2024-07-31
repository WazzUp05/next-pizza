import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Главная" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                categoryId={1}
                                title="Пиццы"
                                items={[
                                    {
                                        id: 0,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                ]}
                            />
                            <ProductsGroupList
                                categoryId={2}
                                title="Комбо"
                                items={[
                                    {
                                        id: 0,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF01FF6733959B9A68B4188AB4E654.avif',
                                        items: [
                                            {
                                                price: 550,
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
