<script>
  import StyledButton from "./StyledButton.svelte";
  import * as Avatar from "$lib/components/ui/avatar";

  let logo = "/assests/duggupLogo.jpg";
  let profile = "/assests/profile.png";
  let link = "/assests/link-external.svg";
  let dot = "/assests/dot-horizontal.svg";

  let buttonText = "Follow";

  function handleClick() {
    buttonText = "Followed";
  }

</script>

<section class="flex items-center w-[75%] ml-36 mt-12 mb-5">
  <div class="w-[120px]">
    <Avatar.Root class="w-[120px] h-[120px]">
      <Avatar.Image src={profile} alt="Krishna Kiran photo" />
      <Avatar.Fallback>KK</Avatar.Fallback>
    </Avatar.Root>
    <h2 class="text-2xl text-customNeutralDark text-center font-bold">Krishna <br>Kiran</h2>
  </div>
  <div class="w-[85%] ml-14">
    <div class="flex items-center justify-between mb-5">
      <div class="max-w-[585px] flex flex-col text-sm">
        <p>
          Co-Founder and CEO at Duggup - Social network for people in tech.
          Ex-Amazon Head of Engineering. I write hot-takes on building a
          business, shipping delightful products and accelerating product and
          career growth.
        </p>
      </div>
      <div class="flex flex-col items-end">
        <Avatar.Root class="w-9 h-9 mb-2">
            <Avatar.Image src={logo} alt="Duggup Logo" />
            <Avatar.Fallback>DG</Avatar.Fallback>
        </Avatar.Root>
        <h3 class="font-bold">Duggup</h3>
        <p class="text-xs whitespace-nowrap text-customNeutralLight">Co-Founded and CEO</p>
      </div>
    </div>
    <div class="flex justify-between items-center">
        <div>
            <StyledButton onClick={handleClick} style="hover:bg-customBlue hover:border-customBlue hover:text-white active:bg-white active:text-customNeutralDark active:shadow-customActive hover:shadow-customHover active:border-2">
                {buttonText}
            </StyledButton>
        </div>
        <div class="flex items-center gap-4 text-[#4D4D4D]">
            <a href="/" class="flex items-center focus:outline-none focus:underline">My website <img class="ml-2" src={link} alt="link svg"></a>
            <img src={dot} alt="three horizontal dot">
        </div>
    </div>
  </div>
</section>
