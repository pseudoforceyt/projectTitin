<body>
  <script>
    import { onMount } from "svelte";
    import { classList } from "daisyui";
  
    export let isOpen = false;
    export let menuClasses = "";
  
    const toggle = () => {
      isOpen = !isOpen;
    };
  
    onMount(() => {
      menuClasses = classList({
        "navbar-menu": true,
        "block": isOpen,
        "hidden": !isOpen,
      });
    });
  
    $: {
      menuClasses = classList({
        "navbar-menu": true,
        "block": isOpen,
        "hidden": !isOpen,
      });
    }
  </script>
  <div>>
    <nav class="navbar bg-primary">
      <div class="navbar-brand">
        <a href="#" class="navbar-item text-2xl font-bold text-white">
          projectTitin
        </a>
        <a href="#" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" on:click={toggle}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class={menuClasses}>
        <div class="navbar-start">
          <a href="/" class="navbar-item">
            Home
          </a>
          <a href="#" class="navbar-item">
            About
          </a>
          <a href="https://youtube.com/@pseudoforceyt" class="navbar-item">
            YouTube
          </a>
        </div>
        <div class="navbar-end">
          <a href="#" class="navbar-item">
            Themes (coming soon!)
          </a>
        </div>
      </div>
    </nav>
  </div>
  <div class="content-center">
    <!-- The button to open modal -->
    <label for="my-modal-6" class="btn">What in the cinnamon toast ken is this?</label>
    
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Abput projectTitin</h3>
        <p class="py-4">This website (webapp) aims to provide completely free Physics, Chemistry and Maths interactive and immersive notes related to JEE syllabus.</p>
        <div class="modal-action">
          <label for="my-modal-6" class="btn">Okay</label>
        </div>
      </div>
    </div>
  </div>
</body>
