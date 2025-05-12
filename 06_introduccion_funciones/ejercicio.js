

function test(){
    console.log(a); // 1

    console.log(foo()); // 2 undefine
    
    var a = 1;
    function foo(){
        return (2);
    }

    console.log(a); // 1
}

// console.log(a);

test();