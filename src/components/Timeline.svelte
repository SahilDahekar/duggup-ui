<script lang="ts">
    import TimelineEntry from "./TimelineEntry.svelte";

    import type { TimelineEntryData } from "$lib/types.ts";

    let timelineEntries : TimelineEntryData[] = [
        {
            id : 1,
            date : "Dec 2023",
            cards : [
                {
                    img : "/assests/card1.jpg",
                    description : "No amount of technology can convert a bad story into a good story."
                },
                {
                    img : "/assests/card2.jpeg",
                    description : "Most people don't have original ideas. Here is how Sam Altman pushes himself to have..."
                },
            ],
            company : "Duggup",
            companyLogo : "/assests/duggupLogo.jpg",
            location : "San Fransisco Bay Area",
            joinedDate : "Nov 2023",
            role : "Co-Founder and CEO",
            jobStatus : "Full-time · Remote"
        },
        {
            id : 2,
            date : "Dec 2023",
            cards : [
                {
                    img : "/assests/card3.jpg",
                    description : "Startup Lesson I am reflecting. Don't build for the \"average person\"."
                },
                {
                    img : "/assests/card4.png",
                    description : "Your biggest regrets at 80 will be acts of omission."
                },
            ],
            company : "BetterUp",
            companyLogo : "/assests/betterUp.png",
            location : "San Fransisco Bay Area",
            joinedDate : "Sept 2022",
            role : "VP Engineering",
            jobStatus : "Full-time"
        }
    ];
</script>

<div class="w-[75%]">
    {#each timelineEntries as entry (entry.id)}
        <TimelineEntry entry={entry} />
    {/each}
</div>