<script>
    import { onMount } from 'svelte'
    import dayjs from 'dayjs'
  
    export let format = 'YYYY-MM-DD'
    export let date = new Date()
      
    let internal
  
    const input = (x) => (internal = dayjs(x).format(format))
    const output = (x) => (date = dayjs(x, format).toDate())
  
    $: input(date)
    $: output(internal)
  </script>
  
  <input class="bg-red text-white" type="date" bind:value={internal} />
