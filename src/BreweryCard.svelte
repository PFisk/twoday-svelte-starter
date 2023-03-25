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

<Card class="mb-3 bg-slate-600">
  <CardHeader>
    <CardTitle>{brewery.brewery_name}</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle>{brewery.beer_name}</CardSubtitle>
    <CardText>
      <li>
        Temperature: {parseFloat(brewery.Temperature).toFixed(2) + " C°"}
      </li>
      <li>
        Humidity: {parseFloat(brewery.Humidity).toFixed(2) + " %"}
      </li>
      <li>
        Pressure: {brewery.Pressure + " psi"}
      </li>
    </CardText>
  </CardBody>
  <CardFooter>Timestamp: {brewery.Timestamp}</CardFooter>
</Card>


<style>
  .background{
    color: aquamarine;
  }
</style>
