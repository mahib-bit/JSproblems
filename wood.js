function woodQuantity(chair, table, bed) {
    const perChair = 6;
    const perTable = 8;
    const perBed = 10;

    const totalChairWood = chair * perChair;
    const totalTableWood = table * perTable;
    const totalBedWood = bed * perBed;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;

}

const woodNeeded = woodQuantity(2, 1, 1);
console.log(woodNeeded);