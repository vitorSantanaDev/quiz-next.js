export default function shuffle(elements: any[]): any[] {
  return elements
    .map((element) => {
      return { value: element, random: Math.random() };
    })
    .sort((object1, object2) => object1.random - object2.random)
    .map((number) => number.value);
}
