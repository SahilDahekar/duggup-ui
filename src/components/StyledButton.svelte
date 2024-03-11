<script lang="ts">

    import { Button } from "$lib/components/ui/button" ;
    import { cn } from "$lib/utils.js";
    export let style : string;
    export let onClick : () => void;
</script>

<Button variant="outline" on:click={onClick} class={cn("shadow-custom border-[#4D4D4D] text-[#4D4D4D] font-normal rounded-sm pl-5 pr-6 py-2 duration-300 transition-all", style)}>
    <slot />
</Button>

