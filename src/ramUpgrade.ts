interface Computer{
    readonly id: number,
    brand: string,
    ram: number,
    upgradeRam(newRam: number): number;
    storage?: number;
}

const laptop: Computer = {
    id: 1,
    brand: "dell",
    ram: 8,
    upgradeRam(amount){
        this.ram += amount;
        return this.ram;
    },
    storage: 512
};

laptop.storage = 1024;
console.log(laptop.upgradeRam(4));
console.log(laptop);