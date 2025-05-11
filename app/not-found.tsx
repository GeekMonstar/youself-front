import Link from 'next/link';
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">404 - Page introuvable</h1>
        <p className="mt-4 text-lg">Dosolé, cette page n&apos;existe pas ou plus.</p>
        <Link href="/" className="mt-6 text-blue-500 hover:underline">Aller à la page d&apos;accueil</Link>
        </div>
    );
}