
// export default class TextContainer {
// 	text: string;
// 	parent: NodeContainer;
// 	bounds: Array<TextBounds>;

// 	constructor(text: string, parent: NodeContainer, bounds: Array<TextBounds>) {
// 		this.text = text;
// 		this.parent = parent;
// 		this.bounds = bounds;
// 	}

// 	static fromTextNode(node: Text, parent: NodeContainer) {
// 		const text = transform(node.data, parent.style.textTransform);
// 		return new TextContainer(text, parent, parseTextBounds(text, parent, node));
// 	}
// }

export default class NetWords {
	constructor(text: string, parent: NodeContainer, bounds: Array<TextBounds>) {
		this.text = text;
		this.parent = parent;
		this.bounds = bounds;
	}

	static isAdded(url: string) {
		return localStorageUtil.isExist(url);
	}

	static add(url: string, words) {
		localStorageUtil.setItem(url, words);
	}

	static get(url: string) {
		return localStorageUtil.getItem(url) || {};
	}
}
