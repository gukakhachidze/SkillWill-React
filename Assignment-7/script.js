function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
}

function makeToy(time) {
  return mySetTimeout(time).then(() => ({ status: "made" }));
}

function deliverToys(time, prev) {
  return mySetTimeout(time).then(() => {
    if (prev.status !== "made") throw new Error("Cannot deliver!");
    return { status: "delivered" };
  });
}

function sellToys(time, prev) {
  return mySetTimeout(time).then(() => {
    if (prev.status !== "delivered") throw new Error("Cannot sell!");
    return { status: "sold" };
  });
}

// then/catch
makeToy(3000)
  .then((r1) => deliverToys(2000, r1))
  .then((r2) => sellToys(1000, r2))
  .then((final) => console.log("Finished:", final))
  .catch((err) => console.log(err.message));

// async/await
async function run() {
  try {
    const r1 = await makeToy(3000);
    const r2 = await deliverToys(2000, r1);
    const r3 = await sellToys(1000, r2);
    console.log("Finished:", r3);
  } catch (err) {
    console.log(err.message);
  }
}

run();
