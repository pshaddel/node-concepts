function BigBrother() {
  const power = 1000;
  return function littleBrother() {
    const color = 'black';
    console.log(
      'I am little brother and I have access to BigBrother power:',
      power
    );
    return function littleSister() {
      console.log(
        'I am the little Sister and I have access to BigBrother power:',
        power,
        ' and also to little brother color:',
        color
      );
    };
  };
}

BigBrother()()();
