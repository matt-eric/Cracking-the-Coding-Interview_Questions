const displayName = "Partition"

const instructions = "Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need to be after the elements less than x (see below).The partition element x can appear anywhere in the 'right partition'; it does not need to appear between the left and right partitions."

const method = ( listInput ) => {

    const { x, list } = listInput;

    let currentNode = {...list.head};

    let lessThanX = [];
    let greaterOrEqualToX = [];

    while(currentNode){
        let newNode = { value: currentNode.value, next: null }
        if(currentNode.value < x){
            lessThanX.push(newNode)
        } else {
            greaterOrEqualToX.push(newNode)
        }   
        currentNode = currentNode.next;
    };

    for(let i=greaterOrEqualToX.length-1; i>-1; i--){
        if(!currentNode){
            currentNode = greaterOrEqualToX[i];
        } else {
            greaterOrEqualToX[i].next = currentNode;
            currentNode = greaterOrEqualToX[i];
        };
    };

    for(let i=lessThanX.length-1; i>-1; i--){
        if(!currentNode){
            currentNode = lessThanX[i];
        } else {
            lessThanX[i].next = currentNode;
            currentNode = lessThanX[i];
        };
    };

    return { head: currentNode };

}

const tests = {
    inputs: [ 
        {
            x: 10,
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
            }  
        },
        {
            x: 7,
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
            head: {
                value: 3,
                next: {
                    value: 12,                                           
                    next: {
                        value: 10,
                        next: {
                            value: 12,
                            next: null	
                        }
                    }
                }
            }
        },
        {
            head: {
                value: 3,
                next: {
                    value: 3,                                           
                    next: {
                        value: 3,
                        next: {
                            value: 5,
                            next: {
                                value: 12,                                           
                                next: {
                                    value: 10,
                                    next: {
                                        value: 12,
                                        next: {
                                            value: 10,                                           
                                            next: {
                                                value: 7,
                                                next: {
                                                    value: 12,
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
}

const partition = {
    displayName,
    instructions,
    method,
    tests
}

export default partition