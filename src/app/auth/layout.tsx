

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex justify-center ">
            <div className="w-full sm:w-96 px-10">

            { children }
            </div>
        </main>
    );
}