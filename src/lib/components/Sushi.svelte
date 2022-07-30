<script>
    export let sushi;
  
    import AddItem from '$lib/components/homepage/AddItem.svelte';
  </script>
  
  <div class="item">
    <h2>{ sushi }</h2>
    <AddItem sushi={sushi}/>
  </div>