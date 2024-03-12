<script lang="ts">
    export let variant : string = "default";
</script>

{#if variant == "large"}
    <div class="absolute grid place-items-center -left-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-customBlue">
        <div class="bg-white w-2 h-2 rounded-full"></div>
    </div>
{:else if variant == "default"}
    <div class="absolute grid place-items-center -left-[10px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-customBlue">
        <div class="bg-white w-[10px] h-[10px] rounded-full"></div>
    </div>
{/if}