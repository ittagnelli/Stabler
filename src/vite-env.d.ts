/// <reference types="svelte" />
/// <reference types="vite/client" />

declare interface SubMenu{
    submenus: Array<SubMenu>,
    title: string
    icon: string,
    href: string
}