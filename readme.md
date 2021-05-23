# Desafio - Lista encadeada

Project of chained list. Includes:
 - List creation
 - Element listing
 - Element deletion
 - Element insertion
 - Element query

Base Language: Javascript

 ## List creation

    Method: createList(value)

    Params:
        value: integer

    Returns:
        list: {
            value,
            list: null,
        }

 ## Element listing

    Method: printList(list)

    Params:
        list: {
            value:integer
            list:{
                value:integer
                list: {
                    ...
                }
            }
        }

 ## Element deletion

    Method: removeList(list,value);

    Params: 
        list: {
            value:integer,
            list:{
                value:integer,
                list: {
                    ...
                }
            }
        },
        value: integer

 ## Element insertion

    Method: insertList(list,value);

    Params: 
        list: {
            value:integer,
            list:{
                value:integer,
                list: {
                    ...
                }
            }
        },
        value: integer

 ## Element query

    Method: queryList(node,value);

    Params: 
        list: {
                value:integer,
                list:{
                    value:integer,
                    list: {
                        ...
                    }
                }
            },
        value: integer