const removeDups = {};

(() => {

    removeDups.displayName = "Remove Dups";

    removeDups.instructions = "Write code to remove duplicates from an unsorted linked list.";

    removeDups.method = ( list ) => {

        let currentNode = {...list.head};
        let listBuilder = [];

        while (currentNode) {
            if ( !listBuilder.find( node => node.value === currentNode.value ) ) {
                listBuilder.push( { value: currentNode.value, next: null } );
            };
            currentNode = currentNode.next;
        };

        for (let i = listBuilder.length - 1; i > -1; i--) {
            if (!currentNode) {
                currentNode = listBuilder[i];
            } else {
                listBuilder[i].next = currentNode;
                currentNode = listBuilder[i];
            };
        };

        return { head: currentNode };

    };

    removeDups.tests = {
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
                                next: null,
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
                                                        next: null,
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
                head: {
                    value: 12,
                    next: {
                        value: 10,                                           
                        next: {
                            value: 3,
                            next: null,
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
                            value: 3,
                            next: {
                                value: 7,                                           
                                next: {
                                    value: 5,
                                    next: null,
                                }
                            }	
                        }
                    }
                }
            }
        ],
    };

})();

export default removeDups;