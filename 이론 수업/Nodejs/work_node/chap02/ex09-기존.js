var sayNode = function () {
    console.log('Node');
 };
 var es = 'ES';
 var oldObject = {
    sayJS: function () {
        console.log('JS');
    },
    sayNode: sayNode,
 };
 oldObject[es + 6] = 'Fantastic';
 
 oldObject.sayNode();
 oldObject.sayJS();
 console.log(oldObject.ES6);
 