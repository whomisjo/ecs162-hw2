<script lang="ts">
  import { onMount } from 'svelte';

  let currentDate: string = '';

  onMount(() => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const today = new Date();
    currentDate = today.toLocaleDateString('en-US', options);
  });
</script>

<main>
  <header>
    <img src="/nyt-logo.png" alt="The New York Times Logo" class="logo" />
    <div class="date">
      <p>{currentDate}</p>
      <p>Today’s Paper</p>
    </div>
  </header>

  <div class="grid-container">
    <div class="story story1">
      <img src="/image1.jpg" alt="News image" class="story-img" />
      <h2>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi vulputate fermentum convallis. Curabitur nec dignissim lorem. Suspendisse potenti.</p>
    </div>

    <div class="story story2">
      <h1>Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</h1>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Integer dapibus nisi non lorem aliquam, ac convallis libero convallis. Nulla facilisi. Donec vel ultrices ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi vulputate fermentum convallis. Curabitur nec dignissim lorem.Suspendisse potenti.</p>
      <p>Sed porttitor eu erat sodales scelerisque. Praesent blandit, elit ut tincidunt laoreet, nibh est euismod lectus, id pharetra leo lectus eget elit. Sed sapien odio, cursus et odio vel, dictum dictum justo. Integer vitae turpis in ex sodales accumsan at sed felis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
    </div>

    <div class="story story3">
      <img src="/image2.jpeg" alt="News image" class="story-img" />
      <h2>Curabitur Euismod Vehicula Turpis Nec Gravida Nulla Vestibulum Sed</h2>
      <p>Curabitur euismod vehicula turpis, nec gravida nulla vestibulum sed. Fusce at gravida magna. Proin accumsan arcu eu massa fermentum, in congue nisl imperdiet. Integer sollicitudin libero ac odio volutpat egestas.</p>
    </div>

    <div class="story story4">
      <h2>Fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</h2>
      <p>Sed porttitor eu erat sodales scelerisque. Praesent blandit, elit ut tincidunt laoreet, nibh est euismod lectus, id pharetra leo lectus eget elit. Sed sapien odio, cursus et odio vel, dictum dictum justo. Integer vitae turpis in ex sodales accumsan at sed felis. Phasellus dictum justo luctus risus gravida, sed mollis turpis efficitur. Praesent convallis dui ac odio gravida, a fermentum nisl malesuada. Quisque nec velit non erat tincidunt cursus sed nec ex. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus.</p>
    </div>

    <div class="story story5">
      <img src="/image3.jpg" alt="News image" class="story-img" />
      <h1>Maecenas Venenatis Eget Felis Sit Amet Dapibus Cras Eget</h1>
      <p>Curabitur euismod vehicula turpis. Sed porttitor eu erat sodales scelerisque. Iaculis massa nisl malesuada lacinia integer nunc posuere. Maecenas nibh est euismod lectusvelit orci porttitor mi venenatis eget felis sit amet dapibus. Cras eget justo nec ipsum tristique ultrices. Sed sed justo vitae nunc tincidunt euismod at id sapien. Vivamus elementum lacus vitae suscipit placerat.</p>
    </div>

    <div class="story story6">
      <h2>Aliquam Ac Ultrices Elit Nec Suscipit Elit Sed Porta Libero Ac Feugias? Iaculis massa nisl malesuada lacinia integer nunc posuere.</h2>
      <p>Curabitur vestibulum, lacus eget pharetra ultricies, velit orci porttitor mi, sit amet pellentesque enim tortor nec urna. Sed sit amet massa vel elit tincidunt porta. Integer maximus vulputate velit eu hendrerit. Curabitur dolor libero, porttitor eget nulla maximus, consectetur eleifend est. Donec scelerisque tellus ante, semper congue magna tincidunt a. Praesent auctor viverra tempus. Curabitur faucibus dui et turpis porta, at varius mi varius. Aliquam ac ultrices elit, nec suscipit elit. Sed porta, libero ac feugiat pulvinar, nibh tortor placerat orci, at cursus arcu ex nec diam. Aenean fringilla erat non lacus suscipit porttitor.</p>
    </div>
  </div>

  <footer>
    <p>2025 The New York Times</p>
  </footer>
</main>

