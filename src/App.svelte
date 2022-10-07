<script lang="ts">
  import LeftBar from './lib/LeftBar.svelte';
  import List from './lib/List.svelte';

  let ths: Array<string> = ["test1", "test2", "test3", "test4", "test5", "test6", "test7"];

  // You can write simple text or HTML element
  let tds: Array<string> = ["test1", "test2", "test3", "test4", "test5", "test6", "<button>test button</button>"];

  let submenus: Array<SubMenu> = [{
    submenus: [
      {
        submenus: [],
        title: "Submenu 1",
        icon: "",
        href: "/index"
      }
    ],
    title: "Submenu 1",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>',
    href: "/index"
  }]
</script>

<main>

  <LeftBar logoAlt="This is the logo" logo="logo.jpg" logoHeight=120 logoWidth=138 submenus={submenus}></LeftBar>
  <List title="A simple list" cols={ths} rows={tds}></List>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
