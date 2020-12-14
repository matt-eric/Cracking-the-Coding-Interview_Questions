const returnKthToLast = {};

(() => {

    returnKthToLast.displayName = "Return Kth to Last";

    returnKthToLast.instructions = "Implement an algorithm to find the kth to last element of a singly linked list.";

    returnKthToLast.method = ( listInput ) => {

        let { k, list } = listInput;
        let currentNode = {...list.head};
        let listBuilder = [];
        let nodeCount = 0;

        while (currentNode) {
            nodeCount++;
            listBuilder.push( { value: currentNode.value, next: null } );
            currentNode = currentNode.next;
        };

        listBuilder = listBuilder.splice(listBuilder.length-1-k);

        for (let i = nodeCount-1; i > -1; i--) {
            if (!currentNode) {
                currentNode = listBuilder[i];
            } else {
                listBuilder[i].next = currentNode;
                currentNode = listBuilder[i];
            };
        };

        return currentNode;

    }

    returnKthToLast.tests = {
        inputs: [ 
            {
                k: 2,
                list: {
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
            },
            {
                k: 7,
                list: {
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
            }    
        ],
        expectedOutputs: [ 
            {
                value: 10,                                           
                next: {
                    value: 12,
                    next: {
                        value: 3,
                        next: null	
                    }
                }
            },
            {
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
        ],
    };

})();

export default returnKthToLast;