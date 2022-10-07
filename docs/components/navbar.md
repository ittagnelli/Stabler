---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
# Navbar component

Navbar of Stabler is of 2 types: Left or Right

Left Usage: 

```js
<script lang="ts">
  import LeftBar from './lib/LeftBar.svelte';
  let submenus: Array<SubMenu> = [{
    submenus: [
      {
        submenus: [],
        title: "Submenu 1",
        href: "/index"
      }
    ],
    title: "Submenu 1",
    href: "/index"
  }]

</script>

<Leftbar logoAlt="This is the logo" logo="logo.jpg" logoHeight=120 logoWidth=138 submenus={submenus}>
    <svg></svg>
</Leftbar>

```

So our Leftbar require a Logo image, an alt text for our logo, the dimensions of logo and an array of interface called SubMenu.
<br/>
In submenu we can put an another array of submenus, the title and the href of submenu.
<br/>
Inside the Leftbar component we can put an icon 
