
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const dinner = process.env.DINNER_TONIGHT;
  while(true) {
    console.log(`Dinner tonight will be ${dinner}!`)
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
