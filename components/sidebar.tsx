"use client"
import { usePathname } from "next/navigation";
import { BookOpen, CirclePlus, House, MessageCircle, Settings, UtensilsCrossed } from "lucide-react";
import { NavLink } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import Avatar from "./ui/avatar";


export default function Sidebar() {
    const pathname = usePathname();
    const {data: session} = authClient.useSession();
    return (
        <aside className={`w-72 max-lg:w-fit p-5 h-screen flex flex-col gap-5 bg-white border-r border-zinc-200 flex ${(pathname === "/auth" || pathname === "/auth/login" || pathname === "/auth/register") ? "hidden" : "block"}`}>
            <div className="flex max-lg:justify-center items-center gap-2">
                <div className="w-6 h-6 bg-[var(--primary)] rounded"></div>
                <p className="text-[var(--primary)] text-2xl font-regular max-lg:hidden">Kitch<span className="font-semibold">In</span></p>
            </div>
            <nav className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <p className="text-zinc-500 font-semibold max-lg:hidden">Menu principal</p>
                    <ul>
                        <li>
                            <NavLink href="/"><House className="size-6 fill-prima" /><span className="max-lg:hidden">Accueil</span></NavLink>
                        </li>
                        <li>
                            <NavLink href="/recipes"><UtensilsCrossed className="h-6 w-6"/><span className="max-lg:hidden">Recettes</span></NavLink>
                        </li>
                        <li>
                            <NavLink href="/messages"><MessageCircle className="h-6 w-6" /><span className="max-lg:hidden">Messages</span></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-zinc-500 font-semibold max-lg:hidden">Créer</p>
                    <ul>
                        <li>
                            <NavLink href="/posts/new" ><CirclePlus className="h-6 w-6"/><span className="max-lg:hidden">Nouveau post</span></NavLink>
                        </li>
                        <li>
                            <NavLink href="/recipes/new"><UtensilsCrossed className="h-6 w-6"/><span className="max-lg:hidden">Nouvelle recette</span></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-zinc-500 font-semibold max-lg:hidden">Compte</p>
                    <ul>
                        <li>
                            <NavLink href="/profile" >{(session && session.user && session.user.image) ? <><Avatar src={session.user.image} alt={session.user.name} size="w-6 h-6"/><span className="max-lg:hidden">{session.user.name}</span></>: <></>}</NavLink>
                        </li>
                        <li>
                            <NavLink href="/profile/recipes"><BookOpen className="h-6 w-6"/><span className="max-lg:hidden">Mes recettes</span></NavLink>
                        </li>
                        <li>
                            <NavLink href="/settings"><Settings className="h-6 w-6"/><span className="max-lg:hidden">Paramètres</span></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}