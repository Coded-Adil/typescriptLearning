function createEmpolyee({id}: {id: number}):{id:number, isActive:boolean}{
    return { id, isActive: id % 2 === 0 };
}

const first = createEmpolyee({id: 21});
const second = createEmpolyee({id: 22});

console.log(first, second);