<script lang="ts">
  import { Col, Container, Row } from "sveltestrap";
  import { getBreweries } from "./api/HttpClient";
  import BreweryCard from "./BreweryCard.svelte";

  let breweries: any[] = [];

    // define a sample brewery object
    const testBrewery = {
    Rom: "Sample Room",
    Enhet: "Sample Unit",
    Temperatur: "25°C",
    Fuktighet: "60%",
    Timestamp: "2023-03-25T09:00:00Z"
  }

  getBreweries().then((data) => breweries = data);

</script>

<main>
  <Container>
    <Row>
      <Col>
        <h1>BeerLovers BeerPage 2.0</h1>
      </Col>
    </Row>
    <Row>
      <Col>
          {#each breweries as brewery}
              <BreweryCard {brewery} />
          {/each}
      </Col>
    </Row>
  </Container>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>