<script lang="ts">
  import Card from "./Card.svelte";
  import Pointer from "./Pointer.svelte";
  import * as Avatar from "$lib/components/ui/avatar";
  import type { TimelineEntryData } from "$lib/types.ts";

  export let entry : TimelineEntryData;
  
  let chevronUp = "/assests/chevron-up.svg";
</script>

<article class="flex items-center">
    <div class="border-r-dotted p-6 ml-24">
        <p class="text-xs text-customNeutralLight whitespace-nowrap">{entry.date}</p>
    </div>
    <div role="region" aria-label="Timeline Entry" class="relative border-l-[3.5px] border-dotted border-customNeutralLight pl-5">
        <div class="flex items-center gap-9 p-6">
            {#each entry.cards as card (card.img)}
                <Card img={card.img} description={card.description} />
            {/each}
        </div>
        <Pointer />
    </div>
</article>
<article class="flex mb-1">
    <div class="flex flex-col items-end p-6 ml-[18px]">
        <Avatar.Root class="w-12 h-12 mb-2">
            <Avatar.Image src={entry.companyLogo} alt={`${entry.company} logo`} />
            <Avatar.Fallback>NA</Avatar.Fallback>
        </Avatar.Root>
        <h4 aria-level="2" class="font-bold">{entry.company}</h4>
        <p class="text-xs text-right text-customNeutralLight whitespace-nowrap">{entry.location}<br>Joined<br>{entry.joinedDate}</p>
    </div>
    <div role="region" aria-label="Job Details" class="relative w-full border-l-[3.5px] border-dotted border-customNeutralLight">
        <div class="flex items-center h-full justify-stretch ml-5 p-6">
            <div class="p-6 shadow rounded-xl w-full  max-w-[713px]">
                <h4 aria-level="3" class="text-xl font-bold">{entry.role}</h4>
                <p class="text-xs text-customNeutralLight">{entry.jobStatus}</p>
            </div>
        </div>
        <Pointer variant="large" />
        <img class="absolute top-0 -left-[17.5px]" src={chevronUp} alt="chevron up svg">
    </div>
</article>