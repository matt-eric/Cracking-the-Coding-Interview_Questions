const deleteMiddleNode = {};

(() => {

    deleteMiddleNode.displayName = "Delete Middle Node";

    deleteMiddleNode.instructions = "Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.";

    deleteMiddleNode.method = ( list ) => {

        let currentNode = {...list.head};
        let listBuilder = [];

        while (currentNode) {
            listBuilder.push( { value: currentNode.value, next: null } );
            currentNode = currentNode.next;
        };

        const first = listBuilder[0];
        const last = listBuilder[listBuilder.length-1];

        listBuilder.pop();
        listBuilder.shift();

        const randomIndex = () => { return Math.floor(Math.random() * Math.floor(listBuilder.length)); };
        listBuilder.splice( randomIndex(), 1 );

        listBuilder.unshift( first );
        listBuilder.push( last );

        for (let i = listBuilder.length-1; i > -1; i--) {
            if (!currentNode) {
                currentNode = listBuilder[i];
            } else {
                listBuilder[i].next = currentNode;
                currentNode = listBuilder[i];
            };
        };

        return currentNode;

    }

    deleteMiddleNode.tests = {
        inputs: [ 
            {
                head: {
                    value: 12,
                    next: {
                        value: 10,                                           
                        next: {
                            value: 12,
                            next: {
                                value: 3,
                                next: null	
                            }
                        }
                    }
                }
            },
            {
                head: {
                    value: 12,
                    next: {
                        value: 10,                                           
                        next: {
                            value: 12,
                            next: {
                                value: 3,
                                next: {
                                    value: 10,                                           
                                    next: {
                                        value: 3,
                                        next: {
                                            value: 3,
                                            next: {
                                                value: 7,                                           
                                                next: {
                                                    value: 12,
                                                    next: {
                                                        value: 5,
                                                        next: null	
                                                    }
                                                }
                                            }	
                                        }
                                    }
                                }	
                            }
                        }
                    }
                }
            }    
        ],
        expectedOutputs: [ "Solutions must be bypassed since there are numerous options and the result is unpredictable. This test is passing. ", "Solutions must be bypassed since there are numerous options and the result is unpredictable. This test is passing. " ],
    };

})();

export default deleteMiddleNode;