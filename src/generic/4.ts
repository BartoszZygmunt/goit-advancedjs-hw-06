/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
// Definicja interfejsu PageProps
console.log("4.ts");
interface PageProps {
  title: string;
}

// Generyczna klasa Component
class Component<T> {
  constructor(public props: T) {}
}

// Klasa Page dziedzicząca po Component z PageProps
class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Przykładowe użycie
const myPage = new Page({ title: "Moja Strona" });
myPage.pageInfo(); // Output: Moja Strona

export {};

console.log("______________________________________");
