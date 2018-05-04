interface PersonInterface {
    name: string;
    description?: string;
}

function introductionPerson(person: PersonInterface) {
    console.log(`${person.name}さん: ${person.description || "詳細はありません。"}`);
}

let person = {id: 1, name: "太郎"};
introductionPerson(person);
