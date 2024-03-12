<script>
  import StyledButton from "./StyledButton.svelte";
  import * as Avatar from "$lib/components/ui/avatar";

  let logo = "/assests/duggupLogo.jpg";
  let chevronDown = "/assests/chevron-down.svg";
  let post = "/assests/post.svg";
  let learn = "/assests/learn.svg";
  let home = "/assests/home.svg";
  let explore = "/assests/explore.svg";
  let profile = "/assests/profile.png";

</script>

<nav class="flex justify-between items-center py-3 border-b-2 border-dotted text-customNeutralDark">
    <div class="flex items-center gap-1">
        <img class="w-[27px] h-[27px] rounded-lg object-cover" src={logo} alt="duggup logo">
        <h1 class="font-semibold text-xl text-black">
            duggup
        </h1>
    </div>
    <div class="flex items-center gap-10">
        <ul class="flex">
            <li class="flex items-center py-2 pl-5 pr-6"><img class="mr-2" src={home} alt="home logo"> Home</li>
            <li class="flex items-center py-2 pl-5 pr-6"><img class="mr-2" src={explore} alt="explore logo"> Explore</li>
            <li class="flex items-center py-2 pl-5 pr-6"><img class="mr-2" src={learn} alt="learn logo"> Learn</li>
        </ul>
        <StyledButton>
            <img class="mr-3" src={post} alt="post logo"> Post
        </StyledButton>
        <div class="flex items-center gap-3 px-4">
            <Avatar.Root class="border-customNeutralDark border-[1px] w-12 h-12">
                <Avatar.Image src={profile} alt="Krishna Kiran photo" />
                <Avatar.Fallback>KK</Avatar.Fallback>
            </Avatar.Root>
            <p class="flex items-center">Krishna Kiran <span><img class="ml-3" src={chevronDown} alt="chevron down"></span></p>
        </div>
    </div>
</nav>