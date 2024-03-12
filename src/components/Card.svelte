<script lang="ts">
    export let description : string = "";
    export let img : string = "";
</script>

<div class="flex flex-col w-[344px] h-[226px] rounded-xl shadow" role="img" aria-label={description}>
    <img class="w-full h-[136px] object-cover rounded-t-xl" src={img} alt={description}>
    <p class="p-6 text-sm">{description}</p>
</div>