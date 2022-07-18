function* generators() {
  for (let i = 0; i < 10; i++) {
    yield Math.ceil(Math.random() * 100);
  }
}

for (const randomNumber of generators()) {
  console.log(randomNumber);
}
