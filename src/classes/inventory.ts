import InventorySlot from './inventorySlot';
import {
	Grass,
	Air,
	Planks,
	WoodenLog,
	BackgroundWoodenLog,
	BackgroundPlanks,
	BackgroundGlass,
	Ladder,
	Dirt,
	BackgroundBookshelf
} from './blocksTypes';

class Inventory {
	activeSlotNum: number;
	slots: Array<InventorySlot>;

	constructor() {
		this.activeSlotNum = 1;
		this.slots = Array(9);

		// for (let i = 0; i < 9; i++) {
		// 	this.slots[i] = new InventorySlot(Air, 0);
		// }

		this.slots[0] = new InventorySlot(Maysa, 64);
		this.slots[1] = new InventorySlot(Fon Kitob Javon, 64);
		this.slots[2] = new InventorySlot(Osimlik, 64);
		this.slots[3] = new InventorySlot(Fon Osimlik, 64);
		this.slots[4] = new InventorySlot(Yogoch Jurnal, 64);
		this.slots[5] = new InventorySlot(Fon Yogoch Jurnal, 64);
		this.slots[6] = new InventorySlot(Fon Oynal, 64);
		this.slots[7] = new InventorySlot(Narvon, 64);
		this.slots[8] = new InventorySlot(Qum, 64);
	}

	getActiveSlot(): InventorySlot {
		return this.slots[this.activeSlotNum - 1];
	}

	setActiveSlotNum(num: number) {
		if (num < 1 || num > 9) return;

		this.activeSlotNum = num;
	}
}

export default Inventory;
