<script lang="ts">
  import Dialog from './lib/Modal.svelte';
  import LeftBar from './lib/LeftBar.svelte';
  import List from './lib/List.svelte';
  import Input from './lib/Input.svelte';

  let ths: Array<string> = ["test1", "test2", "test3", "test4", "test5", "test6", "test7"];

  // You can write simple text or HTML element
  let tds: Array<string> = ["test1", "test2", "test3", "test4", "test5", "test6", `<button>Prova</button>`];

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

<main>

  <LeftBar logoAlt="This is the logo" logo="logo.jpg" logoHeight=120 logoWidth=138 submenus={submenus}></LeftBar>
  <List title="A simple list" cols={ths} rows={tds}></List>
  <Dialog btnName="Modal" modalName="Simple Svelte Modal">
    <p>HTML is here!</p>
  </Dialog>
  <br/>
  <br/>
  LeftBar
  <Input title="Test Input" placeholder="Input placeholder"></Input>

</main>

<style>

</style>
