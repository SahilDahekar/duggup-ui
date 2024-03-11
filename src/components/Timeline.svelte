<script lang="ts">
    import Card from "./Card.svelte";
    let logo = "/assests/duggupLogo.jpg";
    let betterUp = "/assests/betterUp.png";
    let chevronUp = "/assests/chevron-up.svg";
    let card1 = "/assests/card1.jpg";
    let card2 = "/assests/card2.jpeg";
    let card3 = "/assests/card3.jpg";
    let card4 = "/assests/card4.png";
</script>

<div class="w-[75%]">
    <div class="flex items-center">
        <div class="border-r-dotted p-6 ml-24">
            <p class="text-xs text-[#7A9299]">Dec 2023</p>
        </div>
        <div class="relative flex items-center gap-9 border-l-[3px] border-dotted border-[#7A9299] p-6">
            <Card img={card1} description="No amount of technology can convert a bad story into a good story." />
            <Card img={card2} description="Most people don't have original ideas. Here is how Sam Altman pushes himself to have.." />
            <div class="absolute grid place-items-center -left-[10px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500">
                <div class="bg-white w-2 h-2 rounded-full"></div>
            </div>
        </div>
    </div>
    <div class="flex">
        <div class="flex flex-col items-end p-6 ml-[18px]">
            <img class="w-12 h-12 object-cover rounded-full mb-2" src={logo} alt="">
            <h4 class="font-bold">Druggup</h4>
            <p class="text-xs text-right text-[#7A9299]">San Fransisco Bay Area<br>Joined<br>Nov 2023</p>
        </div>
        <div class="relative p-6 w-[75%] flex items-center border-l-[3px] border-dotted border-[#7A9299]">
            <div class="p-6 shadow rounded-xl w-full">
                <h4 class="text-xl font-bold">Co-Founder and CEO</h4>
                <p class="text-xs text-[#7A9299]">Full-time · Remote</p>
            </div>
            <div class="absolute grid place-items-center -left-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-blue-500">
                <div class="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <img class="absolute top-0 -left-[17px]" src={chevronUp} alt="chevron up svg">
        </div>
    </div>
    <div class="flex items-center">
        <div class="border-r-dotted p-6 ml-24">
            <p class="text-xs text-[#7A9299]">Dec 2023</p>
        </div>
        <div class="relative flex items-center gap-9 border-l-[3px] border-dotted border-[#7A9299] p-6">
            <Card img={card3} description={"Startup Lesson I am reflecting. Don't build for the \"average person\"."} />
            <Card img={card4} description="Your biggest regrets at 80 will be acts of omission." />
            <div class="absolute grid place-items-center -left-[10px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500">
                <div class="bg-white w-2 h-2 rounded-full"></div>
            </div>
        </div>
    </div>
    <div class="flex">
        <div class="flex flex-col items-end p-6 ml-[18px]">
            <img class="w-12 h-12 object-cover rounded-full mb-2" src={betterUp} alt="">
            <h4 class="font-bold">Better Up</h4>
            <p class="text-xs text-right text-[#7A9299]">San Fransisco Bay Area<br>Joined<br>Sept 2022</p>
        </div>
        <div class="relative p-6 w-[75%] flex items-center border-l-[3px] border-dotted border-[#7A9299]">
            <div class="p-6 shadow rounded-xl w-full">
                <h4 class="text-xl font-bold">VP Engineering</h4>
                <p class="text-xs text-[#7A9299]">Full-time</p>
            </div>
            <div class="absolute grid place-items-center -left-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-blue-500">
                <div class="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <img class="absolute top-0 -left-[17px]" src={chevronUp} alt="chevron up svg">
        </div>
    </div>
</div>