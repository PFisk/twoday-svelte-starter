<script lang="ts">
  import { Col, Container, Row } from "sveltestrap";
  import { getBreweries } from "./api/HttpClient";

  let breweries: any[] = [];

  getBreweries().then((data) => breweries = data);
</script>

<main>
  <Container>
    <Row>
      <Col>
        <h1>Svelte + twoday</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Check out <a
            href="https://svelte.dev/tutorial"
            target="_blank"
            rel="noreferrer">the docs</a
          >
        </p>
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
