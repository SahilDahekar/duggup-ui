<script>
  import StyledButton from "./StyledButton.svelte";

  let logo = "/assests/duggupLogo.jpg";
  let profile = "/assests/profile2.png";
  let link = "/assests/link-external.svg";
  let dot = "/assests/dot-horizontal.svg";

  let buttonText = "Follow";

  function handleClick() {
    buttonText = "Followed";
  }

</script>

<section class="flex items-center w-[75%] ml-36 mt-12 mb-5">
  <div class="w-[120px]">
    <img class="w-[120px] h-[120px] object-cover mx-auto" src={profile} alt="profile pic" />
    <h2 class="text-2xl text-[#4D4D4D] text-center font-bold">Krishna <br>Kiran</h2>
  </div>
  <div class="w-[85%] ml-14">
    <div class="flex items-center justify-between mb-5">
      <div class="max-w-[668px] flex flex-col">
        <p>
          Co-Founder and CEO at Duggup - Social network for people in tech.
          Ex-Amazon Head of Engineering. I write hot-takes on building a
          business, shipping delightful products and accelerating product and
          career growth.
        </p>
      </div>
      <div class="flex flex-col items-end">
        <img
            class="rounded-full w-9 h-9 object-cover mb-2"
            src={logo}
            alt="duggup logo"
        />
        <h3 class="font-bold">Duggup</h3>
        <p class="text-xs whitespace-nowrap text-[#7A9299]">Co-Founded and CEO</p>
      </div>
    </div>
    <div class="flex justify-between items-center">
        <div>
            <StyledButton onClick={handleClick} style="hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white active:bg-white active:text-[#4D4D4D] active:shadow-customActive hover:shadow-customHover active:border-2">
                {buttonText}
            </StyledButton>
        </div>
        <div class="flex items-center gap-4 text-[#4D4D4D]">
            <a href="/" class="flex items-center">My website <img class="ml-2" src={link} alt=""></a>
            <img src={dot} alt="">
        </div>
    </div>
  </div>
</section>
