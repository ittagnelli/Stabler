/// <reference types="svelte" />
/// <reference types="vite/client" />

declare interface SubMenu{
    submenus: Array<SubMenu>,
    title: string
    href: string
}