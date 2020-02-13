import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
numbersCollection.sort()
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Samarth Hegde');
charactersCollection.sort()
console.log(charactersCollection.data)


const linkedList = new LinkedList()
linkedList.add(100);
linkedList.add(10);
linkedList.add(-190);
linkedList.add(180);

linkedList.sort();
linkedList.print()

