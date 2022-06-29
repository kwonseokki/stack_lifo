{
    type NodeObj = {
        value: string;
        next: any;
    }

    interface LinkedList {
        _length: number;
        push(value: string): void;
        pop(): string;
    }

    class Node implements NodeObj {
        value = "";
        next = null;
        constructor(value: string, next: any) {
            this.value = value;
            this.next = next;
        }
    }

    class LinkedList implements LinkedList {
        _length = 0;
        head: NodeObj = { value: "init", next: null };

        push(value: string) {
            const newNode = new Node(value, this.head);
            this.head = newNode;
            this._length++;
        }

        pop() {
            this.head = this.head.next;
            this._length--;
            return `삭제완료`;
        }
    }

    // 첫 노드생성
    const lists = new LinkedList();
    lists.push("v1");
    lists.push("v2");
    lists.push("v3");
    console.log(lists);

}