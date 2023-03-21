<script lang="ts">
  import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
  } from "sveltestrap";
  export let brewery: any;
</script>

<Card class="mb-3">
  <CardHeader>
    <CardTitle>{brewery.Rom}</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle>{brewery.Enhet}</CardSubtitle>
    <CardText>
      Temp: {brewery.Temperatur}
      Fuktighet: {brewery.Fughtighet}
    </CardText>
  </CardBody>
  <CardFooter>{brewery.Timestamp}</CardFooter>
</Card>
